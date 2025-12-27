import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

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
  title: "FAST Tech Services - Dépannage et maintenance d'équipements industriels",
  description:
    "Dépannage et maintenance d'équipements industriels. Méthode rigoureuse, preuves techniques et diagnostic clair.",
  openGraph: {
    title: "FAST Tech Services",
    description:
      "Dépannage et maintenance d'équipements industriels. Méthode rigoureuse, preuves techniques et diagnostic clair.",
    images: ["/brand/fast-hero.png"],
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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
