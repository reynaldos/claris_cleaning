import React from 'react';
import { PRODUCTS } from '@/constants/products';
import ProductCard from '@/components/ProductCard';
import { GridContainer, ProductGrid, Title } from './shopGrid.styles';

const ShopGrid = () => {
  return (
    <GridContainer id="products">
      <Title>Our Products</Title>
      <ProductGrid>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </GridContainer>
  );
};

export default ShopGrid;
