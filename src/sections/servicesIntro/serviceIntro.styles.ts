"use client"

import styled from 'styled-components';


export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    gap: 12px;
  }

  @media screen and (max-width: 676px) {
    gap: 24px;
  }
`;