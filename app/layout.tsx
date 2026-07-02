import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";
import { Cursor } from "@/components/Cursor";

const SITE_URL = "https://weikinn.design";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Weikinn.Design – Brand & Web Design Spezialistin München",
    template: "%s | Weikinn.Design",
  },
  description:
    "Julia Weikinn – Freelance Brand & Web Design Spezialistin aus München. Markenidentitäten, Logos, Websites und Editorial Design für Unternehmen, die professionell auftreten wollen. 12+ Jahre Erfahrung.",
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
    title: "Weikinn.Design – Brand & Web Design Spezialistin München",
    description:
      "Markenidentitäten, Websites und Editorial Design – strategisch gedacht, von Herzen gemacht.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Weikinn.Design – Brand & Web Design Spezialistin München",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weikinn.Design – Brand & Web Design Spezialistin München",
    description:
      "Markenidentitäten, Websites und Editorial Design – strategisch gedacht, von Herzen gemacht.",
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
        "Brand & Web Design Studio aus München. Markenidentitäten, Logos, Websites und Editorial Design für Unternehmen weltweit.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "München",
        addressCountry: "DE",
      },
      founder: { "@id": `${SITE_URL}/#person` },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Design Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Branddesign", description: "Entwicklung von Markenidentitäten, Logos und Corporate Design" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Webdesign", description: "Konzeption und Gestaltung von Websites" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Editorial Design", description: "Gestaltung von Broschüren, Geschäftsberichten und Print-Medien" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Content Design", description: "Visuelle Inhalte für Social Media und digitale Kanäle" },
          },
        ],
      },
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
