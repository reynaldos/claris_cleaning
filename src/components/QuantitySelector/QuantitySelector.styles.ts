"use client";

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.white300};
  border-radius: 8px;
  padding: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 6px;
  cursor: pointer;
  transition: all 150ms ease;
  color: ${({ theme }) => theme.colors.grey800};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export const Quantity = styled.span`
  min-width: 32px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey900};
`;
