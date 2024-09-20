"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import logo from "/public/images/logo.svg";
import user2Img from "/public/images/chat/20.jpg";
import ReceiverMsgCard from "./ReceiverMsgCard";
import OwnerMsgCard from "./OwnerMsgCard";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "@/redux/features/message/messageApi";
import { useForm } from "react-hook-form";
import {
  getBackendBaseUrl,
  getChatReceiverId,
  getSocketEndpoint,
} from "@/config/envConfig";
import { ErrorToast, SuccessToast } from "@/utils/toastHook";
import { Loader } from "lucide-react";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";
import ScrollableFeed from "react-scrollable-feed";
import MessageCard from "./MessageCard";
import { io } from "socket.io-client";

var socket;

export default function ChatContainer() {
  const { register, handleSubmit, reset } = useForm();

  const receiverId = getChatReceiverId();
  const userId = useSelector(selectUser)?._id;
  const [chatId, setChatId] = useState(null);
  const [lastSender, setLastSender] = useState(null);
  const [sendMessage, { isLoading: isSendingMsg }] = useSendMessageMutation();
  const { data: messagesRes } = useGetMessagesQuery(chatId, {
    skip: !chatId,
    refetchOnMountOrArgChange: true,
  });
  const messages = messagesRes?.data || [];

  // Initialize socket
  useEffect(() => {
    socket = io(getSocketEndpoint());

    return () => {
      socket.disconnect();
    };
  }, []);

  // Send message
  const handleSendMsg = async (data) => {
    try {
      const res = await sendMessage({
        text: data.message,
        receiver: receiverId,
      }).unwrap();

      if (res?.success) {
        // set chat id for getting the messages of that chat
        setChatId(res?.data?.chat);
      }
    } catch (error) {
      ErrorToast(error?.data?.message);
    } finally {
      reset();
    }
  };

  // Check if messages exist
  useEffect(() => {
    if (receiverId) {
      socket.emit("message-page", "66e7b70f537f5342ae555af4");
    }
  }, [receiverId]);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
    });
  });

  return (
    <div className="relative z-10 flex flex-col rounded-xl rounded-t-xl border-t-8 border-t-primary-green bg-primary-white px-2 py-6 lg:flex-row">
      <div className="flex flex-col justify-between lg:flex-grow lg:px-8">
        <div className="flex-center-between border-b border-b-primary-black/20 pb-1">
          <div className="flex-center-start gap-x-2">
            <Image
              src={logo}
              alt="Grafismo Digital logo"
              height={100}
              width={100}
              className="h-16 w-16 rounded-full"
            />

            <div className="lg:flex-grow">
              <h3 className="text-xl font-bold text-primary-black">
                Grafismo Digital
              </h3>

              <div className="flex-center-start gap-x-1">
                {/* Active/Online Indicator */}
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <p className="text-sm font-medium text-muted-foreground">
                  Online
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[100vh] space-y-8 overflow-hidden pt-8">
          {/* Chat messages */}
          <ScrollableFeed>
            {messages?.map((message) => (
              // <div className="flex items-start gap-x-4" key={message?._id}>
              //   <Image
              //     src={logo}
              //     alt="user's image"
              //     className="h-[50px] w-[50px] rounded-full"
              //   />
              //   <div className="max-w-[50%] space-y-3 overflow-hidden">
              //     <ReceiverMsgCard message={"omg, this is amazing"} />
              //     <ReceiverMsgCard message={"Lorem ipsum dolor sit amet"} />
              //     <ReceiverMsgCard
              //       message={
              //         "omg, thi perspiciatis consectetur mollitia laboriosam itaque enim officia aut nemo quibusdam?"
              //       }
              //     />
              //   </div>
              // </div>
              <MessageCard
                key={message?._id}
                message={message}
                setLastSender={setLastSender}
                lastSender={lastSender}
                userId={userId}
              />
            ))}
          </ScrollableFeed>
        </div>

        <form
          onSubmit={handleSubmit(handleSendMsg)}
          className="flex-center mt-12 gap-x-4"
        >
          <button
            type="button"
            disabled={isSendingMsg}
            className="disabled:text-gray-400"
          >
            <Paperclip size={20} />
          </button>

          <Input
            placeholder="Type a message"
            type="text"
            className="w-full rounded-2xl border border-primary-black bg-transparent px-4 py-[22px] text-base font-medium text-primary-black"
            {...register("message", { required: true })}
          />

          <button
            disabled={isSendingMsg}
            type="submit"
            className="border-none shadow-none disabled:text-gray-400"
          >
            {isSendingMsg ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Send size={20} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
