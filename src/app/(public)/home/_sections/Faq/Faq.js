import Image from "next/image";
import backgroundImg from "/public/images/faq/background.png";
import foregroundImg from "/public/images/faq/foreground.png";
import { CircleHelp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import floatingDots from "/public/images/floating-dots.png";

const FAQs = [
  {
    key: 1,
    question: "What graphic design services do you offer?",
    answer:
      "I offer a wide range of services including logo design, business cards, banners, music album covers, social media graphics, and more.",
  },
  {
    key: 2,
    question: "What is your design process?",
    answer:
      "My design process starts with understanding your needs, followed by initial concept creation, revisions, and final delivery of high-quality files.",
  },
  {
    key: 3,
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the complexity and scope of the project. I offer custom quotes based on the project requirements.",
  },
  {
    key: 4,
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on the type of design and revisions. Typically, it takes 3-7 business days for most projects.",
  },
  {
    key: 5,
    question: "Can you create custom designs based on my vision?",
    answer:
      "Absolutely! I work closely with clients to ensure the designs align with their vision and brand identity.",
  },
  {
    key: 6,
    question: "Do you offer revisions?",
    answer:
      "Yes, I offer a set number of revisions to ensure the final design meets your expectations. Additional revisions may incur extra charges.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative">
      <div className="flex-start-between container z-10 gap-x-16">
        {/* Left */}
        <div className="relative z-10 mt-16 lg:w-1/2">
          <Image
            src={backgroundImg}
            alt="background image"
            className="absolute right-0 top-0 -z-10"
          />
          <Image
            src={foregroundImg}
            alt="foreground image"
            className="absolute left-0 top-[220px] z-10"
          />
        </div>

        {/* Right */}
        <div className="z-10 lg:w-1/2">
          <div className="flex-center-start gap-x-3">
            <div className="flex-center h-8 w-8 rounded-lg bg-[#dbf4e7] p-1 text-primary-green">
              <CircleHelp />
            </div>
            <p className="text-lg font-medium">FAQ</p>
          </div>
          <h3 className="mb-10 mt-7 text-4xl font-extrabold">
            Frequently Asked Questions
          </h3>

          <div>
            <Accordion type="single" collapsible>
              {FAQs.map((faq) => (
                <>
                  <AccordionItem
                    value={faq.question}
                    className="border-b-0 border-l-2 px-4 py-0 [&[data-state=open]]:border-l-primary-green"
                    key={faq.key}
                  >
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                  <Separator className="my-4" />
                </>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Floating dots */}
      <Image
        src={floatingDots}
        alt="floating dots"
        className="absolute bottom-0 left-0 rotate-180"
      />
    </section>
  );
}
