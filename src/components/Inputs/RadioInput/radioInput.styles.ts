"use client"


import styled from "styled-components"

export const RadioWrap = styled.label`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 4px;
  height: fit-content;
  font-size: 18px;
  font-weight: 600;

  cursor: pointer;

  /* real radio stays in the tab order, icon shows its state */
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  [data-contrast] & input:focus-visible + svg {
    outline: 3px solid #026f9d;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px #ffffff;
    border-radius: 100%;
  }
`;
