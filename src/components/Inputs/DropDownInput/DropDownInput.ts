"use client"

import styled from 'styled-components';


export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.black};

  select {
    appearance: none;
    -webkit-appearance: none;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryHover};
    padding: 0 48px 0 20px;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    background-color: transparent;
    border: none;
    cursor: pointer;
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
    padding: 20px;
    opacity: 0.65;
    color: ${({ theme }) => theme.colors.primaryHover};
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .arrow {
    margin: 0 12px;
    position: absolute;
    right: 0;
    top: 50%;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-50%);
    opacity: 0.65;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &:hover,
  [data-contrast] & {
    .arrow,
    label {
      opacity: 1;
    }
  }
`;
