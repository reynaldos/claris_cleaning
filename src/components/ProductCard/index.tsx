"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/shop';
import { useCart } from '@/context/CartContext';
import Button from '../Buttons';
import { CardContainer, ImageWrapper, Content, Price, Name } from './ProductCard.styles';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link href={`/shop/${product.id}`} style={{ textDecoration: 'none' }}>
      <CardContainer>
        <ImageWrapper>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
        <Content>
          <Name>{product.name}</Name>
          <Price>{formatPrice(product.price)}</Price>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </Content>
      </CardContainer>
    </Link>
  );
};

export default ProductCard;
