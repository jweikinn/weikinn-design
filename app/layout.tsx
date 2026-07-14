import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";
import { Cursor } from "@/components/Cursor";

const SITE_URL = "https://weikinn.design";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Weikinn.Design – Branding und Webdesign München | Für Unternehmen mit Sinn und Haltung",
    template: "%s | Weikinn.Design",
  },
  description:
    "Julia Weikinn – Freie Designerin in München. Branding und Webdesign für Unternehmen mit Sinn und Haltung. Strategisch gedacht, von Herzen gemacht.",
  keywords: [
    "Brand Design München",
    "Webdesign München",
    "Logo Design München",
    "Corporate Identity",
    "Markenidentität",
    "Freelance Designerin München",
    "Editorial Design",
    "Branding München",
    "Webdesign Freelance",
  ],
  authors: [{ name: "Julia Weikinn", url: SITE_URL }],
  creator: "Julia Weikinn",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Weikinn.Design",
    title: "Weikinn.Design – Branding und Webdesign München | Für Unternehmen mit Sinn und Haltung",
    description:
      "Branding und Webdesign für Unternehmen mit Sinn und Haltung – aus München.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Weikinn.Design – Branding und Webdesign München",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weikinn.Design – Branding und Webdesign München | Für Unternehmen mit Sinn und Haltung",
    description:
      "Branding und Webdesign für Unternehmen mit Sinn und Haltung – aus München.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: SITE_URL,
  },
};

// Strukturierte Daten (JSON-LD) — für Google & KI-Suchmaschinen
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Julia Weikinn",
      url: SITE_URL,
      email: "julia@weikinn.design",
      jobTitle: "Brand & Web Design Spezialistin",
      description:
        "Freelance Designerin aus München mit über 12 Jahren Erfahrung. Spezialisiert auf Markenidentitäten, Webdesign und Editorial Design.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "München",
        addressCountry: "DE",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Weikinn.Design",
      url: SITE_URL,
      email: "julia@weikinn.design",
      description:
        "Branding und Webdesign für Unternehmen mit Sinn und Haltung. Strategisch gedacht, von Herzen gemacht.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "München",
        addressCountry: "DE",
      },
      founder: "Julia Weikinn",
      serviceType: ["Branding", "Webdesign", "Editorial Design"],
      areaServed: "DACH",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yhk3mxv.css" />
      </head>
      <body className="antialiased">
        {children}
        <Cursor />
        <AgentationProvider />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
