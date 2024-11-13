import React from "react";
import { SectionContainer, SectionWrapper } from "./trustedBy.styles";
import Image from "next/image";

import Chamber from "@/assets/chamber.webp";

const TrustedBy = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <h2>
          Proud Member of <br />
          the Lakeland 
          Chamber of Commerce
        </h2>

        <Image
          src={Chamber}
          alt={"section image"}
          width={"300"}
          height={"100"}
        />
      </SectionWrapper>
    </SectionContainer>
  );
};

export default TrustedBy;
