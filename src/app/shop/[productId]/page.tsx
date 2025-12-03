import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/constants/products';
import ProductDetail from '@/sections/productDetail';
import { Metadata } from 'next';

interface Props {
  params: { productId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.id === params.productId);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} | Clari's Cleaning Crew Shop`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    productId: product.id,
  }));
}

export default function ProductPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.id === params.productId);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
