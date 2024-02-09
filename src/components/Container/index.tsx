"use client";

import styled from "styled-components";

export const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};

  &.bodyWrap {
    padding-top: 130px;
    @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
      padding-top: 98px;
    }
  }
`;
