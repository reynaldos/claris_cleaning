"use client"

import styled from 'styled-components';



export const FormWrap = styled.form`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 864px;
  border-radius: 20px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  position: relative;

  &>span {
    display: flex;
    gap: 16px;

    .title {
      color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
      flex-wrap: wrap;
    }
  }
`;