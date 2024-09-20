import React from "react";

export default function OwnerMsgCard({ message }) {
  return (
    <div className="max-w-max rounded-xl border bg-[#DFE1E3] px-3 py-2">
      <p className="font-medium text-primary-black">{message}</p>
    </div>
  );
}
