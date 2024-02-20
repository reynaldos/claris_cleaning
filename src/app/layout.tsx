import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import ClientProviders from '@/state/providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BodyWrap } from './layout.styles'


const openSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clari's Cleaning Crew",
  description:
    "Cleaning Services: Contact Clari's Cleaning Company for the best in residential, commercial, and construction cleaning services.",
  icons: [
    {
      sizes: "180x180",
      url: "./logo/ccc_logo_180x180.png",
      type: "image/png",
    },
    { sizes: "32x32", url: "./logo/ccc_logo_180x180.png", type: "image/png" },
    { sizes: "16x16", url: "./logo/ccc_logo_180x180.png", type: "image/png" },
  ],
  openGraph: {
    title: "Clari's Cleaning Crew",
    images: "./assets/share.png",
    description:
      "Cleaning Services: Contact Clari's Cleaning Company for the best in residential, commercial, and construction cleaning services.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
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

          <BodyWrap className='bodyWrap'>
             {children}
          </BodyWrap>
          
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