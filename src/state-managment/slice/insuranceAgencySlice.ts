import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  agency_type: "",
  agent_code: "",
  city_code: "",
  county: "",
  first_name: "",
  insurance_branch: "",
  last_name: "",
  phone: "",
  phone_number: "",
  province: "",
  Name: "",
};
const insuranceAgencySlice = createSlice({
  name: "insuranceAgencySlice",
  initialState,
  reducers: {
    getInsuranceAgency: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { getInsuranceAgency } = insuranceAgencySlice.actions;
export default insuranceAgencySlice.reducer;
