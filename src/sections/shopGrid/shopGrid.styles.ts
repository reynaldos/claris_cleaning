"use client";

import styled from 'styled-components';

export const GridContainer = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 72px 32px;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    padding: 42px 16px;
  }
`;

export const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey900};
  margin: 0 0 48px 0;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    font-size: 2rem;
    margin-bottom: 32px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
