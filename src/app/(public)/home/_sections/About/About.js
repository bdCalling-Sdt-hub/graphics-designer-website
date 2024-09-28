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
            Carlio brand is one of the most reliable motor oil manufacturers,
            which is engaged in the production of high quality products with a
            history of more than decades in the industry. In order to get more
            information about other aspects and products of the Carlio brand,
            you can use the following buttons:
          </p>

          <p className="mt-8 text-lg font-medium text-primary-black/75">
            The meaning of production in Carlio is the creation, development,
            and the path to progress, and the starting point to achieve the
            goals that we all have the Petroforce brand, with over 20 years of
            experience in the oil and petrochemical industry, we officially
            started our activities in the field of design, engineering,
            construction of refinery equipment, and the production of various
            motor and industrial lubricants in the year 1390 (2011)
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
