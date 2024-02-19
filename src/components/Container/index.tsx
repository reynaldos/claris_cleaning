"use client";

import styled from "styled-components";

export const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;
