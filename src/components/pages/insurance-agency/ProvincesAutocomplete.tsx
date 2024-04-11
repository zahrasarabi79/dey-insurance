import React, { FC, useEffect, useState } from "react";
import { Autocomplete, CircularProgress } from "@mui/material";
import { ProvincesAutocompleteProps } from "@/style/componentsType";
import TextField from "@mui/material/TextField";
import { useProvinceListQuery } from "@/api-managment/api/provinceCountryListApi";
import { Controller } from "react-hook-form";

const ProvincesAutocomplete: FC<ProvincesAutocompleteProps> = ({
  errors,
  control,
  setValue,
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  const { data: provinceList, isLoading } = useProvinceListQuery();
  useEffect(() => {
    if (open && isLoading === false && provinceList) {
      setOptions(provinceList);
    }
  }, [open, isLoading, provinceList]);
  return (
    <Controller
      name={"province"}
      key={"province"}
      control={control}
      rules={{ required: "وارد کردن استان الزامی است." }}
      render={({ field }) => (
        <Autocomplete
          {...field}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          getOptionLabel={(option) => option.name}
          getOptionDisabled={(option) => !option?.is_active}
          options={options}
          loading={isLoading}
          onChange={(_, newValue) => {
            setValue("province", newValue.id?.toString(), {
              shouldValidate: true,
            });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              error={Boolean(errors?.province)}
              helperText={errors ? errors?.province?.message : ""}
              label="استان"
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
export default ProvincesAutocomplete;
