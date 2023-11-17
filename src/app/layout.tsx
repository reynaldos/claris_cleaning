import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'

import ClientProviders from '@/state/providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clari's Cleaning Crew",
  description:
    "Janitorial Services: Contact Clari's Cleaning Company for the best in janitorial services, commercial cleaning services and waste disposal.",
};

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
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
