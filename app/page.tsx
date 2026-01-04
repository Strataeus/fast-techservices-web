import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FastRemotePromoSection } from "@/components/sections/FastRemotePromoSection";
import { ServicesTabsSection } from "@/components/sections/ServicesTabsSection";
import { MethodTeaserSection } from "@/components/sections/MethodTeaserSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProofsTeaser } from "@/components/sections/ProofsTeaser";
import { ZonesTeaser } from "@/components/sections/ZonesTeaser";
import { PremiumCTASection } from "@/components/sections/PremiumCTASection";
import { FinalContactCTASection } from "@/components/sections/FinalContactCTASection";

export const metadata: Metadata = {
  title: "FAST Tech Services — Maintenance équipements garage (ponts, compresseurs, cabines) | Diagnostic FAST Remote",
  description:
    "Expert électromécanicien terrain. Dépannage, maintenance, diagnostic d'équipements de garage : ponts élévateurs, compresseurs, cabines peinture, stations lavage. FAST Remote : diagnostic visio en 4h. Méthode : TERRAIN→PREUVE→VERDICT. Tests de sortie + dossier clair.",
  keywords: [
    "dépannage ponts élévateurs",
    "maintenance compresseurs",
    "diagnostic cabines peinture",
    "stations lavage",
    "FAST Remote",
    "diagnostic visio",
    "maintenance atelier",
    "expertise mécatronique",
    "électromécanique garage",
  ],
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FastRemotePromoSection />
      <ServicesTabsSection />
      <MethodTeaserSection />
      <StatsSection />
      <ProofsTeaser />
      <ZonesTeaser />
      <PremiumCTASection />
      <FinalContactCTASection />
    </main>
  );
}
