"use client";

import styled from "styled-components";
import { MaxWidthWrapper } from "../Container";


export const SectionContainer = styled.section<{ $backgroundColor?: string }>`
  width: 100%;
  display: flex;
  padding: 72px 32px;
  justify-content: center;
  align-items: center;
  gap: 48px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    padding: 42px 16px;
    gap: 32px;
  }
`;


export const SectionWrapper = styled(MaxWidthWrapper)<{
  $reverse: boolean;
  $maxImageWidth: string;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  gap: 36px;

  /* image */
  div:first-child {
    display: flex;
    justify-content: center;
    flex: 1;
    max-width: ${({ $maxImageWidth }) => $maxImageWidth};

    img {
      margin: auto;
      border-radius: 20px;
      height: fit-content;
      width: 100%;
      object-fit: contain;
    }
  }

  /* content */
  & > div:last-child {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 600px;

    h2 {
      color: #000;

      /* Title */
      font-size: 2.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.1;
    }

    p {
      color: #000;

      /* BodyText */
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.5; /* 150% */
      white-space: pre-wrap;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
    /* content */
    & > div:last-child {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    flex-direction: column;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;

  a button {
    font-size: 16px;
  }

  a:first-child button {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  a:first-child button:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  a:last-child button {
  }
`;


export const SoloSectionWrap = styled(MaxWidthWrapper)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 36px;

  h2 {
    color: #000;

    /* Title */
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
    gap: 32px;
    h2 {
      font-size: 2rem;
    }
  }
`;