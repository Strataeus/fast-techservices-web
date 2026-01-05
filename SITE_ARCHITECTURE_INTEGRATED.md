# SITE_ARCHITECTURE_INTEGRATED.md — Ossature CarServ + content-map.yml + assets
**Statut:** Référence architecturale maître v1.0  
**Date:** 4 janvier 2026  
**Objectif:** Unifier CarServ (UX/composants), content-map.yml (structure pages/sections), assets-manifest.md (visuels)

---

## 1) Principes d'intégration

### 1.1 Structure = content-map.yml
- **13 pages** mandatoires (spec P0)
- **8 types de sections** normalisées (hero, equipment_grid, method_5_steps, case_studies, contact_form, etc.)
- **SLA unique** (Accusé immédiat → 4h → 24h → 2h)
- **Navigation** uniforme (header + footer)

### 1.2 UX/Composants = CarServ template
- TopBar avec SLA badges
- Navbar sticky (logo, nav, CTA)
- Hero Carousel (slides multiples, animations)
- About section (3 features)
- Services tabs (4 équipements)
- Case studies grid (3+ réalisations)
- Contact section (form + map/info)
- Footer (liens légaux, infos)

### 1.3 Assets = assets-manifest.md
- **Logos & identité** (brand/)
- **Hero visuels** (media/)
- **Photos terrain** (proofs/ — EXIGENCE STRICTE : preuves réelles)
- **Icônes SVG** (icons/)
- **CarServ imports** (refactor en tokens FAST)

### 1.4 Design system
- **Primaire:** #0f172a (dark slate)
- **Accent:** #00d9ff (cyan)
- **Typography:** Space Grotesk (display), IBM Plex Sans (body)
- **Bootstrap 5** patterns (CarServ) adaptés à Tailwind FAST

---

## 2) Pages (13) + sections normalisées

### Page 1: HOME (`/`)
**Slug:** `/`  
**SLA:** Visible dans TopBar + hero

| Section | Type | Contenu | Assets |
|---------|------|---------|--------|
| TopBar | custom | SLA badges + phone + socials | config.sla |
| Navbar | sticky | Logo, nav 6 items, CTA | config.navigation |
| Hero | carousel | 2-3 slides (dépannage, FAST Remote, TERRAIN-PREUVE-VERDICT) | hero-fast-remote-5s.mp4 + fallback |
| Equipment Grid | 4 cards | Ponts, Compresseurs, Cabines, Stations (avec icons) | icons/lift.svg, etc. + links to /services/* |
| Method Teaser | 5 steps | Cadrage → Preuves → Tests → Action → Verdict | icons/proof.svg, verdict.svg |
| Case Studies Teaser | 3 cards | 3 réalisations (avant/après) avec liens | proofs/cases/case-*/after.jpg |
| Emergency CTA | hero | "Machine bloquée → FAST Remote" avec form inline | hero-services.jpg |
| Footer | standard | Mentions légales, Confidentialité, Cookies, SLA | config.footer |

### Page 2: FAST REMOTE (`/fast-remote`)
**Slug:** `/fast-remote`  
**Formulaire:** FastRemoteQualifyingForm → POST /api/contact (type: "fast_remote")

| Section | Type | Contenu | Assets |
|---------|------|---------|--------|
| TopBar | custom | SLA badges | config.sla |
| Navbar | sticky | Logo, nav, CTA | |
| Hero | standard | "FAST Remote — dépannage à distance en visio" | hero-remote.jpg |
| Pricing Block | teaser | "Tarif clair, périmètre cadré — détail tarifaire P1" | — |
| Contact Form | fast_remote | Formulaire qualification (9 fields) | — |
| Footer | standard | | |

### Page 3: SERVICES HUB (`/services`)
**Slug:** `/services`  
**Purpose:** Passerelle vers 4 pages services détaillées

| Section | Type | Contenu | Assets |
|---------|------|---------|--------|
| TopBar | custom | SLA badges | |
| Navbar | sticky | | |
| Hero | standard | "Services — Dépannage premium, remise en service, fiabilisation" | hero-services.jpg |
| Equipment Grid | 4 cards | Idem Home, mais plus détaillé + CTA "En savoir plus" | icons + links to /services/[svc] |
| Footer | standard | | |

