# FAST_SITE_SPEC_EXECUTIVE_SUMMARY.md — Checklist Spec + Stratégie Conversion

**But** : Résumé exécutif de la spec pour PR0 + guide stratégie conversion CarServ → FAST Next.js.

---

## 1) Spec FAST_SITE_SPEC_v1.md — 10 bullets + interdits

### Objectifs / KPIs (5 points)
1. **Taux conversion FAST Remote ≥ 2%** (cible initiale, réajustable post-data).
2. **100% soumissions formulaire** : accusé immédiat + server-side storage + intake forwarded.
3. **Lighthouse ≥ 90** (Perf/SEO/Accessibility/Best Practices cible).
4. **LCP mobile ≤ 2.5s** (cible de chargement).
5. **Zéro page cassée / "Chargement…" / placeholder visible** en prod.

### Doctrine non négociable (5 points)
6. **Site ne contacte JAMAIS FASTCore** → `/api/leads` server-side uniquement.
7. **Aucun secret côté client** (localStorage/sessionStorage interdits pour clés/tokens).
8. **Pas de stats/avis/notes inventées** ; si absent → UNKNOWN explicite.
9. **SLA unique, source unique** (`content/config.json`), réutilisé partout (home, remote, contact, services).
10. **Pages P0 obligatoires** : `/` + `/fast-remote` + `/services` + 4 équipements + `/methode` + `/realisations` + `/zones` + `/contact` + légal.

---

## 2) Copy FAST_TECH_SERVICES_COPY_v1.md — Promesse & périmètre (10 bullets)

### Identité & différenciation (3 points)
1. **Expert électromécanique terrain** (orientation intégration & maintenance industrielle, garage automobile).
2. **Doctrine TERRAIN → PREUVE → VERDICT** : pas de preuve = pas fait, UNKNOWN explicite, STOP & CALL si risque.
3. Différenciation vs "dépannage" : **méthode + livrables + dossier clair** (preuves + tests sortie + verdict écrit).

### Périmètre services (4 points — équipements)
4. **Ponts élévateurs** : sécurité, conformité, électrique/hydraulique, tests.
5. **Compresseurs & air comprimé** : vis/piston, traitement, fuites, régulation, stabilité.
6. **Cabines peinture & ventilation** : extraction, variateurs, coffrets, stabilité process.
7. **Stations de lavage** : commande, puissance, pompage, sécurités, exploitation.

### Offre cœur & livrables (3 points)
8. **FAST Remote** : diagnostic visio + tests guidés + mesures + verdict (RÉSOLU / PLAN / ONSITE / NO-GO).
9. **Méthode 5 étapes** : Cadrage → Preuves baseline → Tests discriminants → Action → Validation + tests sortie.
10. **Livrables client** : compte-rendu + verdict + recommandations + punch list (preuve/traçabilité).

---

## 3) Content Map (pages P0 + P1)

### Pages P0 (publication immédiate) — 13 pages
- `/` Accueil (hero + équipements grid + méthode teaser + cas teaser + SLA badges)
- `/fast-remote` (offre + formulaire + pricing teaser)
- `/services` (hub 4 équipements)
- `/services/ponts-elevateurs`, `/services/compresseurs-air`, `/services/cabines-peinture-ventilation`, `/services/stations-lavage` (4 pages équipement)
- `/methode` (5 étapes FAST + icons + descriptions)
- `/realisations` (3 cas études OU fallback premium "Coming soon")
- `/zones` (zones intervention + "FAST Remote France entière")
- `/contact` (formulaire contact page)
- `/mentions-legales`, `/confidentialite`, `/cookies` (légal + banner)

### Pages P1 (premium/SEO, futures)
- `/tarifs`, `/faq`, `/a-propos`, `/ressources` + `/ressources/[slug]`

---

## 4) Assets manifest — Critiques (bloquants) vs UNKNOWN

### Critiques — À fournir Fortunat (deadline PR1–PR2)
| Asset | Lieu | Deadline | Fallback |
|-------|------|----------|----------|
| Logo FAST SVG | `public/brand/logo-fast.svg` | PR1 | Placeholder "F" + texte |
| Vidéo hero 5s OU image | `public/media/hero-fast-remote-*` | PR1 | Image JPG fallback |
| 4 icônes équipement (lift, compressor, booth, wash) | `public/icons/` | PR1 | CSS shapes fallback |
| 20 photos terrain galerie | `public/proofs/gallery/` | PR2 | Placeholder gris |
| 3 case studies (before/diag/action/after) | `public/proofs/cases/case-[1–3]/` | PR3 | "Coming soon" premium |

