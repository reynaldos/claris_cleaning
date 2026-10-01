import React, { PropsWithChildren } from "react";

import { HeroContainer, HeroWrapper } from "./HeroSection.styles";
import Button from "../Buttons";
import { SectionButton } from "../Section";

interface HeroSectionType
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  backgroundImage: string;
  title: string;
  primaryButton?: SectionButton;
  secondaryButton?: SectionButton;
}

const HeroSection = ({
  title,
  primaryButton,
  secondaryButton,
  backgroundImage,
}: HeroSectionType) => {
  return (
    <HeroContainer $banner={backgroundImage}>
      <HeroWrapper>
        <h1>{title}</h1>
        <span>
          {[primaryButton, secondaryButton].map(
            (btn) =>
              btn && (
                <Button
                  key={btn.href}
                  href={btn.href}
                  target={btn.linkType === "external" ? "_blank" : undefined}
                >
                  {btn.label}
                </Button>
              )
          )}
        </span>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