### Pages 4–7: SERVICE DETAILS (`/services/ponts-elevateurs`, etc.)
**Pattern:** ServiceDetailPage (existant, à adapter CarServ)

4. `/services/ponts-elevateurs`
5. `/services/compresseurs-air`
6. `/services/cabines-peinture-ventilation`
7. `/services/stations-lavage`

| Section | Type | Contenu | Assets |
|---------|------|---------|--------|
| TopBar | custom | SLA badges | |
| Navbar | sticky | | |
| Hero | standard | "[Équipement] — sécurité, conformité, stabilité…" | hero-services.jpg (ou déclinaison) |
| Content Block | richtext | Description, diagnostic, remise en service | — |
| Related Cases | teaser | Cas liés à cet équipement | proofs/cases/* |
| CTA | hero | "Démarrer FAST Remote" | |
| Footer | standard | | |

### Page 8: MÉTHODE (`/methode`)
**Slug:** `/methode`  
**Purpose:** Explication TERRAIN → PREUVE → VERDICT

| Section | Type | Contenu | Assets |
|---------|------|---------|--------|
| TopBar | custom | SLA badges | |
| Navbar | sticky | | |
| Hero | standard | "Méthode FAST — Terrain → Preuve → Verdict" | hero-method.jpg |
| Method 5 Steps | 5 blocks | Cadrage → Preuves → Tests discriminants → Action → Validation | icons/proof.svg, verdict.svg |
| Case Teaser | 3 cards | 3 cas illustrant la méthode | proofs/cases/*/diagnostic.jpg |
| CTA | hero | "Vous avez une question technique ?" | |
| Footer | standard | | |

### Page 9: RÉALISATIONS (`/realisations`)
**Slug:** `/realisations`  
**Purpose:** Galerie + études de cas détaillées

| Section | Type | Contenu | Assets |
|---------|------|---------|--------|
| TopBar | custom | SLA badges | |
| Navbar | sticky | | |
| Hero | standard | "Réalisations & preuves — cas concrets, preuves terrain" | hero-cases.jpg |
| Case Studies | 3+ cards | Cas #1, #2, #3 (avant/diag/action/après) | proofs/cases/case-*/[before\|diagnostic\|action\|after].jpg |
| Gallery Teaser | grid | 20 photos terrain supplémentaires (optional) | proofs/gallery/01-20.jpg |
| Footer | standard | | |

### Page 10: ZONES (`/zones`)
**Slug:** `/zones`  
**Purpose:** Couverture géographique

| Section | Type | Contenu | Assets |
|---------|------|---------|--------|
| TopBar | custom | SLA badges | |
| Navbar | sticky | | |
| Hero | standard | "Zones d'intervention — FAST Remote France entière, onsite selon zones" | hero-services.jpg |
| Map/Content Block | richtext | Carte + texte zones (à refine) | — |
| Footer | standard | | |

### Page 11: CONTACT (`/contact`)
**Slug:** `/contact`  
**Formulaire:** ContactForm → POST /api/contact (type: "contact")

| Section | Type | Contenu | Assets |
|---------|------|---------|--------|
| TopBar | custom | SLA badges | |
| Navbar | sticky | | |
| Hero | standard | "Contact — Expliquez votre besoin. Accusé immédiat, réponse 4h." | hero-services.jpg |
| Contact Section | form + map | Formulaire (6 fields) + Google Map + infos (phone, email) | — |
| Footer | standard | | |

### Pages 12–13: LÉGAL (`/mentions-legales`, `/confidentialite`, `/cookies`)
**Slug:** `/mentions-legales`, `/confidentialite`, `/cookies`  
**Purpose:** Pages légales minimalistes

| Section | Type | Contenu | Assets |
|---------|------|---------|--------|
| TopBar | optional | SLA badges (ou hidden) | |
| Navbar | sticky | | |
| Hero | simple | "Mentions légales" / "Confidentialité" / "Cookies" | — |
| Legal Content | richtext | Texte légal structuré (RGPD, cookies, etc.) | — |
| Footer | standard | | |

