"use client";
import React, { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { IVerifyCodeData } from "@/style/componentsType";
import OTPInput from "@/components/pages/login/OTPInput";
import { useAppSelector } from "@/state-managment/store/store";
import CountDownOTP from "@/components/pages/login/CountDownOTP";
import { useVerifyOTPMutation } from "@/api-managment/api/loginApi";
import { useRouter } from "next/navigation";

const VerifyCodeForm: FC = () => {
  const router = useRouter();
  const { setValue, handleSubmit } = useForm<IVerifyCodeData>();
  const [verifyOTP, { isError }] = useVerifyOTPMutation();
  const phoneNumber = useAppSelector(
    (state) => state.insuranceAgency.phone_number,
  );
  setValue("phone_number", phoneNumber);
  const handleVerifyCode: SubmitHandler<IVerifyCodeData> = async (data) => {
    try {
      const response = await verifyOTP(data);
      "data" in response && router.push("/personalInformation");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(isError, "isError");
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
        <OTPInput setValue={setValue} isError={isError} />

        <CountDownOTP />
        <Button type={"submit"} variant={"contained"} sx={{ mt: 3 }}>
          ادامه
        </Button>
      </Stack>
    </form>
  );
};

export default VerifyCodeForm;
