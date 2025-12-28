export type ProofSlug = "cas-pont-elevateur" | "cas-compresseur" | "cas-cabine-peinture";

export interface ProofItem {
  slug: ProofSlug;
  title: string;
  symptom: string;
  measure: string;
  action: string;
  test: string;
}

export const proofs: ProofItem[] = [
  {
    slug: "cas-pont-elevateur",
    title: "Cas #1 — Pont élévateur",
    symptom: "Montée irrégulière, arrêt en charge.",
    measure: "Pression hydraulique et capteurs de sécurité.",
    action: "Réglage + remplacement pièce critique.",
    test: "Cycle complet validé, tolérances OK.",
  },
  {
    slug: "cas-compresseur",
    title: "Cas #2 — Compresseur",
    symptom: "Chute de pression à la demande.",
    measure: "Fuites + rendement énergétique.",
    action: "Reprise réseau et calibration pressostat.",
    test: "Stabilité pression sur 30 min.",
  },
  {
    slug: "cas-cabine-peinture",
    title: "Cas #3 — Cabine peinture",
    symptom: "Débit d'air insuffisant.",
    measure: "Ventilation + filtration.",
    action: "Nettoyage + réglage automatismes.",
    test: "Conformité débit et filtration.",
  },
];

export const proofBySlug = Object.fromEntries(
  proofs.map((proof) => [proof.slug, proof])
) as Record<ProofSlug, ProofItem>;
