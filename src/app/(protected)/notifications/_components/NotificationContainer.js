"use client";

import AnimatedArrow from "@/components/AnimatedArrow/AnimatedArrow";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { BellDot } from "lucide-react";
import { useState } from "react";

const NOTIFICATION = {
  title: "Rachel Weizner has request a new design",
  date: "Fri, 12:30pm",
};

export default function NotificationContainer() {
  const [markRead, setMarkRead] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex-center-between">
        <h3 className="text-3xl font-semibold">Notifications</h3>

        <div className="flex items-center gap-x-3">
          <button
            variant="outline"
            className="primary-button text-sm"
            onClick={() => setMarkRead(true)}
          >
            Mark as read
          </button>
        </div>
      </div>

      <div>
        {Array.from({ length: 7 }).map((_, idx) => (
          <>
            <div
              key={idx}
              className={cn(
                "flex items-start gap-x-5 px-4 py-4",
                idx % 2 === 0 && !markRead && "bg-gray-200/50",
              )}
            >
              <BellDot size={24} className="mt-2 block" />
              <div>
                <h5 className="mb-1 text-xl font-medium">
                  {NOTIFICATION.title}
                </h5>
                <p className="text-primary-black/75">{NOTIFICATION.date}</p>
              </div>
            </div>
            {idx !== 6 && <Separator className="bg-primary-black/40" />}
          </>
        ))}
      </div>
    </div>
  );
}
