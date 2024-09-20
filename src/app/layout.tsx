import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ClientProviders from "@/state/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BodyWrap } from "./layout.styles";
import { GOOGLE_ANALYTICS, SITE_URL } from "@/constants/info";
import LogRocket from 'logrocket';

LogRocket.init('yeuyxw/claris-cleaning');

import { GoogleAnalytics } from "@next/third-parties/google";

const openSans = Inter({ subsets: ["latin"] });

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
  // ICONS
  icons: {
    icon: "",
    shortcut: ["/logo/ccc_logo_180x180.webp"],
    apple: [
      { url: "/logo/ccc_logo_32x32.webp" },
      {
        url: "/logo/ccc_logo_180x180.webp",
        sizes: "180x180",
        type: "image/webp",
      },
    ],
    other: {
      rel: "/logo/ccc_logo_16x16.webp",
      url: "/logo/ccc_logo_16x16.webp",
    },
  },
  appleWebApp: {
    title: "ClarisCleaningCrew",
    statusBarStyle: "black-translucent",
  },
};

<link rel="icon" href="/favicon.ico" sizes="any" />;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
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
