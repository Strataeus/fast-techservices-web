import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TopBar } from "../components/TopBar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import StickyCTA from "../components/StickyCTA";
import { WhatsAppButton } from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";
import { LocalBusinessSchema } from "../components/schemas/LocalBusinessSchema";
import { GoogleAnalyticsScript } from "../components/GoogleAnalyticsScript";
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
    default: "FAST Tech Services — Maintenance équipements garage (ponts, compresseurs, cabines) | Diagnostic FAST Remote",
    template: "%s | FAST Tech Services",
  },
  description:
    "Expert électromécanicien terrain. Dépannage, maintenance, diagnostic d'équipements de garage : ponts élévateurs, compresseurs, cabines peinture, stations lavage. FAST Remote : diagnostic visio en 4h. Méthode : TERRAIN→PREUVE→VERDICT. Tests de sortie + dossier clair.",
  openGraph: {
    title: "FAST Tech Services",
    description:
      "Expert électromécanicien terrain. Dépannage, maintenance, diagnostic d'équipements de garage : ponts élévateurs, compresseurs, cabines peinture, stations lavage. FAST Remote : diagnostic visio en 4h. Méthode : TERRAIN→PREUVE→VERDICT. Tests de sortie + dossier clair.",
    images: ["/hero/home/hero.webp"],
    siteName: "FAST Tech Services",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAST Tech Services",
    description:
      "Expert électromécanicien terrain. Dépannage, maintenance, diagnostic d'équipements de garage : ponts élévateurs, compresseurs, cabines peinture, stations lavage. FAST Remote : diagnostic visio en 4h. Méthode : TERRAIN→PREUVE→VERDICT. Tests de sortie + dossier clair.",
    images: ["/hero/home/hero.webp"],
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
        <LocalBusinessSchema />
        <GoogleAnalyticsScript />
        <style>{`
          .skip-link {
            position: absolute;
            left: -9999px;
            z-index: 999;
          }
          .skip-link:focus {
            position: fixed;
            left: 1.5rem;
            top: 1.5rem;
            z-index: 90;
            border-radius: 0.375rem;
            background-color: #0f172a;
            padding: 1rem;
            font-size: 0.875rem;
            color: #ffffff;
            box-shadow: 0 0 20px rgba(0,200,255,0.25);
          }
        `}</style>
        <a
          href="#main-content"
          className="skip-link"
        >
          Aller au contenu principal
        </a>
        <TopBar />
        <Header />
        <main id="main-content" className="pb-16 md:pb-0">
          <PageTransition>{children}</PageTransition>
        </main>
        <StickyCTA />
        <WhatsAppButton variant="sticky" phoneNumber="+33123456789" />
        <Footer />
      </body>
    </html>
  );
}
