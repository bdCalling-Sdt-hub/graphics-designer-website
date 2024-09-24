"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import greenBox from "/public/images/Hero/green-box.png";
import portfolioImg from "/public/images/Hero/user-img.png";
import floatingDots from "/public/images/Hero/floating-dots.png";
import Link from "next/link";
import "./Hero.css";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText/AnimatedText";

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
      type: "spring",
      stiffness: 180,
      damping: 30,
      mass: 0.3,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const delayedOpacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      className="flex-center-between container relative z-10 flex-col gap-y-16 lg:flex-row"
    >
      {/* left */}
      <motion.div
        variants={fadeUp}
        className="z-10 w-full text-primary-black sm:w-3/4 lg:w-1/2"
      >
        <motion.div className="chip" key="tileChip" variants={fadeUp}>
          <p>Welcome</p>
        </motion.div>

        <h2 className="mb-4 mt-3 overflow-hidden text-6xl font-extrabold leading-[1.2] lg:leading-snug">
          <AnimatedText>I have Creative Design Experience</AnimatedText>
        </h2>

        <motion.p
          className="text-lg font-medium text-primary-black/75"
          key="desc"
          variants={fadeUp}
        >
          I’m Tanvir, a creative Product Designer. I’ve been helping businesses
          to solve their problems with my design for 2 years.
        </motion.p>

        <motion.div key="contactBtn" variants={fadeUp}>
          <Button
            className="primary-button group mt-8 gap-x-1 hover:bg-primary-green"
            asChild
          >
            <Link href={"/#contact"}>Contact Me</Link>
          </Button>
        </motion.div>

        {/** If user not present -
         * Show Authentication Required form modal
         * else Show Request form modal */}
      </motion.div>

      {/* right */}
      <motion.div
        variants={delayedOpacity}
        className="relative z-10 w-full sm:w-3/4 lg:w-[38%]"
      >
        <Image
          src={greenBox}
          alt="green box image"
          className="mx-auto w-[90%]"
        />
        <Image
          src={portfolioImg}
          alt="website owner portfolio image"
          className="absolute -top-[8%] left-[18%] w-[72%]"
        />
      </motion.div>

      {/* floating dots */}
      <motion.div
        variants={delayedOpacity}
        className="absolute -left-[180px] -top-[210px] -z-10"
      >
        <Image
          src={floatingDots}
          alt="floating dots background effect"
          key="floating-dots"
        />
      </motion.div>
    </motion.section>
  );
}
