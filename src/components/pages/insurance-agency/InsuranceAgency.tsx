"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/state-managment/store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { IInsuranceAgencyFormData } from "@/style/componentsType";
import { getInsuranceAgency } from "@/state-managment/slice/insuranceAgencySlice";
import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import AgencyTypeRadioButton from "@/components/pages/insurance-agency/AgencyTypeRadioButton";
import PhoneTextField from "@/components/pages/insurance-agency/PhoneTextField";
import {
  useCheckAgencyCodeMutation,
  useRegisterAgentMutation,
} from "@/api-managment/api/insuranceAgentApi";
import ProvincesAutocomplete from "@/components/pages/insurance-agency/ProvincesAutocomplete";
import CountryAutocomplete from "@/components/pages/insurance-agency/CountryAutocomplete";
import InsuranceBranchAutocomplete from "@/components/pages/insurance-agency/InsuranceBranchAutocomplete";

const InsuranceAgency = () => {
  const dispatch = useAppDispatch();
  const {
    setValue,
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IInsuranceAgencyFormData>({ mode: "onChange" });
  const insuranceAgencyData = useAppSelector((state) => state.insuranceAgency);
  const [checkAgencyCode] = useCheckAgencyCodeMutation();
  const [registerAgent] = useRegisterAgentMutation();
  const [isDispatch, setIsDispatch] = useState(false);

  useEffect(() => {
    if (isDispatch) {
      handleRegisterAgent();
    }
  }, [isDispatch]);
  const handleInsuranceAgency: SubmitHandler<IInsuranceAgencyFormData> = async (
    data,
  ) => {
    dispatch(getInsuranceAgency(data));
    setIsDispatch(true);
  };

  const handleRegisterAgent = async () => {
    try {
      const res = await registerAgent(insuranceAgencyData);
      console.log(res, "res");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleInsuranceAgency)}>
      <Stack rowGap={8}>
        <TextField
          fullWidth
          label="کد نمایندگی"
          variant="outlined"
          {...register("agent_code", {
            required: "وارد کردن کد نمایندگی الزامی است.",
          })}
          error={!!errors.agent_code}
          helperText={errors.agent_code && errors.agent_code.message}
        />
        <ProvincesAutocomplete
          setValue={setValue}
          control={control}
          errors={errors}
        />
        <CountryAutocomplete
          control={control}
          watch={watch}
          errors={errors}
          setValue={setValue}
        />
        <TextField
          label="ّآدرس"
          multiline
          rows={4}
          variant={"outlined"}
          {...register("address", {
            required: "وارد کردن آدرس الزامی است.",
          })}
          error={!!errors.address}
          helperText={errors.address ? errors.address?.message : ""}
        />
        <InsuranceBranchAutocomplete
          watch={watch}
          setValue={setValue}
          control={control}
          errors={errors}
        />
        <PhoneTextField register={register} errors={errors} />
        <AgencyTypeRadioButton control={control} />
        {watch("agency_type") === "legal" && (
          <TextField
            label="نام نمایندگی"
            variant="outlined"
            {...register("Name", {
              required: "وارد کردن نام نمایندگی الزامی است.",
            })}
            error={!!errors.Name}
            helperText={errors.Name && errors.Name.message}
          />
        )}
        <Button type={"submit"} variant={"contained"} sx={{ mt: 3 }}>
          ادامه
        </Button>
      </Stack>
    </form>
  );
};

export default InsuranceAgency;
