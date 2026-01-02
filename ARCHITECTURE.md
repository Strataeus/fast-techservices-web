# Architecture du Site FAST Tech Services

## Vue d'ensemble

Site Next.js 16.1.1 (App Router) pour FAST Tech Services - Services de maintenance et dépannage d'équipements industriels.

**Stack** : Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS 4 + Framer Motion 11

---

## 📂 Structure des Routes

### Pages Statiques (9)
```
/                    ← Home avec CTAs
/contact             ← Formulaires contact (terrain + contrat)
/services            ← Listing services
/methode             ← Méthodologie FAST
/preuves             ← Listing case studies
/fast-remote         ← Service FAST Remote (page dédiée)
/zones               ← Listing zones d'intervention
/mentions-legales    ← Legal
/confidentialite     ← Privacy policy
```

### Pages Dynamiques (3)
```
/services/[slug]     ← Détail service (4 pages)
/preuves/[slug]      ← Détail case study (3 pages)
/zones/[slug]        ← Détail zone (3 pages)
```

### API
```
POST /api/contact    ← Réception formulaires
                       (Prêt pour intégration backend)
```

### Auto-générées
```
/robots.txt          ← Généré (app/robots.ts)
/sitemap.xml         ← Généré (app/sitemap.ts)
/404                 ← Page not-found.tsx
```

---

## 🎯 Stratégie CTA

### Canonique (centralisé dans lib/site.ts)
```typescript
const cta = {
  primary: {
    label: "Démarrer FAST Remote",
    href: "/fast-remote"
  },
  secondary: {
    label: "Demander une intervention sur site",
    href: "/contact"
  }
}
```

**Utilisé dans** :
- Header (SiteHeader.tsx)
- Footer (SiteFooter.tsx)
- Sticky CTA buttons (StickyCTA.tsx)
- Page CTAs (via composants template)

---

## 🏗️ Composants Principaux

### Layout
- `app/layout.tsx` - Root layout avec Header, Footer, StickyCTA
- `components/SiteHeader.tsx` - Navigation sticky
- `components/SiteFooter.tsx` - Footer avec liens
- `components/StickyCTA.tsx` - Boutons flottants (desktop+mobile)

### UI Base
- `components/ui/Section` - Conteneur de section
- `components/ui/Card` - Composant carte réutilisable
- `components/ui/Badge` - Label/badge
- `components/Container` - Conteneur max-width

### Pages Composites
- `components/ServicePageTemplate` - Template pages service
- `components/Contact` - Formulaire contact
- `components/Method`, `MethodFAST` - Sections méthode
- `components/Proofs` - Section témoignages
- `components/Services` - Listing services

### Utilitaires
- `components/Breadcrumbs` - Navigation chemin
- `components/JsonLd` - Rich snippet structuré
- `components/layout/Background` - Overlay background
- `components/layout/ScrollToHash` - Scroll sections anchor
- `components/layout/PageTransition` - Framer Motion transition

---

## 📡 Intégration Backend (Roadmap)

Le site est **préparé pour intégration backend** :

### Actuel
- `/api/contact` reçoit données formulaires via POST
- Logs en console (dev) uniquement
- Pas d'envoi email (awaiting backend)

### À intégrer
1. **Backend API** : Configurer `NEXT_PUBLIC_API_BASE_URL`
2. **Authentification** : Ajouter `BACKEND_API_KEY` si nécessaire
3. **Formulaires** : Remplacer appels `/api/contact` par appels backend
4. **Email** : Backend gérera l'envoi (SendGrid, Mailgun, etc.)
5. **Database** : Backend stockera les soumissions

### Points d'intégration clés
```tsx
// app/contact/page.tsx - handleTerrainSubmit()
// app/fast-remote/page.tsx - handleSubmit()
// app/api/contact/route.ts - POST handler
```

---

## 🔧 Configuration Requise

### Variables d'environnement

**Obligatoires pour production** :
```bash
NEXT_PUBLIC_CONTACT_EMAIL=...
NEXT_PUBLIC_CONTACT_PHONE=...
NEXT_PUBLIC_SERVICE_AREA=...
NEXT_PUBLIC_BASE_URL=https://fast-techservices.com
```

**Optional (pour backend)** :
```bash
NEXT_PUBLIC_API_BASE_URL=...
BACKEND_API_KEY=...
```

Voir `.env.example` pour template complet.

---

## 🚀 Commandes

```bash
npm run dev        # Dev server (http://localhost:3000)
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint check
npm run typecheck  # TypeScript check
```

---

## 📋 Checklist Maintenance

### Code
- ✅ TypeScript strict
- ✅ ESLint configuré
- ✅ Next.js 16 compatible
- ✅ Métadonnées SEO complètes
- ✅ Error boundary (error.tsx)

### Functtionnalités
- ✅ Navigation cohérente
- ✅ Responsive design
- ✅ Formulaires validés
- ✅ Rate limiting API
- ✅ Honeypot protection

### Optimisations
- ✅ Static generation (SSG)
- ✅ Image optimization (Next/Image)
- ⚠️ Tests automatisés (à ajouter)

---

## 🗑️ Composants Dépréciés

Ne pas utiliser :
- ❌ `components/Section.tsx` (utilisez `ui/Section`)
- ❌ `components/Header.tsx` (utilisez `SiteHeader`)
- ❌ `components/Footer.tsx` (utilisez `SiteFooter`)

Voir `.DEPRECATED_COMPONENTS.md` pour détails.

---

## 📞 Support Formulaires

### Contact Page
- Formulaire FAST Remote → `/fast-remote`
- Formulaire Intervention Terrain → `#form-terrain`
- Formulaire Contrat/Audit → `#form-contrat`

### FAST Remote Page
- Formulaire pré-qualif → POST `/api/contact`
- Prêt pour backend integration

---

## 🔐 Sécurité

- ✅ CSRF protection (Next.js default)
- ✅ Rate limiting (10 req/10min par IP)
- ✅ Honeypot field
- ✅ Input validation
- ✅ Error boundary (pas de stack en prod)

---

## 📊 SEO & Analytics

- ✅ robots.txt dynamique
- ✅ sitemap.xml avec tous routes
- ✅ Métadonnées complètes
- ✅ Open Graph tags
- ✅ Structured data (JSON-LD)
- ⏳ Google Analytics (optionnel)
- ⏳ Sentry error tracking (optionnel)

---

**Dernière mise à jour** : 2 janvier 2026
**Version** : Next.js 16.1.1
