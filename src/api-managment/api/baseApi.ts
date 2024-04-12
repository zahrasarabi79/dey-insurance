// Create your service using a base URL and expected endpoints
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stage-api.sanaap.co/api/",
    prepareHeaders: (headers) => {
      // Retrieve the token from cookie
      const token = Cookies.get("token");
      if (token) {
        // Set the Authorization header with the token
        headers.set("Authorization", `Bearer ${token}`);
      }
      // Set the Authorization header without the token
      return headers;
    },
  }),

  endpoints: () => ({}),
});
