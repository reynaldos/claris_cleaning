import { BUSINESS_PHONE, PAGE_ROUTE } from "@/constants/info";
import HeroSection from "@/components/HeroSection";
import { FaPhone } from "react-icons/fa6";
import { formatPhoneNumber } from "@/utils/sting";

// sections
import ServiceArea from "@/sections/serviceArea";
import Testimonials from "@/sections/testimonials";
import ContactIntro from "@/sections/contactIntro";

export default function Contact() {
  return (
    <>
      <HeroSection
        backgroundImage={"contact"}
        title={`Contact Us`}
        primaryButton={{
          linkType: "internal",
          label: "Book Cleaning Today",
          href: PAGE_ROUTE.FREE_QUOTE,
        }}
        secondaryButton={{
          linkType: "external",
          label: (
            <>
              <FaPhone size={18} />
              {formatPhoneNumber(BUSINESS_PHONE)}
            </>
          ),
          href: `tel:${BUSINESS_PHONE}`,
        }}
      />

      <ContactIntro />

      <Testimonials />
      
      <ServiceArea />
    </>
  );
}
