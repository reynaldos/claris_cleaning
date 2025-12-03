import HeroSection from '@/components/HeroSection';
import ShopGrid from '@/sections/shopGrid';
import { PAGE_ROUTE } from '@/constants/info';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shop Cleaning Supplies | Clari's Cleaning Crew",
  description: "Shop professional cleaning supplies and equipment used by Clari's Cleaning Crew. Eco-friendly products for your home.",
};

export default function ShopPage() {
  return (
    <>
      <HeroSection
        backgroundImage="shop"
        title="Shop Cleaning Supplies"
        primaryButton={{
          linkType: "internal",
          label: "Book Cleaning Today",
          href: PAGE_ROUTE.FREE_QUOTE,
        }}
        secondaryButton={{
          linkType: "internal",
          label: "Contact Us",
          href: PAGE_ROUTE.CONTACT,
        }}
      />
      <ShopGrid />
    </>
  );
}
