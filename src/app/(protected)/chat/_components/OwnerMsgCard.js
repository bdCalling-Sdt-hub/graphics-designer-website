import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function OwnerMsgCard({ message }) {
  return (
    <div className={"mt-2 max-w-max rounded-xl bg-gray-200 px-3 py-2"}>
      {message?.imageUrl && (
        <Image
          src={message?.imageUrl}
          alt={message?.text}
          height={200}
          width={200}
          className="h-[160px] w-auto"
        />
      )}
      <p className="mt-2 font-medium text-primary-black">{message?.text}</p>
    </div>
  );
}
