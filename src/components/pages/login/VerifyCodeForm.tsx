import React, { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { IVerifyCodeData, VerifyFormProps } from "@/style/componentsType";
import OTPInput from "@/components/pages/login/OTPInput";
import { useAppSelector } from "@/state-managment/store/store";
import CountDownOTP from "@/components/pages/login/CountDownOTP";

const VerifyCodeForm: FC<VerifyFormProps> = () => {
  const { handleSubmit } = useForm<IVerifyCodeData>();
  const handleVerifyCode: SubmitHandler<IVerifyCodeData> = (data) => {
    console.log(data);
  };
  const phoneNumber = useAppSelector(
    (state) => state.insuranceAgency.phone_number,
  );
  return (
    <form onSubmit={handleSubmit(handleVerifyCode)}>
      <Stack rowGap={4}>
        <Stack
          rowGap={1}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
            شماره موبایل خود را وارد نمایید.
          </Typography>

          <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
            {phoneNumber}
          </Typography>
        </Stack>
        <OTPInput />
        <CountDownOTP />
        <Button type={"submit"} variant={"contained"} sx={{ mt: 3 }}>
          ادامه
        </Button>
      </Stack>
    </form>
  );
};

export default VerifyCodeForm;
