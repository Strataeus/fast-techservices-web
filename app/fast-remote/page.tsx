import type { Metadata } from "next";
import { FastRemoteHero } from "@/components/sections/FastRemoteHero";
import { FASTRemoteValueProps } from "@/components/sections/FASTRemoteValueProps";
import { FastRemoteDeliverables } from "@/components/sections/FastRemoteDeliverables";
import { FastRemoteProcess } from "@/components/sections/FastRemoteProcess";
import { FASTRemotePrereqs } from "@/components/sections/FASTRemotePrereqs";
import { FAQSection } from "@/components/sections/FAQSection";
import { FastRemoteCTAFinal } from "@/components/sections/FastRemoteCTAFinal";
import { FastRemoteQualifyingForm } from "@/components/sections/FastRemoteQualifyingForm";
import { colors, spacing } from "@/lib/design/tokens";

export const metadata: Metadata = {
  title: "FAST Remote — Diagnostic à distance (visio) | FAST Tech Services",
  description:
    "Assistance technique à distance : tests guidés, mesures, preuves, verdict clair. Réponse 4h ouvrées, créneau visio J+1 ouvré.",
  keywords: ["diagnostic distance", "FAST Remote", "assistance visio", "diagnostic HVAC"],
};

export default function FastRemotePage() {
  return (
    <main>
      {/* 1. FAST Remote Hero */}
      <FastRemoteHero />

      {/* 2. Value Props (Ce que vous obtenez) */}
      <FASTRemoteValueProps />

      {/* 2b. Deliverables (Livrables client) */}
      <FastRemoteDeliverables />

      {/* 3. Process (Timeline 5 étapes) */}
      <FastRemoteProcess />

      {/* 4. Prerequisites, NO-GO & Limitations */}
      <FASTRemotePrereqs />

      {/* 5. FAQ */}
      <FAQSection />

      {/* 6. CTA Section avant formulaire */}
      <section
        style={{
          padding: `${spacing[16]} ${spacing[6]}`,
          backgroundColor: colors.slate[900],
          color: colors.white,
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: spacing[4],
            }}
          >
            Prêt à démarrer ?
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: colors.slate[300],
              marginBottom: spacing[6],
            }}
          >
            Remplissez le formulaire ci-dessous. Accusé immédiat. Réponse sous 4h ouvrées. Créneau visio sous 24h.
          </p>
        </div>
      </section>

      {/* 7. Formulaire FAST Remote Qualifiant (UI only, Zod validation, minLength=40) */}
      <FastRemoteQualifyingForm />

      {/* 8. CTA final */}
      <FastRemoteCTAFinal />
    </main>
  );
}


