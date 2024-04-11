import { baseApi } from "@/api-managment/api/baseApi";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOTP: builder.mutation<any, any>({
      query: (body) => ({
        url: "v2/app/DEY/agent/verification/signup/create_otp/",
        method: "POST",
        body: body,
      }),
    }),
    verifyOTP: builder.mutation<any, any>({
      query: (body) => ({
        url: "v2/app/DEY/agent/verification/signup/validate_otp/",
        method: "POST",
        body: body,
      }),
    }),
  }),
});
export const { useCreateOTPMutation, useVerifyOTPMutation } = loginApi;
export default loginApi;
