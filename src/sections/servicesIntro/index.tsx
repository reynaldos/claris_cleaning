"use client"

import React from "react";

import SectionComponent from "@/components/Section";

import { CardWrapper } from "./serviceIntro.styles";


// images
import Residential from "@/assets/house.jpeg";
import Office from "@/assets/office_cleaning.jpg";
import Construction from "@/assets/construction.jpg";
import Personalized from "@/assets/personalized.jpg";
import ServiceCard from "@/components/ServiceCard";

const ServicesIntro = () => {
  const serviceList = [
    {
      title: "Residential Cleaning",
      description:
        "Whether move-in, move-out, one-time, or regularly scheduled, we will cover absolutely every home cleaning need.",
      image: Residential,
    },
    {
      title: "Office Cleaning",
      description:
        "Top-tier office cleaning for all sizes, covering floors, bathrooms, desks, windows, kitchens, and more.",
      image: Office,
    },
    {
      title: "Construction Cleaning",
      description:
        "We perform a pre-clean followed by a final clean to make your construction project ready to be delivered to the owner.",
      image: Construction,
    },
    {
      title: "Personalized Cleaning",
      description:
        "We can meet all of your regular and special occasion cleaning needs.",
      image: Personalized,
    },
  ];

  return (
    <SectionComponent sectionsType="single">
      <CardWrapper>
        {serviceList.map((info, index) => (
          <ServiceCard
            key={index}
            title={info.title}
            description={info.description}
            image={info.image}
          />
        ))}
      </CardWrapper>
    </SectionComponent>
  );
};

export default ServicesIntro;
