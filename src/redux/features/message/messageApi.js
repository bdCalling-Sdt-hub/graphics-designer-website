import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagtypes";

const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => ({
        url: "/messages/send-messages",
        method: "POST",
        body: data,
      }),

      invalidatesTags: [tagTypes.messages],
    }),
    uploadImage: builder.mutation({
      query: (data) => ({
        url: "/upload",
        method: "POST",
        body: data,
      }),

      invalidatesTags: [tagTypes.messages],
    }),

    getMessages: builder.query({
      query: (chatId) => ({
        url: `/messages/my-messages/${chatId}`,
        method: "GET",
      }),

      providesTags: [tagTypes.messages],
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetMessagesQuery,
  useUploadImageMutation,
} = messageApi;