---

## 3) Composants GlobalLayout (wrapper)

Tous les composants injectés dans `app/layout.tsx`:

```
<TopBar /> — SLA + phone + socials
<Navbar /> — Logo + nav + CTA
<main>
  {children}
  <StickyCTA /> — (optionnel, floatant)
</main>
<Footer /> — Nav footer + légal + SLA
```

---

## 4) Composants section-level (réutilisables)

### 4.1 Existants (adapter/refactor)
- `components/sections/HeroSection.tsx` → remplacer par `HeroCarousel.tsx`
- `components/sections/AboutSection.tsx` → remplacer par `AboutFAST.tsx` (TERRAIN-PREUVE-VERDICT)
- `components/sections/MethodTeaserSection.tsx` → intégrer dans `MethodFAST.tsx` (5 steps)
- `components/sections/ProofsTeaser.tsx` → intégrer dans `CaseStudiesFAST.tsx`
- `components/sections/ContactForm.tsx` → réutiliser (POST /api/contact)
- `components/Header.tsx` → refactor en `Navbar.tsx`
- `components/Footer.tsx` → adapter (SLA, nav footer)

### 4.2 Nouveaux (créer)
- `components/TopBar.tsx` — SLA badges, phone, socials
- `components/sections/HeroCarousel.tsx` — 2-3 slides avec animations
- `components/sections/EquipmentGrid.tsx` — 4 cards ponts/compresseurs/cabines/stations
- `components/sections/MethodFAST.tsx` — 5 steps visual
- `components/sections/ServicesTabsFAST.tsx` — 4 equipment tabs (détaillé)
- `components/sections/CaseStudiesFAST.tsx` — 3+ case cards avec images
- `components/sections/ContactSectionFAST.tsx` — Form + map (CarServ layout)
- `components/Navbar.tsx` — Sticky navbar (CarServ-style)

---

## 5) Pages transformation roadmap

### Phase 1: Global Layout (Semaine 1, jours 1-2)
**Objectif:** Établir TopBar + Navbar (tous les composants les utiliseront)

**Fichiers:**
- ✅ Create `components/TopBar.tsx`
- ✅ Create `components/Navbar.tsx` (refactor Header)
- ✅ Update `app/layout.tsx` (render TopBar + Navbar + Footer)
- ✅ Update `components/Footer.tsx` (SLA, nav footer)

**Dépendances:** content/config.ts (getSLA, getNavigation, getCTA)  
**Validation:** Build clean (npm run build), all pages render with new layout

---

### Phase 2: Hero section standardization (Semaine 1, jours 2-3)
**Objectif:** Créer HeroCarousel, adapter toutes les pages

**Fichiers:**
- ✅ Create `components/sections/HeroCarousel.tsx` (2-3 slides, animations)
- ✅ Update `app/page.tsx` — remplacer HeroSection par HeroCarousel
- ✅ Update `/fast-remote`, `/services`, `/methode`, `/realisations`, `/zones`, `/contact`

**Validation:** npm run build, Lighthouse ≥85 (hero performance)

---

### Phase 3: Content sections (Semaine 1-2, jours 3-5)
**Objectif:** Créer EquipmentGrid, MethodFAST, CaseStudiesFAST

**Fichiers:**
- ✅ Create `components/sections/EquipmentGrid.tsx` — 4 cards
- ✅ Create `components/sections/MethodFAST.tsx` — 5 steps (Cadrage → Verdict)
- ✅ Create `components/sections/CaseStudiesFAST.tsx` — 3+ cases
- ✅ Update `app/page.tsx` — intégrer EquipmentGrid + MethodFAST + CaseStudiesFAST
- ✅ Update `/methode`, `/realisations`

**Validation:** npm run build, all sections responsive (mobile-first)

---

### Phase 4: Services & service details (Semaine 2, jours 5-6)
**Objectif:** Créer ServicesTabsFAST, adapter pages détaillées

