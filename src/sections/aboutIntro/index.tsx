

import React from "react";

import SectionComponent from "@/components/Section";

import { white300 } from "@/constants/colors";
import VideoBox from "@/components/VideoBox";

// icons

const AboutIntro = () => {
 

  return (
    <SectionComponent
      title={"About Clari's Cleaning Crew"}
      content={`Our founders, Claribel Nunez and Gabriel Peralta, bring a fresh perspective to cleaning services at Clari's Cleaning Crew. Originally from the Dominican Republic and now rooted in Lakeland, Florida, our family-operated business is dedicated to providing excellent and personalized cleaning services.\n\nTransform your space with us and enjoy a spotless, safe haven for your family. Contact Clari's Cleaning Crew today for a cleaner, healthier home!`}
      backgroundColor={white300}
      reverse={true}
      maxImageWidth="480px"
      image={{ type: "component", src: <VideoBox />}}
    ></SectionComponent>
  );
};

export default AboutIntro;
