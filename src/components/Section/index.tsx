"use client";

import React, { ReactElement, PropsWithChildren } from "react";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  SectionContainer,
  SectionWrapper,
  ButtonWrap,
  SoloSectionWrap,
} from "./Section.styles";
import Image from "next/image";
import Link from "next/link";
import Button from "../Buttons";

export interface SectionButton {
  linkType: "internal" | "external";
  href: string;
  label: string | any;
}

interface SectionType
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  backgroundColor?: string | undefined;
  title?: string | undefined;
  titleAlign?: "center" | "left" | "right" | undefined;
  content?: string | undefined;
  maxImageWidth?: string | undefined;
  image?:
    | { type: "img"; src: StaticImport }
    | { type: "component"; src: ReactElement }
    | undefined;
  reverse?: boolean; // reverses order of child divs
  primaryButton?: SectionButton;
  secondaryButton?: SectionButton;
  sectionsType?: "single" | "double"; //one or two divs in sections
}

const SectionComponent = ({
  backgroundColor = "#FFF",
  title,
  titleAlign = "left",
  content,
  image,
  reverse = false,
  primaryButton,
  secondaryButton,
  children,
  maxImageWidth = "390px",
  sectionsType = "double",
}: SectionType) => {
  return (
    <SectionContainer $backgroundColor={backgroundColor}>
      {/* section with 2 children */}
      {/* one image & extra content */}
      {sectionsType === "double" ? (
        <SectionWrapper $reverse={reverse} $maxImageWidth={maxImageWidth}>
          {image && (
            <div>
              {image.type === "img" ? (
                // regular image
                <Image src={image.src} alt={"section image"} />
              ) : (
                // custom component in place of image
                <>{image.src}</>
              )}
            </div>
          )}

          <div>
            {title && <h2 style={{ textAlign: titleAlign }}>{title}</h2>}
            <p>{content}</p>
            {children}

            <ButtonWrap>
              {/* left button */}
              {primaryButton &&
                (primaryButton.linkType === "external" ? (
                  // links to external page
                  <a href={primaryButton.href} target="_blank">
                    <Button aria-label={primaryButton.label} role="link">
                      {primaryButton.label}
                    </Button>
                  </a>
                ) : (
                  // links to internal page
                  <Link href={primaryButton.href}>
                    <Button aria-label={primaryButton.label} role="link">
                      {primaryButton.label}
                    </Button>
                  </Link>
                ))}
              {/* right button */}
              {secondaryButton &&
                (secondaryButton.linkType === "external" ? (
                  // links to external page
                  <a href={secondaryButton.href} target="_blank">
                    <Button aria-label={secondaryButton.label} role="link">
                      {secondaryButton.label}
                    </Button>
                  </a>
                ) : (
                  // links to internal page
                  <Link href={secondaryButton.href}>
                    <Button aria-label={secondaryButton.label} role="link">
                      {secondaryButton.label}
                    </Button>
                  </Link>
                ))}
            </ButtonWrap>
          </div>
        </SectionWrapper>
      ) : (
        // section with only one child
        <SoloSectionWrap>
          {title && <h2 style={{ textAlign: titleAlign }}>{title}</h2>}
          {children}
        </SoloSectionWrap>
      )}
    </SectionContainer>
  );
};

export default SectionComponent;