**Fichiers:**
- ✅ Create `components/sections/ServicesTabsFAST.tsx` — 4 tabs (détaillé)
- ✅ Update `/services`, `/services/ponts-elevateurs`, `/services/compresseurs-air`, `/services/cabines-peinture-ventilation`, `/services/stations-lavage`

**Validation:** Tab navigation fluid, links correct

---

### Phase 5: Contact & forms (Semaine 2, jours 6-7)
**Objectif:** Créer ContactSectionFAST, adapter forms

**Fichiers:**
- ✅ Create `components/sections/ContactSectionFAST.tsx` — form + map + info
- ✅ Update `/contact`, `/fast-remote` (form integration)
- ✅ Verify `/api/contact` backend ready (PR4)

**Validation:** Forms POST correctly, no console errors, SLA visible

---

### Phase 6: Styling & design system (Semaine 3, jours 1-3)
**Objectif:** Appliquer dark + cyan aux composants CarServ

**Fichiers:**
- ✅ Refactor `lib/design/tokens.ts` — assurer cohérence dark/cyan
- ✅ Update Tailwind classes dans tous les nouveaux composants
- ✅ Test dark mode toggle (if applicable)

**Validation:** Lighthouse ≥90, color contrast ≥4.5:1 (WCAG AA)

---

### Phase 7: Assets & content (Semaine 3, jours 3-5)
**Objectif:** Intégrer photos terrain (assets-manifest.md)

