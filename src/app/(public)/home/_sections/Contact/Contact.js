"use client";

import AnimatedArrow from "@/components/AnimatedArrow/AnimatedArrow";
import RequestFormModal from "@/components/shared/RequestFormModal/RequestFormModal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [showRequestModal, setShowRequestModal] = useState(false);

  return (
    <section id="contact" className="flex-center-between container gap-x-20">
      {/* Left */}
      <div>
        <h1 className="text-6xl font-extrabold leading-[1.4]">
          Ready to Bring Your Vision to Life? 🚀
        </h1>
      </div>

      <Separator orientation="vertical" className="h-[300px]" />

      {/* Right */}
      <div>
        <p className="font-medium">
          Whether you&apos;ve specific project in mind or want to discuss with
          how we can capture your moments, we&apos;re here to make it happen.
        </p>

        <Separator className="my-8 w-full" />

        <h4 className="text-xl font-bold">Get in touch</h4>

        <div className="flex-center-between mt-4">
          <div className="flex-center w-max gap-x-2 rounded border-2 bg-neutral-100 p-2 px-4 text-sm font-semibold text-primary-black">
            <Mail size={16} />
            <span>grapfismodigital@gmail.com</span>
          </div>

          <p>or</p>

          <Button
            className="primary-button group gap-x-2"
            style={{ height: "40px", borderRadius: "4px" }}
            onClick={() => setShowRequestModal(true)}
          >
            Request a Design <AnimatedArrow />
          </Button>

          {/* Request form modal */}
          <RequestFormModal
            open={showRequestModal}
            setOpen={setShowRequestModal}
          />
        </div>
      </div>
    </section>
  );
}
