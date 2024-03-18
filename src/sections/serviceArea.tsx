
import React from 'react';
import SectionComponent from "@/components/Section";

import AreaMap from "@/assets/serviceArea.webp";
import StarIcon from "@/assets/icons/star";

import { PAGE_ROUTE } from "@/constants/info";



const ServiceArea = () => {
   const serviceAreas = ["Lakeland, FL", "Polk County", "Hillsborough County"];

  return (
    <SectionComponent
      title={"Service Areas & Locations"}
      content={`Our dedicated team is committed to delivering  top-notch cleaning solutions to homes and businesses in Central Florida.\n\nCleaning in the following areas:`}
      reverse={true}
      image={{
        type: "img",
        src: AreaMap,
      }}
      primaryButton={{
        label: "About Us",
        linkType: "internal",
        href: PAGE_ROUTE.ABOUT,
      }}
      secondaryButton={{
        label: "Contact Us",
        linkType: "internal",
        href: PAGE_ROUTE.CONTACT,
      }}
    >
      {serviceAreas.map((location, index) => (
        <span
          key={index}
          style={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
            paddingLeft: "28px",
          }}
        >
          <StarIcon />
          <p>{location}</p>
        </span>
      ))}
    </SectionComponent>
  );
}

export default ServiceArea