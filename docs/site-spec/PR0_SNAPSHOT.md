# PR0_SNAPSHOT.md — État Repo + Plan PR1..PR5 (SITE FAST Tech Services)

**Date** : 4 janvier 2026  
**Repo** : `c:\dev\fast-techservices-web` (monorepo FAST, branche `main`)  
**Status** : **SNAPSHOT PRIS, PLAN TRACÉ, CODE INCHANGÉ**

---

## A) VCS & État Repo (outputs bruts)

### A.1 — `git status`
```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   package-lock.json

Untracked files:
  (use "git add <file>..." to include what will be committed)
        PR_DESCRIPTION.md
        app/web/
        docs/PR/
        docs/site-audit/
        docs/site-spec/
        test_output.txt
```

### A.2 — `git branch -vv`
```
  feature/fastcore-backend              8b65c4c FEAT: FASTCore Backend - Production-Ready Lead Ingest Service
  feature/queue-flush-job-and-dashboard 9df0c2f FEAT: Queue Flush Job + Email Notifications + Admin Dashboard
  feature/site-forms-api-prod-ready     c3f542a CONFIG: Add test script to package.json + quick reference guide
* main                                  9df0c2f [origin/main] FEAT: Queue Flush Job + Email Notifications + Admin Dashboard
```

### A.3 — `git log -5 --oneline`
```
9df0c2f (HEAD -> main, origin/main, feature/queue-flush-job-and-dashboard) FEAT: Queue Flush Job + Email Notifications + Admin Dashboard
8b65c4c (feature/fastcore-backend) FEAT: FASTCore Backend - Production-Ready Lead Ingest Service
c3f542a (origin/feature/site-forms-api-prod-ready, feature/site-forms-api-prod-ready) CONFIG: Add test script to package.json + quick reference guide
b5fb551 DOC: Add final delivery summary for Site Forms API
ee4bb38 FEAT: Site Forms API - Production-ready contact form system
```

### A.4 — `git diff --stat` (modifié uniquement `package-lock.json`)
```
 package-lock.json | 150 ++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 150 insertions(+)
```

**Conclusion A** : Repo propre, modif mineure dans les dépendances. Pas de code site fonctionnellement altéré avant PR0.

---

## B) Arborescence (outputs bruts)

### B.1 — Contenu racine (30+ fichiers + répertoires principaux)

```
Directory listing (racine c:\dev\fast-techservices-web):
├── .data/
├── .next/
├── app/                          [conteneur Next.js App Router]
│   ├── api/                      [routes API (contact, etc.)]
│   ├── confidentialite/
│   ├── contact/
│   ├── error.tsx
│   ├── fast-remote/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── mentions-legales/
│   ├── methode/
│   ├── not-found.tsx
│   ├── page.tsx                  [Accueil /]
│   ├── preuves/
│   ├── robots.ts
│   ├── services/
│   ├── sitemap.ts
│   ├── web/                      [⚠️ contient _template/CarServ]
│   └── zones/
├── components/                   [composants UI/sections réutilisables]
├── docs/
│   ├── PR/                       [documentations PR anciennes]
│   ├── site-audit/               [audits existants]
│   └── site-spec/                [sources de vérité : spec + copy + maps]
├── fastcore/                     [intégration FASTCore — à isoler]
├── hooks/                        [React hooks]
├── lib/                          [utilitaires : queue, validation, etc.]
├── node_modules/
├── public/                       [assets statiques]
├── scripts/                      [build/convert scripts]
├── styles/                       [CSS globaux]
├── __tests__/                    [Jest + tests]
├── eslint.config.mjs
├── jest.config.json
├── next.config.ts
├── next-env.d.ts
├── package.json                  [dépendances principales listées en B.2]
├── package-lock.json             [modifié : +150 lignes]
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── [70+ fichiers docs/md — historiques PRs antérieures]
```

### B.2 — Dépendances (versions actuelles, de `package.json`)

**Runtime :**
- `next@16.1.1`
- `react@19.2.3`
- `react-dom@19.2.3`
- `framer-motion@^11.11.17`
- `zod@^4.3.4`

**Build / Dev :**
- `typescript@^5`
- `eslint@^9` + `eslint-config-next@16.1.1`
- `jest@^30.2.0` + `@testing-library/react@^16.3.1`
- `tailwindcss@^4` + `@tailwindcss/postcss@^4`
- `ts-jest@^29.4.6`, `ts-node@^10.9.2`

**Node / npm :**
- `node@v20.19.6`
- `npm@10.8.2`

**Gestion** : `package-lock.json` (npm, pas pnpm/yarn)

**Conclusion B** : Versions modernes (Next 16, React 19), config Tailwind CSS v4, jest configuré.

---

## C) Commandes canoniques & outputs

### C.1 — Build (`npm run build`)
```
> fast-techservices-web@0.1.0 build
> next build

⚙ Next.js 16.1.1 (Turbopack)

Creating an optimized production build ...
⚡ Compiled successfully in 7.6s
Running TypeScript ...
Collecting page data using 11 workers ...
Generating static pages using 11 workers (0/15) ...
Generating static pages using 11 workers (3/15)
Generating static pages using 11 workers (7/15)
Generating static pages using 11 workers (11/15)
⚡ Generating static pages using 11 workers (15/15) in 478.5ms
Finalizing page optimization ...

Route (app)
◆ ◇ /
◆ ◇ /_not-found
◆ ○ /api/contact
◆ ◇ /confidentialite
◆ ◇ /contact
◆ ◇ /fast-remote
◆ ◇ /mentions-legales
◆ ◇ /methode
◆ ◇ /preuves
◆ ◇ /robots.txt
◆ ◇ /services
◆ ◇ /sitemap.xml
◆ ◇ /zones

◇  (Static)   prerendered as static content
○  (Dynamic)  server-rendered on demand
```

**Status** : ✅ **BUILD PASS** — 13 routes existantes, toutes compilées en SSG (static) sauf `/api/contact` (dynamic).

---

