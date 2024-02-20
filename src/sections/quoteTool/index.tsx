import React from "react";

import { QuoteWrapper } from "./quoteTool.styles";

import SectionComponent from "@/components/Section";
import Button from "@/components/Buttons";
import CheckBoxIcon from "@/assets/icons/checkBox";
import Link from "next/link";
import { PAGE_ROUTE } from "@/constants/info";

const QuoteTool = () => {
  return (
    <SectionComponent sectionsType="single">
      <QuoteWrapper>
        <h3>Want to know how much it will cost to clean your home?</h3>
        <span>
          <h1>
            Use Our Free
            <br />
            Quote Tool
          </h1>
          <Link href={PAGE_ROUTE.FREE_QUOTE}>
            <Button> Get A Quote</Button>
          </Link>
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
