"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPersonalInformationFormData } from "@/style/componentsType";
import { getInsuranceAgency } from "@/state-managment/slice/insuranceAgencySlice";
import { useAppDispatch } from "@/state-managment/store/store";
import { useRouter } from "next/navigation";

const PersonalInformation = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPersonalInformationFormData>({ mode: "onChange" });
  const handlePersonalInformation: SubmitHandler<
    IPersonalInformationFormData
  > = (data) => {
    dispatch(getInsuranceAgency(data));
    router.push("/insuranceAgency");
  };
  return (
    <form onSubmit={handleSubmit(handlePersonalInformation)}>
      <Stack rowGap={8}>
        <TextField
          sx={{ mt: 5 }}
          label="نام"
          variant="outlined"
          {...register("first_name", {
            required: "وارد کردن نام الزامی است.",
          })}
          error={!!errors.first_name}
          helperText={errors.first_name && errors.first_name.message}
        />
        <TextField
          label="نام خانوادگی"
          variant="outlined"
          {...register("last_name", {
            required: "وارد کردن نام خانوادگی الزامی است.",
          })}
          error={!!errors.last_name}
          helperText={errors.last_name && errors.last_name.message}
        />
        <Button type={"submit"} variant={"contained"} sx={{ mt: 3 }}>
          ادامه
        </Button>
      </Stack>
    </form>
  );
};

export default PersonalInformation;
