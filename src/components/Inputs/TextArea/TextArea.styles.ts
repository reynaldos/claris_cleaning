"use client"

import styled from 'styled-components';


export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  textarea {
    position: relative;
    bottom: 0;
    font-size: 18px;
    line-height: 1;
    padding: 20px;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background-color: transparent;
    border: none;
    resize: none;
    font-family: unset;

    &:focus {
      outline: none;
    }
  }

  label {
    all: unset;
    width: max-content;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 4px;
    font-size: 18px;
    line-height: 1;
    z-index: 2;
    opacity: 0.8;
    padding: 20px;

    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
`;

export const ErrorMessage = styled.p`
  padding-top: 4px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 1;

  svg {
    color: white;
    background-color: red;
    border-radius: 100%;
    padding: 2px;
    height: 18px;
    width: 18px;
  }
`;