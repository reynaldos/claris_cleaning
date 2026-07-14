import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ClientProviders from "@/state/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BodyWrap } from "./layout.styles";
import { GOOGLE_ANALYTICS, SITE_URL } from "@/constants/info";

import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  weight: ['400', '700'],
  style: ['normal',],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Clari's Cleaning Crew | Professional Cleaning Services",
  description:
    "Cleaning Services: Contact Clari's Cleaning Company for the best in residential, commercial, and construction cleaning services.",
  // OG
  openGraph: {
    title: "Clari's Cleaning Crew | Professional Cleaning Services",
    description:
      "Contact Clari's Cleaning Company for the best in residential, commercial, and construction cleaning services",
    url: SITE_URL,
    images: [
      {
        url: "https://www.clariscleaning.com/_next/static/media/share.0785a405.webp",
        width: 1200,
        height: 629,
        alt: "Clari's Cleaning Crew",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // TWITTER
  twitter: {
    title: "Clari's Cleaning Crew | Professional Cleaning Services",
    description:
      "Contact Clari's Cleaning Company for the best in residential, commercial, and construction cleaning services",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/documents/13d4dd49-5a39-48c8-8643-fb9009f5cd3a.webp?token=VZ8-8cNLhjeAghJTNjRiX8RNC9sQ10AAWs8AHpKLwb4&height=629&width=1200&expires=33244471791",
        width: 1200,
        height: 629,
        alt: "Clari's Cleaning Crew",
      },
    ],
    card: "summary_large_image",
    site: SITE_URL,
  },
  // ICONS are generated automatically by Next.js from the file conventions
  // in src/app: favicon.ico (real multi-size ICO), icon.png, apple-icon.png.
  appleWebApp: {
    title: "ClarisCleaningCrew",
    statusBarStyle: "black-translucent",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <Navbar />

          <BodyWrap className="bodyWrap">{children}</BodyWrap>

          <Footer />
        </ClientProviders>
      </body>

      <GoogleAnalytics gaId={GOOGLE_ANALYTICS} />
    </html>
  );
}
