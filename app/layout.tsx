import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hot Air Balloon Marrakech | Sky Experience - Unforgettable Sunrise Flights",
  description: "Experience the magic of Marrakech from above with Sky Experience. Certified pilots, 4.9/5 rating, free cancellation. Book your unforgettable hot air balloon flight today!",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://skyexperience.com'),
  keywords: ['hot air balloon Marrakech', 'balloon ride Morocco', 'Marrakech sunrise flight', 'hot air balloon tour', 'sky experience', 'Marrakech activities'],
  authors: [{ name: 'Sky Experience' }],
  openGraph: {
    title: 'Hot Air Balloon Marrakech | Sky Experience',
    description: 'Unforgettable hot air balloon experience over Marrakech. Certified pilots, 4.9/5 rating, free cancellation.',
    url: 'https://skyexperience.com',
    siteName: 'Sky Experience',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Hot air balloon floating over Marrakech at sunrise',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hot Air Balloon Marrakech | Sky Experience',
    description: 'Unforgettable hot air balloon experience over Marrakech',
    images: ['/images/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning={true} data-lt-installed="true" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