### Stratégie temporaire (PR0–PR1)
- Logo : cercle bleu + texte "FAST"
- Images : dégradé gris + texte descriptif (responsive)
- Icônes : SVG basic circles + labels
- Photos/cases : vide "Coming soon" texte pro (pas fake)

---

## 5) Top 5 bloquants audit — Corrections requises

### Bloquant #1 : Placeholders visibles
**Audit** : Pages affichent "Insérer image ici", "Diagramme à venir".  
**Test PASS** : `grep -r "Insérer\|Diagramme\|TODO\|PLACEHOLDER" app/ --include="*.tsx"` → 0 résultat.

### Bloquant #2 : SLA incohérent
**Audit** : "2h" FAST Remote, "24-72h" accueil, "48h" contact.  
**Test PASS** : SLA badges identiques sur 5+ pages (source unique `content/config.ts`).

### Bloquant #3 : Contact cassé
**Audit** : Page `/contact` affiche "Chargement…" (composant client broken).  
**Test PASS** : Formulaire visible immédiatement (SSR), submit → succès/erreur clear.

### Bloquant #4 : Station lavage absente
**Audit** : Menu Services = Ponts + Compresseurs + Cabines, pas Station.  
**Test PASS** : `/services/stations-lavage` créée + naviguable + contenu OK.

### Bloquant #5 : Ton incohérent
**Audit** : FAST Remote page mélange "tu/ta" (tutoiement) + "vous" (vouvoiement).  
**Test PASS** : Grep "tu\|ta\|ton" → 0 résultat (vouvoiement uniforme).

---

## 6) Stratégie conversion CarServ → FAST Next.js

### 6.1 — Approche arborescence
```
AVANT (CarServ template static HTML)
├── index.html
├── ponts-elevateurs.html
├── css/bootstrap.css + custom.css
├── img/ (assets)
└── lib/wow.js, etc.

APRÈS (FAST Next.js App Router)
├── app/
│   ├── layout.tsx                 [header + footer réutilisables]
│   ├── page.tsx                   [/ accueil]
│   ├── fast-remote/page.tsx       [/fast-remote]
│   ├── services/
│   │   ├── page.tsx               [/services hub]
│   │   ├── ponts-elevateurs/page.tsx
│   │   ├── compresseurs-air/page.tsx
│   │   ├── cabines-peinture-ventilation/page.tsx
│   │   └── stations-lavage/page.tsx
│   ├── methode/page.tsx
│   ├── realisations/page.tsx
│   ├── zones/page.tsx
│   ├── contact/page.tsx
│   ├── [légal 3 pages]
│   └── api/
│       └── leads/route.ts         [POST /api/leads → intake]
├── components/
│   ├── Header.tsx, Footer.tsx, Navigation.tsx  [layout réutilisables]
│   ├── Hero.tsx, EquipmentGrid.tsx, etc.       [sections réutilisables]
│   └── Forms (FastRemoteForm, ContactForm)
├── content/
│   ├── config.ts                  [SLA, brand, coords centralisées]
│   ├── pages/*.json               [contenu sections par page]
│   └── legal/*.mdx                [pages légales]
├── public/
│   ├── brand/, media/, icons/, proofs/  [assets organisées]
└── lib/
    ├── schemas/, intake.ts, rate-limit.ts, cookies.ts
    └── queue/ [existing]
```

### 6.2 — Stratégie CSS/JS import
**Ne pas copier bêtement CarServ :**
- ❌ Importer Bootstrap entier de CarServ → crée dépendance jQuery lourd
- ✅ Extraire structure HTML → refacto composants Tailwind v4
- ❌ Copier wow.js minifiés → ESLint errors, fragile
- ✅ Animations sobres Next.js (Framer Motion déjà présent)

**Plan détaillé (PR1) :**
1. Lire CarServ CSS + HTML structure
2. Identifier sections réutilisables (hero, grid, footer, nav)
3. Créer composants TSX équivalents (Tailwind v4 tokens)
4. Importer assets images/icons intelligemment (public/)
5. Tester rendering vs original (visuellement similaire, code moderne)

