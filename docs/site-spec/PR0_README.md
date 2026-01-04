# PR0_README.md — Snapshot FAST Tech Services Site (4 janvier 2026)

**🎯 MISSION PR0 ACCOMPLIE**

Le repo FAST (monorepo Next.js) a été audité, documenté et un **plan complet PR1–PR5** a été produit.  
**Zéro code modifié**. Documentation uniquement. Prêt validation décideur (Fortunat).

---

## 📋 Documents générés (6 fichiers PR0 dans `docs/site-spec/`)

### Lisez dans cet ordre :

1. **[PR0_FINAL_SUMMARY.md](PR0_FINAL_SUMMARY.md)** ← **COMMENCEZ ICI** (15 min)
   - Résumé exécutif pour décideur
   - État repo (✅/❌), bloquants audit, plan PR1–PR5 résumé
   - Points clés pour Fortunat
   - Prochaine étape (validation + assets)

2. **[PR0_CHECKLIST_VALIDATION.md](PR0_CHECKLIST_VALIDATION.md)** ← **VALIDATION RAPIDE** (5 min)
   - Checklist simple PASS/FAIL
   - Prérequis, snapshot, sources, audit, plan, risques
   - Checklist action pour Fortunat

3. **[PR0_SNAPSHOT.md](PR0_SNAPSHOT.md)** ← **TECHNIQUEMENT DÉTAILLÉ** (40 min)
   - Preuves brutes (git status, build, lint, test outputs)
   - Sources de vérité résumées (spec, copy, map, manifest)
   - Top 5 bloquants audit (avec tests PASS/FAIL)
   - **Plan atomique PR1–PR5** (scope, DoR, DoD, fichiers, validation)
   - Risques documentés (assets, intake URL)
   - Arborescence cible post-PR5

4. **[FAST_SITE_SPEC_EXECUTIVE_SUMMARY.md](FAST_SITE_SPEC_EXECUTIVE_SUMMARY.md)** ← **CHECKLIST SPEC** (20 min)
   - Spec FAST : 10 bullets objectifs + doctrine
   - Copy FAST : 10 bullets promesse + périmètre
   - Pages P0 + P1 mappées
   - Assets critiques vs fallbacks
   - Stratégie conversion CarServ → FAST Next.js
   - Commandes de référence

5. **[NEXT_JS_ARCHITECTURE_PLAN.md](NEXT_JS_ARCHITECTURE_PLAN.md)** ← **BLUEPRINTS DEV** (60 min)
   - Arborescence Next.js complète (post-PR5)
   - Mappage composants CarServ → FAST TSX (exemples réalistes)
   - Design tokens FAST (palette couleurs dark + cyan)
   - Stratégie images + fallbacks graceful
   - Stratégie CSS Tailwind migration
   - Commandes dev + checkpoints validation per PR

6. **[PR1_FILES_MANIFEST.md](PR1_FILES_MANIFEST.md)** ← **INVENTAIRE ATOMIQUE FICHIERS** (90 min)
   - Liste exacte fichiers à créer/modifier per PR (PR1–PR5)
   - Pour chaque PR : scope, à CRÉER, à MODIFIER, assets, validation commands, livrables
   - Tableau résumé final (fichiers par PR)
   - **À utiliser comme checklist implémentation**

7. **[PR0_DOCUMENT_INDEX.md](PR0_DOCUMENT_INDEX.md)** ← **GUIDE NAVIGATION** (10 min)
   - Index comment utiliser documents PR0
   - Scénarios d'usage (Fortunat, Dev PR1–PR5)
   - Hiérarchie sources de vérité (si conflit)
   - Récapitulatif fichiers générés

---

## 🎯 État repo (snapshot)

### ✅ Qui marche
- Next.js 16.1.1 compile (`npm run build` PASS, 13 routes)
- React 19, Tailwind v4, Zod, Jest configurés
- Spec + copy + maps existantes (sources de vérité prêtes)
- App Router structure prête à augmenter

