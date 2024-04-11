import React from "react";
import { CustomCard } from "@/style/styled-components/FormCard";
import PersonalInformation from "@/components/pages/personal-information/PersonalInformation";

const page = () => {
  return (
    <CustomCard>
      <PersonalInformation />
    </CustomCard>
  );
};

export default page;
