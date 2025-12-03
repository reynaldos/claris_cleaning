"use client";

import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import styled from 'styled-components';
import { useCart } from '@/context/CartContext';

const CartIcon = () => {
  const { cartCount, toggleCart } = useCart();

  // Only show cart icon when there are items
  if (cartCount === 0) {
    return null;
  }

  return (
    <CartButton onClick={toggleCart} aria-label="Open cart">
      <FiShoppingCart size={24} />
      <Badge>{cartCount > 99 ? '99+' : cartCount}</Badge>
    </CartButton>
  );
};

export default CartIcon;

const CartButton = styled.button`
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media screen and (max-width: 820px) {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: 11px;
  font-weight: 700;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;
