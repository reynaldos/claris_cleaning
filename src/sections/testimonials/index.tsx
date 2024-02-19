import React from 'react'
import { SectionContainer, SectionWrapper } from './testimonials.styles'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import QuoteSwiper from '@/components/QuoteSwiper'

const Testimonials = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <QuoteSwiper />
      </SectionWrapper>
    </SectionContainer>
  );
}

export default Testimonials