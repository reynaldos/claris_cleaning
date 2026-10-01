"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hoverColor?: string | undefined;
  href?: string;
  target?: string;
}

// With href it renders a real link styled as a button (no button-inside-anchor nesting)
const Button = ({ hoverColor, children, disabled, href, target, ...props }: ButtonProps) => {
  if (href) {
    return (
      <StyledBtn
        as={Link}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        hoverColor={hoverColor}
        disabled={disabled}
        {...(props as object)}
      >
        {children}
      </StyledBtn>
    );
  }

  return (
    <StyledBtn hoverColor={hoverColor} disabled={disabled} {...props}>
      {children}
    </StyledBtn>
  );
};

export default Button;

const StyledBtn = styled.button<{
  hoverColor: string | undefined;
  disabled: boolean | undefined;
}>`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.12px;
  transition: all 300ms ease-in-out;

  ${({ disabled, theme }) =>
    disabled
      ? `
      pointer-events: none;
      background-color: ${theme.colors.grey400};
      color: ${theme.colors.grey900};

  `
      : ""};

  &:hover {
    background-color: ${({ hoverColor, theme }) =>
      hoverColor ?? theme.colors.secondaryHover};
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    font-size: 16px;
    padding: 12px 16px;
  }
`;
