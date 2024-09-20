import React from "react";
import OwnerMsgCard from "./OwnerMsgCard";

export default function MessageCard({
  message,
  lastSender,
  setLastSender,
  userId,
}) {
  if (!lastSender) {
    setLastSender(message?.sender);

    if (message?.sender === userId) {
      <OwnerMsgCard message={message?.text} />;
    }
  }
}
