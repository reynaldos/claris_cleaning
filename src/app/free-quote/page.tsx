import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import React from 'react'

const FreeQuote = () => {
  return (
    <>
      <HeroSection
        backgroundImage={"quote"}
        title={`Get A Free Quote`}
      />
    </>
  );
};

export default FreeQuote;