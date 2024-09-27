import React from "react";
import logo from "/public/images/logo.svg";
import Image from "next/image";
import { showImage } from "@/utils/fileHelper";

export default function ReceiverMsgCard({ message, isDifferentSender }) {
  return (
    <div className="flex-center-start gap-x-2">
      {isDifferentSender ? (
        <Image src={logo} alt="logo" height={40} width={40} />
      ) : (
        <div className="w-10"></div>
      )}
      <div className="relative mt-2 max-w-max rounded-xl border bg-primary-green px-3 py-2 font-medium text-primary-white">
        {message?.imageUrl && (
          <Image
            src={showImage(message?.imageUrl)}
            alt={message?.text}
            height={200}
            width={200}
            className="h-[160px] w-auto"
          />
        )}
        <p>{message?.text}</p>
      </div>
    </div>
  );
}
