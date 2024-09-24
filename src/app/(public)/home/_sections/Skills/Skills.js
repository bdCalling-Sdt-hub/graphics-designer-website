"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Gem } from "lucide-react";
import floatingDots from "/public/images/floating-dots.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";
import ContinueToLoginModal from "@/components/ContinueToLoginModal/ContinueToLoginModal";
import RequestFormModal from "@/components/shared/RequestFormModal/RequestFormModal";
import { motion } from "framer-motion";

// Motion variants
const fadeUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

export default function Skills() {
  const userId = useSelector(selectUser)?._id;
  const [showRequestModal, setShowRequestModal] = useState(false);

  return (
    <section id="skills" className="relative py-16">
      <div className="flex-center-between container gap-x-20 text-primary-black">
        {/* Left */}
        <div className="w-[45%]">
          <div className="chip">
            <p>My Skills</p>
          </div>

          <h3 className="mb-4 mt-3 text-5xl font-extrabold leading-[1.2] lg:leading-snug">
            Why Hire Me For Your{" "}
            <span className="text-primary-green">Next Project?</span>
          </h3>

          <p className="text-lg font-medium text-primary-black/75">
            I’m specialist in UI/UX Designer. My passion is designing & solving
            problems through user experience and research.
          </p>

          <Button
            className="primary-button group mt-8 gap-x-1 hover:bg-primary-green"
            onClick={() => setShowRequestModal(true)}
          >
            Hire Me
          </Button>

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

        {/* Right */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-center w-1/2 gap-x-10"
        >
          <div className="w-full space-y-10">
            <motion.div
              variants={fadeUp}
              key="visualDesign"
              className="rounded p-6 shadow-[5px_0px_100px_0px_#f7f7f7]"
            >
              <Gem className="text-primary-green" size={28} />
              <h4 className="mb-1 mt-3 text-2xl font-extrabold">
                Visual Design
              </h4>
              <p className="font-medium text-primary-black/75">
                Create user interface design with unique & modern ideas
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              key="uiUx"
              className="rounded p-6 shadow-[5px_0px_100px_0px_#f7f7f7]"
            >
              <GraduationCap className="text-primary-green" size={28} />
              <h4 className="mb-1 mt-3 text-2xl font-extrabold">
                UI/UX Research
              </h4>
              <p className="font-medium text-primary-black/75">
                Create digital user products with updated ideas
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            key="designPrototype"
            className="w-full rounded p-6 shadow-[5px_0px_100px_0px_#f7f7f7]"
          >
            <Activity className="text-primary-green" size={28} />
            <h4 className="mb-1 mt-3 text-2xl font-extrabold">
              Design Prototype
            </h4>
            <p className="font-medium text-primary-black/75">
              Create advance design prototype with Figma apps.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating dots */}
      <Image
        src={floatingDots}
        alt="floating dots effect"
        className="absolute bottom-0 right-0"
      />
    </section>
  );
}
