"use client";

import AnimatedArrow from "@/components/AnimatedArrow/AnimatedArrow";
import ContinueToLoginModal from "@/components/ContinueToLoginModal/ContinueToLoginModal";
import RequestFormModal from "@/components/shared/RequestFormModal/RequestFormModal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { selectUser } from "@/redux/features/auth/authSlice";
import { Mail } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Contact() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const userId = useSelector(selectUser)?._id;

  return (
    <section
      id="contact"
      className="flex-center-between container flex-col gap-x-20 gap-y-16 lg:flex-row"
    >
      {/* Left */}
      <div className="lg:w-1/2">
        <h1
          className="font-extrabold ~text-5xl/6xl"
          style={{ lineHeight: 1.4 }}
        >
          Ready to Bring Your Vision to Life? 🚀
        </h1>
      </div>

      <div className="hidden lg:block">
        <Separator orientation="vertical" className="h-[300px]" />
      </div>

      {/* Right */}
      <div className="lg:w-1/2">
        <p className="font-medium">
          Whether you&apos;ve specific project in mind or want to discuss with
          how we can capture your moments, we&apos;re here to make it happen.
        </p>

        <Separator className="my-8 w-full" />

        <h4 className="text-center text-xl font-bold lg:text-left">
          Get in touch
        </h4>

        <div className="flex-center-between mt-4 flex-col gap-x-10 gap-y-4 lg:flex-row">
          <div className="flex-center w-max gap-x-2 rounded border-2 bg-neutral-100 p-2 px-4 text-sm font-semibold text-primary-black">
            <Mail size={16} />
            <span>grapfismodigital@gmail.com</span>
          </div>

          <p>or</p>

          <Button
            className="primary-button group gap-x-2 hover:bg-primary-green"
            style={{ height: "40px", borderRadius: "4px" }}
            onClick={() => setShowRequestModal(true)}
          >
            Request a Design <AnimatedArrow />
          </Button>

          {/* Request form modal */}
          {userId ? (
            <RequestFormModal
              open={showRequestModal}
              setOpen={setShowRequestModal}
            />
          ) : (
            <ContinueToLoginModal
              open={showRequestModal}
              setOpen={setShowRequestModal}
            />
          )}
        </div>
      </div>
    </section>
  );
}
