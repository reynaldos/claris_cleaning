"use client"

import styled from "styled-components"

export const BodyWrap = styled.div`
  margin: 0 auto;
  width: 100%;

  padding-top: 125px;
  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    padding-top: 85px;
  }
`;