
import React from 'react';
import SectionComponent from "@/components/Section";

import { FaPhone } from 'react-icons/fa6';

import TeamImg from '@/assets/team.png'
import { PAGE_ROUTE } from '@/constants/info';

const OurTeam = () => {

  return (
    <SectionComponent
      title={"Our Team"}
      content={`We are a team of passionate individuals driven by pride in their work. While we may not label ourselves as perfectionists, our commitment to excellence shines through in every task. Each team member is dedicated to ensuring our clients receive the highest standard of care, fostering lasting relationships. It's this unwavering dedication that keeps our clients coming back for our exceptional services.`}
      image={{
        type: "img",
        src: TeamImg,
      }}
      primaryButton={{
        label: "View Our Services",
        linkType: "internal",
        href: PAGE_ROUTE.SERVICES,
      }}
      secondaryButton={{
        label: "Book Cleaning",
        linkType: "internal",
        href: PAGE_ROUTE.FREE_QUOTE,
      }}
    />
  );
}

export default OurTeam;