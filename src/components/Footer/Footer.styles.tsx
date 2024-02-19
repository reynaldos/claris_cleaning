"use client";

import styled from "styled-components";
import { MaxWidthWrapper } from "../Container";

export const FooterConainer = styled.footer`
  width: 100%;
  display: grid;
  place-items: center;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;

  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url("/assets/footerTile.png");
  background-repeat: repeat;
  background-size: 45px 45px;
  z-index: 1;
  background: url("/assets/footerTile.png"), lightgray 0% 0% / 45px 45px repeat,
    ${({ theme }) => theme.colors.primary};

  span {
    position: relative;
    z-index: 2;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 80%;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.secondary};
    filter: brightness(85%);
    -webkit-filter: brightness(85%);
    cursor: pointer;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
    padding-bottom: 7rem;
  }
`;

export const FooterWrap = styled.div`
  position: relative;
  z-index: 5;
  padding-top: 3rem;
  padding-bottom: 1rem;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 36px;

  .infoStrip {
    width: 100%;
    border-top: 4px solid ${({ theme }) => theme.colors.white};
    border-bottom: 4px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;

    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.9px;
    a {
      padding: 16px 0;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
      font-size: 16px;
      font-weight: 600;

      flex-direction: column;
      gap: 12px;
      padding: 12px 0;

      a {
        padding: 0;
      }
    }
  }

  /* logo */
  .logo-socials {
    display: flex;
    align-items: center;
    gap: 12px;

    div:first-child {
      display: flex;
      align-items: center;
      width: 300px;
      border-radius: 20px;
      padding: 0 12px;
      background-color: ${({ theme }) => theme.colors.white};

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 12px;
    }

    @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
      div:first-child {
        width: 175px;
        padding: 12px;
        height: min-content;

        img {
          height: min-content;
        }
      }

      div:last-child {
        gap: 6px;
        svg {
          width: 30px;
        }
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
      div:last-child {
        gap: 0px;
      }
    }
  }

  /* nav routes */
  .routes {
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div:first-child {
      padding: 0 32px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    div:first-child a,
    div:last-child button {
      font-size: 20px;
      font-weight: 700;
    }

    div:first-child a:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }

    div:last-child {
      width: 100%;
      display: flex;
      gap: 16px;
    }

    @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
      div:first-child a,
      div:last-child button {
        font-size: 16px;
        font-weight: 600;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
      flex-direction: row;
      margin-bottom: 16px;

      div:first-child {
        gap: 12px;
      }

      div:first-child,
      div:last-child {
        flex-direction: column;
      }

      div:last-child button {
        width: 174px;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    gap: 12px;
  }
`;
