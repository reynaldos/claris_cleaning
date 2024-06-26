"use client";

import bannerImages from "@/constants/bannerImages";
import styled from "styled-components";

export const BannerSection = styled.section<{ $banner: string }>`
  height: calc(100vh - 125px);
  min-height: 400px;
  max-height: 675px;

  display: flex;

  background: linear-gradient(
      90deg,
      rgba(2, 111, 157, 0.95) 30%,
      rgba(2, 111, 157, 0) 50%
    ),
    linear-gradient(
      0deg,
      rgba(2, 111, 157, 0.15) 0%,
      rgba(2, 111, 157, 0.15) 100%
    ),
    url(${({ $banner }) => `${bannerImages[$banner]}`});

  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    height: 436px;
    background-position: right;
    background: linear-gradient(
        0deg,
        rgba(2, 111, 157, 0.75) 0%,
        rgba(2, 111, 157, 0.75) 100%
      ),
      url(${({ $banner }) => `${bannerImages[$banner]}`});
    background-position: 40% 20%;
  }
`;

export const ContentWrap = styled.div`
  color: white;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
  -webkit-filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));

  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  margin: 0 auto;

  h1 {
    font-size: 72px;
    font-style: normal;
    font-weight: 800;
    line-height: 1;
  }

  span {
    width: 100%;
    display: flex;
    gap: 12px;

    @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
      font-size: 12px;
      align-items: center;
      gap: 8px;
    }

    @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
      justify-content: center;
    }

    @media screen and (max-width: 350px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  span div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  button {
    font-size: 1.25rem;
    padding: 18px;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    h1 {
      font-size: 54px;
      font-style: normal;
      font-weight: 800;
      line-height: 1;
    }

    button {
      font-size: 1.1rem;
      padding: 16px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
    align-items: center;

    h1 {
      text-align: center;
      font-size: 48px;
    }

    span {
      /* justify-content: space-between; */
    }
  }
`;
