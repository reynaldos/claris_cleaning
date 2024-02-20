
// sections
import HeroSection from "@/components/HeroSection";
import AboutIntro from "@/sections/aboutIntro";
import GreenCleaning from "@/sections/greenCleaning";
import OurTeam from "@/sections/ourTeam";
import Testimonials from "@/sections/testimonials";

import { PAGE_ROUTE } from "@/constants/info";


export default function About() {
  return (
    <>
      <HeroSection
        backgroundImage={"about"}
        title={`Behind the Clean:\nOur Cleaning Journey`}
        primaryButton={{
          linkType: "internal",
          label: "Book Cleaning Today",
          href: PAGE_ROUTE.FREE_QUOTE,
        }}
        secondaryButton={{
          linkType: "internal",
          label: "Contact Us",
          href: PAGE_ROUTE.CONTACT,
        }}
      />
      <AboutIntro />
      <OurTeam />
      <Testimonials />

      <GreenCleaning />
    </>
  );
}
