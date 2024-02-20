// sections
import Testimonials from "@/sections/testimonials";
import HeroSection from "@/components/HeroSection";
import QuoteTool from "@/sections/quoteTool";

import { PAGE_ROUTE } from "@/constants/info";


export default function Services() {
  return (
    <>
      <HeroSection
        backgroundImage={"services"}
        title={`Our Cleaning Services`}
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
      <Testimonials />

      <QuoteTool />
    </>
  );
}
