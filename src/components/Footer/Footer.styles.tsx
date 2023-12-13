"use client";

import styled from "styled-components";
import { MaxWidthWrapper } from "../Container";

export const FooterConainer = styled.footer`
  width: 100%;
  display: grid;
  place-items: center;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;

  a,
  button {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  span {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 6px;
    width: 100%;
    gap: 6px;

    p,
    a {
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    padding-bottom: 175px;

    span {
      gap: 2px;
      bottom: 115px;
    }
  }
`;

export const FooterWrap = styled(MaxWidthWrapper)`
  padding: 2.5rem 1rem;
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  section {
    flex: 1;
    margin: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 8px;

    a {
      svg {
        width: 30px;
      }
      display: flex;
      align-items: center;
      gap: 4px;
    }

    button {
      all: unset;
      width: fit-content;
    }

    .survey {
      background-color: ${({ theme }) => theme.colors.secondary};
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }

    /* &:first-child {
      img{
        filter: brightness(0) invert(1);
      }
      div {
        display: flex;
        gap: 6px;
      }
    } */
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
    flex: 1 2 50%;
    section {

      &:last-child {
        align-items: center;
        p {
          width: 350px;
          text-align: center;
        }
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    flex-direction: column;

    section {
      width: calc(100% - 1.5rem);
      margin: 0.5rem 0;
    }
  }
`;