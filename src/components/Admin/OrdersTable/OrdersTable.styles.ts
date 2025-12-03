"use client";

import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    overflow-x: visible;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    display: block;

    thead {
      display: none;
    }

    tbody {
      display: block;
    }
  }
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

export const HeaderRow = styled.tr``;

export const HeaderCell = styled.th`
  padding: 16px;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TableBody = styled.tbody``;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 32px;
  font-size: 1.125rem;
  color: #666;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 32px;
  text-align: center;

  p {
    font-size: 1.125rem;
    color: #666;
    margin-bottom: 16px;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 32px;
  text-align: center;

  p {
    font-size: 1.125rem;
    color: red;
    margin-bottom: 16px;
  }
`;
