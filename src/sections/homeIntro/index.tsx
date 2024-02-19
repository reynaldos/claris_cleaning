import SectionComponent from "@/components/Section";
import React from "react";

import { ServiceButton, ServiceWrap } from "./homeIntro.styles";

import { BUSINESS_PHONE, PAGE_ROUTE } from "@/constants/info";

import HomeImg from "@/assets/homeImg.png";
import { white300 } from "@/constants/colors";

// icons
import ResidentialIcon from "@/assets/icons/residential";
import OfficeIcon from "@/assets/icons/office";
import ConstructionIcon from "@/assets/icons/construction";
import BadgeIcon from "@/assets/icons/badge";
import { FaPhone } from "react-icons/fa6";

interface ServiceType {
  label: string;
  icon: React.JSX.Element;
}
const HomeIntro = () => {
  const services: ServiceType[] | any[] = [
    {
      label: `Residential\nCleaning`,
      icon: <ResidentialIcon />,
    },
    {
      label: `Office\nCleaning`,
      icon: <OfficeIcon />,
    },
    ,
    {
      label: `Construction\nCleaning`,
      icon: <ConstructionIcon />,
    },
    {
      label: ``,
      icon: <></>,
    },
    {
      label: `Personalized\nCleaning`,
      icon: <BadgeIcon />,
    },
    {
      label: ``,
      icon: <></>,
    },
  ];

  return (
    <SectionComponent
      title={"Professional Cleaning for a More Comfortable Life"}
      content={`At Clari's Cleaning Crew, we bring a commitment to excellence in transforming your home or office into a polished haven. Choose us for a refined and comfortable dwelling.`}
      backgroundColor={white300}
      maxImageWidth="560px"
      image={{
        type: "img",
        src: HomeImg,
      }}
      primaryButton={{
        label: "View Our Services",
        linkType: "internal",
        href: PAGE_ROUTE.SERVICES,
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
    >
      <ServiceWrap>
        {services.map((service, index) => (
          <ServiceButton key={index}>
            {service.icon}
            <p>{service.label}</p>
          </ServiceButton>
        ))}
      </ServiceWrap>
    </SectionComponent>
  );
};

export default HomeIntro;
