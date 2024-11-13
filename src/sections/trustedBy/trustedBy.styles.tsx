"use client";

import styled from "styled-components";
import { MaxWidthWrapper } from "@/components/Container";

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  gap: 48px;

  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    padding: 32px 16px;

  }
`;

export const SectionWrapper = styled(MaxWidthWrapper)`
  width: 100%;
  height: 275px;
  background-color: transparent;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;

  > img {
    object-fit: contain;
  }

  > h2 {
    width: 100%;
    color: #000;

    /* Title */
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.1;
    white-space: pre-wrap;
    text-align: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
    /* content */
    > h2 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    /* content */
    > h2 {
      width: 370px;
      font-size: 1.5rem;

    }
  }
`;
