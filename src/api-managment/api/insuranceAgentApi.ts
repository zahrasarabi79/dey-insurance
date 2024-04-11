import { baseApi } from "@/api-managment/api/baseApi";

const insuranceAgentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkAgencyCode: builder.mutation<any, any>({
      query: (body) => ({
        url: "v2/app/DEY/agent/verification/signup/check_agency_code/",
        method: "POST",
        body: { agent_code: body },
      }),
    }),
    insuranceBranchList: builder.query<any, any>({
      query: (province) => ({
        url: `v2/app/selection_item/insurance_branch/wop_list/?name=73&insurance=DEY&province=${province}`,
      }),
    }),
    registerAgent: builder.mutation<any, any>({
      query: (body) => ({
        url: `v2/app/DEY/agent/verification/signup/`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});
export const {
  useRegisterAgentMutation,
  useCheckAgencyCodeMutation,
  useInsuranceBranchListQuery,
} = insuranceAgentApi;
export default insuranceAgentApi;
