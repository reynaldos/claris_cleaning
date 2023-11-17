"use client";

import styled from "styled-components";
import { MaxWidthWrapper } from "../Container";

export const FooterConainer = styled.footer`
  width: 100%;
  height: 70px;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

`;

export const FooterWrap = styled(MaxWidthWrapper)`
    outline: red 1px solid;
    padding: .5rem 1rem;


`