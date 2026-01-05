/**
 * ServiceDetailPage — Template réutilisable pour pages service détaillées
 * Server component with interactive CTA wrapper
 * Sections optionnelles basées sur contenu source.
 * Source: content-map.yml + FAST_TECH_SERVICES_COPY_v1.md
 */

import { colors, spacing } from "@/lib/design/tokens";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { PremiumCTASection } from "@/components/sections/PremiumCTASection";
import { InteractiveCTA } from "@/components/InteractiveCTA";

export interface ServiceDetailPageProps {
  meta: {
    title: string;
    description: string;
    ogImage?: string;
  };
  heroContent: {
    headline: string;
    subheadline: string;
    cta_primary?: {
      label: string;
      href: string;
    };
    cta_secondary?: {
      label: string;
      href: string;
    };
    sla_badges?: {
      ack?: string;
      response?: string;
      slot?: string;
      verdict?: string;
    };
  };
  /** Sections optionnelles — affichées seulement si présentes */
  aboutSection?: {
    headline: string;
    description: string;
    features: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  methodSection?: {
    headline: string;
    description: string;
    steps: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  deliverables?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  noGoSection?: {
    headline: string;
    items: string[];
  };
}

/**
 * ServiceDetailPage
 * Composant serveur pour pages service détaillées
 * Sections optionnelles: Hero → About → Method → Deliverables → No-Go → FAQ → CTA
 */
export function ServiceDetailPage(props: ServiceDetailPageProps) {
  const { heroContent, aboutSection, methodSection, deliverables, noGoSection } = props;

  return (
    <main>
      <Breadcrumbs />
      {/* 1. HERO — Toujours présent */}
      <section
        style={{
          padding: `${spacing[20]} ${spacing[6]}`,
          backgroundColor: colors.slate[900],
          color: colors.white,
          position: "relative",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: spacing[8],
              alignItems: "center",
            }}
          >
            {/* Left: Text */}
            <div>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  marginBottom: spacing[4],
                  lineHeight: 1.2,
                  color: colors.white,
                }}
              >
                {heroContent.headline}
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: colors.slate[200],
                  lineHeight: 1.8,
                  marginBottom: spacing[8],
                }}
              >
                {heroContent.subheadline}
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: "flex",
                  gap: spacing[4],
                  marginBottom: spacing[8],
                  flexWrap: "wrap",
                }}
              >
                {heroContent.cta_primary && (
                  <InteractiveCTA
                    href={heroContent.cta_primary.href}
                    variant="primary"
                    label={heroContent.cta_primary.label}
                  />
                )}

                {heroContent.cta_secondary && (
                  <InteractiveCTA
                    href={heroContent.cta_secondary.href}
                    variant="outline"
                    label={heroContent.cta_secondary.label}
                  />
                )}
              </div>

              {/* SLA Badges */}
              {heroContent.sla_badges && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: spacing[3],
                    marginTop: spacing[8],
                  }}
                >
                  {heroContent.sla_badges.ack && (
                    <div
                      style={{
                        backgroundColor: colors.slate[800],
                        padding: spacing[3],
                        borderRadius: "0.375rem",
                        borderLeft: `3px solid ${colors.cyan[500]}`,
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          color: colors.slate[300],
                          marginBottom: spacing[1],
                          letterSpacing: "0.05em",
                        }}
                      >
                        Accusé
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: colors.white,
                        }}
                      >
                        {heroContent.sla_badges.ack}
                      </div>
                    </div>
                  )}
                  {heroContent.sla_badges.response && (
                    <div
                      style={{
                        backgroundColor: colors.slate[800],
                        padding: spacing[3],
                        borderRadius: "0.375rem",
                        borderLeft: `3px solid ${colors.cyan[500]}`,
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          color: colors.slate[300],
                          marginBottom: spacing[1],
                          letterSpacing: "0.05em",
                        }}
                      >
                        Réponse
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: colors.white,
                        }}
                      >
                        {heroContent.sla_badges.response}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right: Image Placeholder */}
            <div
              style={{
                minHeight: "400px",
                backgroundColor: colors.slate[800],
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                border: `2px dashed ${colors.slate[700]}`,
              }}
            >
              🔧
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (optionnel) */}
      {aboutSection && (
        <section
          style={{
            padding: `${spacing[20]} ${spacing[6]}`,
            backgroundColor: colors.white,
            color: colors.slate[900],
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: spacing[12],
                alignItems: "start",
              }}
            >
              {/* Image Left */}
              <div
                style={{
                  minHeight: "400px",
                  backgroundColor: colors.slate[100],
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  border: `2px dashed ${colors.slate[300]}`,
                }}
              >
                ⚙️
              </div>

              {/* Text + Features Right */}
              <div>
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    marginBottom: spacing[4],
                    lineHeight: 1.3,
                  }}
                >
                  {aboutSection.headline}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: colors.slate[600],
                    marginBottom: spacing[6],
                    lineHeight: 1.7,
                  }}
                >
                  {aboutSection.description}
                </p>

                {/* Features */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: spacing[6],
                  }}
                >
                  {aboutSection.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        gap: spacing[4],
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "50px",
                          height: "50px",
                          backgroundColor: colors.slate[100],
                          borderRadius: "0.375rem",
                          fontWeight: 700,
                          color: colors.slate[600],
                          fontSize: "1rem",
                        }}
                      >
                        {feature.number}
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            marginBottom: spacing[1],
                            color: colors.slate[900],
                          }}
                        >
                          {feature.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.95rem",
                            color: colors.slate[600],
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. METHOD SECTION (optionnel) */}
      {methodSection && (
        <section
          style={{
            padding: `${spacing[20]} ${spacing[6]}`,
            backgroundColor: colors.slate[50],
            color: colors.slate[900],
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: spacing[12] }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: spacing[4],
                  lineHeight: 1.3,
                }}
              >
                {methodSection.headline}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: colors.slate[600],
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                {methodSection.description}
              </p>
            </div>

            {/* Steps Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: spacing[6],
              }}
            >
              {methodSection.steps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: spacing[6],
                    backgroundColor: colors.white,
                    borderRadius: "0.5rem",
                    border: `1px solid ${colors.slate[200]}`,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: spacing[3],
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: spacing[2],
                      color: colors.slate[900],
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: colors.slate[600],
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. DELIVERABLES SECTION (optionnel) */}
      {deliverables && deliverables.length > 0 && (
        <section
          style={{
            padding: `${spacing[20]} ${spacing[6]}`,
            backgroundColor: colors.white,
            color: colors.slate[900],
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: spacing[12] }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: spacing[4],
                  lineHeight: 1.3,
                }}
              >
                Livrables
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: colors.slate[600],
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Ce que vous recevez après chaque intervention.
              </p>
            </div>

            {/* Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: spacing[6],
              }}
            >
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: spacing[6],
                    backgroundColor: colors.slate[50],
                    borderRadius: "0.5rem",
                    border: `1px solid ${colors.slate[200]}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.5rem",
                      marginBottom: spacing[3],
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: spacing[2],
                      color: colors.slate[900],
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: colors.slate[600],
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. NO-GO SECTION (optionnel) */}
      {noGoSection && (
        <section
          style={{
            padding: `${spacing[20]} ${spacing[6]}`,
            backgroundColor: colors.slate[50],
            color: colors.slate[900],
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                marginBottom: spacing[8],
                lineHeight: 1.3,
              }}
            >
              {noGoSection.headline}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: spacing[6],
              }}
            >
              {noGoSection.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: spacing[4],
                    backgroundColor: colors.white,
                    borderRadius: "0.375rem",
                    border: `1px solid ${colors.slate[200]}`,
                    borderLeft: `4px solid #ef4444`,
                    display: "flex",
                    gap: spacing[3],
                  }}
                >
                  <div style={{ color: "#ef4444", fontSize: "1.5rem", fontWeight: 700 }}>⚠</div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      color: colors.slate[600],
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQ */}
      <FAQSection />

      {/* 7. CTA Premium */}
      <PremiumCTASection />
    </main>
  );
}
