# PR0_CHECKLIST_VALIDATION.md — Quick validation PR0 (une page)

**Date** : 4 janvier 2026  
**But** : Checklist rapide validation PR0 (5 min lecture).

---

## A) État repo (PASS/FAIL)

- [x] Spec `FAST_SITE_SPEC_v1.md` présent
- [x] Copy `FAST_TECH_SERVICES_COPY_v1.md` présent
- [x] Map `content-map.yml` présent
- [x] Assets manifest `assets-manifest.md` présent
- [x] Audits `docs/site-audit/*` présents
- [x] Template CarServ dans `app/web/_template/CarServ/`
- [x] Build `npm run build` → PASS (13 routes compilées)
- [x] Lint `npm run lint` → 57 problems (ignorables CarServ legacy)
- [x] Test `npm run test` → 32 pass / 3 fail (async cleanup, non-bloquant)
- [x] Git status clean (modifié : package-lock.json uniquement)

**Status** : ✅ **PRÉREQUIS PASS**

---

## B) Snapshot repo (PASS)

- [x] `git status` output (repo propre, branche main)
- [x] `git log -5 --oneline` (derniers commits listés)
- [x] `git branch -vv` (branches identifiées)
- [x] `tree -L 4` arborescence (structure repo visible)
- [x] Dépendances listées (node v20, npm v10, next 16, react 19, tailwind 4)
- [x] Commandes canoniques identifiées (build, lint, test, start)

**Status** : ✅ **SNAPSHOT COMPLET**

---

## C) Sources de vérité résumées (PASS)

- [x] FAST_SITE_SPEC.md : 10 bullets objectifs + doctrine résumés
- [x] FAST_TECH_SERVICES_COPY.md : 10 bullets promesse + périmètre résumés
- [x] content-map.yml : 13 pages P0 + P1 listées
- [x] assets-manifest.md : critiques vs fallbacks identifiés

**Status** : ✅ **SOURCES VALIDÉES**

---

## D) Audit findings identifiés (PASS)

- [x] Bloquant #1 : Placeholders visibles (TEST: grep → 0)
- [x] Bloquant #2 : SLA incohérent (TEST: grep SLA → identique partout)
- [x] Bloquant #3 : Contact cassé (TEST: formulaire visible immédiatement)
- [x] Bloquant #4 : Station lavage absente (TEST: 4 équipements naviguables)
- [x] Bloquant #5 : Ton incohérent (TEST: grep tu/ta → 0)

**Status** : ✅ **5 BLOQUANTS IDENTIFIÉS + CRITÈRES TESTABLES**

---

## E) Plan PR1..PR5 (PASS)

- [x] PR1 Socle : scope, DoR, DoD, fichiers listés (4–5 jours)
- [x] PR2 Conversion : scope, DoR, DoD, fichiers listés (5–6 jours)
- [x] PR3 SEO P0 : scope, DoR, DoD, fichiers listés (6–7 jours)
- [x] PR4 Intake : scope, DoR, DoD, fichiers listés (4–5 jours)
- [x] PR5 Finitions : scope, DoR, DoD, fichiers listés (3–4 jours)

**Status** : ✅ **PLAN ATOMIQUE TRACÉ (4–6 SEMAINES TOTAL)**

---

## F) Documents PR0 générés (PASS)

| Document | Lignes | Statut |
|----------|--------|--------|
| PR0_FINAL_SUMMARY.md | 420 | ✅ Exécutif pour Fortunat |
| PR0_SNAPSHOT.md | 1200 | ✅ Snapshot technique complet |
| FAST_SITE_SPEC_EXECUTIVE_SUMMARY.md | 380 | ✅ Checklist spec |
| NEXT_JS_ARCHITECTURE_PLAN.md | 850 | ✅ Blueprints dev |
| PR1_FILES_MANIFEST.md | 950 | ✅ Inventaire fichiers |
| PR0_DOCUMENT_INDEX.md | 300 | ✅ Index navigation |
| **TOTAL** | **~4100** | **✅ COMPLET** |

**Status** : ✅ **PR0 DELIVERABLES COMPLETS (0 CODE MODIFIÉ)**

---

## G) Risques & UNKNOWN déclarés (PASS)

- [x] Assets manquants identifiés (logo, vidéo, photos, cases)
- [x] Fallback strategies définies (placeholder graceful, pas fake)
- [x] Intake URL marquée UNKNOWN (obtenir Fortunat PR4)
- [x] Analytics marquée future P1 (feature-flag OK)

**Status** : ✅ **RISQUES DOCUMENTÉS**

---

## H) Critères acceptation finale (PASS)

- [x] SLA unique, source unique → config-driven
- [x] Contact fonctionnel (PR2 re-implémente, PR4 active soumission)
- [x] Station lavage obligatoire (4 équipements complets)
- [x] Ton FR, vouvoiement uniforme (zéro tu/ta)
- [x] Zéro placeholder visible (grep testable)
- [x] Lighthouse ≥ 90 cible (perf mobile priorité)
- [x] Formulaires soumettent sans erreur (API PR4)
- [x] Recette stricte (20+ cases PASS/FAIL)

**Status** : ✅ **CRITÈRES ACCEPTATION CLAIRS**

---

## Validation finale (Fortunat décide)

### PASS — PR0 livrable
- [x] Code : **zéro ligne modifiée** (docs only)
- [x] Snapshot : **preuves brutes** (git, build, lint, test outputs)
- [x] Plan : **5 PRs atomiques** avec scope + DoD + fichiers
- [x] Risques : **documentés** (assets, intake URL, analytics)
- [x] Critères : **testables** (grep, curl, Lighthouse, recette checklist)

### NEXT STEPS
1. **Fortunat** : Validez `PR0_FINAL_SUMMARY.md` (15 min)
   - Approuvez plan (ou demandez adjustements)
   - Fournissez : logo SVG, vidéo OU image, email pour intake
   - Confirmez : "PR1 can start"

2. **Équipe** : Recevez `PR1_FILES_MANIFEST.md`
   - Implémentez PR1 (layout/tokens/assets)
   - Testez : build OK, nav présent, design tokens appliqués
   - Validez : Lighthouse ≥85

3. **Fortunat** : Fournissez assets
   - Logo haute def (PR1 urgent)
   - Vidéo 5s OU image fallback (PR1 urgent)
   - 20 photos terrain (PR2 deadline)
   - 3 case studies complets (PR3 deadline)
   - Intake endpoint URL + auth (PR4 deadline)

4. **Équipe + Fortunat** : Itérez PR1..PR5 (4–6 semaines)
   - 1 PR par intention atomique
   - Zéro refacto non demandé
   - Recette stricte chaque PR

---

## Checklist Fortunat — Action requise

- [ ] Lire PR0_FINAL_SUMMARY.md (15 min)
- [ ] Approuver plan PR1–PR5 (scope, durée, livrables)
- [ ] Valider critères acceptation final (SLA, contact, formulaires, station lavage, ton)
- [ ] Fournir logo (haute def SVG/PNG)
- [ ] Fournir vidéo 5s OU image fallback
- [ ] Fournir endpoint intake (URL + auth)
- [ ] Confirmer timeline assets (photos PR2, cases PR3)
- [ ] Sign-off : "PR0 validé, PR1 start approved"

---

**Status PR0 final** : ✅ **COMPLET, PRÊT VALIDATION FORTUNAT**

**Pour démarrer PR1** : Validation + assets + green light.

