"use client";

import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 72px 32px;
  min-height: 100vh;
  background-color: #f5f5f5;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    padding: 42px 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    font-size: 2rem;
  }
`;

export const OrderCount = styled.span`
  font-size: 1.5rem;
  color: #666;
  margin-left: 16px;
  font-weight: 400;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    font-size: 1.2rem;
  }
`;

export const LogoutButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
    border-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;