### 6.3 — Données / Copy intégration
- **Copy** : utiliser `FAST_TECH_SERVICES_COPY_v1.md` comme source unique (pas inventer)
- **Sections** : mapper `content-map.yml` → JSON/mdx dans `content/`
- **Config** : SLA + brand dans `content/config.ts` (centralisé)
- **DB** : zéro DB pour marketing (statique SSG) ; leads → `/api/leads` → intake

### 6.4 — Perf & SEO optimizations (dès PR2)
- Images : `next/image` (lazy load, responsive)
- Routes : SSG par défaut (pages marketing statiques)
- Fonts : system fonts (Tailwind defaults) ou woff2 optimisés
- CSS : Tailwind purge (unused stripped)
- JS : zéro jQuery, zéro heavy libs (Framer Motion minimal + Zod lightweight)

---

## 7) Next.js App Router — Principes (pour PRs)

### Pages = fichiers TSX
```
app/
  page.tsx                    → /
  fast-remote/page.tsx        → /fast-remote
  services/page.tsx           → /services
  services/ponts-elevateurs/page.tsx  → /services/ponts-elevateurs
  contact/page.tsx            → /contact
  [légal 3 pages]
```

### API Routes = handlers server-side
```
app/api/leads/route.ts        → POST /api/leads
```

### Layouts = wrappers réutilisables
```
app/layout.tsx                → root (header + footer + nav)
```

### Metadata + SEO (Next 14+)
```typescript
export const metadata = {
  title: "Ponts élévateurs...",
  description: "...",
  openGraph: { image: "..." }
}
```

### Static Generation (default)
```typescript
export const revalidate = 86400  // ISR : rebuild quotidien
```

---

## 8) Dépendances actuelles & stratégie

### Runtime
- `next@16.1.1` ✅ Modern, App Router prêt
- `react@19.2.3` ✅ Latest
- `framer-motion@^11` ✅ Animations (sobres, progressive enhancement)
- `zod@^4.3.4` ✅ Validation schémas

### Build
- `tailwindcss@^4` ✅ Styling (v4 avec @tailwindcss/postcss)
- `typescript@^5` ✅ Type-safe
- `eslint@^9` ✅ Linting (ignorer CarServ legacy)
- `jest@^30` ✅ Testing

**À éviter** : jQuery, lodash lourd, carousel libs → utiliser Tailwind + Framer Motion

---

## 9) Commandes canoniques (baseline CI local)

```bash
# Build
npm run build

# Lint
npm run lint
# Output: CarServ errors ignorables (wow.js), convert-images.js require

# Test
npm run test
# Output: 3 tests échouent (async cleanup) → à fixer PR4

# Dev local
npm run dev
# http://localhost:3000

# Type check
npm run typecheck
```

---

## 10) Critères acceptation final (PASS/FAIL per PR)

### Tous les PRs
- ✅ Build OK (`npm run build`)
- ✅ Aucun placeholder visible
- ✅ Aucun "Chargement…" / spinner
- ✅ SLA unifié partout
- ✅ Responsive (375px–1920px)
- ✅ Lighthouse ≥ 90 perf (mobile priorité)

### PR2 (conversion)
- ✅ `/` + `/fast-remote` complètes
- ✅ SLA badges identiques
- ✅ CTA primaire + secondaire visibles

### PR3 (SEO P0)
- ✅ 4 pages équipement créées + naviguables
- ✅ 3 case studies OU fallback premium
- ✅ Pages légales présentes

### PR4 (intake)
- ✅ `/api/leads` POST répond 200
- ✅ Formulaires soumettent sans erreur
- ✅ Leads forwarded à intake
- ✅ Zéro secret client (localStorage/sessionStorage)

### PR5 (finitions)
- ✅ Cookies banner fonctionne
- ✅ Sitemap ≥ 13 URLs
- ✅ robots.txt OK
- ✅ Lighthouse full audit ≥ 90 tout

---

## 11) FAIL immédiat (NO-GO prod)

- ❌ Contact cassé (formulaire manquant / submit erreur)
- ❌ SLA contradictoire affichée
- ❌ Stats/avis non prouvables ("1000+ cas", "4.9/5" sans source)
- ❌ FASTCore credentials côté client
- ❌ Secrets localStorage/sessionStorage
- ❌ "Chargement…" visible
- ❌ Placeholder texte visible
- ❌ Station lavage absente
- ❌ Ton incohérent (tu/ta mélangé vous/votre)

---

**Fin du résumé exécutif**

