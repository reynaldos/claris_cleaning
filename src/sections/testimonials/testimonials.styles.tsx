"use client";

import styled from "styled-components";
import { MaxWidthWrapper } from "@/components/Container";

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  padding: 72px 32px;
  justify-content: center;
  align-items: center;
  gap: 48px;

  background: linear-gradient(
      0deg,
      rgba(2, 111, 157, 0.75) 0%,
      rgba(2, 111, 157, 0.75) 100%
    ),
    url("./assets/testimonialsBG.png"),
    lightgray -3px -257.775px / 100.124% 191.423% no-repeat;

  background-position: 0%;
  background-size: cover;
  position: relative;
`;

export const SectionWrapper = styled(MaxWidthWrapper)`
  width: 100%;


  &>span{
    display: flex;
    justify-content: center;
    gap: 36px;
  }
`;
