"use client";

import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 300ms ease, box-shadow 300ms ease;
  cursor: pointer;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-color: ${({ theme }) => theme.colors.grey200};

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    height: 240px;
  }
`;

export const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const Name = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey900};
  margin: 0;
  line-height: 1.3;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    font-size: 18px;
  }
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: auto;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    font-size: 20px;
  }
`;
