"use client";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

export const NumberInput = styled(TextField)({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  '& input[type="number"]': {
    MozAppearance: "textfield",
  },
});
