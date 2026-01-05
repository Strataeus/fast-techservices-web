# CARSERV ADAPTATION PLAN — Application au site FAST Tech Services

**Statut** : PLANIFICATION  
**Date** : 4 janvier 2026  
**Objectif** : Transformer le site actuel en copie conforme de CarServ (structure/UX) avec contenu FAST Tech Services

---

## SECTION 1 — STRUCTURE CARSERV ANALYSÉE

### 1.1 Sections/Composants CarServ (dans l'ordre HTML)

```
1. Topbar (desktop only)
   - Adresse + horaires (left)
   - Téléphone + réseaux sociaux (right)

2. Navbar sticky
   - Logo + brand
   - Menu principal (Home, About, Service, Technician, Contact)
   - CTA "Buy Pro Version" (hidden mobile)

3. Hero Carousel (fullwidth)
   - 2+ slides avec images
   - Texte superposé (h6 + h1 + CTA)
   - Animations (slideInDown, zoomIn)
   - Navigation prev/next

4. About Section
   - Image left + text right
   - "Years of Experience" badge (top-right de l'image)
   - Bloc principal (h1 + paragraph)
   - 3 numbered features (01, 02, 03 format)
     * Icône + title + description (chacun)
   - CTA "Read More"

5. Services Section (tabbed)
   - Titre centré (h6 + h1)
   - Left menu (4 tabs avec icones + titres)
   - Right pane (image + description + benefits list + CTA)
   - Comportement tab : onclick data-bs-toggle="pill"

6. Team Section
   - Titre centré
   - Grid 4 colonnes (3 cols md, 6 cols lg)
   - Chaque item = image + overlay social + text card

7. Contact Section
   - Titre centré
   - 3 info cards (Booking, General, Technical)
   - Left : carte Google Maps
   - Right : formulaire (name, email, subject, message + submit)

8. Footer
   - Dark bg
   - 4 colonnes:
     * Address (adresse, phone, email, socials)
     * Opening Hours
     * Services links
     * Newsletter signup
   - Copyright bar (logo links + menu links)
   - Back-to-top button (fixed)

9. Global
   - WOW animations (fadeInUp, fadeIn, zoomIn)
   - Bootstrap 5 grid
   - FontAwesome icons
   - Smooth transitions
```

### 1.2 Design Système CarServ

| Aspect | Détail |
|--------|--------|
| **Couleur primaire** | #003366 (bleu foncé) |
| **Couleur accent** | #00AA00 (vert pour checkmarks) |
| **Background** | Blanc/light gray |
| **Typographie** | Barlow (600, 700), Ubuntu (400, 500) |
| **Layout** | Bootstrap 5, container-xxl, rows/cols |
| **Animations** | AOS/WOW (library externe) |
| **Icons** | FontAwesome 5 |
| **Images** | JPG carrousel/services/team |

---

## SECTION 2 — MAPPING CARSERV → FAST TECH SERVICES

### 2.1 Contenu Textuel

| CarServ | FAST Tech Services |
|---------|-------------------|
| Car Repair Service Center | Dépannage premium d'équipements de garage |
| Diagnostic Test | Diagnostic FAST Remote (visio) |
| Engine Servicing | Compresseurs & air comprimé |
| Tires Replacement | Cabines peinture & ventilation |
| Oil Changing | Stations de lavage |
| 15 Years Experience | Expertise terrain-first |
| Quality Servicing | Preuves, tests de sortie, dossier clair |
| Expert Workers | Électromécaniciens expérimentés |
| Modern Equipment | Méthode TERRAIN→PREUVE→VERDICT |
| Our Technicians | Notre équipe |
| Full Name / Designation | Nom / Spécialité |

### 2.2 Sections Clés FAST (vs CarServ)

| Section | CarServ Orig | FAST Adaptation |
|---------|--------------|-----------------|
| Topbar | Adresse garage | SLA (4h, 24h, 2h) |
| Navbar | Home, About, Service, Team, Contact | Home, FAST Remote, Services, Méthode, Réalisations, Zones, Contact |
| Hero | "Qualified Car Repair" | "Dépannage premium équipements garage" |
| About | "15 Years Exp" + 3 features | Expertise + TERRAIN→PREUVE→VERDICT + 3 pillars |
| Services | 4 services (Diagnostic, Engine, Tires, Oil) | 4 équipements (Ponts, Compresseurs, Cabines, Stations) |
| Team | 4 technicians | À voir (team FAST ou équipements highlights) |
| Contact | 3 categories + form | Contact form + SLA |
| Footer | Hours + links | Legal links + SLA |

---

## SECTION 3 — DESIGN SYSTEM ADAPTÉ

### 3.1 Couleurs FAST (vs CarServ bleu)

```
Primary: #0f172a (dark slate - conforme design actuel FAST)
Accent: #00d9ff (cyan - conforme design actuel FAST)
Success: #10b981 (vert, pour checkmarks)
Background: #0f172a (dark, pas blanc comme CarServ)
Text: #ffffff, #ccc, #888
```

