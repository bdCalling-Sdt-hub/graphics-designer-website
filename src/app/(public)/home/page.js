import About from "./_sections/About/About";
import Contact from "./_sections/Contact/Contact";
import Designs from "./_sections/Designs/Designs";
import Faq from "./_sections/Faq/Faq";
import Hero from "./_sections/Hero/Hero";
import Skills from "./_sections/Skills/Skills";

export const metadata = {
  title: "Home",
  description: "This is the official home page of Grafismo Digital.",
};

export default function HomePage() {
  return (
    <div className="mb-20 mt-28 space-y-24">
      <Hero />

      <Skills />

      <Designs />

      <About />

      <Faq />

      <Contact />
    </div>
  );
}