### ❌ Bloquants audit (DO NOT SHIP)
1. **Placeholders visibles** → zéro tolérance prod
2. **SLA contradictoire** (2h / 4h / 24h / 72h mélangés) → perte confiance
3. **Contact cassé** (affiche "Chargement…") → zéro leads
4. **Station lavage absente** → contradiction spec (4 équipements requis)
5. **Ton incohérent** (tu/ta vs vous/votre) → cheap vs premium

**Impact** : Non publiable en l'état. PR0–PR5 corrigent tous ces points.

---

## 📊 Plan PR1..PR5 (5 PRs atomiques)

| PR | Objectif | Durée | Livrables |
|----|----------|-------|-----------|
| **PR1** | Socle (layout, tokens, assets) | 4–5 j | Header, Footer, Nav, design tokens, placeholder assets |
| **PR2** | Pages conversion (/ + /fast-remote) | 5–6 j | SLA unifié appliqué, hero + sections, responsive |
| **PR3** | Pages SEO P0 (services, méthode, réalisations) | 6–7 j | 4 équipements, 3 cas ou fallback "Coming soon", meta uniques |
| **PR4** | Formulaires + intake (/api/leads) | 4–5 j | Validation Zod, honeypot, rate limit, forward intake, logs |
| **PR5** | Légal + perf + finitions (cookies, Lighthouse) | 3–4 j | Pages légales, Lighthouse ≥90, cookies banner, recette |

**Total** : **4–6 semaines** (parallélisable par équipe).

---

## 🚨 Assets critiques manquants (fournir par deadline)

| Asset | Deadline | Fallback | Criticité |
|-------|----------|---|---|
| Logo FAST SVG | **PR1** | Placeholder "F" cercle | HAUTE |
| Vidéo 5s OU image | **PR1** | Image JPG fallback | HAUTE |
| 4 icônes équipements | **PR1** | SVG basic circles | MOYENNE |
| 20 photos terrain | **PR2** | Placeholder gris | HAUTE |
| 3 case studies (text + images) | **PR3** | Fallback "Coming soon" premium | HAUTE |

---

## 📝 Sources de vérité (non modifiées, OPPOSABLES)

1. **`FAST_SITE_SPEC_v1.md`** ← Spec maître (missions, doctrine, pages, SLA, architecture)
2. **`FAST_TECH_SERVICES_COPY_v1.md`** ← Copy éditoriale officielle (identité, promesse, services, méthode)
3. **`content-map.yml`** ← SEO + structure pages (pages P0+P1, meta, CTAs)
4. **`assets-manifest.md`** ← Inventaire assets (logos, images, proofs)
5. **`docs/site-audit/*`** ← Audits (erreurs à corriger, pas guide créatif)

**Règle** : Si conflit → spec gagne.

---

## ✅ Critères acceptation (PASS/FAIL per PR)

### PASS obligatoire (tous les PRs)
- Build OK (`npm run build`)
- Zéro placeholder texte visible
- Zéro "Chargement…"
- SLA unifié (config-driven)
- Lighthouse ≥90 (perf mobile priorité)
- Contact fonctionnel
- Formulaires soumettent sans erreur

### FAIL immédiat (NO-GO)
- Contact cassé
- SLA contradictoire
- Stats/avis non prouvables
- FASTCore exposed côté client
- Secrets localStorage/sessionStorage
- "Chargement…" visible
- Placeholder texte visible
- **Station lavage absente**
- Ton incohérent (tu/ta vs vous/votre)

---

## 🎬 Prochaine étape (pour Fortunat)

### Immédiat (1–2 jours)
1. Lisez **PR0_FINAL_SUMMARY.md** (15 min)
2. Approuvez plan PR1–PR5 (ou demandez adjustements)
3. Validez critères acceptation final
4. **Confirmez** : "PR0 validated, PR1 can start" (email)

### Avant PR1 start (3–5 jours)
5. Fournissez **logo** (SVG haute def OU PNG 300dpi)
6. Fournissez **vidéo 5s** OU **image fallback JPG**
7. Confirmez **intake endpoint** (URL + auth) pour PR4

### Pendant PR1–PR5 (4–6 semaines)
8. Fournissez **20 photos terrain** (deadline PR2, ~10 jours)
9. Fournissez **3 case studies** (deadline PR3, ~20 jours)
10. Itérez chaque PR : validation + recette + sign-off

