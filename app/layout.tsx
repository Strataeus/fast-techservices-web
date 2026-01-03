import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import StickyCTA from "../components/StickyCTA";
import JsonLd from "../components/JsonLd";
import ScrollToHash from "../components/layout/ScrollToHash";
import PageTransition from "../components/layout/PageTransition";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fast-techservices.com"),
  applicationName: "FAST Tech Services",
  title: {
    default: "FAST Tech Services — Dépannage et maintenance d'équipements industriels",
    template: "%s | FAST Tech Services",
  },
  description:
    "Dépannage et maintenance d'équipements industriels. Méthode rigoureuse, preuves techniques et diagnostic clair.",
  openGraph: {
    title: "FAST Tech Services",
    description:
      "Dépannage et maintenance d'équipements industriels. Méthode rigoureuse, preuves techniques et diagnostic clair.",
    images: ["/hero/home/hero.svg"],
    siteName: "FAST Tech Services",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAST Tech Services",
    description:
      "Dépannage et maintenance d'équipements industriels. Méthode rigoureuse, preuves techniques et diagnostic clair.",
    images: ["/hero/home/hero.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-primary text-gray-100 antialiased`}
      >
        <ScrollToHash />
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[90] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:shadow-[0_0_20px_rgba(0,200,255,0.25)]"
        >
          Aller au contenu principal
        </a>
        <SiteHeader />
        <main id="main-content" className="pb-16 md:pb-0">
          <PageTransition>{children}</PageTransition>
        </main>
        <StickyCTA />
        <SiteFooter />
      </body>
    </html>
  );
}
