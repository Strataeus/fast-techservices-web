# PR0_DOCUMENT_INDEX.md — Index complet snapshot + plan PR0

**Date** : 4 janvier 2026  
**Contenu** : Guide de lecture des 4 documents snapshot PR0 générés + référence aux sources de vérité.

---

## Documents PR0 générés (dans `docs/site-spec/`)

### 1. **PR0_FINAL_SUMMARY.md** ← LISEZ CECI D'ABORD (15 min)
**Longueur** : 420 lignes  
**Objectif** : Résumé exécutif pour décideur (Fortunat).  
**Contient** :
- TL;DR 3 phrases
- État critique (✅ marche / ❌ bloquants)
- Snapshot outputs bruts (git, build, lint, test)
- Spec résumé (3 sources de vérité)
- Assets manquants + fallbacks
- Architecture cible (arborescence)
- Plan PR1–PR5 résumé (durée, fichiers, livrables)
- Critères acceptation (PASS/FAIL/NO-GO)
- Livrables PR0
- **10 points clés pour Fortunat**
- Prochaine étape (validation + PR1 start)
- Checklist PR0 validation

**À faire** : Lire d'abord (30 min), approuver plan.

---

### 2. **PR0_SNAPSHOT.md** ← RÉFÉRENCE TECHNIQUE (40 min)
**Longueur** : 1200 lignes  
**Objectif** : Snapshot "brut" du repo (preuves audit + plan détaillé).  
**Contient** (sections A–L) :
- **A) VCS & état repo** : git status, branches, logs, diff–stat (preuves brutes)
- **B) Arborescence** : listing racine (70+ fichiers docs), tree structure apps/web
- **C) Commandes baseline** : build output complet, lint output (57 problems listés), test output (32 pass / 3 fail)
- **D) Lecture sources de vérité** :
  - FAST_SITE_SPEC_v1.md résumé (10 bullets objectifs + doctrine)
  - FAST_TECH_SERVICES_COPY_v1.md résumé (10 bullets promesse)
  - Pages P0 + P1 listées (13 P0)
  - Assets critiques manquants
- **E) Audit findings** : Top 5 bloquants avec tests PASS/FAIL
  - Placeholders visibles
  - SLA incohérent
  - Contact cassé
  - Station lavage absente
  - Ton incohérent
- **F) Plan PR1..PR5** : 5 PRs détaillées (DoR, scope, out-of-scope, fichiers, DoD, validation commands)
- **G) Risques & UNKNOWN** : assets manquants, intake URL undefined, analytics TBD
- **H) Arborescence cible PR1** : structure Next.js post-PR1
- **I) Liste fichiers PR1..PR5** : inventaire atomique fichiers à créer/modifier
- **J) Recette finale** : checklist PASS/FAIL + FAIL immédiat (NO-GO)
- **K) Références** : sources de vérité, outils, critères acceptation
- **L) Récapitulatif état critique** : tableau résumé (13 items PASS/⚠️/❌)

**À faire** : Consulter pour validation détails PR1–PR5 + critères DoD.

---

### 3. **FAST_SITE_SPEC_EXECUTIVE_SUMMARY.md** ← CHECKLIST SPEC (20 min)
**Longueur** : 380 lignes  
**Objectif** : Résumé exécutif spec + stratégie conversion CarServ.  
**Contient** :
- **1) Spec FAST_SITE_SPEC_v1.md — 10 bullets**
  - Objectifs KPIs (5 points)
  - Doctrine non négociable (5 points)
- **2) Copy FAST_TECH_SERVICES_COPY_v1.md — 10 bullets**
  - Identité + différenciation (3)
  - Périmètre services (4)
  - Offre cœur + livrables (3)
- **3) Content Map — Pages P0 + P1**
  - 13 pages P0 (obligatoires)
  - Pages P1 futures (tarifs, faq, a-propos)
- **4) Assets manifest**
  - Critiques vs UNKNOWN (tableau)
  - Stratégie fallback
- **5) Top 5 bloquants audit** (avec tests PASS/FAIL)
- **6) Stratégie conversion CarServ → FAST Next.js**
  - Arborescence before/after
  - Stratégie CSS/JS (ne pas copier bêtement)
  - Plan détaillé (5 étapes)
- **7) Next.js App Router — Principes** (files = routes, API routes, layouts, metadata)
- **8) Dépendances** + stratégie (utiliser Tailwind + Framer Motion, éviter jQuery)
- **9) Commandes canoniques** (baseline CI)
- **10) Critères acceptation** (PASS/FAIL per PR)

**À faire** : Valider checklist spec (objectifs + interdits clairs).

---

