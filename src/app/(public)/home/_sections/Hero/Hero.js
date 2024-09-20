"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import greenBox from "/public/images/Hero/green-box.png";
import portfolioImg from "/public/images/Hero/user-img.png";
import floatingDots from "/public/images/Hero/floating-dots.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex-center-between container relative z-10 flex-col gap-y-16 lg:flex-row">
      {/* left */}
      <div className="z-10 w-full text-primary-black sm:w-3/4 lg:w-1/2">
        <div className="chip">
          <p>Welcome</p>
        </div>

        <h2 className="mb-4 mt-3 text-6xl font-extrabold leading-[1.2] lg:leading-snug">
          I have <span className="text-primary-green">Creative Design</span>{" "}
          Experience
        </h2>

        <p className="text-lg font-medium text-primary-black/75">
          I’m Tanvir, a creative Product Designer. I’ve been helping businesses
          to solve their problems with my design for 2 years.
        </p>

        <Button
          className="primary-button group mt-8 gap-x-1 hover:bg-primary-green"
          asChild
        >
          <Link href={"/#contact"}>Contact Me</Link>
        </Button>

        {/** If user not present -
         * Show Authentication Required form modal
         * else Show Request form modal */}
      </div>

      {/* right */}
      <div className="relative z-10 w-full sm:w-3/4 lg:w-[38%]">
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
      </div>

      {/* floating dots */}
      <Image
        src={floatingDots}
        alt="floating dots background effect"
        className="absolute -left-[180px] -top-[210px] -z-10"
      />
    </section>
  );
}
