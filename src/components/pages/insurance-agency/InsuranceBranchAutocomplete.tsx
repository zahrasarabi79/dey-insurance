import React, { FC, useEffect, useState } from "react";
import { Autocomplete, CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { InsuranceBranchAutocompleteProps } from "@/style/componentsType";
import { useInsuranceBranchListQuery } from "@/api-managment/api/insuranceAgentApi";

const InsuranceBranchAutocomplete: FC<InsuranceBranchAutocompleteProps> = ({
  control,
  watch,
  errors,
  setValue,
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  const [selectedInsuranceBranch, setSelectedInsuranceBranch] = useState(null);

  const { data: insuranceBranchList, isLoading } = useInsuranceBranchListQuery(
    watch("province"),
    { skip: !watch("province") },
  );

  useEffect(() => {
    if (open && isLoading === false && insuranceBranchList) {
      setOptions(insuranceBranchList.response);
    }
  }, [open, isLoading, insuranceBranchList]);

  // Reset the selected insurance branch when province changes
  useEffect(() => {
    if (watch("province")) {
      setSelectedInsuranceBranch(null);
    }
  }, [watch("province")]);

  return (
    <Controller
      name={"insurance_branch"}
      key={"insurance_branch"}
      control={control}
      rules={{ required: "وارد کردن شعبه بیمه الزامی است." }}
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
          isOptionEqualToValue={(option, value) => option.name === value?.name}
          getOptionLabel={(option) => option.name}
          options={options}
          loading={isLoading}
          value={selectedInsuranceBranch} // Set the value of the autocomplete to the selected insurance branch
          onChange={(_, newValue) => {
            setSelectedInsuranceBranch(newValue); // Update the selected insurance branch
            setValue("insurance_branch", newValue.id?.toString(), {
              shouldValidate: true,
            });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="شعبه بیمه"
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

export default InsuranceBranchAutocomplete;
