"use client";

import styled from "styled-components";


export const ServiceWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 12px;
`;

export const ServiceButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.grey300};
  border-radius: 20px;
  border: none;
  cursor: pointer;

  outline: 1px solid red;

  svg {
    width: 40px;
    height: 40px;
  }

  p {
    margin-top: 12px;
    text-align: center;
    font-size: 20px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 1 !important;
  }
`;