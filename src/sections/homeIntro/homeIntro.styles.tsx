"use client";

import styled from "styled-components";


export const ServiceWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  margin: 12px auto;

  @media screen and (max-width: 1150px) {
    width: 390px;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    width: 100%;
  }

  @media screen and (max-width: 630px) {
    width: 390px;
  }
`;

export const ServiceButton = styled.button`
  width: 125px;
  height: 125px;
  background-color: ${({ theme }) => theme.colors.grey300};
  border-radius: 20px;
  border: none;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  p {
    margin-top: 12px;
    text-align: center;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 1 !important;
  }
`;