### 4. **NEXT_JS_ARCHITECTURE_PLAN.md** ← BLUEPRINTS ARCHITECTURE (60 min)
**Longueur** : 850 lignes  
**Objectif** : Blueprints détaillés arborescence + composants + data flow.  
**Contient** :
- **1) Structure App Router finale** (post-PR5, 150 lignes)
  - Arborescence complète (`app/`, `components/`, `lib/`, `content/`, `public/`, `__tests__/`)
  - Commentaires par dossier (usage, responsabilité)
- **2) Mappage composants CarServ → FAST Next.js**
  - Hero (exemple détaillé : HTML before → TSX after)
  - Equipment Grid (data-driven)
  - Formulaires (avec API integration)
  - Code examples réalistes
- **3) Design Tokens FAST** (Tailwind v4)
  - Palette couleurs (dark slate + cyan accent)
  - tailwind.config.js config
  - Usage dans composants (className examples)
- **4) Stratégie images + fallbacks**
  - `next/image` usage
  - `ImageWithFallback` component (dégradé graceful)
- **5) Stratégie CSS migration**
  - Option A : import + purge (recommandé)
  - Option B : CSS-in-JS wrapper (alternatif)
- **6) Commandes dev + build** (npm run commands)
- **7) Checkpoint validation per PR** (PR1–PR5 quick checklist)

**À faire** : Référence pour développeurs PR1–PR5.

---

### 5. **PR1_FILES_MANIFEST.md** ← LISTE FICHIERS PAR PR (90 min)
**Longueur** : 950 lignes  
**Objectif** : Inventaire exhaustif fichiers à créer/modifier per PR.  
**Contient** (PR1–PR5) :
- **PR1 — Socle** (layout/tokens/assets)
  - À CRÉER (layout.tsx, components, tokens, config)
  - À MODIFIER (tailwind.config.js)
  - Assets (brand/, media/, icons/, proofs/)
  - Validation commands
  - Livrables checklist
- **PR2 — Pages conversion** (Home + FAST Remote)
  - À CRÉER (pages, sections, forms, config.ts)
  - À MODIFIER (none)
  - Validation (curl commands, grep, Lighthouse)
  - Livrables checklist
- **PR3 — Pages SEO P0** (services + méthode + réalisations)
  - À CRÉER (4 pages équipement, pages landing)
  - À MODIFIER (existing pages → augment)
  - Content JSON files
  - Validation commands
  - **Livrables CRITICAL : 4 équipements + fallback "Coming soon"**
- **PR4 — Formulaires + intake** (API)
  - À CRÉER (/api/leads, forms, validation, tests)
  - À MODIFIER (pages + .env.example)
  - Validation (curl test POST, rate limit, forward)
  - Livrables checklist
- **PR5 — Légal + perf + finitions** (cleanup + recette)
  - À CRÉER (3 pages légales, CookiesBanner, mdx)
  - À MODIFIER (layout, robots, sitemap, package.json)
  - Validation (Lighthouse audit, robots.txt, recette cases)
  - Livrables CRITICAL : Lighthouse full ≥90
- **Tableau résumé** (fichiers par PR : create/modify/assets)

**À faire** : Utiliser comme checklist implémentation PR1–PR5.

---

## Sources de vérité (existantes, NOT modifiées par PR0)

### Spec maître
- **`FAST_SITE_SPEC_v1.md`** (356 lignes)
  - Mission, doctrine, KPIs, pages obligatoires, SLA, architecture, formules, intégration FASTCore
  - **Source ABSOLUE** de vérité (si conflit = spec gagne)

### Copy éditoriale
- **`FAST_TECH_SERVICES_COPY_v1.md`** (142 lignes)
  - Identité, promesse, différenciation, services (4 équipements), FAST Remote, méthode, livrables
  - **Source ABSOLUE** copie (pas inventer, condenser OK)

### SEO + structure pages
- **`content-map.yml`** (567 lignes)
  - Navigation, sections réutilisables, pages P0 + P1 mapping
  - Meta titles/descriptions uniques
  - SLA défini
  - Primary + secondary CTAs
  - **Source ABSOLUE** pour sections + SEO

### Assets manifest
- **`assets-manifest.md`** (100+ lignes)
  - Logo, vidéo, images, icônes, photos terrain, case studies
  - Usage par page/section
  - TODO checklist (pour Fortunat)
  - **Source ABSOLUE** d'inventaire assets

### Audits existants
- **`docs/site-audit/Audit Site FAST.txt`** (207 lignes)
  - Pages analysées, verdict total, 6 blocages détaillés, analyse par page
  - **Source AUDIT** pour erreurs à éliminer (pas guide créatif)

---

## Hiérarchie sources (si conflit)

