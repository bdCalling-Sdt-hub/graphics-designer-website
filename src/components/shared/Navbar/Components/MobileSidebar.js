"use client";

import AnimatedArrow from "@/components/AnimatedArrow/AnimatedArrow";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Motion Variants
const slideUp = {
  initial: {
    y: 50,
    // opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 20,
      mass: 1,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

// Links
const LINKS = [
  {
    key: "home",
    label: "Home",
    route: "/home",
  },

  {
    key: "skills",
    label: "Skills",
    route: "/#skills",
  },
  {
    key: "designs",
    label: "My Designs",
    route: "/#designs",
  },
  {
    key: "about",
    label: "About",
    route: "/#about",
  },
  {
    key: "faq",
    label: "FAQ",
    route: "/#faq",
  },
];

export default function MobileSidebar({ open, setOpen }) {
  const router = useRouter();
  const handleBtnClick = (path) => {
    if (path) {
      router.push(path);
    }
    setOpen(false);
  };
  return (
    <div
      className={cn(
        "fixed inset-0 z-[99999] h-screen w-screen bg-primary-white text-primary-black transition-all duration-500 ease-in-out",
        open ? "visible translate-x-0" : "translate-x-[100vw]",
      )}
    >
      <motion.div
        variants={slideUp}
        initial="initial"
        whileInView="animate"
        className="flex h-full flex-col items-center justify-center gap-y-3"
      >
        {LINKS.map((link) => (
          <button
            key={link.key}
            className="overflow-hidden text-3xl font-extrabold leading-snug"
            onClick={() => handleBtnClick(null)}
          >
            <motion.span variants={slideUp} key={link.key} className="block">
              <Link href={link.route}>{link.label}</Link>
            </motion.span>
          </button>
        ))}

        <div className="overflow-hidden">
          <motion.button
            key="signInBtn"
            variants={slideUp}
            className="primary-button group flex items-center gap-x-1"
            onClick={() => handleBtnClick("/login")}
          >
            Sign In <AnimatedArrow />
          </motion.button>
        </div>
      </motion.div>

      <button
        onClick={() => setOpen(false)}
        className="absolute right-10 top-4"
      >
        <X size={30} />
      </button>
    </div>
  );
}
