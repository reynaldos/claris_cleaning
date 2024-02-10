import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'

import ClientProviders from '@/state/providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MaxWidthWrapper } from '@/components/Container'

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clari's Cleaning Crew",
  description:
    "Janitorial Services: Contact Clari's Cleaning Company for the best in janitorial services, commercial cleaning services and waste disposal.",
    icons:[]
};

<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ClientProviders>
          <Navbar />

          <MaxWidthWrapper className='bodyWrap'>
             {children}
          </MaxWidthWrapper>
          
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}


// Keller Williams Realty Lakeland

// FHS/Mazzella 

// SouthState Bank Bartow

// Henry Company

// Firestone Lakeland

// Better Earth 

// Children and Teen Dental, Lakeland and Winter Haven

// https://www.melaleuca.com/productstore/cleaning-and-laundry