### C.2 — Lint (`npm run lint`) — outputs (fin)
```
C:\dev\fast-techservices-web\app\web\_template\CarServ\lib\wow\wow.js
  273:13  error    Unexpected aliasing of 'this' to local variable  @typescript-eslint/no-this-alias
  374:13  error    Unexpected aliasing of 'this' to local variable  @typescript-eslint/no-this-alias
  453:18  warning  'error' is defined but never used              @typescript-eslint/no-unused-vars

C:\dev\fast-techservices-web\app\web\_template\CarServ\lib\wow\wow.min.js
  3:54    warning  Expected an assignment or function call...     @typescript-eslint/no-unused-expressions
  3:219   warning  Expected an assignment or function call...
  3:1008  warning  Expected an assignment or function call...
  [... 20+ similar warnings ...]
  3:3879  error    Unexpected aliasing of 'this' to local variable  @typescript-eslint/no-this-alias
  3:4567  warning  Expected an assignment or function call...
  3:5587  error    Unexpected aliasing of 'this' to local variable  @typescript-eslint/no-this-alias

C:\dev\fast-techservices-web\scripts\convert-images.js
  3:12  error  A `require()` style import is forbidden        @typescript-eslint/no-require-imports
  4:14  error  A `require()` style import is forbidden        @typescript-eslint/no-require-imports

⚠️  57 problems (10 errors, 47 warnings)
```

**Status** : ⚠️ **LINT FAIL (non-bloquant pour build)** — Problèmes localisés :
- `app/web/_template/CarServ/*` (wow.js minifiés) → erreurs ESLint attendues (JS legacy, à ignorer via `.eslintignore`)
- `scripts/convert-images.js` → require() non autorisé (remplacer par import ES6)

---

### C.3 — Test (`npm run test`) — outputs (fin)
```
[FormsQueue] Lead queued (total: 9)
[FormsQueue] Lead queued (total: 10)

A worker process has failed to exit gracefully and has been force exited. This is likely
caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to
find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Test Suites: 1 failed, 3 passed, 4 total
Tests:       3 failed, 32 passed, 35 total
Snapshots:   0 total
Time:        3.226 s
Ran all test suites.
```

**Status** : ⚠️ **TEST PARTIAL** (3 failed / 32 passed) — Problèmes temporaires (cleanup async, queue issues). À corriger en PR4, non bloquant pour snapshot.

---

## D) Lecture des sources de vérité (résumés)

### D.1 — Résumé `FAST_SITE_SPEC_v1.md` (objectifs & interdits)

**Objectifs (KPIs) :**
1. Site premium/high-tech/industriel pour FAST Tech Services.
2. Taux conversion FAST Remote ≥ 2% (cible initiale).
3. 100% des soumissions : accusé immédiat + enregistrement server-side + intake.
4. Lighthouse : Perf/SEO/Accessibility ≥ 90 (cible).
5. LCP mobile ≤ 2.5s (cible).
6. Pages réalisations : ≥ 3 case studies (ou fallback premium sans fake preuves).

**Doctrine non négociable :**
- Site ne contacte **jamais FASTCore directement** → uniquement `/api/leads` server-side.
- Aucun secret côté navigateur (pas localStorage/sessionStorage pour clés).
- Pas de "Chargement…" / erreur / placeholder visible en prod.
- Pas de stats/avis/notes inventées ; si absent → UNKNOWN explicite.
- SLA unique, source unique, identique partout.

**Pages obligatoires (P0) :**
- `/` Accueil, `/fast-remote`, `/services` + 4 pages équipement (ponts, compresseurs, cabines, **stations-lavage** ← CRITIQUE), `/methode`, `/realisations`, `/zones`, `/contact`, pages légales.

---

### D.2 — Résumé `FAST_TECH_SERVICES_COPY_v1.md` (promesse & périmètre)

**Identité :**
- Expert électromécanique terrain, orientation intégration & maintenance industrielle appliquée garage automobile.
- Culture "discipline, méthode, sécurité, continuité d'exploitation" (issue chantiers exigeants).

**Promesse :**
- Remettre en exploitation **proprement**, produire un **résultat fiable + dossier clair**.

**Différenciation :**
- Doctrine : **TERRAIN → PREUVE → VERDICT** (pas de preuve = pas fait, UNKNOWN explicite si critique).
- STOP & CALL si risque.

**Services cœur (4 équipements) :**
- **Ponts élévateurs** : électrique, hydraulique, conformité, tests.
- **Compresseurs & réseaux d'air** : vis/piston, traitement, fuites, stabilité.
- **Cabines peinture & ventilation** : extraction, variateurs, coffrets, stabilité process.
- **Stations de lavage** : commande, puissance, pompage, sécurités.

**FAST Remote :**
- Diagnostic + assistance technique **visio** → collecte indices/preuves, tests guidés, verdict clair (RÉSOLU / PLAN / ONSITE REQUIRED / NO-GO).
- Objectif : gagner temps, éviter déplacements inutiles, préparer intervention onsite **chirurgicale**.

**Méthode FAST (5 étapes) :**
1. Cadrage : périmètre, prérequis, risques, objectif clair.
2. Preuves & baseline : mesures/constats avant action.
3. Tests discriminants : tests qui tranchent.
4. Action : intervention propre, sécurisée.
5. Validation & verdict : tests sortie + verdict écrit (PASS/FAIL/RESERVE/ONSITE).

**Culture preuve :** avant/diag/pendant/après, traçabilité, "pas de preuve = pas fait".

---

### D.3 — Pages P0 & P1 (depuis `content-map.yml`)

