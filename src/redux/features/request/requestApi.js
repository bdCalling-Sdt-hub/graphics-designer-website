import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagtypes";

const requestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRequest: builder.mutation({
      query: (data) => ({
        url: "/request",
        method: "POST",
        body: data,
      }),

      invalidatesTags: [tagTypes.request],
    }),
  }),
});

export const { useCreateRequestMutation } = requestApi;
