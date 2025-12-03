"use client";

import styled from 'styled-components';
import { OrderStatus } from '@/types/admin';

export const Badge = styled.span<{ $status: OrderStatus }>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: capitalize;

  background-color: ${({ $status, theme }) =>
    $status === 'pending' ? '#FBB032' : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;
