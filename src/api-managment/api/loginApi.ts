import { baseApi } from "@/api-managment/api/baseApi";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginVerifyCode: builder.mutation<any, any>({
      query: (body) => ({
        url: "v2/app/DEY/agent/verification/signup/create_otp/",
        method: "POST",
        body: body,
      }),
    }),
  }),
});
export const { useLoginVerifyCodeMutation } = loginApi;
export default loginApi;
