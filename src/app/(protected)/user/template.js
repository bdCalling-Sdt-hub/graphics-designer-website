"use client";

import React from "react";
import UserDashboardSidebar from "./_components/UserDashboardSidebar";
import { AnimatePresence, motion } from "framer-motion";

export default function UserDashboardTemplate({ children }) {
  return (
    <div className="container flex min-h-[85vh] flex-col items-center justify-center gap-x-16 lg:flex-row lg:gap-y-0 lg:px-0 2xl:w-3/4">
      <div className="my-16 flex w-full items-start gap-x-16 gap-y-10 px-4">
        <div className="w-full lg:w-[22%]">
          <UserDashboardSidebar />
        </div>

        <div className="z-[9] min-h-max w-full overflow-x-hidden px-2 lg:flex-grow">
          <AnimatePresence>
            <motion.div
              className="lg:flex-grow"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
