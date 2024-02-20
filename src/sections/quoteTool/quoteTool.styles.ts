"use client"

import styled from 'styled-components';

export const QuoteWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  padding: 24px;
  filter: drop-shadow(0px 4px 20px #00000053);
  -ms-filter: drop-shadow(0px 4px 20px #00000053);
  -webkit-filter: drop-shadow(0px 4px 20px #00000053);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  color: ${({ theme }) => theme.colors.grey900};

  h3 {
    font-weight: 400;
    text-align: center;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h1 {
      font-size: 52px;
      line-height: 1;
      font-weight: 500;
      text-align: center;
    }

    div {
      display: flex;
      align-items: center;

      gap: 4px;

      svg {
        min-width: 35px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    h3 {
      font-size: 16px;
    }

    span h1 {
      font-size: 32px;
    }

    span:last-child {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    span {
      flex-wrap: wrap;
    }
  }
`;