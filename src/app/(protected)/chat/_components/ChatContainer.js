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
  useUploadImageMutation,
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
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";
import ScrollableFeed from "react-scrollable-feed";
import MessageCard from "./MessageCard";
import { useSocket } from "@/context/SocketContextApi";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export default function ChatContainer() {
  const { register, handleSubmit, reset } = useForm();
  const [fileUploadFn] = useUploadImageMutation();
  const chatBoxRef = useRef(null);

  const { socket, socketLoading } = useSocket();
  const receiverId = getChatReceiverId();
  const userId = useSelector(selectUser)?._id;
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isReceiverOnline, setIsReceiverOnline] = useState(null);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // Function to handle the file input click
  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  // Set chat id if message exists
  const chatId = useMemo(() => {
    return messages?.length > 0 ? messages[0]?.chat : null;
  }, [messages]);

  // Scroll to bottom of chat box
  useEffect(() => {
    if (messages) {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }
    }
  }, [messages]);

  // ------------------ Check if messages exist -------------------
  const getMessagesResHandler = (response) => {
    setMessages(response);
  };

  useEffect(() => {
    if (socket && userId) {
      socket.on("message", getMessagesResHandler);
    }

    return () => {
      socket?.off("message", getMessagesResHandler);
    };
  }, [socket, userId]);

  // -------------------- Check if admin is online --------------------
  const isOnlineResHandler = (response) => {
    const isOnline = response.includes(getChatReceiverId());

    setIsReceiverOnline(isOnline);
  };
  useEffect(() => {
    if (socket && userId) {
      socket.on("onlineUser", isOnlineResHandler);
    }

    return () => {
      socket?.off("onlineUser", isOnlineResHandler);
    };
  }, [socket, userId]);

  /**
   * Emit `message-page` with receiverId to get
   * 1. Online users -> (onlineUser)
   * 2. Messages -> (message)
   */
  useEffect(() => {
    if (socket && userId) {
      socket.emit("message-page", getChatReceiverId());
    }
  }, [socket, userId]);

  /**
   * Listen `send-message` to get
   * 1. New message --> (new-message::receiverId/adminId)
   */
  const handleRes = (res) => {
    console.log(res);
    setMessages((prev) => [...prev, res]);
  };

  useEffect(() => {
    if (socket && userId) {
      socket.on(`new-message::${chatId}`, handleRes);
      setIsLoading(false);
    }

    return () => {
      socket?.off(`new-message::${chatId}}`, handleRes);
    };
  }, [socket, userId, chatId]);

  // Toggle loading state
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  // Send message
  const handleSendMsg = async (data) => {
    setImage(null);
    setImgPreview(null);
    fileInputRef.current.value = null;

    const payload = {
      text: data?.message,
      receiver: getChatReceiverId(),
      imageUrl: "",
    };
    toggleLoading();

    try {
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        const res = await fileUploadFn(formData).unwrap();
        payload.imageUrl = res?.data;
      }

      if (socket && userId) {
        socket.emit("send-message", payload, (res) => {
          setIsLoading(false);
        });
      }
    } catch (error) {
      ErrorToast(error?.data?.message);
      setIsLoading(false);
    } finally {
      reset();
    }
  };

  // Image preview
  const [imgPreview, setImgPreview] = useState(null);
  useEffect(() => {
    if (image) {
      setImgPreview(URL?.createObjectURL(image));
    }
  }, [image]);

  console.log(imgPreview);

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
                <div
                  className={cn(
                    "h-2 w-2 rounded-full",
                    isReceiverOnline ? "bg-green-500" : "bg-yellow-500",
                  )}
                />
                <p className="text-sm font-medium text-muted-foreground">
                  {isReceiverOnline ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div
          className="scroll-hide max-h-[65vh] min-h-[65vh] overflow-auto py-8"
          ref={chatBoxRef}
        >
          {messages?.length > 0 ? (
            messages?.map((msg, index) => (
              <MessageCard
                key={msg?._id}
                message={msg}
                userId={userId}
                previousMessage={index > 0 ? messages[index - 1] : null}
              />
            ))
          ) : (
            <div className="flex-center min-h-[65vh] w-full">
              <Loader2 size={50} className="animate-spin" color="#6b7280" />
              {/* <p>Write me a message</p> */}
            </div>
          )}
        </div>

        <div>
          {imgPreview && (
            <div className="border-b-none relative mx-auto w-[94%] rounded-2xl border-x border-t border-primary-black p-2">
              <button
                className="absolute right-2 top-2"
                onClick={() => {
                  setImage(null);
                  setImgPreview(null);
                  fileInputRef.current.value = null;
                }}
              >
                <X size={20} />
              </button>
              {imgPreview && (
                <Image
                  src={imgPreview}
                  alt="image preview"
                  height={250}
                  width={250}
                  className="h-[120px] w-auto rounded-2xl"
                />
              )}
            </div>
          )}
          <form
            onSubmit={handleSubmit(handleSendMsg)}
            className="flex-center gap-x-4"
          >
            <button
              type="button"
              disabled={isLoading}
              className="disabled:text-gray-400"
              onClick={handleFileInputClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImage(file);
                }}
              />

              <Paperclip size={20} />
            </button>

            {/* Image preview */}

            <Input
              placeholder="Type a message"
              type="text"
              className="w-full rounded-2xl border border-primary-black bg-transparent px-4 py-[22px] text-base font-medium text-primary-black"
              {...register("message", { required: true })}
            />

            <button
              disabled={isLoading}
              type="submit"
              className="border-none shadow-none disabled:text-gray-400"
            >
              {isLoading ? (
                <Loader2 size={22} className="animate-spin" />
              ) : (
                <Send size={22} />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
