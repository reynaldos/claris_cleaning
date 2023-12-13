"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";

const QuoteBtn = () => {
  return (
    <StyledLink href="free-quote">
      <button>Get A Quote</button>
    </StyledLink>
  );
};

export default QuoteBtn;


const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.75rem 0.5rem;
  transition: background-color 100ms ease-in;
  max-width: 360px;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.bpts.lg}) {
    margin: 0.5rem auto 1rem auto;
  }

  button {
    color: ${({ theme }) => theme.colors.white};
    border-bottom: none !important;
  }

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.secondaryHover}`};
    button {
      color: ${({ theme }) => theme.colors.white} !important;
    }
  }
`;