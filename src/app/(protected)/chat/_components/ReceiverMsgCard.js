import React from "react";
import logo from "/public/images/logo.svg";
import Image from "next/image";
import { CheckCheck } from "lucide-react";
import { Check } from "lucide-react";

export default function ReceiverMsgCard({ message, isDifferentSender }) {
  return (
    <div className="flex-center-start gap-x-2">
      {isDifferentSender ? (
        <Image src={logo} alt="logo" height={40} width={40} />
      ) : (
        <div className="w-10"></div>
      )}
      <div className="relative mt-2 max-w-max rounded-xl border bg-primary-green px-3 py-2 pr-7 font-medium text-primary-white">
        <p>{message?.text}</p>
      </div>
    </div>
  );
}
