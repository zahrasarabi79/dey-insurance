import React, { useEffect, useRef, useState } from "react";
import { NumberInput } from "@/style/styled-components/NumberInput";
import { Stack } from "@mui/material";
//because of the priority of OnKeyDown to OnChange we use "currentOTPIndex" variable
let currentOTPIndex: number = 0;
const OTPInput = () => {
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    console.log(value, "value");
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
  console.log(otp.join(""), "otp");
  return (
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
          onKeyDown={(e) => handleOnKeyDown(e, index)}
          sx={{
            width: "55px",
            "& .MuiInputBase-root.MuiOutlinedInput-root": {
              borderRadius: 2,
              direction: "rtl",
              textAlign: "center",
            },
          }}
        />
      ))}
    </Stack>
  );
};

export default OTPInput;