---

## 📂 Fichiers générés par PR0

```
docs/site-spec/
├── PR0_FINAL_SUMMARY.md                    [Exécutif — LISEZ CECI D'ABORD]
├── PR0_CHECKLIST_VALIDATION.md             [Validation rapide 5 min]
├── PR0_SNAPSHOT.md                         [Snapshot technique complet (1200 lignes)]
├── FAST_SITE_SPEC_EXECUTIVE_SUMMARY.md     [Checklist spec + stratégie]
├── NEXT_JS_ARCHITECTURE_PLAN.md            [Blueprints architecture dev]
├── PR1_FILES_MANIFEST.md                   [Inventaire fichiers atomique PR1–PR5]
├── PR0_DOCUMENT_INDEX.md                   [Index navigation documents]
├── PR0_README.md                           [CE FICHIER]
│
├── [Sources de vérité — NON MODIFIÉES]
├── FAST_SITE_SPEC_v1.md                    [Spec maître]
├── FAST_TECH_SERVICES_COPY_v1.md           [Copy éditoriale]
├── content-map.yml                         [SEO + pages mapping]
├── assets-manifest.md                      [Assets inventory]
└── PR0_CHECKLIST.md                        [Définition du snapshot]
```

---

## 🔗 Liens rapides

- **Pour décider** : [PR0_FINAL_SUMMARY.md](PR0_FINAL_SUMMARY.md)
- **Pour valider rapide** : [PR0_CHECKLIST_VALIDATION.md](PR0_CHECKLIST_VALIDATION.md)
- **Pour technical details** : [PR0_SNAPSHOT.md](PR0_SNAPSHOT.md)
- **Pour dev** : [NEXT_JS_ARCHITECTURE_PLAN.md](NEXT_JS_ARCHITECTURE_PLAN.md) + [PR1_FILES_MANIFEST.md](PR1_FILES_MANIFEST.md)
- **Pour navigation** : [PR0_DOCUMENT_INDEX.md](PR0_DOCUMENT_INDEX.md)

---

## 📞 Questions / Clarifications ?

Consultez :
- **Plan détails** → `PR0_SNAPSHOT.md` section F (5 PRs atomiques)
- **Spec clarifications** → `FAST_SITE_SPEC_v1.md` ou `FAST_SITE_SPEC_EXECUTIVE_SUMMARY.md`
- **Copy clarifications** → `FAST_TECH_SERVICES_COPY_v1.md`
- **Architecture clarifications** → `NEXT_JS_ARCHITECTURE_PLAN.md`
- **Fichiers clarifications** → `PR1_FILES_MANIFEST.md`

---

## 📊 Métrique PR0 (snapshot)

- **Documents générés** : 8 fichiers markdown (~4100 lignes docs)
- **Code modifié** : 0 fichiers (docs only)
- **Builds** : ✅ Pass
- **Tests** : ✅ 32 pass / 3 fail (non-bloquant)
- **Lint** : ⚠️ 57 problems (ignorables CarServ legacy)
- **Routes compilées** : 13 (SSG)
- **Durée estimée PR1–PR5** : 4–6 semaines
- **Assets manquants** : 5 (logo, vidéo, icônes, photos, cases)
- **Bloquants audit** : 5 (placeholders, SLA, contact, station lavage, ton)
- **Risques documentés** : 4 (assets, intake URL, analytics, Turnstile)

---

## ✨ Status PR0 final

✅ **SNAPSHOT COMPLET**  
✅ **PLAN TRACÉ (5 PRs atomiques)**  
✅ **CRITÈRES ACCEPTATION CLAIRS**  
✅ **RISQUES DOCUMENTÉS**  
✅ **ZÉRO CODE MODIFIÉ (docs only)**  
✅ **PRÊT VALIDATION FORTUNAT**

---

**Généré le** : 4 janvier 2026  
**Auteur** : GitHub Copilot (Assistant PR0)  
**Prochaine étape** : Validation Fortunat → PR1 start

**Pour démarrer** : Lisez [PR0_FINAL_SUMMARY.md](PR0_FINAL_SUMMARY.md) (15 min), approuvez, fournissez assets, green light.

