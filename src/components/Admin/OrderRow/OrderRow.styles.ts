"use client";

import styled from 'styled-components';

export const Row = styled.tr`
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 150ms ease;

  &:hover {
    background-color: #f5f5f5;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin-bottom: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;

    &:hover {
      background-color: white;
    }
  }
`;

export const Cell = styled.td`
  padding: 16px;
  vertical-align: middle;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before {
      content: attr(data-label);
      font-weight: 600;
      margin-right: 16px;
    }
  }
`;

export const OrderId = styled.div`
  font-family: monospace;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .name {
    font-weight: 600;
  }

  .email {
    font-size: 0.875rem;
    color: #666;
  }
`;

export const ItemsList = styled.div`
  font-size: 0.875rem;
  max-width: 250px;

  .item {
    margin-bottom: 4px;
  }
`;

export const Total = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

export const Date = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

export const ActionButton = styled.button`
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    border-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
