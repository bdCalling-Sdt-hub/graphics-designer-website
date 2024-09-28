import Image from "next/image";
import design1 from "/public/images/designs/1.png";
import design2 from "/public/images/designs/2.png";
import design3 from "/public/images/designs/3.png";
import design4 from "/public/images/designs/4.png";
import design5 from "/public/images/designs/5.png";
import design6 from "/public/images/designs/6.png";
import design7 from "/public/images/designs/7.png";
import floatingDots from "/public/images/floating-dots.png";

const DESIGN_CATEGORIES = [
  { key: 1, category: "Logo" },
  { key: 2, category: "Banner" },
  { key: 3, category: "Music Artist Cover" },
  { key: 4, category: "Business Card" },
  { key: 5, category: "Music Artist Cover" },
  { key: 6, category: "Banner" },
  { key: 7, category: "Banner" },
];

export default function Designs() {
  return (
    <section id="designs" className="relative py-10">
      <div className="flex-start-between container flex-col gap-y-6 lg:flex-row">
        {/* Left */}
        <div className="flex w-full flex-row items-start gap-x-8 gap-y-16 overflow-auto lg:w-[20%] lg:flex-col">
          {DESIGN_CATEGORIES.map((category) => (
            <button
              key={category.key}
              className="whitespace-nowrap text-lg text-primary-green"
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Right --- Design Images */}
        <div className="flex-center-between flex h-[600px] w-full gap-x-5 lg:flex-grow">
          {/* Column 1 */}
          <div className="flex h-full w-full flex-col gap-y-3 lg:w-1/3">
            <div
              className="group relative h-[60%] w-full overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                background: `url('${design1.src}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            />

            <div
              className="group relative h-[40%] w-full overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url('${design2.src}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            />
          </div>

          {/* Column 2 */}
          <div className="flex h-full w-full flex-col gap-y-3 lg:w-1/3">
            {/* Sweatshirt */}
            <div
              className="group relative h-[25%] w-full overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url('${design3.src}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            />

            {/* Hoodie 1 */}
            <div
              className="group relative h-[50%] w-full overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url('${design4.src}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            />

            {/* Pant */}
            <div
              className="group relative h-[25%] w-full overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url('${design5.src}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            />
          </div>

          {/* Column 3 */}
          <div className="flex h-full w-full flex-col gap-y-3 lg:w-1/3">
            {/* Hoodie */}
            <div
              className="group relative h-[60%] w-full overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url('${design6.src}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            />

            {/* Trousers */}
            <div
              className="group relative h-[40%] w-full overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url('${design7.src}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating dots */}
      <Image
        src={floatingDots}
        alt="floating dots effect"
        className="absolute bottom-0 left-0 rotate-180"
      />
    </section>
  );
}
