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
    | { type: "img"; src: StaticImport; alt?: string }
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
                <Image src={image.src} alt={image.alt ?? ""} />
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