**Fichiers:**
- ✅ Upload heroes (hero-fast-remote.jpg, hero-services.jpg, etc.)
- ✅ Upload case studies (proofs/cases/case-{01,02,03}/*)
- ✅ Upload icons (lift.svg, compressor.svg, booth.svg, wash.svg, etc.)
- ✅ Update image refs dans components (héros, carousels, cases)

**Validation:** Lighthouse image optimization, no 404s

---

### Phase 8: Testing & QA (Semaine 3-4, jours 5-7)
**Objectif:** Vérifier spec compliance, mobile, perf, SEO

**Checklist:**
- ✅ Spec compliance: 13 pages P0 routable, SLA unique, zero invented stats, zero exposed FASTCore
- ✅ Mobile responsiveness: 375px → 1920px (Bootstrap grid)
- ✅ Lighthouse: Home ≥90, Services ≥85, Contact ≥85
- ✅ Forms: POST to /api/contact with correct types (fast_remote, contact)
- ✅ SLA: Visible TopBar + héros + footer (config.ts single source)
- ✅ SEO: Meta titles/descriptions match content-map.yml
- ✅ No console errors, no warnings

**Validation:** npm run build → 0 errors, npm run lint → 0 errors

---

## 6) Assets mapping (content-map.yml + assets-manifest.md)

### 6.1 Logos & Brand
- `public/brand/logo-fast.svg` — Navbar + Footer
- `public/brand/favicon.ico` — Browser tab
- `public/brand/apple-touch-icon.png` — iOS

### 6.2 Heroes
- `public/media/hero-fast-remote-5s.mp4` + fallback — Home carousel slide 1
- `public/media/hero-remote.jpg` — /fast-remote hero
- `public/media/hero-services.jpg` — /services, /services/*, hero CTA
- `public/media/hero-method.jpg` — /methode hero
- `public/media/hero-cases.jpg` — /realisations hero

### 6.3 Case Studies (3 minimum, 4 images each)
- `public/proofs/cases/case-01/` — before, diagnostic, action, after
- `public/proofs/cases/case-02/` — before, diagnostic, action, after
- `public/proofs/cases/case-03/` — before, diagnostic, action, after

### 6.4 Icons (SVG)
- `public/icons/lift.svg` — Ponts élévateurs
- `public/icons/compressor.svg` — Compresseurs & air
- `public/icons/booth.svg` — Cabines peinture/ventilation
- `public/icons/wash.svg` — Stations de lavage
- `public/icons/remote.svg` — FAST Remote visio
- `public/icons/safety.svg` — Sécurité/LOTO
- `public/icons/proof.svg` — Preuve
- `public/icons/verdict.svg` — Verdict/PV

### 6.5 Illustrations (subtil, high-tech limité)
- `public/illustrations/circuit-bg.png` — Fond section (optional)
- `public/illustrations/grid-glow.png` — Accent (optional)

---

## 7) Code patterns (référence)

### 7.1 Form submission (FastRemoteQualifyingForm, ContactForm)
```typescript
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    type: "fast_remote" | "contact",  // ← type required
    name, email, phone, city, postal_code, // ...
  }),
});
if (!response.ok) {
  const error = await response.json();
  throw new Error(error.message);
}
// Success: redirect or show message
```

### 7.2 SLA consumption (everywhere)
```typescript
import { getSLA } from "@/content/config";

const sla = getSLA();
// { ack: "Accusé immédiat", response: "Réponse sous 4h ouvrées", ... }
```

### 7.3 Navigation (header/footer)
```typescript
import { getNavigation } from "@/content/config";

const nav = getNavigation();
// [ { label: "FAST Remote", href: "/fast-remote" }, ... ]
```

### 7.4 Design tokens (colors, spacing)
```typescript
import { colors, spacing } from "@/lib/design/tokens";

className={`bg-${colors.primary} text-${colors.accent} p-${spacing.lg}`}
// → Tailwind: bg-slate-900 text-cyan-400 p-8
```

---

## 8) Success Criteria (Go/No-Go)

✅ **Spec Compliance**
- [ ] 13 P0 pages routable (Home, Fast Remote, Services (hub + 4 details), Méthode, Réalisations, Zones, Contact, 3 légales)
- [ ] SLA unique across all pages (4h response time)
- [ ] Zero invented stats, avis, chiffres
- [ ] Zero exposed FASTCore API calls
- [ ] Zero visible placeholders

✅ **Architecture**
- [ ] CarServ UX pattern applied (TopBar, Navbar, Hero carousel, sections, footer)
- [ ] content-map.yml structure respected (8 section types, nav, SLA)
- [ ] assets-manifest.md used (logos, heroes, cases, icons, proofs)
- [ ] Form POST to /api/contact (type field required)
- [ ] All pages responsive (375px+)

✅ **Performance**
- [ ] Lighthouse Home ≥90
- [ ] Lighthouse Services ≥85
- [ ] Lighthouse Contact ≥85
- [ ] Build clean (npm run build → 0 errors)
- [ ] Zero console errors/warnings

✅ **Content**
- [ ] All copy matches FAST_TECH_SERVICES_COPY_v1.md
- [ ] All page titles/descriptions match content-map.yml
- [ ] 3+ case studies with before/after images
- [ ] Method section clear (TERRAIN → PREUVE → VERDICT)
- [ ] Equipment descriptions complete (ponts, compresseurs, cabines, stations)

✅ **UX/Visual**
- [ ] Dark + cyan design system applied (#0f172a, #00d9ff)
- [ ] Heroes properly animated (CarServ pattern)
- [ ] Forms clear, accessible (WCAG AA min)
- [ ] Mobile first, desktop enhanced
- [ ] Images optimized (WebP, srcset, lazy-load)

---

## 9) Git workflow

**One PR = One intention** (per FAST_SITE_SPEC_v1.md)

```bash
# Phase 1: TopBar + Navbar
git checkout -b feature/phase-1-layout
# (implement + test + commit)
git commit -m "Phase 1: TopBar + Navbar + global layout"
git push

# Phase 2: HeroCarousel
git checkout -b feature/phase-2-hero
# (implement)
git commit -m "Phase 2: HeroCarousel + page updates"
git push

# ... etc
```

---

## 10) References
- **Spec:** `docs/site-spec/FAST_SITE_SPEC_v1.md`
- **Copy:** `docs/site-spec/FAST_TECH_SERVICES_COPY_v1.md`
- **Structure:** `docs/site-spec/content-map.yml` (this document)
- **Assets:** `docs/site-spec/assets-manifest.md`
- **CarServ template:** `app/web/_templates/CarServ/index.html` (reference)
- **Codebase:** `app/`, `components/`, `lib/`, `content/`
