import React, { PropsWithChildren } from "react";

import { HeroContainer, HeroWrapper } from "./HeroSection.styles";
import Button from "../Buttons";
import { SectionButton } from "../Section";
import Link from "next/link";

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
          {/* left button */}
          {primaryButton &&
            (primaryButton.linkType === "external" ? (
              // links to external page
              <a href={primaryButton.href} target="_blank">
                <Button aria-label={`${primaryButton.label}`}>
                  {primaryButton.label}
                </Button>
              </a>
            ) : (
              // links to internal page
              <Link href={primaryButton.href}>
                <Button aria-label={`${primaryButton.label}`}>
                  {primaryButton.label}
                </Button>
              </Link>
            ))}
          {/* right button */}
          {secondaryButton &&
            (secondaryButton.linkType === "external" ? (
              // links to external page
              <a
                aria-label={`${secondaryButton.label}`}
                href={secondaryButton.href}
                target="_blank"
              >
                <Button>{secondaryButton.label}</Button>
              </a>
            ) : (
              // links to internal page
              <Link href={secondaryButton.href}>
                <Button aria-label={`${secondaryButton.label}`}>
                  {secondaryButton.label}
                </Button>
              </Link>
            ))}
        </span>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
