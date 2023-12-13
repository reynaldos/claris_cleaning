"use client";

import styled from "styled-components";

export const TopNavContainer = styled.nav`
  position: fixed;
  background: ${({ theme }) => theme.colors.white};
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  .bar {
    font-size: 0.85rem;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
      display: none;
    }

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

export const LinkWrapper = styled.div`
  display: flex;
  /* position: relative; */

  .hamburger {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (min-width: ${({ theme }) => theme.bpts.lg}) {
      display: none;
    }
  }

  .linkList,
  .hamList {
    button {
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
    }
    button[data-isactive="true"] {
      color: ${({ theme }) => theme.colors.primary};
      border-bottom: ${({ theme }) => `2px solid ${theme.colors.primary}`};
    }
  }

  .linkList {
    @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
      display: none;
    }
  }

  .hamList {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;

    top: calc(36px + 76px);
    width: 100%;
    right: 0;
    padding: 0;

    button {
      width: 100%;
      text-align: center;
      border-bottom: 2px grey solid;
      margin: 0;
    }

    @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
      top: calc(76px);
    }

    /* animation: open 200ms ease-in 0ms;
    animation-fill-mode: forwards;

    overflow: hidden;

    @keyframes open {
      0% {
        height: 0;
      }
      100% {
        height: 200px;
      }
    } */
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

  @media screen and (min-width: ${({ theme }) => theme.bpts.sm}) {
    bottom: -125px;
  }
`;