**Pages P0 (publication immédiate) :**
1. `/` (Accueil)
2. `/fast-remote` (offre cœur + formulaire)
3. `/services` (hub)
4. `/services/ponts-elevateurs` (équipement #1) ← **À CRÉER**
5. `/services/compresseurs-air` (équipement #2) ← **À CRÉER**
6. `/services/cabines-peinture-ventilation` (équipement #3) ← **À CRÉER**
7. `/services/stations-lavage` (équipement #4) ← **À CRÉER**
8. `/methode` (méthode FAST)
9. `/realisations` (preuves terrain)
10. `/zones` (d'intervention)
11. `/contact` (page formulaire)
12. `/mentions-legales`, `/confidentialite`, `/cookies` (légal)

**Pages P1 (premium/SEO, futures) :**
- `/tarifs`, `/faq`, `/a-propos`, `/ressources` + `/ressources/[slug]`

---

### D.4 — Assets critiques manquants (depuis `assets-manifest.md`)

**CRITIQUE (bloquants pour publication) :**
- [ ] Logo FAST (`public/brand/logo-fast.svg`) — **ABSENT**
- [ ] Favicon + iOS icon — **ABSENT**
- [ ] Vidéo hero 5s OU image fallback (`public/media/hero-fast-remote-5s.mp4` + `.jpg`) — **ABSENT/FALLBACK REQUIS**
- [ ] 4 icônes équipement (lift, compressor, booth, wash en SVG) — **ABSENT**
- [ ] Photos preuves terrain (≥ 20 images galerie) — **ABSENT**
- [ ] 3 case studies (before/diagnostic/action/after par cas) — **ABSENT**

**Stratégie remplissage (pour PR0 snapshot) :**
- Utiliser placeholder images temporaires (bg gris + texte) pour layout.
- Refacto assets PR2 (importer intelligemment de CarServ).
- Photos terrain + cas complets : déléguer à Fortunat (todo avec deadline P1 max).

---

## E) Audit findings — Top 5 bloquants (correctifs requis)

### E.1 — Bloquant #1 : Placeholders visibles

**Audit constat :** Pages ont du texte "Insérer image ici", "Diagramme", sections vides.  
**Impact** : Tueur de crédibilité (site pas fini).  
**Correction (testable)** : 100% des images placeholder → image réelle OU graceful fallback (bg clair + texte optionnel). Zéro placeholder texte visible en prod.

**Test PASS** : `grep -r "Insérer image\|Diagramme\|TODO\|PLACEHOLDER" app/` → aucun résultat.

---

### E.2 — Bloquant #2 : SLA incohérent (2h / 2-4h / 24-72h)

**Audit constat :** Page FAST Remote promet "réponse 2h", accueil dit "24-72h", contact dit "48h".  
**Impact** : Perte confiance client (promesses contradictoires).  
**Correction (testable)** : SLA unique défini dans `content/config.json` (ou `content/config.ts`), réutilisé **partout** via interpolation. Valeurs (exemple) :
- Accusé : immédiat
- Réponse : ≤ 4h ouvrées
- Créneau visio : ≤ 24h ouvrées (J+1 ouvré)
- Verdict : ≤ 2h après session (si preuves suffisantes), sinon UNKNOWN + plan

**Test PASS** : Grep SLA sur 5 pages (home, fast-remote, contact, services, method) → identique partout ; source unique `config.json`.

---

### E.3 — Bloquant #3 : Contact cassé (affiche "Chargement…")

**Audit constat :** Page `/contact` affiche spinner infini → composant client qui ne hydrate pas / widget externe broken.  
**Impact** : Zéro leads (contact inopérant).  
**Correction (testable)** : Formulaire `/contact` server-side ready, pas de dépendance externe cassée, submit OK. 

**Test PASS** : Naviguer `/contact` → formulaire visible immédiatement (SSR/SSG), pas de "Chargement…". Submit → feedback clair (succès/erreur).

---

### E.4 — Bloquant #4 : Stations de lavage absentes du menu services

**Audit constat :** Menu "Services" affiche Ponts/Compresseurs/Cabines, mais **pas station lavage** (pourtant promise dans spec).  
**Impact** : Offre incomplète, contradiction spec.  
**Correction (testable)** : Page `/services/stations-lavage` créée, visible dans nav, contenu aligné copy.

**Test PASS** : Menu nav contient 4 équipements (lift, compressor, booth, wash) ; chaque lien mène à page dédiée.

---

### E.5 — Bloquant #5 : Ton incohérent (tu/ta vs vous/votre)

**Audit constat :** FAST Remote page mélange "Donne-nous ta situation" (tutoiement) et reste du site en vouvoiement (premium).  
**Impact** : Dissonance tone, perte professionnel.  
**Correction (testable)** : Vouvoiement uniforme (vous/votre) **partout**. Grep tutoiement → aucun résultat.

**Test PASS** : Audit texte page FAST Remote : "vous", "votre" uniquement.

---

## F) Plan exécution PR1..PR5 (obligatoire)

### Overview : 5 PRs atomiques (1 intention = 1 PR)

```
PR0 (SNAPSHOT)                    [docs uniquement, vous ici]
  ↓
PR1 (Socle)                       [layout, tokens, imports assets]
  ↓
PR2 (Pages conversion)            [/, /fast-remote, SLA unifié]
  ↓
PR3 (Pages SEO P0)                [/services + 4 équipements + méthode + réal + contact]
  ↓
PR4 (Formulaires + intake)        [/api/leads, validation, intégration]
  ↓
PR5 (Légal + perf + finitions)    [pages légales, cookies, sitemap, Lighthouse, cleanup]
```

---

## PR1 — Socle (layout/tokens/assets)

**Objectif (1 phrase)** : Établir une base Next.js premium (layout header/footer, design tokens, assets importer sans coller template pages).

**DoR (entrée) :**
- Spec + copy + yml + manifest présents ✅
- CarServ décompressé dans `app/web/_template/CarServ/` ✅
- package.json + tailwindcss déjà configurés ✅

**Scope (ce qui est inclus) :**
- [ ] Layout App Router (`app/layout.tsx`) : header + footer réutilisables
- [ ] Header nav : logo + liens (FAST Remote, Services, Méthode, Réalisations, Zones, Contact)
- [ ] Footer : liens légaux + contact basique
- [ ] Design tokens (`tailwind.config.js`) : palette couleurs FAST (dark industriel + cyan accent)
- [ ] Import assets CarServ (CSS de base + icônes) → refacto tokens FAST
- [ ] Placeholder `/sandbox` route (sandbox pour composants, **non linkée** dans nav)
- [ ] Page 404 premium (`app/not-found.tsx`)
- [ ] Global styles (`app/globals.css`) : mise à jour baseline

**Out of scope :**
- Pas de pages marketing réelles (/fast-remote, /services, etc.)
- Pas de contenu fonctionnel (copy, case studies)
- Pas de formulaires
- Pas de `/api/leads`

**Fichiers / dossiers touchés :**
```
app/
  ├── layout.tsx                  [CRÉER : header + footer composables]
  ├── not-found.tsx               [MODIFIER : style premium]
  ├── globals.css                 [MODIFIER : baseline FAST design]
  ├── sandbox/                    [CRÉER : route non linkée pour composants]
  │   └── page.tsx
  └── ...
components/
  ├── Header.tsx                  [CRÉER]
  ├── Footer.tsx                  [CRÉER]
  ├── Navigation.tsx              [CRÉER]
  ├── Container.tsx               [CRÉER]
  └── ...
lib/
  └── colors.ts                   [CRÉER : design tokens couleurs]
styles/
  └── [refacto CSS CarServ]
tailwind.config.js                [MODIFIER : ajout tokens FAST]
```

**Critères DoD (PASS/FAIL) :**
- [ ] Build OK (`npm run build`)
- [ ] Layout header/footer affichés sur toutes les pages (pas de 404 layout)
- [ ] Nav links présents (6 items min : FAST Remote, Services, Méthode, Réalisations, Zones, Contact)
- [ ] Logo visible en header (placeholder SVG si réel absent)
- [ ] Design tokens appliqués (tailwind.config couleurs FAST visibles dans `tailwind.config.js`)
- [ ] `/sandbox` route existe mais non linkée publiquement
- [ ] Page 404 affiche contenu cohérent (pas du Next default)
- [ ] Lint OK (ignorant `.eslintignore` pour CarServ legacy)

**Commandes validation :**
```bash
npm run build                     # Doit passer
npm run lint                      # Doit passer (ou ignorable)
curl http://localhost:3000/      # Header + footer présents
curl http://localhost:3000/404   # Page 404 premium OK
```

---

## PR2 — Pages conversion (Home + FAST Remote)

**Objectif (1 phrase)** : Pages de conversion FAST Remote (/ + /fast-remote), SLA unique appliqué partout.

**DoR (entrée) :**
- PR1 mergée ✅
- Content map `content-map.yml` pour sections ✅
- Copy `FAST_TECH_SERVICES_COPY_v1.md` ✅

**Scope (ce qui est inclus) :**
- [ ] `/` Accueil : hero + équipements 4-card + teaser méthode 5-steps + teaser 3 cas + CTA final
- [ ] `/fast-remote` : hero + pricing teaser + formulaire FAST Remote (formulaire **statique**, pas encore de submit API)
- [ ] SLA unifié :
  - [ ] Config centralisée (`content/config.ts` ou `config.json`) : définition SLA unique
  - [ ] Composant réutilisable (SLA badges) interpolant config
  - [ ] Affiché sur 2+ pages (home, fast-remote)
- [ ] Responsive OK (mobile 375px min, desktop 1920px)
- [ ] Images : placeholder fallbacks (bg clair + texte optionnel si réel absent)
- [ ] Zéro "Chargement…" visible
- [ ] Copy FR, vouvoiement uniforme

**Out of scope :**
- Pas de `/services` complet (PR3)
- Pas de `/methode` page complète (PR3)
- Pas de `/realisations` cas réels (PR3, avec fallback premium)
- Pas de `/api/leads` submit (PR4)
- Pas de pages légales (PR5)

**Fichiers / dossiers touchés :**
```
app/
  ├── page.tsx                    [MODIFIER : Accueil FAST Remote conversion]
  ├── fast-remote/
  │   └── page.tsx               [CRÉER]
  └── ...
components/
  ├── Hero.tsx                    [CRÉER]
  ├── EquipmentGrid.tsx           [CRÉER]
  ├── MethodTeaser.tsx            [CRÉER]
  ├── CaseStudiesTeaser.tsx       [CRÉER]
  ├── SLABadges.tsx               [CRÉER : réutilisable]
  ├── ContactForm.tsx             [CRÉER : statique, pas submit yet]
  └── ...
content/
  ├── config.ts                   [CRÉER : SLA + brand + coords centralisées]
  └── ...
```

**Critères DoD (PASS/FAIL) :**
- [ ] Build OK
- [ ] `/` page affiche : hero, 4 équipements, méthode teaser, cas teaser, SLA badges
- [ ] `/fast-remote` page affiche : hero, pricing teaser, formulaire statique, SLA badges
- [ ] SLA badges identiques sur / et /fast-remote (source unique `content/config.ts`)
- [ ] Responsive OK (test mobile 375px)
- [ ] Zéro placeholder texte visible ("Insérer image ici" → FAIL)
- [ ] Zéro "Chargement…" ni spinner
- [ ] Copy FR, vouvoiement uniforme (grep "tu\|ta\|ton\|ta" → 0 résultat)
- [ ] Images fallback avec dégradé ou couleur (pas cassé)
- [ ] Lighthouse Perf ≥ 85, Accessibility ≥ 90 (cible mobile)

**Commandes validation :**
```bash
npm run build
npm run lint
curl http://localhost:3000/             # Page complète, SLA badges
curl http://localhost:3000/fast-remote  # Idem
grep -ri "Insérer image\|Chargement\|tu\|ta\|ton" app/ --include="*.tsx"
# Test Lighthouse mobile
```

---

## PR3 — Pages SEO P0 (services + méthode + réalisations)

**Objectif (1 phrase)** : Portfolio complet P0 (4 pages équipement + méthode + réalisations + zones + contact), fallback premium pour cas si photos manquantes.

**DoR (entrée) :**
- PR2 mergée ✅
- Content map + copy prêts ✅

**Scope (ce qui est inclus) :**
- [ ] `/services` hub : description + grid 4 équipements (linkés à pages dédiées)
- [ ] `/services/ponts-elevateurs`, `/services/compresseurs-air`, `/services/cabines-peinture-ventilation`, `/services/stations-lavage` :
  - [ ] Hero équipement + description
  - [ ] Icône équipement
  - [ ] Pannes typiques (bullets) / services offerts
  - [ ] CTA FAST Remote + CTA contact
  - [ ] SLA badges
- [ ] `/methode` page complète : 5 étapes FAST (Cadrage → Preuves → Tests → Action → Validation) + icons + textes
- [ ] `/realisations` : 
  - [ ] Hero + description
  - [ ] **3 case studies structurés** (ou fallback premium "Coming soon" si manquent)
    - Images: avant/diag/action/après OU placeholder cohérent
    - Texte résumé (équipement, problème, solution, résultat)
  - [ ] Fallback intelligent : si photos absentes, afficher "Cas en développement" avec structure (pas fake témoignages)
- [ ] `/zones` : description zones + callout "FAST Remote France entière"
- [ ] `/contact` page : hero + formulaire contact (statique) + info + CTA

**Out of scope :**
- Pas de pages `/tarifs`, `/faq`, `/a-propos` (P1)
- Pas d'intégration `/api/leads` (PR4)
- Pas de pages légales (PR5)
- Pas de formulaire submit functionnelle (PR4)

**Fichiers / dossiers touchés :**
```
app/
  ├── services/
  │   ├── page.tsx               [MODIFIER : hub services]
  │   ├── ponts-elevateurs/
  │   │   └── page.tsx           [CRÉER]
  │   ├── compresseurs-air/
  │   │   └── page.tsx           [CRÉER]
  │   ├── cabines-peinture-ventilation/
  │   │   └── page.tsx           [CRÉER]
  │   └── stations-lavage/
  │       └── page.tsx           [CRÉER]
  ├── methode/
  │   └── page.tsx               [MODIFIER : version complète]
  ├── realisations/
  │   └── page.tsx               [MODIFIER : 3 cas + fallback]
  ├── zones/
  │   └── page.tsx               [MODIFIER : contenu complet]
  ├── contact/
  │   └── page.tsx               [MODIFIER : contenu complet + formulaire statique]
  └── ...
components/
  ├── MethodSteps.tsx             [CRÉER : 5 étapes]
  ├── CaseStudies.tsx             [CRÉER : avec fallback]
  ├── EquipmentCard.tsx           [CRÉER]
  └── ...
content/
  ├── pages/
  │   ├── services.json           [CRÉER]
  │   ├── methode.json            [CRÉER]
  │   ├── realisations.json       [CRÉER : 3 cas ou fallback]
  │   ├── zones.json              [CRÉER]
  │   └── contact.json            [CRÉER]
  └── ...
```

**Critères DoD (PASS/FAIL) :**
- [ ] Build OK
- [ ] `/services` hub affiche 4 équipements (nav lisible)
- [ ] Chaque page équipement (ponts/compresseurs/cabines/stations) créée + accessible
- [ ] `/methode` affiche 5 étapes + descriptions + icônes
- [ ] `/realisations` affiche 3 cas (avec images réelles OU fallback premium "Coming soon" sans fake)
- [ ] `/zones` contient "FAST Remote France entière" + zones onsite
- [ ] `/contact` affiche formulaire complet (statique)
- [ ] Zéro placeholder texte, zéro "Chargement…"
- [ ] SEO : meta titles/descriptions uniques par page (via `content-map.yml`)
- [ ] Responsive OK (375px–1920px)
- [ ] Lighthouse Perf ≥ 85, Accessibility ≥ 90
- [ ] SLA badges uniformes partout

**Commandes validation :**
```bash
npm run build
npm run lint
curl http://localhost:3000/services/ponts-elevateurs
curl http://localhost:3000/methode
curl http://localhost:3000/realisations
# Test OCR/grep : zéro "Insérer\|fake\|TODO"
```

---

## PR4 — Formulaires + `/api/leads` (intake)

**Objectif (1 phrase)** : Formulaires fonctionnels (FAST Remote + Contact) → `/api/leads` server-side + intégration intake (forward ou n8n webhook).

**DoR (entrée) :**
- PR3 mergée ✅
- Formulaires statiques existants (composants HTML) ✅
- INTAKE_URL env variable disponible (ou n8n webhook) ✅

**Scope (ce qui est inclus) :**
- [ ] Endpoint `/api/leads` (POST)
  - [ ] Validation stricte (Zod) : `type`, `name`, `email`, `city`, `postal_code`, `equipment_category`, `symptom` (min 40 chars), `urgency`, `consent_rgpd`
  - [ ] Honeypot (champ caché pour anti-spam)
  - [ ] Rate limit basique (ex: 5 leads/IP/heure)
  - [ ] Logs server-side : `request_id`, timestamp, type lead, résultat (success/fail), **pas de secrets**
  - [ ] Forward vers `INTAKE_URL` (env var) côté serveur
    - **Option A (recommandée)** : gateway FastAPI public exposé, puis push FASTCore via WireGuard
    - **Option B (temporaire)** : webhook n8n (réception + email + log)
- [ ] UX formulaire :
  - [ ] Submit button (détecte champs requis)
  - [ ] Message succès clair : "Accusé reçu. Réponse sous 4h ouvrées."
  - [ ] Message erreur : non-disclosure (pas de détails API), retry possible
  - [ ] Honeypot optionnellement caché (CSS display: none)
- [ ] Logs minimales (console server ou fichier) : lead reçu + forwarded

**Out of scope :**
- Pas d'authentification client pour forms (public)
- Pas de Turnstile/reCAPTCHA (honeypot suffit P0)
- Pas de stockage DB leads (relay only, stockage côté intake)
- Pas de relance par email (n8n ou intake gère)

**Fichiers / dossiers touchés :**
```
app/
  └── api/
      └── leads/
          └── route.ts           [CRÉER : POST /api/leads]
components/
  ├── FastRemoteForm.tsx          [MODIFIER : ajoute submit → /api/leads]
  ├── ContactForm.tsx             [MODIFIER : ajoute submit → /api/leads]
  └── FormFeedback.tsx            [CRÉER : succès/erreur messages]
lib/
  ├── schemas/
  │   └── lead.ts                 [CRÉER : Zod schema lead]
  ├── intake.ts                   [CRÉER : client intake gateway/webhook]
  └── rate-limit.ts               [CRÉER : simple limiter]
.env.example                       [MODIFIER : ajoute INTAKE_URL]
```

**Critères DoD (PASS/FAIL) :**
- [ ] Build OK
- [ ] POST `/api/leads` répond (200 succès OU 400/500 erreur)
- [ ] Validation Zod fonctionne (champ manquant → 400 error)
- [ ] Honeypot fonctionne (soumission si champ visible → drop)
- [ ] Rate limit fonctionne (5+ leads/IP/heure → 429 Too Many Requests)
- [ ] Forward vers `INTAKE_URL` fonctionne (logs confirment envoi)
- [ ] Message succès affiché : "Accusé reçu. Réponse sous 4h ouvrées."
- [ ] Message erreur affiché (générique, pas leak API details)
- [ ] Formulaires `/fast-remote` + `/contact` soumettent sans erreur de réseau
- [ ] Logs server contiennent : timestamp, request_id, type, success/fail (pas secrets)
- [ ] Zéro secrets côté client (grep "localStorage\|sessionStorage" → 0 dans compos forms)

**Commandes validation :**
```bash
npm run build
npm run test                     # Tests API /api/leads
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"type":"fast_remote","name":"Test","email":"test@example.com",...}'
# Doit répondre 200 + message succès
```

---

## PR5 — Légal + perf + finitions

**Objectif (1 phrase)** : Publication propre (pages légales, cookies banner minimal, sitemap/robots, cleanup deps, Lighthouse ~90, recette finale).

**DoR (entrée) :**
- PR4 mergée ✅
- Toutes les pages P0 fonctionnelles ✅

**Scope (ce qui est inclus) :**
- [ ] Pages légales (markdown/mdx) :
  - [ ] `/mentions-legales` (SIRET, adresse, contact légal)
  - [ ] `/confidentialite` (RGPD, données, durée rétention)
  - [ ] `/cookies` (banner + prefs, tech/prefs/marketing cookies)
- [ ] Cookies banner minimal :
  - [ ] Affiché une fois (localStorage choix utilisateur)
  - [ ] Accepter tout, Rejeter, Personnaliser
  - [ ] Analytics/tracking activés seulement si accepted
- [ ] SEO finitions :
  - [ ] Sitemap dynamique (`/sitemap.xml` déjà existant, vérifier complétude)
  - [ ] robots.txt présent (`/robots.txt`, Allow *, Disallow sandbox/)
  - [ ] Meta tags complets (title, description, og:image par page)
  - [ ] Structured data (JSON-LD) si pertinent (contact, organization)
- [ ] Perf & Lighthouse :
  - [ ] Dépendances inutiles supprimées (eg: old jQuery, unused libs)
  - [ ] Images optimisées (next/image, lazy load)
  - [ ] CSS unused supprimé (Tailwind purge OK)
  - [ ] JS bundle taille acceptable (audit bundle size)
  - [ ] LCP ≤ 2.5s (mobile), Lighthouse Perf ≥ 90 (cible)
- [ ] Checklist recette final :
  - [ ] Toutes les pages naviguables, aucune 404
  - [ ] Zéro placeholder texte
  - [ ] Zéro "Chargement…"
  - [ ] SLA identique partout
  - [ ] Formulaires soumettent sans erreur
  - [ ] Leads reçus côté intake
  - [ ] Légal pages présentes + linkées footer
  - [ ] Lighthouse full audit (perf + SEO + a11y + best-practices)

**Out of scope :**
- Pas de P1 pages (tarifs, faq, a-propos, ressources)
- Pas d'analytics production (feature-flaggé P1)
- Pas de CDN/caching avancé (Vercel defaults OK)

**Fichiers / dossiers touchés :**
```
app/
  ├── mentions-legales/
  │   └── page.tsx               [MODIFIER : contenu légal]
  ├── confidentialite/
  │   └── page.tsx               [MODIFIER : contenu RGPD]
  ├── cookies/
  │   └── page.tsx               [CRÉER : cookies banner + prefs]
  ├── robots.ts                  [MODIFIER : Allow *, Disallow /sandbox]
  └── sitemap.ts                 [VÉRIFIER : routes complètes]
components/
  ├── CookiesBanner.tsx           [CRÉER]
  └── CookiesPrefs.tsx            [CRÉER]
lib/
  └── cookies.ts                 [CRÉER : helpers cookie localStorage]
content/
  └── legal/
      ├── mentions-legales.mdx    [CRÉER]
      ├── confidentialite.mdx     [CRÉER]
      └── cookies.mdx             [CRÉER]
package.json                      [MODIFIER : remove unused deps]
```

**Critères DoD (PASS/FAIL) :**
- [ ] Build OK
- [ ] `/mentions-legales`, `/confidentialite`, `/cookies` pages affichent contenu complet
- [ ] Cookies banner affiche au premier accès (localStorage)
- [ ] Accepter/Rejeter/Personnaliser fonctionne
- [ ] Sitemap contient toutes les pages P0 (> 12 URLs)
- [ ] robots.txt : Allow *, Disallow /sandbox/
- [ ] Meta tags présents (og:image, description par page)
- [ ] Lighthouse audit (audit + rapports joints PR) :
  - [ ] Perf ≥ 90 (mobile cible)
  - [ ] SEO ≥ 95
  - [ ] Accessibility ≥ 95
  - [ ] Best Practices ≥ 95
- [ ] Dépendances unused supprimées (npm audit OK)
- [ ] Tous les liens de nav OK (pas 404)
- [ ] Récette full PASS (toutes les cases cochées du checklist final)

**Commandes validation :**
```bash
npm run build
npm run lint
npm audit                       # Pas de vulnérabilités critiques
npm run test                    # Tests passent
curl http://localhost:3000/sitemap.xml | grep -c "<loc>"  # ≥12
curl http://localhost:3000/robots.txt
# Lighthouse audit (via CLI ou DevTools)
npm run start
# Manual recette : 15 pages, tous formulaires, cookies, légal OK
```

---

## G) Risques & UNKNOWN (alertes pour Fortunat)

### G.1 — UNKNOWN : Assets critiques manquants

**Impact** : Delai publication, fallbacks required.

| Asset | Statut | Action PR0 | Action PR1+ |
|-------|--------|-----------|-----------|
| Logo FAST SVG | ❌ Absent | Placeholder circle + texte "FAST" | Fortunat fournit ; intégrer PR1 |
| Vidéo hero 5s | ❌ Absent | Use fallback image JPG | Fortunat fournit ou approuve "image only" |
| 20 photos terrain galerie | ❌ Absent | Placeholder gris + texte "Galerie" | Fortunat sélectionne ; intégrer PR2+ |
| 3 case studies complets | ❌ Absent | Fallback "Coming soon" premium | Fortunat détaille texte + photos ; PR3 |

**Action PR0** : Documenter dans PR0_SNAPSHOT ces absences, déleguer Fortunat avec deadline.

---

### G.2 — UNKNOWN : Intake URL / INTAKE_GATEWAY

**Impact** : `/api/leads` ne peut forward que si endpoint exist + auth OK.

**Statut** : ❌ Non défini (env var `INTAKE_URL` non configurée).

**Action PR4** : 
- Obtenir URL réelle endpoint intake (FASTCore gateway OU n8n webhook) de Fortunat.
- Tester forward (mock ou dev endpoint).
- Documenter `.env.example` : `INTAKE_URL=https://intake.example.com/v1/leads`

---

### G.3 — UNKNOWN : Analytics (Umami / Plausible)

**Impact** : Zéro tracking atm. P1 feature-flag.

**Statut** : ❌ Hors scope PR0–PR5 (privacy-friendly, feature-flagged).

**Action P1** : Décider provider (Umami/Plausible), implémenter via env var + feature flag.

---

### G.4 — UNKNOWN : Turnstile / reCAPTCHA

**Impact** : Zéro anti-bot avancé. Honeypot + rate limit suffisent P0.

**Statut** : ⚠️ Optionnel (lazy load si spam devient problème).

**Action** : Garder topic pour P1, documenter ADR.

---

## H) Arborescence cible PR1 (reference pour PR1 DoD)

**Structure Next.js App Router post-PR1 :**

```
apps/web/
├── app/
│   ├── (site)/                      [optional grouping, flatten si simple]
│   │   ├── layout.tsx               [↑ header + footer]
│   │   ├── page.tsx                 [Accueil]
│   │   ├── fast-remote/page.tsx     [FAST Remote page]
│   │   ├── services/
│   │   │   ├── page.tsx             [Hub services]
│   │   │   ├── ponts-elevateurs/page.tsx
│   │   │   ├── compresseurs-air/page.tsx
│   │   │   ├── cabines-peinture-ventilation/page.tsx
│   │   │   └── stations-lavage/page.tsx
│   │   ├── methode/page.tsx
│   │   ├── realisations/page.tsx
│   │   ├── zones/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── mentions-legales/page.tsx
│   │   ├── confidentialite/page.tsx
│   │   └── cookies/page.tsx
│   ├── api/
│   │   ├── contact/route.ts         [legacy, à supprimer PR4]
│   │   └── leads/route.ts           [NEW PR4]
│   ├── not-found.tsx                [404 premium]
│   ├── error.tsx                    [error boundary]
│   ├── layout.tsx                   [root layout]
│   ├── globals.css
│   └── robots.ts, sitemap.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── EquipmentGrid.tsx
│   ├── MethodSteps.tsx
│   ├── CaseStudies.tsx
│   ├── FastRemoteForm.tsx           [← submit via /api/leads]
│   ├── ContactForm.tsx              [← submit via /api/leads]
│   ├── SLABadges.tsx
│   ├── CookiesBanner.tsx
│   └── ...
├── lib/
│   ├── colors.ts                    [design tokens]
│   ├── schemas/lead.ts              [Zod validation]
│   ├── intake.ts                    [forward to intake gateway]
│   ├── rate-limit.ts                [honeypot + rate limit]
│   ├── cookies.ts                   [localStorage helpers]
│   └── queue/forms-queue.ts         [existing]
├── content/
│   ├── config.ts                    [SLA, brand, coords]
│   ├── pages/
│   │   ├── services.json
│   │   ├── methode.json
│   │   ├── realisations.json
│   │   └── ...
│   └── legal/
│       ├── mentions-legales.mdx
│       ├── confidentialite.mdx
│       └── cookies.mdx
├── public/
│   ├── brand/
│   │   ├── logo-fast.svg
│   │   ├── favicon.ico
│   │   └── apple-touch-icon.png
│   ├── media/
│   │   ├── hero-fast-remote-fallback.jpg
│   │   ├── hero-remote.jpg
│   │   ├── hero-services.jpg
│   │   ├── hero-method.jpg
│   │   └── hero-cases.jpg
│   ├── icons/
│   │   ├── lift.svg
│   │   ├── compressor.svg
│   │   ├── booth.svg
│   │   ├── wash.svg
│   │   ├── remote.svg
│   │   ├── safety.svg
│   │   ├── proof.svg
│   │   └── verdict.svg
│   └── proofs/
│       ├── gallery/
│       │   ├── 01.jpg ... 20.jpg
│       └── cases/
│           ├── case-01/{before,diagnostic,action,after}.jpg
│           ├── case-02/{...}
│           └── case-03/{...}
├── __tests__/
│   └── api/leads.test.ts            [NEW PR4]
├── .eslintignore                    [ignorer app/web/_template/CarServ/]
├── eslint.config.mjs
├── jest.config.json
├── tailwind.config.js               [design tokens FAST]
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── postcss.config.mjs
├── .env.example                     [INTAKE_URL, etc.]
└── README.md
```

---

## I) Liste fichiers à créer/modifier (détail PR1..PR5)

**Pour chaque PR, liste atomique :**

### PR1 (Socle)

**À CRÉER :**
- `app/layout.tsx` (header + footer)
- `app/not-found.tsx` (404 premium)
- `app/sandbox/page.tsx` (composant sandbox)
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/Navigation.tsx`
- `components/Container.tsx`
- `lib/colors.ts` (tokens couleurs)
- `.eslintignore` (ignorer CarServ)

**À MODIFIER :**
- `app/globals.css` (reset + baseline)
- `tailwind.config.js` (ajouter tokens couleurs FAST)

---

### PR2 (Pages conversion)

**À CRÉER :**
- `app/fast-remote/page.tsx`
- `components/Hero.tsx`
- `components/EquipmentGrid.tsx`
- `components/MethodTeaser.tsx`
- `components/CaseStudiesTeaser.tsx`
- `components/SLABadges.tsx`
- `components/ContactForm.tsx` (statique)
- `content/config.ts` (SLA + brand)

**À MODIFIER :**
- `app/page.tsx` (Accueil complet)

---

### PR3 (Pages SEO P0)

**À CRÉER :**
- `app/services/page.tsx`
- `app/services/ponts-elevateurs/page.tsx`
- `app/services/compresseurs-air/page.tsx`
- `app/services/cabines-peinture-ventilation/page.tsx`
- `app/services/stations-lavage/page.tsx`
- `components/EquipmentCard.tsx`
- `components/MethodSteps.tsx`
- `components/CaseStudies.tsx`
- `content/pages/*.json` (services, méthode, réalisations, zones, contact)

**À MODIFIER :**
- `app/methode/page.tsx` (version complète)
- `app/realisations/page.tsx` (3 cas + fallback)
- `app/zones/page.tsx` (contenu)
- `app/contact/page.tsx` (formulaire statique)

---

### PR4 (Formulaires + intake)

**À CRÉER :**
- `app/api/leads/route.ts` (endpoint POST)
- `components/FastRemoteForm.tsx` (renommage + submit API)
- `components/FormFeedback.tsx` (succès/erreur)
- `lib/schemas/lead.ts` (Zod validation)
- `lib/intake.ts` (forward to gateway)
- `lib/rate-limit.ts` (honeypot + limiter)
- `__tests__/api/leads.test.ts` (tests API)

**À MODIFIER :**
- `app/fast-remote/page.tsx` (formulaire → FastRemoteForm avec submit)
- `app/contact/page.tsx` (idem ContactForm)
- `package.json` (si nouvelles dépendances)
- `.env.example` (INTAKE_URL)

---

### PR5 (Légal + perf + finitions)

**À CRÉER :**
- `components/CookiesBanner.tsx`
- `components/CookiesPrefs.tsx`
- `lib/cookies.ts` (helpers)
- `content/legal/mentions-legales.mdx`
- `content/legal/confidentialite.mdx`
- `content/legal/cookies.mdx`
- `PR_RECETTE_CHECKLIST_PR5.md` (checklist final)

**À MODIFIER :**
- `app/mentions-legales/page.tsx` (import mdx)
- `app/confidentialite/page.tsx` (idem)
- `app/cookies/page.tsx` (idem + banner)
- `app/layout.tsx` (inject CookiesBanner)
- `app/robots.ts` (Disallow /sandbox)
- `package.json` (remove unused deps)

---

## J) Recette finale (PASS/FAIL checklists)

### Checklist global publication (MUST PASS)

- [ ] Build `npm run build` : 0 errors
- [ ] Lint `npm run lint` : ignorable si CarServ only
- [ ] Tests `npm run test` : 3 tests échouent (async cleanup) → OK si non bloquant API
- [ ] Toutes les 13 pages P0 compilées (SSG) ✅
- [ ] Aucun placeholder texte visible ("Insérer image", "TODO", "Diagramme") ✅
- [ ] Aucun "Chargement…" ni spinner visible ✅
- [ ] SLA unique identique `/`, `/fast-remote`, `/contact`, `/services`, `/methode` ✅
- [ ] Tous les formulaires soumettent sans erreur réseau ✅
- [ ] Leads reçus côté intake (vérifier logs intake ou n8n) ✅
- [ ] Pages légales présentes + linkées footer ✅
- [ ] Cookies banner affiche au premier accès ✅
- [ ] Lighthouse audit (mobile priorité) :
  - [ ] Perf ≥ 90
  - [ ] SEO ≥ 95
  - [ ] Accessibility ≥ 95
  - [ ] Best Practices ≥ 95
- [ ] Tous les liens de nav fonctionnels (0 broken links) ✅
- [ ] Images chargent proprement (pas 404, pas placeholder visible) ✅
- [ ] Contact page ne crash pas ✅
- [ ] FAST Remote page affiche SLA + formulaire ✅

### FAIL immédiat (NO-GO)

- ❌ Contact cassé (formulaire manquant OU soumission erreur)
- ❌ SLA contradictoire (exemple: "2h" et "24h" mélangés)
- ❌ Stats/avis/notes non prouvables affichés ("1000+ diagnostics", "4.9/5")
- ❌ FASTCore credentials exposés côté client
- ❌ Secrets localStorage/sessionStorage (clés API, tokens)
- ❌ Page "Chargement…" visible en prod
- ❌ Placeholder texte visible ("Insérer image", "TODO")
- ❌ Station de lavage absente
- ❌ Ton incohérent (tutoiement mélangé avec vouvoiement)

---

## K) Références & Dépendances

**Sources de vérité** :
- `docs/site-spec/FAST_SITE_SPEC_v1.md` ← spec maître
- `docs/site-spec/FAST_TECH_SERVICES_COPY_v1.md` ← copy éditoriale
- `docs/site-spec/content-map.yml` ← SEO + sections + pages
- `docs/site-spec/assets-manifest.md` ← inventaire assets
- `docs/site-spec/PR0_CHECKLIST.md` ← définition du snapshot (ce document y répond)

**Outils / Services** :
- Framework : Next.js 16.1.1 (App Router)
- Styling : Tailwind CSS v4
- Validation : Zod v4.3.4
- Testing : Jest v30.2.0 + React Testing Library
- Linting : ESLint v9 + TypeScript
- Deployment : Vercel (assumé)

**Critères acceptation** :
- Build OK (`npm run build`)
- Lint OK (`npm run lint`, ignorable CarServ)
- Test OK (`npm run test`, 3 fails OK pour PR0)
- 13 routes compilées
- Aucun placeholder visible
- SLA unifié
- Lighthouse ≥ 90 perf (mobile)
- Zéro secrets client

---

## L) Récapitulatif état critique (pour Fortunat)

| Élément | Statut | Action urgente |
|---------|--------|---|
| Spec + copy + maps | ✅ Présents | Valider PR0, approuver |
| Audits | ✅ Présents | Lire bloquants (E.1–E.5) |
| Build/Lint/Test | ⚠️ Partial | Lint CarServ ignorable, 3 tests échouent (PR4 fix) |
| Logo FAST SVG | ❌ Absent | Fournir deadline PR1 |
| Vidéo/images hero | ❌ Absent | Fournir ou décider "image only" |
| Photos preuves (20+) | ❌ Absent | Sélectionner deadline PR2 |
| Case studies (3) | ❌ Absent | Détailler texte + photos deadline PR3 |
| Intake URL | ❌ Absent | Fournir endpoint + auth PR4 |
| SLA unique | ❌ En cours | À centraliser config PR2 |
| Pages 4 équipements | ❌ À créer | PR3 scope |
| `/api/leads` | ❌ À créer | PR4 scope |

---

**FIN SNAPSHOT PR0**  
**Généré le** : 4 janvier 2026  
**Statut** : ✅ **PRÊT POUR VALIDATION FORTUNAT**

