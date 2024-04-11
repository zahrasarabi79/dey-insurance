import React, { FC } from "react";
import { NumberInput } from "@/style/styled-components/NumberInput";
import { Grid } from "@mui/material";
import { PhoneTextFieldProps } from "@/style/componentsType";

const PhoneTextField: FC<PhoneTextFieldProps> = ({ register, errors }) => {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={9}>
        <NumberInput
          fullWidth
          type={"number"}
          label="تلفن ثابت"
          variant="outlined"
          {...register("phone", {
            required: "وارد کردن تلفن ثابت الزامی است.",
            minLength: { value: 10, message: "شماره معتبر نمی باشد" },
            maxLength: { value: 10, message: "شماره معتبر نمی باشد" },
          })}
          error={!!errors.phone}
          helperText={errors.phone && errors.phone.message}
        />
      </Grid>
      <Grid item xs={3}>
        <NumberInput
          fullWidth
          type={"number"}
          label="کد تلفن ثابت"
          variant="outlined"
          {...register("city_code", {
            required: "وارد کردن کد تلفن ثابت الزامی است.",
          })}
          error={!!errors.city_code}
          helperText={errors.city_code && errors.city_code.message}
        />
      </Grid>
    </Grid>
  );
};

export default PhoneTextField;
