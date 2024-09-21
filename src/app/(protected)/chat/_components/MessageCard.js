import React, { useEffect, useState } from "react";
import OwnerMsgCard from "./OwnerMsgCard";
import ReceiverMsgCard from "./ReceiverMsgCard";
import { format } from "date-fns";

export default function MessageCard({ message, userId, previousMessage }) {
  const isDifferentSender =
    !previousMessage || previousMessage.sender !== message.sender;

  // format message sent time
  const [sentTime, setSentTime] = useState("");
  useEffect(() => {
    if (isDifferentSender) {
      setSentTime(format(message?.createdAt, "h:mm a"));
    }
  }, [isDifferentSender, message]);

  return (
    <div className="">
      {/* {lastSender} */}
      {message?.sender === userId ? (
        <div className="flex flex-col items-end">
          <div>
            {isDifferentSender && (
              <p className="text-end text-sm text-muted-foreground">
                {sentTime}
              </p>
            )}
            <OwnerMsgCard message={message} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start">
          {isDifferentSender && (
            <p className="ml-12 text-sm text-muted-foreground">{sentTime}</p>
          )}
          <ReceiverMsgCard
            message={message}
            isDifferentSender={isDifferentSender}
          />
        </div>
      )}
    </div>
  );
}
