"use client";

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { CartItem as CartItemType } from '@/types/shop';
import { useCart } from '@/context/CartContext';
import QuantitySelector from '../QuantitySelector';
import { RxCross1 } from 'react-icons/rx';

interface CartItemProps {
  item: CartItemType;
}

const CartItemRow: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={item.image}
          alt={item.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageWrapper>

      <Details>
        <NameRow>
          <Name>{item.name}</Name>
          <RemoveButton
            onClick={() => removeFromCart(item.id)}
            aria-label="Remove item"
          >
            <RxCross1 size={16} />
          </RemoveButton>
        </NameRow>

        <Price>{formatPrice(item.price)}</Price>

        <BottomRow>
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
          />
          <Subtotal>{formatPrice(item.price * item.quantity)}</Subtotal>
        </BottomRow>
      </Details>
    </Container>
  );
};

export default CartItemRow;

const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 12px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grey200};
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NameRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Name = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey900};
  margin: 0;
  line-height: 1.3;
`;

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${({ theme }) => theme.colors.grey600};
  transition: color 150ms ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.grey900};
  }
`;

const Price = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey600};
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Subtotal = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;
