import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFromSessionStorage } from "@/utils/sessionStorage";
import { getBackendBaseUrl } from "@/config/envConfig";
import { tagTypesList } from "../tagtypes";

const baseQuery = fetchBaseQuery({
  baseUrl: getBackendBaseUrl(),
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const signUpToken = getFromSessionStorage("signUpToken");
    const forgotPassToken = getFromSessionStorage("forgetPasswordToken");
    const changePassToken = getFromSessionStorage("changePasswordToken");
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    if (signUpToken) {
      headers.set("token", signUpToken);
    }

    if (forgotPassToken) {
      headers.set("token", forgotPassToken);
    }

    if (changePassToken) {
      headers.set("token", changePassToken);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const res = await fetch(`${getBackendBaseUrl()}/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    if (data?.data?.accessToken) {
      const user = api.getState().auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        }),
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
