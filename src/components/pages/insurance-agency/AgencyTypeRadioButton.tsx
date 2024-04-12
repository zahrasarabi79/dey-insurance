import React, { FC } from "react";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { AgencyTypeRadioButtonProps } from "@/style/componentsType";

const AgencyTypeRadioButton: FC<AgencyTypeRadioButtonProps> = ({ control }) => {
  return (
    <FormControl
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FormLabel>نوع نمایندگی:</FormLabel>
      <Controller
        control={control}
        name="agency_type"
        defaultValue="real"
        render={({ field }) => (
          <RadioGroup
            {...field}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: 32,
            }}
          >
            <FormControlLabel value="real" control={<Radio />} label="حقیقی" />
            <FormControlLabel value="legal" control={<Radio />} label="حقوقی" />
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default AgencyTypeRadioButton;
