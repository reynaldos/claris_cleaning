"use client";

import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 72px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    padding: 42px 16px;
    gap: 24px;
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 0;
  transition: color 150ms ease;
  text-align: left;
  align-self: flex-start;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grey200};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    height: 400px;
  }
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Category = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey600};
  letter-spacing: 1px;
`;

export const ProductName = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey900};
  margin: 0;
  line-height: 1.2;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    font-size: 2rem;
  }
`;

export const Price = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.grey700};
  margin: 0;
`;

export const Stock = styled.div<{ $inStock: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ $inStock, theme }) =>
    $inStock ? theme.colors.secondary : theme.colors.grey600};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;

  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;