### 3.2 Typographie

```
Display: Space Grotesk (400, 500, 600, 700) - conforme FAST
Body: IBM Plex Sans (300, 400, 500, 600, 700) - conforme FAST
(Garder CarServ mais adapter couleurs + spacing)
```

### 3.3 Layout & Spacing

- Garder Bootstrap 5 (container, rows, cols) = CarServ
- Garder grid responsive (col-lg, col-md, col-12) = CarServ
- Adapter padding/margins aux design tokens FAST
- Animations : WOW/AOS ou Framer Motion (déjà utilisé)

---

## SECTION 4 — PLAN IMPLÉMENTATION

### Phase 1 — Composants de Base (1-2 jours)

```
☐ TopBar.tsx (SLA badges au lieu de hours)
☐ Navbar.tsx (nav links actualisés)
☐ HeroCarousel.tsx (2-3 slides adaptés FAST)
☐ Footer.tsx (contact info + legal links)
```

### Phase 2 — Sections Principales (2-3 jours)

```
☐ AboutSection.tsx (TERRAIN→PREUVE→VERDICT + 3 features)
☐ ServicesTabsSection.tsx (4 équipements = ponts, compresseurs, cabines, stations)
  - Left menu avec tabs
  - Right pane avec image + description + features
☐ RealisationsCaseStudies.tsx (remplace Team) = 3+ cas concrets
☐ ContactSection.tsx (form + map + SLA)
```

### Phase 3 — Pages Complètes (2 jours)

```
☐ Reconstruire /app/page.tsx (Home = TopBar + Navbar + Hero + About + Services + Cases + Contact + Footer)
☐ /app/services/page.tsx (Services hub)
☐ /app/services/[equipment]/page.tsx (Ponts, Compresseurs, Cabines, Stations)
☐ /app/contact/page.tsx (Contact form)
☐ /app/methode/page.tsx (Méthode section)
☐ /app/realisations/page.tsx (Case studies)
```

### Phase 4 — Styling & Animations (1 jour)

```
☐ Dark design system (0f172a + 00d9ff)
☐ WOW/AOS animations (fadeInUp, zoomIn, slideInDown)
☐ Responsive mobile (test sur tel)
☐ Lighthouse ≥90 (perf, SEO)
```

### Phase 5 — Test & Recette (1 jour)

```
☐ npm run build (sans erreurs)
☐ Pages visibles (0 placeholder)
☐ Spec compliance (FAST_SITE_SPEC_v1 + FAST_TECH_SERVICES_COPY_v1)
☐ SLA unique et cohérent
☐ Formulaires → /api/contact
☐ Deploy staging
```

---

## SECTION 5 — TÂCHES DÉTAILLÉES

### Task 5.1 — TopBar Component

**Statut** : TODO  
**Fichier** : `components/TopBar.tsx`

```typescript
// Props
interface TopBarProps {
  slaConfig: SLAConfig
  phone: string
  email: string
}

// Rendu
- Left: SLA badges (Accusé immédiat | Réponse 4h | Visio 24h)
- Right: Phone + Email links + Social icons (optionnel)
- Responsive: Hidden sur mobile (d-none d-lg-flex)
```

### Task 5.2 — Navbar Component

**Statut** : TODO  
**Fichier** : `components/Navbar.tsx` (amélioration de Header.tsx actuel)

```typescript
// Props
interface NavbarProps {
  nav: {
    main: Array<{ label, href }>
    legal: Array<{ label, href }>
  }
  brand: { name, tagline }
  cta: { primary, secondary }
}

// Rendu (carServ-style)
- Logo left (brand.name)
- Menu center (Home, FAST Remote, Services, Méthode, Réalisations, Zones, Contact)
- CTA right (Démarrer FAST Remote)
- Sticky on scroll
- Mobile hamburger menu
```

### Task 5.3 — HeroCarousel Component

**Statut** : TODO  
**Fichier** : `components/sections/HeroCarousel.tsx`

```typescript
// Slides: 2-3 images + textes
// Slide 1: "Dépannage premium équipements garage"
// Slide 2: "FAST Remote — diagnostic visio en 4h"
// Slide 3 (opt): "Méthode TERRAIN→PREUVE→VERDICT"

// Features
- Fullwidth container
- Image background
- Text overlay (h6 + h1 + CTA)
- Animations (slideInDown pour texte, zoomIn pour image)
- Prev/Next buttons
- Bootstrap carousel (data-bs-ride)
```

### Task 5.4 — About Section (TERRAIN→PREUVE→VERDICT)

**Statut** : TODO  
**Fichier** : `components/sections/AboutFAST.tsx`

```typescript
// Contenu
- Image left (équipement garage ou montage)
- Badge top-right ("Expertise Terrain" ou "20+ ans")
- Title: "[Brand] est le meilleur partenaire pour votre atelier"
- Description: texte cop FAST_TECH_SERVICES_COPY_v1
- 3 Numbered Features:
  01. Terrain-first methodology
  02. Preuves documentées (avant/après)
  03. Tests de sortie obligatoires
- CTA "En savoir plus" → /methode
```

