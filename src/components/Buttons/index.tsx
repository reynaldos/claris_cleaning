"use client";

import React  from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  hoverColor?: string | undefined;
}

const Button = ({ hoverColor, children, ...props }: ButtonProps) => {
  return (
    <StyledBtn hoverColor={hoverColor} {...props}>
      {children}
    </StyledBtn>
  );
};

export default Button;

const StyledBtn = styled.button<{ hoverColor: string | undefined }>`
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
  line-height: normal;
  letter-spacing: 0.12px;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${({ hoverColor, theme }) =>
      hoverColor ?? theme.colors.secondaryHover};
  }
`;
