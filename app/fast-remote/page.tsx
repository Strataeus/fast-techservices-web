import type { Metadata } from "next";
import { FastRemoteHero } from "@/components/sections/FastRemoteHero";
import { FastRemoteAboutSection } from "@/components/sections/FastRemoteAboutSection";
import { FastRemoteEquipmentTabs } from "@/components/sections/FastRemoteEquipmentTabs";
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
      {/* 1. FAST Remote Hero - Large banner with proposition */}
      <FastRemoteHero />

      {/* 2. About Section - Image + 3 numbered features (CarServ style) */}
      <FastRemoteAboutSection />

      {/* 3. Equipment Tabs - Left menu + Right content (CarServ services style) */}
      <FastRemoteEquipmentTabs />

      {/* 4. Deliverables - What client receives */}
      <FastRemoteDeliverables />

      {/* 5. Process Timeline - 5 steps */}
      <FastRemoteProcess />

      {/* 6. Prerequisites & NO-GO conditions */}
      <FASTRemotePrereqs />

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. Pre-form CTA */}
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

      {/* 9. Qualifying Form (UI-only, Zod validation, minLength=40) */}
      <div id="formulaire">
        <FastRemoteQualifyingForm />
      </div>

      {/* 10. Final CTA */}
      <FastRemoteCTAFinal />
    </main>
  );
}