### Task 5.5 — Services Tabbed Section

**Statut** : TODO  
**Fichier** : `components/sections/ServicesTabsFAST.tsx`

```typescript
// Tabs: 4 équipements
1. Ponts élévateurs
2. Compresseurs & air comprimé
3. Cabines peinture & ventilation
4. Stations de lavage

// Chaque tab
- Left menu (icon + title)
- Right pane:
  * Image (service-1.jpg style)
  * h3 title
  * Description (pourquoi cet équipement)
  * Bullet list (3 avantages)
  * CTA "En savoir plus" → /services/[equipment]
```

### Task 5.6 — Realisations/Cases Section

**Statut** : TODO  
**Fichier** : `components/sections/CaseStudiesFAST.tsx`

```typescript
// Replace "Team" section
// 3+ case studies (réalisations)
// Grid 3-4 colonnes

// Chaque cas:
- Image (before ou composite)
- Titre (Cas #1: Pont élévateur...)
- Court description
- Link → /realisations#case-01
```

### Task 5.7 — Contact Section (Form + Map)

**Statut** : TODO (partiellement existant)  
**Fichier** : `components/sections/ContactSectionFAST.tsx`

```typescript
// Top: 3 info cards
- Booking: contact@fast...
- General: info@fast...
- Technical: tech@fast...

// Left: Google Map (France ou Île-de-France)
// Right: Contact Form
- Name, Email, Phone, Message
- Submit → /api/contact
- SLA affichée

// Existing ContactForm peut être réutilisé
```

---

## SECTION 6 — FICHIERS À CRÉER/MODIFIER

### Créer (Nouveaux)

```
components/TopBar.tsx
components/sections/HeroCarouselFAST.tsx
components/sections/AboutFAST.tsx
components/sections/ServicesTabsFAST.tsx
components/sections/CaseStudiesFAST.tsx
components/sections/ContactSectionFAST.tsx
```

### Modifier (Existants)

```
app/layout.tsx         (intégrer TopBar + Navbar)
app/page.tsx           (layout complet CarServ pour home)
app/contact/page.tsx   (garder form, adapter layout)
components/Header.tsx  (devenir Navbar CarServ-style)
components/Footer.tsx  (adapter layout CarServ)
```

### Supprimer ou Archiver

```
app/web/_templates/CarServ/  (déjà analysé, peut rester)
(Aucun autre suppression strictement nécessaire)
```

---

## SECTION 7 — SPÉCIFICATIONS COMPLÈTES PAR COMPOSANT

### TopBar (hauteur ~60px)

```tsx
export function TopBar() {
  return (
    <div className="container-fluid bg-slate-900 p-3">
      <div className="row gx-0">
        <div className="col-lg-6 px-5 text-start">
          {/* SLA Badges */}
          <div className="d-flex gap-4">
            <small>✓ Accusé immédiat</small>
            <small>✓ Réponse 4h ouvrées</small>
          </div>
        </div>
        <div className="col-lg-6 px-5 text-end">
          {/* Phone + Socials */}
          <a href="tel:+33...">📞 +33</a>
          {/* Social icons */}
        </div>
      </div>
    </div>
  )
}
```

### HeroCarousel (height: 100vh)

```tsx
export function HeroCarousel() {
  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img className="w-100 h-100" src="hero1.webp" />
          <div className="carousel-caption">
            <h6 className="text-white text-uppercase">// Dépannage Premium //</h6>
            <h1 className="text-white">Équipements de garage</h1>
            <a href="/fast-remote" className="btn btn-primary">Démarrer FAST Remote</a>
          </div>
        </div>
        {/* ... */}
      </div>
    </div>
  )
}
```

---

## SECTION 8 — RESSOURCES

- CarServ template: `app/web/_templates/CarServ/`
- FAST Copy: `docs/site-spec/FAST_TECH_SERVICES_COPY_v1.md`
- FAST Spec: `docs/site-spec/FAST_SITE_SPEC_v1.md`
- Content Map: `docs/site-spec/content-map.yml`
- Design Tokens: `lib/design/tokens.ts`

---

## SECTION 9 — CRITÈRES DE SUCCÈS

✅ **FAIT** = Quand :
1. Structure HTML/CSS = CarServ (same layout, responsive)
2. Contenu = FAST Tech Services (100% couvert)
3. Couleurs = Design system FAST (dark + cyan)
4. Pages = Home + About + Services + Contact + Méthode + Réalisations
5. Build = npm run build sans erreur
6. Spec compliance = FAST_SITE_SPEC_v1 + FAST_TECH_SERVICES_COPY_v1 OK
7. SLA = Unique et cohérent partout
8. Lighthouse ≥ 90 (ou proche)

---

**Fin du plan.**