1. `FAST_SITE_SPEC.md` ← **ABSOLUE** (spec règle tout)
2. `FAST_TECH_SERVICES_COPY_v1.md` ← **ÉDITORIALE** (copie seule officielle)
3. `content-map.yml` ← **STRUCTURALE** (pages + SEO mapping)
4. `assets-manifest.md` ← **INVENTAIRE** (assets source)
5. `docs/site-audit/*` ← **AUDIT** (erreurs à corriger, pas créativité)
6. **TOUT LE RESTE = NON OPPOSABLE** (interdit inventer)

---

## Comment utiliser ces documents

### Scénario A : Fortunat (décideur)
1. Lisez `PR0_FINAL_SUMMARY.md` (15 min)
2. Décidez : "Approuvé, PR1 start" OU "Ajustements demandés"
3. Fournissez : logo, vidéo, intake URL, timeline assets
4. Passez `PR1_FILES_MANIFEST.md` à l'équipe dev

### Scénario B : Dev PR1 (layout/tokens/assets)
1. Lisez `NEXT_JS_ARCHITECTURE_PLAN.md` sections 1–3 (30 min)
2. Consultez `PR1_FILES_MANIFEST.md` pour checklist fichiers
3. Référencez `FAST_SITE_SPEC_EXECUTIVE_SUMMARY.md` section 3 (design tokens)
4. Implémentez fichiers PR1, testez avec validation commands PR1

### Scénario C : Dev PR2 (pages conversion)
1. Lisez `NEXT_JS_ARCHITECTURE_PLAN.md` section 2 (mappage composants)
2. Consultez `PR2` section dans `PR1_FILES_MANIFEST.md`
3. Référencez `content-map.yml` pour structure sections (home + fast-remote)
4. Référencez `FAST_TECH_SERVICES_COPY_v1.md` pour copie exacte (pas inventer)
5. Implémentez, testez SLA identique partout

### Scénario D : Dev PR3 (pages SEO P0)
1. Consultez `PR3` section `PR1_FILES_MANIFEST.md`
2. Référencez `content-map.yml` pour structure 4 équipements + pages
3. Référencez `FAST_TECH_SERVICES_COPY_v1.md` sections services (copie exact)
4. **CRITICAL** : si photos absent, afficher "Coming soon" premium (pas fake)
5. Implémentez, testez meta tags unique per page

### Scénario E : Dev PR4 (formulaires + intake)
1. Consultez `PR4` section `PR1_FILES_MANIFEST.md`
2. Référencez `content-map.yml` sections `contact_form` pour champs
3. Implémentez `/api/leads` (validation, honeypot, rate limit, forward)
4. Test : curl POST /api/leads, vérifier logs, vérifier forward intake
5. Implémentez formulaires → soumission

### Scénario F : Dev PR5 (légal + perf + finitions)
1. Consultez `PR5` section `PR1_FILES_MANIFEST.md`
2. Créez pages légales (mdx) + cookies banner
3. Validez Lighthouse full (perf 90+, SEO 95+, A11y 95+)
4. Exécutez recette checklist (20+ cases)
5. Signez off : "Recette PASS"

---

## Fichiers PR0 résumé (ce qui a été créé)

| Fichier | Lignes | Destinataire | But |
|---------|--------|---|---|
| **PR0_FINAL_SUMMARY.md** | 420 | Fortunat | Résumé exécutif, décisions |
| **PR0_SNAPSHOT.md** | 1200 | Validation tech, plan détail | Snapshot + plan PR1–PR5 |
| **FAST_SITE_SPEC_EXECUTIVE_SUMMARY.md** | 380 | Equipe dev | Checklist spec + stratégie |
| **NEXT_JS_ARCHITECTURE_PLAN.md** | 850 | Dev PR1–PR5 | Blueprints architecture |
| **PR1_FILES_MANIFEST.md** | 950 | Dev PR1–PR5 | Inventaire fichiers atomique |
| **PR0_DOCUMENT_INDEX.md** | CE FICHIER | Navigation | Guide lecture documents |

**Total PR0 docs** : ~4000 lignes documentation, 0 ligne code modifiée.

---

## Prochaine étape

1. **Fortunat** : Validez `PR0_FINAL_SUMMARY.md`
2. **Équipe** : Passez `PR1_FILES_MANIFEST.md` + `NEXT_JS_ARCHITECTURE_PLAN.md` à dev PR1
3. **Fortunat** : Fournissez assets (logo, vidéo, photos, cas)
4. **Dev PR1** : Start implémentation (4–5 jours)
5. **Fortunat** : Fournissez INTAKE_URL PR4

---

**Fin index documents PR0**

**Généré le** : 4 janvier 2026  
**Statut** : ✅ **SNAPSHOT COMPLET + PLAN PRÊT, AUCUN CODE MODIFIÉ**

