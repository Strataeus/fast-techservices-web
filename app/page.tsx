import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { EquipmentGrid } from "@/components/sections/EquipmentGrid";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { CaseStudiesTeaser } from "@/components/sections/CaseStudiesTeaser";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "FAST Tech Services — Dépannage et maintenance d'équipements industriels",
  description:
    "Dépannage et maintenance d'équipements industriels. Méthode rigoureuse, preuves techniques et diagnostic clair.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <EquipmentGrid />
      <MethodSteps />
      <CaseStudiesTeaser />
      <ContactForm />
    </main>
  );
}
