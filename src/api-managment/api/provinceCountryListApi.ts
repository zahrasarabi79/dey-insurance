import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const provinceCountryListApi = createApi({
  reducerPath: "provinceCountryListApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://stage-api.sanaap.co/base/" }),
  endpoints: (builder) => ({
    provinceList: builder.query<any, void>({
      query: () => ({
        url: "provinces_wop/",
      }),
    }),
    countyList: builder.query<any, any>({
      query: (province) => ({
        url: `counties_wop/?province=${province}`,
      }),
    }),
  }),
});
export const { useCountyListQuery, useProvinceListQuery } =
  provinceCountryListApi;
export default provinceCountryListApi;
