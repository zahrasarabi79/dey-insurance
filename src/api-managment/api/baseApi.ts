// Create your service using a base URL and expected endpoints
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://stage-api.sanaap.co/api/" }),
  endpoints: () => ({}),
});
