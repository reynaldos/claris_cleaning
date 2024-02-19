import React from "react";
import { SectionContainer, SectionWrapper } from "./testimonials.styles";
import QuoteSwiper from "@/components/QuoteSwiper";

const Testimonials = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <QuoteSwiper />
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Testimonials;
