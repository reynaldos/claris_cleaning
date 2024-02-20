"use client"

import styled from 'styled-components';


export const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  flex-direction: row;
  width: 555px;
  height: 320px;

  border-radius: 20px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};

  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3));
  -webkit-filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3));

  img {
    height: 100%;
    object-fit: cover;
    object-position: 45%;
    width: 280px;
    min-width: 280px;
  }

  .content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
    align-items: cen ter;
    padding: 24px;

    color: ${({ theme }) => theme.colors.black};

    /* title */
    h2 {
      align-self: flex-start;
      text-align: left;
      line-height: 1;
    }

    /* description */
    p {
      flex: 1;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 163.636% */
    }

    button {
      font-size: 16px;
      background-color: ${({ theme }) => theme.colors.primary};
      align-self: flex-start;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
    width: 445px;
    height: 300px;

    .content {
      padding: 24px 12px;
    }

    img {
      object-position: 45%;
      width: 220px;
      min-width: 220px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    flex-direction: column;
    width: 300px;
    height: 475px;

    img {
      width: 100%;
      object-position: 45%;
      height: 220px;
      min-height: 220px;
    }
  }

  @media screen and (max-width: 676px) {
    width: 100%;
    height: 475px;
  }
`;