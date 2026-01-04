import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { EquipmentGrid } from "@/components/sections/EquipmentGrid";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { CaseStudiesTeaser } from "@/components/sections/CaseStudiesTeaser";
import { ContactForm } from "@/components/sections/ContactForm";
import { getCTA } from "@/content/config";

export const metadata: Metadata = {
  title: "FAST Tech Services — Dépannage premium (FAST Remote) ponts, compresseurs, cabines",
  description:
    "Maintenance, diagnostic et remise en service d&apos;équipements de garage (ponts, compresseurs, cabines, stations). FAST Remote en visio : preuves, tests, verdict.",
  keywords: ["diagnostic HVAC", "maintenance climatisation", "ponts élévateurs", "compresseurs", "cabines peinture"],
};

export default function HomePage() {
  const primaryCTA = getCTA("primary");

  return (
    <main>
      <HeroSection
        headline="Dépannage premium d'équipements de garage — FAST Remote & interventions sur site"
        subheadline="Approche terrain-first : diagnostic guidé, sécurisation, remise en exploitation propre, avec preuves et tests de sortie."
        ctaLabel={primaryCTA.label}
      />
      <EquipmentGrid />
      <MethodSteps />
      <CaseStudiesTeaser />
      <ContactForm />
    </main>
  );
}
