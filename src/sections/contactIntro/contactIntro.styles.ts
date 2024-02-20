"use client";

import styled from "styled-components";

export const ContactStrip = styled.span`
  width: 100%;
  max-width: 767px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
    justify-content: flex-start;
  }

  & > div {
    display: flex;
    gap: 8px;

    .svgWrap {
      height: 40px;
      width: 40px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};
    }

    & > span {
      display: flex;
      flex-direction: column;
      gap: 2px;

      label {
        color: rgba(0, 0, 0, 0.65);
        font-size: 18px;
        font-style: normal;
        font-weight: 800;
        line-height: 1;
      }

      a {
        color: ${({ theme }) => theme.colors.black} !important;
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
      }
    }
  }
`;
