"use client";

import styled from 'styled-components';

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 300ms ease;
`;

export const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  max-width: 450px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 300ms ease;

  @media screen and (max-width: ${({ theme }) => theme.bpts.sm}) {
    max-width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grey900};
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: ${({ theme }) => theme.colors.grey700};
  transition: color 150ms ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.grey900};
  }
`;

export const ItemsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Footer = styled.div`
  padding: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};
  display: flex;
  flex-direction: column;
  gap: 16px;

  .shipping-note {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grey600};
    margin: 0;
    text-align: center;
  }

  .clear-cart {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.grey600};
    font-size: 14px;
    cursor: pointer;
    padding: 8px;
    transition: color 150ms ease;

    &:hover {
      color: ${({ theme }) => theme.colors.grey900};
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 24px;

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.grey600};
    margin: 0;
  }
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey900};

  span:last-child {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
