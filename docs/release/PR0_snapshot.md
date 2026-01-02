# PR0 Snapshot - État Initial du Projet

**Date** : 2 janvier 2026  
**Framework** : Next.js 16.1.1 (App Router)  
**Commit SHA** : *À compléter avant merge*  

---

## 📐 Architecture Next.js

### Routeur
- **Type** : **App Router** (moderne)
- **Répertoire principal** : `app/`
- **Convention de fichiers** : `layout.tsx`, `page.tsx`, `route.ts` (API), `[slug]` (paramètres dynamiques)

### Structure niveau 2

```
app/
├── layout.tsx                 # Layout racine
├── page.tsx                   # Page d'accueil /
├── not-found.tsx              # Page 404
├── robots.ts                  # robots.txt généré
├── sitemap.ts                 # sitemap.xml généré
├── api/
│   └── contact/
│       └── route.ts           # POST /api/contact
├── confidentialite/
│   └── page.tsx               # /confidentialite
├── contact/
│   └── page.tsx               # /contact
├── fast-remote/
│   ├── layout.tsx
│   └── page.tsx               # /fast-remote
├── mentions-legales/
│   └── page.tsx               # /mentions-legales
├── methode/
│   └── page.tsx               # /methode
├── preuves/
│   ├── page.tsx               # /preuves (liste)
│   └── [slug]/
│       └── page.tsx           # /preuves/[slug]
├── services/
│   ├── page.tsx               # /services (liste)
│   └── [slug]/
│       └── page.tsx           # /services/[slug]
└── zones/
    ├── page.tsx               # /zones (liste)
    └── [slug]/
        └── page.tsx           # /zones/[slug]
```

---

## 🔗 Routes et Pages Disponibles

| Route | Fichier | Type | Description |
|-------|---------|------|-------------|
| `/` | `app/page.tsx` | Page | Accueil |
| `/contact` | `app/contact/page.tsx` | Page | Formulaire contact |
| `/services` | `app/services/page.tsx` | Page | Liste des services |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | Dynamique | Détail service |
| `/zones` | `app/zones/page.tsx` | Page | Liste des zones |
| `/zones/[slug]` | `app/zones/[slug]/page.tsx` | Dynamique | Détail zone |
| `/preuves` | `app/preuves/page.tsx` | Page | Liste des preuves/case studies |
| `/preuves/[slug]` | `app/preuves/[slug]/page.tsx` | Dynamique | Détail preuve |
| `/methode` | `app/methode/page.tsx` | Page | Méthodologie FAST |
| `/fast-remote` | `app/fast-remote/page.tsx` | Page | Service FAST Remote |
| `/mentions-legales` | `app/mentions-legales/page.tsx` | Page | Mentions légales |
| `/confidentialite` | `app/confidentialite/page.tsx` | Page | Politique confidentialité |
| `/api/contact` | `app/api/contact/route.ts` | API | POST pour formulaires |
| `404` | `app/not-found.tsx` | Fallback | Page 404 |

---

## 📦 Structure du Projet

```
components/
├── Layout & Structure
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   ├── Container.tsx
│   ├── Section.tsx
│   └── layout/
│       ├── Background.tsx
│       ├── PageTransition.tsx
│       └── ScrollToHash.tsx
├── Pages Components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Services.tsx
│   ├── ServiceCard.tsx
│   ├── ServicePageTemplate.tsx
│   ├── Proofs.tsx
│   ├── Method.tsx
│   ├── MethodFAST.tsx
│   ├── Remote.tsx
│   ├── CTA.tsx
│   └── StickyCTA.tsx
├── Hero Components
│   ├── Hero.tsx
│   ├── VideoIntro.tsx
│   ├── IntroOverlay.tsx
│   └── hero/
│       ├── HeroBase.tsx
│       └── HeroVideo.tsx
├── Navigation & SEO
│   ├── Breadcrumbs.tsx
│   ├── JsonLd.tsx
│   └── Button.tsx
└── UI Components (ui/)
    ├── Badge.tsx
    ├── Card.tsx
    ├── Section.tsx
    └── SectionBand.tsx

lib/
├── site.ts                    # Config/constantes globales
└── content/
    ├── media.ts               # Gestion médias
    ├── proofs.ts              # Données case studies
    ├── services.ts            # Données services
    └── zones.ts               # Données zones

hooks/
└── useFormSubmit.ts           # Hook pour formulaires

styles/
├── globals.css                # Styles globaux
└── Tailwind 4 + PostCSS

public/
├── hero/                      # Images hero par page
│   ├── contact/
│   ├── fast-remote/
│   ├── home/
│   ├── methode/
│   ├── preuves/
│   ├── services/
│   └── zones/
└── intro/                     # Assets introduction
```

---

## 🛠️ Commandes Canoniques

### Installation
```bash
# Installer les dépendances (recommandé avec lockfile)
npm ci
```

### Développement
```bash
# Démarrer le serveur de développement
npm run dev
# Accès : http://localhost:3000
```

### Build & Production
```bash
# Compiler pour production
npm run build

# Démarrer le serveur production (local)
npm start
```

### Vérification
```bash
# Linting ESLint
npm run lint

# Type checking TypeScript
npm run typecheck
```

---

## 📋 Outils & Configuration

| Outil | Version | Config |
|-------|---------|--------|
| Next.js | 16.1.1 | `next.config.ts` |
| React | 19.2.3 | - |
| TypeScript | ^5 | `tsconfig.json` |
| Tailwind CSS | ^4 | `tailwind.config.js` + `@tailwindcss/postcss` |
| ESLint | ^9 | `eslint.config.mjs` |
| PostCSS | - | `postcss.config.mjs` |
| Framer Motion | ^11.11.17 | Animations |

---

## ✅ Points Clés

- ✓ **App Router** utilisé (pas de dossier `pages/`)
- ✓ **TypeScript** strict
- ✓ **Tailwind CSS 4** avec @tailwindcss/postcss
- ✓ **ESLint 9** configuré
- ✓ **Métadonnées dynamiques** : `robots.ts`, `sitemap.ts`, JSON-LD
- ✓ **API interne** : `/api/contact` pour formulaires
- ✓ **Pas de base de données** apparente (contenu statique)
- ✓ **Pas de test framework** (test, jest, vitest non détectés)

---

## 📝 Notes

- Code en **français** (routes, variables locales)
- Responsive design via Tailwind
- Animations Framer Motion intégrées
- **Prochaines additions** : formulaires, validation, intégrations
