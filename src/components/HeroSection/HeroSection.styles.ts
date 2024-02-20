"use client"

import bannerImages from "@/constants/bannerImages";
import styled from "styled-components";

export const HeroContainer = styled.header<{ $banner: string }>`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  background: linear-gradient(
      0deg,
      rgba(2, 111, 157, 0.8) 0%,
      rgba(2, 111, 157, 0.8) 100%
    ),
    url(${({ $banner }) => `${bannerImages[$banner]}`});

  background-size: cover;
  background-position: 50% 65%;
  background-repeat: no-repeat;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    height: 300px;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    background-size: 200%;
  }
`;


export const HeroWrapper = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
  -webkit-filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));

  /* title */
  h1 {
    color: #fff;
    text-align: center;
    font-size: 62px;
    font-style: normal;
    font-weight: 800;
    line-height: 1;
    white-space: pre-wrap;
  }

  /* button wrap */
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    a:last-child button {
      border: 2px solid ${({ theme }) => theme.colors.white};
      background-color: transparent;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    h1 {
      font-size: 48px;
    }

    span {
      flex-direction: column;

      a, button  {
        width: 100%;
      }
    }
  }

   @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {

    h1{
      font-size: 32px;
    }
   }

    
`;
