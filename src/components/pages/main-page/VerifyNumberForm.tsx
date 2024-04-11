import React, { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { NumberInput } from "@/style/styled-components/NumberInput";
import { useCreateOTPMutation } from "@/api-managment/api/loginApi";
import { useAppDispatch } from "@/state-managment/store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFormData, VerifyNumberFormProps } from "@/style/componentsType";
import { getInsuranceAgency } from "@/state-managment/slice/insuranceAgencySlice";
import { useRouter } from "next/navigation";

const VerifyNumberForm: FC<VerifyNumberFormProps> = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFormData>({
    mode: "onChange",
  });
  const [createOTP] = useCreateOTPMutation();

  const handleLoginForm: SubmitHandler<ILoginFormData> = async (data) => {
    dispatch(getInsuranceAgency(data));
    try {
      const response = await createOTP(data);
      router.push("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleLoginForm)}>
      <Stack rowGap={4}>
        <Stack
          rowGap={1}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
            شماره موبایل خود را وارد نمایید.
          </Typography>

          <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
            کد تایید برای شما ارسال خواهد شد.
          </Typography>
        </Stack>
        <NumberInput
          type={"number"}
          label="تلفن همراه"
          variant="outlined"
          {...register("phone_number", {
            required: "وارد کردن شماره تلفن الزامی است.",
            minLength: { value: 11, message: "شماره معتبر نمی باشد" },
            maxLength: { value: 11, message: "شماره معتبر نمی باشد" },
          })}
          error={!!errors.phone_number}
          helperText={errors.phone_number && errors.phone_number.message}
        />
        <Button type={"submit"} variant={"contained"} sx={{ mt: 3 }}>
          ادامه
        </Button>
      </Stack>
    </form>
  );
};

export default VerifyNumberForm;
