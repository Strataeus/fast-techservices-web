import type { Metadata } from "next";
import { GenericHero } from "@/components/sections/GenericHero";
import { spacing } from "@/lib/design/tokens";

export const metadata: Metadata = {
  title: "Mentions légales — FAST Tech Services",
  description: "Mentions légales et conditions d'utilisation du site FAST Tech Services.",
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <GenericHero
        badgeLabel="Mentions légales"
        title="Mentions légales"
        subtitle="Identification et conditions d'utilisation."
      />
      <div style={{ padding: `${spacing[12]} ${spacing[6]}`, maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>Mentions légales</h1>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Identification</h2>
          <p>FAST Tech Services</p>
          <p>Siège social : [Adresse]</p>
          <p>Tél. : [Téléphone]</p>
          <p>Email : contact@fast-techservices.com</p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Propriété intellectuelle</h2>
          <p>Tous les contenus du site (textes, images, logos) sont la propriété exclusive de FAST Tech Services ou utilisés avec autorisation.</p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Responsabilité</h2>
          <p>Les informations fournies sur ce site sont à titre informatif. FAST Tech Services décline toute responsabilité en cas d&apos;erreur ou d&apos;omission.</p>
        </section>
      </div>
    </main>
  );
}
