"use client";

import styled from "styled-components";

export const TopNavContainer = styled.nav`
  position: fixed;
  z-index: 25;
  background: ${({ theme }) => theme.colors.white};
  width: 100vw;
  box-shadow: 0px 0px 4cap 0px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;

  .bar {
    font-size: 0.85rem;
    width: 100%;
    padding: 0.5rem 0rem;
    background-color: ${({ theme }) => theme.colors.primary};

    /* @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
      display: none;
    } */

    a {
      align-self: flex-end;
      margin: 0 0.75rem;
      width: fit-content;
      height: 20px;
      display: flex;
      align-items: center;
      gap: 4px;
      color: white;

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    .review-btn {
      border-radius: 0;
      height: 100%;
      padding: 18px;
      margin-left: 0px;
      font-size: 0.85rem !important;
      text-transform: uppercase;
      letter-spacing: .1ch;

      @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
        position: relative;
       left: -12px;
      }
    }

    a:has(.review-btn){
      margin-right: auto;

      @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
        position: relative;
       right: -12px;
       margin-right: unset;
      }
    }

    a:nth-child(2){
      @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
        display: none;
      }
    }

     a:nth-child(3){
      @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
        display: none;
      }
    }
  }

  section {
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    width: 100%;
    max-width: ${({ theme }) => theme.maxWidth};
  }
`;

export const LinkWrapper = styled.div<{ $mobileNavOpen: boolean }>`
  display: flex;

  .hamburger {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (min-width: ${({ theme }) => theme.bpts.md}) {
      display: none;
    }
  }

  .link {
    all: unset;
    font-size: 1rem;
    font-weight: 600;

    margin: 0 0.5rem;
    padding: 0.5rem 0.5rem;
    /* text-transform: uppercase; */
    border-bottom: 2px solid transparent;

    transition: border 100ms ease-in, color 100ms ease-in;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary};
      border-bottom: ${({ theme }) => `2px solid ${theme.colors.primary}`};
    }

    &[data-isactive="true"] {
      color: ${({ theme }) => theme.colors.primary};
      border-bottom: ${({ theme }) => `2px solid ${theme.colors.primary}`};
    }
  }

  /* desktop nav */
  .linkList {
    right: 0;
    display: flex;
    align-items: center;
    height: 76px;
    top: -36px;

    @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
      display: none;
    }
  }

  /* mobile nav */
  .hamList {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    transition: height 300ms ease-in-out, opacity 200ms ease-in-out;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: calc(36px + 76px);
    width: 100vw;
    right: 0;
    z-index: 24px;
    overflow-y: hidden;

    margin: 0;
    padding: 0;

    opacity: ${({ $mobileNavOpen }) => ($mobileNavOpen ? "1" : "0")};
    height: ${({ $mobileNavOpen }) =>
      $mobileNavOpen ? "calc(100svh - 36px - 76px)" : "0px"};

    a {
      all: unset;
      flex: 1;
      height: 100%;
      padding: 0px;
      margin: 0;

      &:first-child .link {
        border-top: 2px grey solid;
      }
    }
    .link {
      box-sizing: border-box;

      flex: 1;
      font-size: 2rem;

      width: 100%;
      height: 100%;
      text-align: center;
      border-bottom: 2px grey solid;
      padding: 0px;
      margin: 0;

      &[data-isactive="true"] {
        color: ${({ theme }) => `${theme.colors.primary}`};
        border-bottom: 2px grey solid;
      }

      &:hover {
        color: ${({ theme }) => `${theme.colors.white}`};
        border-bottom: 2px grey solid;
        background-color: ${({ theme }) => `${theme.colors.primary}`};
      }
    }

    .btnWrap {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        width: fit-content;
        height: fit-content;
      }
      button {
        margin: 24px auto;
        font-size: 24px;
        padding: 16px 24px;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
      top: calc(76px + 36px);
      height: ${({ $mobileNavOpen }) =>
        $mobileNavOpen ? "calc(100svh - 76px - 36px)" : "0px"};
    }

    @media screen and (min-width: ${({ theme }) => theme.bpts.md}) {
      display: none;
    }
  }
`;

export const BottomNavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 5;
  width: 100vw;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: bottom 300ms ease-in;

  filter: drop-shadow(2px 2px 5px #000000);

  button {
    background-color: transparent;
    height: 40px;
    width: 40px;
    border: none;
    margin: 1rem;

    a {
      height: 100%;
      width: 100%;
      display: grid;
      place-content: center;
    }

    color: white;
    cursor: pointer;

    &:nth-child(2) {
      position: absolute;
      top: 0%;
      left: 50%;
      height: 95px;
      width: 95px;
      border-radius: 100%;
      margin: 0;
      transform: translate(-50%, -35%);
      background-color: white;
      border: ${({ theme }) => `4px solid ${theme.colors.primary}`};
      color: ${({ theme }) => theme.colors.primary};
      transition: filter 150ms ease-in;

      filter: drop-shadow(0px 1px 2px #0000006c);
      &:hover {
        filter: drop-shadow(0px 3px 4px #0000006c);
      }
    }

    &:nth-child(1),
    &:nth-child(3) {
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.bpts.xs}) {
    bottom: -125px;
  }
`;
