
import React from 'react';
import SectionComponent from "@/components/Section";

import CleanProducts from "@/assets/greenCleaning.png";
import { MELALEUCA_LINK, BUSINESS_PHONE } from '@/constants/info';
import { FaPhone } from 'react-icons/fa6';


const GreenCleaning = () => {

  

  return (
    <SectionComponent
      title={"Green Cleaning Practices"}
      content={`At Clari's Cleaning, we exclusively use environmentally friendly and safe cleaning products from the Melaleuca Wellness Company. This ensures not only a spotless home but also a wellness-focused, risk-free environment for your family and pets.`}
      image={{
        type: "img",
        src: CleanProducts,
      }}
      primaryButton={{
        label: "Learn More",
        linkType: "external",
        href: MELALEUCA_LINK,
      }}
      secondaryButton={{
        label: (
          <>
            <FaPhone size={16} />
            Call Us Now
          </>
        ),
        linkType: "external",
        href: `tel:${BUSINESS_PHONE}`,
      }}
    />
  );
}

export default GreenCleaning;