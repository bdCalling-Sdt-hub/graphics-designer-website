import React from "react";

export default function ReceiverMsgCard({ message }) {
  return (
    <div className="max-w-max rounded-xl border bg-primary-green px-3 py-2 font-medium text-primary-white">
      <p>{message}</p>
    </div>
  );
}
