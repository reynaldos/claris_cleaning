import React from 'react';

import SectionComponent from "@/components/Section";
import BrandSwiper from '@/components/BrandSwiper';
import { grey200 } from '@/constants/colors';


const TrustedBrandsSection = () => {
  return (
    <SectionComponent
      title="Our Cleaning Services are Trusted by Top Brands"
      sectionsType="single"
      backgroundColor={grey200}
    >
      <BrandSwiper />
    </SectionComponent>
  );
};

export default TrustedBrandsSection;