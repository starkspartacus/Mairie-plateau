import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Mairie du Plateau Abidjan - Site Officiel",
    template: "%s | Mairie du Plateau",
  },
  description:
    "Site officiel de la Mairie du Plateau, commune dynamique au cœur d'Abidjan. Découvrez nos services, actualités et projets de développement.",
  keywords: [
    "Mairie Plateau",
    "Abidjan",
    "Commune",
    "Services municipaux",
    "État civil",
    "Travaux publics",
    "Côte d'Ivoire",
    "Plateau Abidjan",
  ],
  authors: [{ name: "Mairie du Plateau" }],
  creator: "Mairie du Plateau",
  publisher: "Mairie du Plateau",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mairieplateau.net"),
  openGraph: {
    title: "Mairie du Plateau Abidjan - Site Officiel",
    description:
      "Site officiel de la Mairie du Plateau, commune dynamique au cœur d'Abidjan",
    url: "https://mairieplateau.net",
    siteName: "Mairie du Plateau",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mairie du Plateau Abidjan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mairie du Plateau Abidjan - Site Officiel",
    description:
      "Site officiel de la Mairie du Plateau, commune dynamique au cœur d'Abidjan",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="msapplication-TileColor" content="#00a651" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
