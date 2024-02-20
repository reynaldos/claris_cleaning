import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ClientProviders from "@/state/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BodyWrap } from "./layout.styles";

const openSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clari's Cleaning Crew",
  description:
    "Cleaning Services: Contact Clari's Cleaning Company for the best in residential, commercial, and construction cleaning services.",
};

<link rel="icon" href="/favicon.ico" sizes="any" />;
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no"
/>;

<meta name="theme-color" content="#000000" />;

	// <!-- HTML Meta Tags -->
<title>Clari's Cleaning Crew</title>;
<meta name="description" content="Cleaning Services: Contact Clari's Cleaning Company for the best in residential, commercial, and construction cleaning services." />;

// <!-- Facebook Meta Tags -->
<meta property="og:url" content="https://claris-cleaning.vercel.app"/>;
<meta property="og:type" content="website"/>;
<meta property="og:title" content="Clari's Cleaning Crew"/>;
<meta property="og:description" content="Cleaning Services: Contact Clari's Cleaning Company for the best in residential, commercial, and construction cleaning services."/>;
<meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/13d4dd49-5a39-48c8-8643-fb9009f5cd3a.png?token=VZ8-8cNLhjeAghJTNjRiX8RNC9sQ10AAWs8AHpKLwb4&height=629&width=1200&expires=33244471791"/>;

// <!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image"/>;
<meta property="twitter:domain" content="claris-cleaning.vercel.app"/>;
<meta property="twitter:url" content="https://claris-cleaning.vercel.app"/>;
<meta name="twitter:title" content="Clari's Cleaning Crew"/>;
<meta name="twitter:description" content="Cleaning Services: Contact Clari's Cleaning Company for the best in residential, commercial, and construction cleaning services."/>;
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/13d4dd49-5a39-48c8-8643-fb9009f5cd3a.png?token=VZ8-8cNLhjeAghJTNjRiX8RNC9sQ10AAWs8AHpKLwb4&height=629&width=1200&expires=33244471791"/>;


<link rel="shortcut icon" sizes="180x180" href="./logo/ccc_logo_180x180.png" />;
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="./logo/ccc_logo_32x32.png"
/>;
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="./assets/logo/logo-16x16.png"
/>;
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="./logo/ccc_logo_16x16.png"
/>;

<meta name="apple-mobile-web-app-capable" content="yes" />;

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
    </html>
  );
}
