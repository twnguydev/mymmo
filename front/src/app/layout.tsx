import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://owneo.fr'),
  title: {
    default: "Owneo | Logiciel de Gestion Locative pour Propriétaires et SCI",
    template: "%s | Owneo"
  },
  description: "Simplifiez la gestion de votre patrimoine immobilier avec Owneo. Quittances, états des lieux, suivi des loyers et comptabilité pour propriétaires et SCI.",
  applicationName: "Owneo",
  authors: [{ name: "Owneo", url: "https://owneo.fr" }],
  generator: "Next.js",
  keywords: [
    "gestion locative",
    "logiciel immobilier",
    "gestion SCI",
    "logiciel propriétaire",
    "quittance de loyer",
    "état des lieux",
    "comptabilité immobilière",
    "suivi des loyers",
    "gestion patrimoine immobilier",
    "logiciel bailleur"
  ],
  creator: "Owneo",
  publisher: "Owneo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  classification: "Business & Finance",

  // OpenGraph
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: "https://owneo.fr",
    siteName: "Owneo",
    title: "Owneo | Logiciel de Gestion Locative Intelligent",
    description: "La solution tout-en-un pour gérer votre patrimoine immobilier. Idéal pour les propriétaires, SCI et professionnels de l'immobilier.",
    images: [
      {
        url: "https://owneo.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Owneo - Interface de gestion locative"
      }
    ]
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@owneo",
    creator: "@owneo",
    title: "Owneo | Gestion Locative Intelligente",
    description: "Solution de gestion locative pour propriétaires et SCI. Automatisez vos tâches et optimisez vos revenus locatifs.",
    images: ["https://owneo.fr/twitter-image.png"],
  },

  // Vérification propriété
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },

  // Liens alternatifs
  alternates: {
    canonical: "https://owneo.fr",
    languages: {
      'fr-FR': 'https://owneo.fr',
      'en-US': 'https://owneo.fr/en',
    }
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },

  // Manifeste
  manifest: "/manifest.json",

  // Autres métadonnées
  other: {
    "google-site-verification": "verification-code",
    "msvalidate.01": "microsoft-verification",
    "facebook-domain-verification": "facebook-verification",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="fr" 
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Owneo",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "description": "Logiciel de gestion locative pour propriétaires et SCI",
              "url": "https://owneo.fr",
              "author": {
                "@type": "Organization",
                "name": "Owneo",
                "url": "https://owneo.fr"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}