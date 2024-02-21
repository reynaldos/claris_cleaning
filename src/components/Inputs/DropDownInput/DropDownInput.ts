"use client"

import styled from 'styled-components';


export const InputContainer = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: ${({ $isOpen }) => ($isOpen ? "12px 12px 0 0" : "12px")};
  color: ${({ theme }) => theme.colors.black};
  border: none;

  cursor: pointer;

  transition: all
    ${({ $isOpen }) => ($isOpen ? "50ms ease-in-out" : "150ms ease-in")};

  .input {
    position: relative;
    bottom: 0;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryHover};

    line-height: 1;
    padding: 20px;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    background-color: transparent;
    border: none;
    z-index: 1;

    display: flex;
    align-items: center;
  }

  label {
    all: unset;
    width: max-content;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: -4px;
    font-size: 18px;
    line-height: 1;
    z-index: 2;
    opacity: 0.65;
    padding: 20px;
    color: ${({ theme }) => theme.colors.primaryHover};
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .arrow {
    margin: 0 12px;
    position: absolute;
    right: 0;
    top: 50%;
    color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-50%)
      ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transform-origin: center center;
    transition: all 300ms ease-in-out;
    opacity: 0.65;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    .arrow,
    label {
      opacity: 1;
    }
  }
`;


export const OptionsList = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% - 2px);
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  width: calc(100%);
  z-index: 3;

  background-color: ${({ theme }) => `${theme.colors.grey200}`};
  display: flex;
  /* display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")}; */
  height: ${({ $isOpen }) => ($isOpen ? "500%" : "0px")};
  padding: ${({ $isOpen }) => ($isOpen ? "12px 0" : "0px")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};

  overflow-y: auto;
  flex-direction: column;

  transition: all 150ms ease-in-out;

  filter: drop-shadow(0px 6px 8px rgba (0, 0, 0, 0.35));
  -webkit-filter: drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.35));

  button {
    height: 100%;
    text-align: left;
    padding: 8px 20px;
    border: none;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    background-color: ${({ theme }) => `${theme.colors.grey200}`};

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }

    &.active {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;