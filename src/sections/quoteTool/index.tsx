import React from "react";

import { QuoteWrapper } from "./quoteTool.styles";

import SectionComponent from "@/components/Section";
import Button from "@/components/Buttons";
import CheckBoxIcon from "@/assets/icons/checkBox";
import { PAGE_ROUTE } from "@/constants/info";

const QuoteTool = () => {
  return (
    <SectionComponent sectionsType="single">
      <QuoteWrapper>
        <p className="lead">
          Want to know how much it will cost to clean your home?
        </p>
        <span>
          <h2>
            Use Our Free
            <br />
            Quote Tool
          </h2>
          <Button href={PAGE_ROUTE.FREE_QUOTE}>Get A Quote</Button>
        </span>
        <span>
          <div>
            <CheckBoxIcon />
            <p>Get a Free Quote Fast</p>
          </div>
          <div>
            <CheckBoxIcon />
            <p>Save Time and Hassle</p>
          </div>
          <div>
            <CheckBoxIcon />
            <p>
              Receive your First Cleaning Sooner with Clari&apos;s Cleaning Crew
            </p>
          </div>
        </span>
      </QuoteWrapper>
    </SectionComponent>
  );
};

export default QuoteTool;
