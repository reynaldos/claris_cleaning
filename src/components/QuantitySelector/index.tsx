"use client";

import React from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { Container, Button, Quantity } from './QuantitySelector.styles';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
}) => {
  return (
    <Container>
      <Button
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <HiMinus size={16} />
      </Button>
      <Quantity>{quantity}</Quantity>
      <Button
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <HiPlus size={16} />
      </Button>
    </Container>
  );
};

export default QuantitySelector;
