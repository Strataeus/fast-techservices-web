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
    title: "Cas #1 — Pont élévateur deux colonnes (Défaillance capteurs)",
    symptom: "Montée irrégulière, arrêt brutal en charge, relais sécurité déclenché sans raison.",
    measure: "Tension électrique capteurs de sécurité : 4.2V au lieu de 5V nominal. Ampérage ligne montée : 28A (limite 25A). Pression hydraulique : 195 bar (nominal 210 bar).",
    action: "Remplacement capteur de sécurité + nettoyage contacts relais + vérification compression joints hydrauliques.",
    test: "10 cycles complets validés. Montée/descente symétrique en 8.5s. Pression stable 210±5 bar. Pas de déclenchement intempestif.",
  },
  {
    slug: "cas-compresseur",
    title: "Cas #2 — Compresseur air industriel 3kW (Fuite réseau)",
    symptom: "Chute de pression rapide au démarrage d'une chaîne production. Arrêts compresseur toutes les 3-5 min. Consommation énergétique +40%.",
    measure: "Fuites identifiées : raccord sortie compresseur (0.8 m³/min), raccord cabine peinture (0.4 m³/min), silencieux (0.2 m³/min). Perte totale : 1.4 m³/min. Rendement électromécanique : 82% (nominal 92%).",
    action: "Remplacement joint raccord compresseur + ressoudure micro-fissure raccord cabine + vidange bidon régulateur (eau accumulée).",
    test: "Pression stable 8 bar pendant 60 min sous charge. Fuites résiduelles < 0.1 m³/min (seuil 0.2). Consommation énergie -35%, amortissement en 3 mois.",
  },
  {
    slug: "cas-cabine-peinture",
    title: "Cas #3 — Cabine peinture basse pression (Conformité ventilation)",
    symptom: "Qualité peinture dégradée : coulures irrégulières, poussières captures insuffisante. Plainte opérateurs : odeurs résidu de peinture.",
    measure: "Débit air : 2.8 m³/s (requis 3.2 m³/s). Vitesse extraction face avant : 0.35 m/s (min 0.5 m/s). État filtres : colmatage 90% (max acceptable 70%). Dépression cabine : 15 Pa (min requis 20 Pa).",
    action: "Remplacement complets filtres G4 + F7. Nettoyage gaines circulation air. Réglage automatisme pressostat (déclenchement 25 Pa). Remplacement 4 joints portes cabine.",
    test: "Débit : 3.3 m³/s (conforme). Vitesse face : 0.52 m/s (OK). Dépression 22 Pa (stable). Qualité peinture confirmée OK par 20 pièces tests. Pas d'odeur résidu.",
  },
];

export const proofBySlug = Object.fromEntries(
  proofs.map((proof) => [proof.slug, proof])
) as Record<ProofSlug, ProofItem>;
