"use client";
import React from "react";
import VerifyNumberForm from "@/components/pages/main-page/VerifyNumberForm";
import { CustomCard } from "@/style/styled-components/FormCard";

const page = () => {
  return (
    <CustomCard>
      <VerifyNumberForm />
    </CustomCard>
  );
};

export default page;
