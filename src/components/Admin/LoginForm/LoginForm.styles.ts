"use client";

import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 48px 32px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
    padding: 32px 24px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 32px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: -12px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid ${({ $hasError }) => ($hasError ? 'red' : '#e0e0e0')};
  border-radius: 4px;
  background-color: ${({ $hasError }) => ($hasError ? '#FFE8E8' : 'white')};
  transition: border-color 150ms ease;

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => ($hasError ? 'red' : theme.colors.primary)};
  }

  &::placeholder {
    color: #999;
  }
`;

export const InputError = styled.span`
  font-size: 0.85rem;
  color: red;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
    border-color: ${({ theme }) => theme.colors.secondaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
    font-size: 16px;
  }
`;
