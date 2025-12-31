import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { DemoVideoProvider } from "@/components/providers/demo-video-provider";
import BasaltFooter from "@/components/basalt-theme/BasaltFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BasaltERP – AI-Assisted Universal ERP Platform",
  description: "Modular, AI-assisted ERP for any industry. Pre-built industry packs plus on-demand AI module builder. Start with Restaurants, Hospitality, Child-Care, Self-Storage, Retail, or Cannabis.",
  applicationName: "BasaltERP",
  keywords: [
    "universal ERP platform",
    "AI ERP",
    "modular ERP",
    "industry packs",
    "AI module builder",
    "enterprise resource planning software",
    "restaurants ERP",
    "hospitality ERP",
    "retail ERP",
    "self-storage ERP",
    "child-care ERP",
    "cannabis ERP"
  ],
  authors: [{ name: "BasaltHQ Team" }],
  creator: "BasaltHQ",
  publisher: "BasaltHQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/l1logows.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [
      { url: "/l1logows.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: ["/l1logows.png"]
  },
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://basalthq.com"),
  alternates: {
    canonical: "https://basalthq.com",
  },
  openGraph: {
    title: "BasaltERP – AI-Assisted Universal ERP Platform",
    description: "Modular, AI-assisted ERP for any industry with pre-built packs and an on-demand AI module builder.",
    url: "https://erp.basalthq.com",
    siteName: "BasaltERP",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://engram1.blob.core.windows.net/varuni/socialbanner.png",
        width: 1536,
        height: 1024,
        alt: "BasaltERP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BasaltERP – AI-Assisted Universal ERP",
    description: "Modular ERP for any industry with AI-built modules on demand.",
    images: ["https://engram1.blob.core.windows.net/varuni/socialbanner.png"],
    creator: "@basalthq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "enterprise resource planning software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BasaltERP",
    "description": "AI-assisted universal ERP platform with modular industry packs and an on-demand AI module builder",
    "url": "https://erp.basalthq.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "499",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "description": "Guided demos and pilots available"
    },
    "creator": {
      "@type": "Organization",
      "name": "BasaltHQ",
      "url": "https://erp.basalthq.com"
    },
    "featureList": [
      "AI-assisted module builder (create/modify modules, panels, modals)",
      "Pre-built industry packs (Restaurants, Hospitality, Child-Care, Self-Storage, Retail, Cannabis)",
      "Advanced analytics and reporting",
      "Role-based access and security",
      "Integrations and automation",
      "Enterprise-grade reliability"
    ],

  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://use.typekit.net/eur3bvn.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <DemoVideoProvider>
            <Navbar />
            <main className="relative z-10">{children}</main>
            <BasaltFooter />
          </DemoVideoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
