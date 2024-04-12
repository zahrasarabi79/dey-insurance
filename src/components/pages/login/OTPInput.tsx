import React, { FC, useEffect, useRef, useState } from "react";
import { NumberInput } from "@/style/styled-components/NumberInput";
import { Stack, Typography, useTheme } from "@mui/material";
import { OTPInputProps } from "@/style/componentsType"; //because of the priority of OnKeyDown to OnChange we use "currentOTPIndex" variable
//because of the priority of OnKeyDown to OnChange we use "currentOTPIndex" variable
let currentOTPIndex: number = 0;
const OTPInput: FC<OTPInputProps> = ({ setValue, isError }) => {
  const theme = useTheme();
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const val = value.substring(value.length - 1);
    // Update the OTP array with the entered value
    const newOPt = [...otp];
    newOPt[currentOTPIndex] = val;
    setOtp(newOPt);
    value
      ? setActiveOTPIndex(currentOTPIndex + 1)
      : setActiveOTPIndex(currentOTPIndex - 1);
  };
  //when we stay in empty input can't back to previous input
  //handle onKeyDown fix this problem
  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  setValue("code", Number(otp.join("")));

  return (
    <Stack rowGap={2}>
      <Stack
        direction={"row-reverse"}
        columnGap={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {otp.map((item, index) => (
          <NumberInput
            key={index}
            inputRef={index === activeOTPIndex ? inputRef : null}
            type={"number"}
            variant="outlined"
            value={otp[index]}
            onChange={handleChange}
            error={isError}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            sx={{
              width: "55px",
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                borderRadius: 2,
                direction: "rtl",
              },
              "& .MuiInputBase-input.MuiOutlinedInput-input": {
                textAlign: "center",
              },
            }}
          />
        ))}
      </Stack>
      {isError && (
        <Typography
          sx={{ color: theme.palette.error.main, fontSize: 12, px: 2 }}
        >
          کد نامعتبر می باشد؛ مجددا وارد نمایید.
        </Typography>
      )}
    </Stack>
  );
};

export default OTPInput;
