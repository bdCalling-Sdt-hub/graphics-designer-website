import { cn } from "@/lib/utils";
import React from "react";

export default function OwnerMsgCard({ message, lastSender }) {
  return (
    <div className={"mt-2 max-w-max rounded-xl bg-gray-200 px-3 py-2"}>
      <p className="font-medium text-primary-black">{message?.text}</p>
    </div>
  );
}
