"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/shop';
import { useCart } from '@/context/CartContext';
import Button from '@/components/Buttons';
import QuantitySelector from '@/components/QuantitySelector';
import {
  Container,
  ContentGrid,
  ImageSection,
  DetailsSection,
  ProductName,
  Price,
  Description,
  Category,
  Stock,
  Actions,
  BackButton,
} from './productDetail.styles';
import { PAGE_ROUTE } from '@/constants/info';
import Link from 'next/link';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Container>
      <Link href={PAGE_ROUTE.SHOP}>
        <BackButton>← Back to Shop</BackButton>
      </Link>

      <ContentGrid>
        <ImageSection>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </ImageSection>

        <DetailsSection>
          <Category>{product.category.toUpperCase()}</Category>
          <ProductName>{product.name}</ProductName>
          <Price>{formatPrice(product.price)}</Price>
          <Description>{product.description}</Description>

          <Stock $inStock={product.inStock}>
            {product.inStock ? '✓ In Stock' : 'Out of Stock'}
          </Stock>

          {product.inStock && (
            <Actions>
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity(q => q + 1)}
                onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
              />
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </Actions>
          )}
        </DetailsSection>
      </ContentGrid>
    </Container>
  );
};

export default ProductDetail;
