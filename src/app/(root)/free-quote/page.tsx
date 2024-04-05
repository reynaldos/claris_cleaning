
import HeroSection from '@/components/HeroSection';
import SectionComponent from '@/components/Section';
import React from 'react'
import QuoteForm from '@/components/Forms/QuoteForm';

const FreeQuote = () => {
  return (
    <>
      <HeroSection backgroundImage={"quote"} title={`Get A Free Quote`} />

      <SectionComponent sectionsType="single">
        <QuoteForm />
       
      </SectionComponent>
    </>
  );
};

export default FreeQuote;