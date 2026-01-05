import type { Metadata } from "next";
import { GenericHero } from "@/components/sections/GenericHero";
import { ContactSectionFAST } from "@/components/sections/ContactSectionFAST";

export const metadata: Metadata = {
  title: "Contact — FAST Tech Services",
  description: "Contactez FAST Tech Services pour dépannage, maintenance et diagnostic d'équipements de garage (ponts, compresseurs, cabines, stations lavage). Réponse en 4h, visio en 24h.",
};

export default function ContactPage() {
  return (
    <main>
      <GenericHero
        badgeLabel="Contact"
        title="Contactez FAST Tech Services"
        subtitle="Dépannage en 4h, diagnostic FAST Remote en 24h. Méthode : TERRAIN → PREUVE → VERDICT."
      />
      <ContactSectionFAST variant="contact" showMap={false} />
    </main>
  );
}
