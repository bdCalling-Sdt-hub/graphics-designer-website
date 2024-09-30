import { Diamond } from "lucide-react";
import largeImg from "/public/images/about/Large Photo.png";
import smallImg from "/public/images/about/Small Photo.png";
import floatingDots from "/public/images/floating-dots.png";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-10">
      <div className="flex-center-between container flex-col-reverse gap-y-20 lg:flex-row">
        {/* Left */}
        <div className="lg:w-[50%]">
          <div className="flex-center-start gap-x-3">
            <div className="flex-center h-8 w-8 rounded-lg bg-[#dbf4e7] p-1 text-primary-green">
              <Diamond />
            </div>
            <p className="text-lg font-medium">About Us</p>
          </div>
          <h3 className="my-7 text-4xl font-extrabold">Our Overview</h3>

          <p className="text-lg font-medium text-primary-black/75">
            Welcome to Grafismo Digital, where creativity meets design. I&apos;m
            a passionate graphic designer specializing in creating unique logos,
            eye-catching banners or pretty much anything you can imagine. With a
            keen eye for aesthetics and a dedication to bringing your vision to
            life, I offer personalized design solutions tailored to your
            brand&apos;s identity.
          </p>

          <p className="mt-8 text-lg font-medium text-primary-black/75">
            Whether you&apos;re launching a new project, building a brand, or
            refreshing your current visuals, I provide professional design
            services through my Instagram account. From concept to creation, I
            work closely with my clients to ensure every design reflects their
            unique style and business goals. Connect with me on Instagram to
            explore my portfolio and discuss how we can collaborate on your next
            project!
          </p>
        </div>

        {/* Right */}
        <div className="relative lg:w-[40%]">
          <Image src={largeImg} alt="large image" className="w-full" />
          <Image
            src={smallImg}
            alt="small image"
            className="absolute -bottom-10 -right-10"
          />
        </div>
      </div>

      {/* Floating dots */}
      <Image
        src={floatingDots}
        alt="floating dots background effect"
        className="absolute bottom-0 right-0"
      />
    </section>
  );
}
