import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesAboutSection } from "@/components/sections/ServicesAboutSection";
import { ServicesTabsFAST } from "@/components/sections/ServicesTabsFAST";
import { FAQSection } from "@/components/sections/FAQSection";
import { PremiumCTASection } from "@/components/sections/PremiumCTASection";
import { colors, spacing } from "@/lib/design/tokens";

export const metadata: Metadata = {
  title: "Services | FAST Tech Services — Ponts, compresseurs, cabines, stations",
  description:
    "Maintenance, dépannage, retrofit, remise en service. FAST Remote en priorité, interventions sur site si nécessaire.",
  keywords: [
    "dépannage garage",
    "maintenance ponts élévateurs",
    "compresseurs air comprimé",
    "cabines peinture",
    "stations lavage",
  ],
  openGraph: {
    title: "Services | FAST Tech Services",
    description:
      "Maintenance, dépannage, retrofit, remise en service. FAST Remote en priorité, interventions sur site si nécessaire.",
    images: [
      {
        url: "/media/hero-services.jpg",
        width: 1200,
        height: 630,
        alt: "Services FAST Tech Services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Breadcrumbs />
      {/* 1. Hero Premium (dark, SLA badges from config) */}
      <ServicesHero />

      {/* 2. About Services (image + 3 numbered features: Diagnostic, Maintenance, Tests) */}
      <ServicesAboutSection />

      {/* 3. Equipment Interactive Tabs (CarServ style: left menu + right content) */}
      <ServicesTabsFAST />

      {/* 4. Service Methods & Approach (HTML-first section) */}
      <section
        style={{
          padding: `${spacing[20]} ${spacing[6]}`,
          backgroundColor: colors.slate[50],
          color: colors.slate[900],
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: spacing[16] }}>
            <h2
              style={{
                fontSize: "2.25rem",
                fontWeight: 700,
                marginBottom: spacing[4],
                lineHeight: 1.3,
              }}
            >
              Notre approche : <span style={{ color: colors.cyan[500] }}>méthode</span>, 
              <span style={{ color: colors.cyan[500] }}> preuves</span>, <span style={{ color: colors.cyan[500] }}>tests</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: colors.slate[600],
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Structuré, traçable, risques maîtrisés. Chaque intervention suit le protocole FAST : 
              cadrage, diagnostic, preuves documentées, tests de sortie.
            </p>
          </div>

          {/* 3-Column Grid: Diagnostic → Maintenance → Intervention */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: spacing[8],
            }}
          >
            {/* Diagnostic */}
            <div
              style={{
                padding: spacing[8],
                backgroundColor: colors.white,
                borderRadius: "0.5rem",
                border: `1px solid ${colors.slate[200]}`,
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: spacing[4],
                }}
              >
                🔍
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: spacing[3],
                  color: colors.slate[900],
                }}
              >
                Diagnostic
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: colors.slate[600],
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Tests guidés et discriminants. Collecte de preuves (photos, mesures, vidéos). 
                Identification de la cause racine avec documentation complète.
              </p>
            </div>

            {/* Maintenance Préventive */}
            <div
              style={{
                padding: spacing[8],
                backgroundColor: colors.white,
                borderRadius: "0.5rem",
                border: `1px solid ${colors.slate[200]}`,
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: spacing[4],
                }}
              >
                🛠️
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: spacing[3],
                  color: colors.slate[900],
                }}
              >
                Maintenance préventive
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: colors.slate[600],
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Entretien régulier pour éviter les défaillances. Remise en conformité. 
                Retrofit de composants obsolètes ou inefficaces.
              </p>
            </div>

            {/* Remise en Service */}
            <div
              style={{
                padding: spacing[8],
                backgroundColor: colors.white,
                borderRadius: "0.5rem",
                border: `1px solid ${colors.slate[200]}`,
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: spacing[4],
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: spacing[3],
                  color: colors.slate[900],
                }}
              >
                Tests de sortie
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: colors.slate[600],
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Tests complets post-intervention. Validation des sécurités. Pv de remise en service 
                signé. Équipement prêt pour exploitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <FAQSection />

      {/* 6. CTA Premium */}
      <PremiumCTASection />
    </main>
  );
}
