"use client"


import styled from "styled-components"

export const RadioWrap = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 4px;
  height: fit-content;

  cursor: pointer;

  label {
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }
`;