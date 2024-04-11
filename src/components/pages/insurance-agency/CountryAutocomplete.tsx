import React, { FC, useEffect, useState } from "react";
import { Autocomplete, CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useCountyListQuery } from "@/api-managment/api/provinceCountryListApi";
import { Controller } from "react-hook-form";
import { CountryAutocompleteProps } from "@/style/componentsType";

const CountryAutocomplete: FC<CountryAutocompleteProps> = ({
  control,
  watch,
  errors,
  setValue,
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const { data: countyList, isLoading } = useCountyListQuery(
    watch("province"),
    { skip: !watch("province") },
  );
  useEffect(() => {
    if (open && isLoading === false && countyList) {
      setOptions(countyList);
    }
  }, [open, isLoading, countyList]);

  // Reset the selected country when province changes
  useEffect(() => {
    if (watch("province")) {
      setSelectedCountry(null);
    }
  }, [watch("province")]);
  return (
    <Controller
      name={"county"}
      key={"county"}
      control={control}
      rules={{ required: "وارد کردن شهر الزامی است." }}
      render={({ field }) => (
        <Autocomplete
          {...field}
          disabled={!watch("province")}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          value={selectedCountry}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          getOptionLabel={(option) => option.name}
          getOptionDisabled={(option) => !option?.is_active}
          options={options}
          loading={isLoading}
          onChange={(_, newValue) => {
            setSelectedCountry(newValue);
            setValue("county", newValue.id?.toString(), {
              shouldValidate: true,
            });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="شهر"
              error={Boolean(errors?.province)}
              helperText={errors ? errors?.province?.message : ""}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {isLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      )}
    />
  );
};
export default CountryAutocomplete;
