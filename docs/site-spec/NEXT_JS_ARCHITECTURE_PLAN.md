# NEXT_JS_ARCHITECTURE_PLAN.md — Arborescence Next.js + Stratégie Composants

**Objectif** : Blueprints détaillés pour conversion CarServ (static HTML) → FAST Next.js App Router (Typescript + Tailwind).

---

## 1) Structure App Router finale (post-PR5)

```
fast-techservices-web/
├── app/                                    [Next.js App Router — routes + layouts]
│   ├── layout.tsx                          [Root layout: HTML head, providers, fonts]
│   ├── page.tsx                            [/ Accueil — hero + équipements + cas teasers]
│   ├── not-found.tsx                       [404 page premium]
│   ├── error.tsx                           [error boundary]
│   ├── globals.css                         [baseline reset + typography]
│   ├── robots.ts                           [robots.txt generator]
│   ├── sitemap.ts                          [sitemap.xml generator]
│   │
│   ├── (site)/                             [optional grouping pour routes marketing]
│   │
│   ├── fast-remote/
│   │   └── page.tsx                        [/fast-remote — offre + formulaire]
│   │
│   ├── services/
│   │   ├── page.tsx                        [/services — hub 4 équipements]
│   │   ├── ponts-elevateurs/
│   │   │   └── page.tsx                    [/services/ponts-elevateurs]
│   │   ├── compresseurs-air/
│   │   │   └── page.tsx                    [/services/compresseurs-air]
│   │   ├── cabines-peinture-ventilation/
│   │   │   └── page.tsx                    [/services/cabines-peinture-ventilation]
│   │   └── stations-lavage/
│   │       └── page.tsx                    [/services/stations-lavage]
│   │
│   ├── methode/
│   │   └── page.tsx                        [/methode — 5 étapes FAST]
│   │
│   ├── realisations/
│   │   └── page.tsx                        [/realisations — 3 cas études ou fallback]
│   │
│   ├── zones/
│   │   └── page.tsx                        [/zones — intervention zones]
│   │
│   ├── contact/
│   │   └── page.tsx                        [/contact — formulaire contact page]
│   │
│   ├── mentions-legales/
│   │   └── page.tsx                        [/mentions-legales]
│   ├── confidentialite/
│   │   └── page.tsx                        [/confidentialite]
│   ├── cookies/
│   │   └── page.tsx                        [/cookies + banner]
│   │
│   ├── api/
│   │   └── leads/
│   │       └── route.ts                    [POST /api/leads — form submission handler]
│   │
│   └── sandbox/                            [Non-linkée : composant playground]
│       ├── page.tsx
│       └── [sandbox routes pour dev]
│
├── components/                             [React components — réutilisables]
│   ├── Layout/
│   │   ├── Header.tsx                      [Logo + nav header]
│   │   ├── Footer.tsx                      [Footer avec liens légaux + contact]
│   │   ├── Navigation.tsx                  [Nav links — réutilisable]
│   │   └── Container.tsx                   [Wrapper max-width + padding]
│   │
│   ├── Sections/
│   │   ├── Hero.tsx                        [Hero banner — headline + subheading + media + CTAs]
│   │   ├── EquipmentGrid.tsx               [Grid 4 équipements avec icônes + descriptions]
│   │   ├── EquipmentCard.tsx               [Carte équipement seul (réutilisable)]
│   │   ├── MethodTeaser.tsx                [5 étapes FAST — version courte home]
│   │   ├── MethodSteps.tsx                 [5 étapes FAST — version page complète]
│   │   ├── CaseStudiesTeaser.tsx           [3 cas teasers — version home]
│   │   ├── CaseStudies.tsx                 [3 cas complets — version page /realisations]
│   │   ├── SLABadges.tsx                   [Badges SLA réutilisables (config-driven)]
│   │   └── PricingTeaser.tsx               [Pricing block — teaser mode]
│   │
│   ├── Forms/
│   │   ├── FastRemoteForm.tsx              [Formulaire FAST Remote — soumis à /api/leads]
│   │   ├── ContactForm.tsx                 [Formulaire Contact — soumis à /api/leads]
│   │   ├── FormFeedback.tsx                [Messages succès/erreur réutilisables]
│   │   └── FormField.tsx                   [Champ formulaire réutilisable (input/select/textarea)]
│   │
│   ├── UI/
│   │   ├── Button.tsx                      [Bouton réutilisable — primary/secondary/ghost]
│   │   ├── Card.tsx                        [Carte réutilisable]
│   │   ├── Badge.tsx                       [Badge SLA, statut, etc.]
│   │   ├── Icon.tsx                        [Wrapper icône SVG]
│   │   └── ImageWithFallback.tsx           [Image avec fallback élégant]
│   │
│   ├── CookiesBanner.tsx                   [Banner cookies — acceptance/preferences]
│   ├── CookiesPrefs.tsx                    [Preferences cookies modal]
│   └── ...
│
├── lib/                                    [Utilities / helpers / configs]
│   ├── colors.ts                           [Design tokens couleurs FAST (Tailwind vars)]
│   ├── constants.ts                        [Constantes globales]
│   │
│   ├── schemas/
│   │   └── lead.ts                         [Zod schema validation : formulaire lead]
│   │
│   ├── intake.ts                           [Client intake gateway — forward leads]
│   ├── rate-limit.ts                       [Rate limiter + honeypot helpers]
│   ├── cookies.ts                          [localStorage/cookie helpers — GDPR compliant]
│   │
│   ├── queue/                              [Existing — forms queue system]
│   │   └── forms-queue.ts
│   │
│   └── ...
│
├── content/                                [Contenu / données versionnées]
│   ├── config.ts                           [SLA unique + brand + coordonnées + zones centralisés]
│   ├── pages/                              [Page data — JSON ou mdx]
│   │   ├── home.json
│   │   ├── fast-remote.json
│   │   ├── services.json
│   │   ├── methode.json
│   │   ├── realisations.json
│   │   └── ...
│   ├── case-studies/                       [Cas études structures]
│   │   ├── case-01.json
│   │   ├── case-02.json
│   │   └── case-03.json
│   └── legal/                              [Pages légales MDX]
│       ├── mentions-legales.mdx
│       ├── confidentialite.mdx
│       └── cookies.mdx
│
├── public/                                 [Statique assets — servies directement]
│   ├── brand/
│   │   ├── logo-fast.svg                   [Logo principal]
│   │   ├── logo-fast-mark.svg              [Mark / favicon]
│   │   ├── favicon.ico
│   │   └── apple-touch-icon.png
│   │
│   ├── media/                              [Images héros + fallbacks]
│   │   ├── hero-fast-remote-5s.mp4         [Vidéo hero — optionnel]
│   │   ├── hero-fast-remote-fallback.jpg   [Fallback image vidéo]
│   │   ├── hero-remote.jpg
│   │   ├── hero-services.jpg
│   │   ├── hero-method.jpg
│   │   └── hero-cases.jpg
│   │
│   ├── icons/                              [SVG icons équipements + features]
│   │   ├── lift.svg                        [Pont élévateur]
│   │   ├── compressor.svg                  [Compresseur / air]
│   │   ├── booth.svg                       [Cabine peinture]
│   │   ├── wash.svg                        [Station lavage]
│   │   ├── remote.svg                      [FAST Remote — visio]
│   │   ├── safety.svg                      [Sécurité / LOTO]
│   │   ├── proof.svg                       [Preuve / mesure]
│   │   └── verdict.svg                     [Verdict / PV]
│   │
│   ├── proofs/                             [Photos terrain — preuves]
│   │   ├── gallery/
│   │   │   ├── 01.jpg
│   │   │   ├── 02.jpg
│   │   │   └── ... [20+ images]
│   │   │
│   │   └── cases/
│   │       ├── case-01/
│   │       │   ├── before.jpg
│   │       │   ├── diagnostic.jpg
│   │       │   ├── action.jpg
│   │       │   └── after.jpg
│   │       ├── case-02/
│   │       │   └── [idem]
│   │       └── case-03/
│   │           └── [idem]
│   │
│   └── [legacy CarServ assets — à nettoyer]
│
├── styles/                                 [CSS global / animations]
│   ├── tailwind.css                        [Tailwind directives]
│   ├── animations.css                      [Custom animations sobres]
│   └── ...
│
├── __tests__/                              [Jest tests]
│   ├── api/
│   │   └── leads.test.ts                   [Tests POST /api/leads]
│   ├── components/
│   │   ├── Hero.test.tsx
│   │   └── ...
│   ├── lib/
│   │   ├── rate-limit.test.ts
│   │   └── ...
│   └── ...
│
├── scripts/                                [Build / conversion scripts]
│   ├── convert-images.js                   [ImageMagick convert helper]
│   └── ...
│
├── .eslintignore                           [Ignorer CarServ legacy]
├── eslint.config.mjs
├── jest.config.json
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.js                      [Design tokens FAST — palette couleurs]
├── tsconfig.json
├── .env.example                            [INTAKE_URL, analytics flags, etc.]
├── README.md
│
└── docs/                                   [Documentation]
    ├── site-spec/
    │   ├── FAST_SITE_SPEC_v1.md            [Spec maître ← source de vérité]
    │   ├── FAST_TECH_SERVICES_COPY_v1.md   [Copy éditoriale ← source de vérité]
    │   ├── content-map.yml                 [SEO + structure pages ← source de vérité]
    │   ├── assets-manifest.md              [Inventaire assets ← source de vérité]
    │   ├── PR0_CHECKLIST.md                [Définition snapshot PR0]
    │   ├── PR0_SNAPSHOT.md                 [Snapshot PR0 — TU ES ICI]
    │   ├── FAST_SITE_SPEC_EXECUTIVE_SUMMARY.md
    │   └── NEXT_JS_ARCHITECTURE_PLAN.md    [Ce fichier]
    │
    ├── site-audit/
    │   ├── Audit Site FAST.txt
    │   └── Analyse détaillée du site FAST Tech Services.pdf
    │
    └── PR/
        ├── PR0_summary.md                  [À générer après merge]
        ├── PR1_checklist.md
        ├── PR2_checklist.md
        ├── PR3_checklist.md
        ├── PR4_checklist.md
        └── PR5_checklist.md
```

---

## 2) Mappage composants CarServ → FAST Next.js

### Hero (section intro)

**CarServ HTML (exemple) :**
```html
<div class="hero">
  <img src="hero.jpg" alt="...">
  <h1>Title</h1>
  <p>Subtitle</p>
  <a href="#" class="btn btn-primary">CTA</a>
</div>
```

**FAST Next.js (nouveau) :**
```typescript
// components/Sections/Hero.tsx
export function Hero({
  headline,
  subheadline,
  media,           // { mode: 'image' | 'video', src, fallback }
  ctaPrimary,      // { label, href }
  ctaSecondary,    // { label, href }
  slaBadges,       // config.sla (réutilisé)
}) {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Texte + CTAs */}
          <div>
            <h1 className="text-4xl font-bold text-white">{headline}</h1>
            <p className="text-xl text-slate-300 mt-4">{subheadline}</p>
            <div className="flex gap-4 mt-8">
              <Button variant="primary" href={ctaPrimary.href}>
                {ctaPrimary.label}
              </Button>
              <Button variant="secondary" href={ctaSecondary.href}>
                {ctaSecondary.label}
              </Button>
            </div>
            <SLABadges sla={slaBadges} />
          </div>
          {/* Média (image ou vidéo) */}
          <div>
            {media.mode === 'video' ? (
              <video src={media.src} controls className="w-full rounded" />
            ) : (
              <ImageWithFallback src={media.src} fallback={media.fallback} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
```

**Usage dans page :**
```typescript
// app/page.tsx (Accueil)
<Hero
  headline="Dépannage premium d'équipements de garage"
  subheadline="Approche terrain-first : diagnostic guidé, sécurisation, remise..."
  media={{ mode: 'video', src: '/media/hero-fast-remote-5s.mp4', fallback: '...' }}
  ctaPrimary={config.primary_cta}
  ctaSecondary={config.secondary_cta}
  slaBadges={config.sla}
/>
```

---

### Equipment Grid (4 cartes)

**FAST Next.js :**
```typescript
// components/Sections/EquipmentGrid.tsx
export function EquipmentGrid({ items }) {
  // items = [{ title, href, icon, bullets }, ...]
  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(item => (
            <EquipmentCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

// components/Sections/EquipmentCard.tsx
export function EquipmentCard({ title, href, icon, bullets }) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition">
        <Icon src={icon} alt={title} />
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <ul className="mt-4 space-y-2">
          {bullets.map(bullet => (
            <li key={bullet} className="text-sm text-slate-600">
              • {bullet}
            </li>
          ))}
        </ul>
      </Card>
    </Link>
  );
}
```

**Data (from content-map.yml) :**
```typescript
// content/pages/home.json
{
  "equipmentGrid": {
    "items": [
      {
        "title": "Ponts élévateurs",
        "href": "/services/ponts-elevateurs",
        "icon": "/icons/lift.svg",
        "bullets": [
          "Sécurité, conformité, tests de sortie",
          "Diagnostic électrique/hydraulique"
        ]
      },
      // ... 3 autres équipements
    ]
  }
}
```

---

### Formulaires (FastRemoteForm + ContactForm)

**Avant (statique HTML) :**
```html
<form method="POST" action="#">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="symptom" required></textarea>
  <button type="submit">Soumettre</button>
</form>
```

**Après (avec API) :**
```typescript
// components/Forms/FastRemoteForm.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { leadSchema } from '@/lib/schemas/lead';

export function FastRemoteForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(leadSchema),
  });
  const [feedback, setFeedback] = useState(null);

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'fast_remote', ...data }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setFeedback({ type: 'success', message: 'Accusé reçu. Réponse sous 4h ouvrées.' });
    } catch (error) {
      setFeedback({ type: 'error', message: 'Une erreur est survenue. Veuillez réessayer.' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        label="Nom"
        {...register('name')}
        error={errors.name?.message}
      />
      <FormField
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />
      {/* ... autres champs ... */}
      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="website"
        style={{ display: 'none' }}
        {...register('website')}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Envoi...' : 'Soumettre'}
      </button>
      {feedback && <FormFeedback {...feedback} />}
    </form>
  );
}
```

**Endpoint API :**
```typescript
// app/api/leads/route.ts
import { leadSchema } from '@/lib/schemas/lead';
import { forwardToIntake } from '@/lib/intake';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(req) {
  try {
    // Rate limit
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) return new Response('Too many requests', { status: 429 });

    // Parse + validate
    const body = await req.json();
    const data = leadSchema.parse(body);

    // Honeypot (si champ website rempli → spam)
    if (data.website) return new Response('OK', { status: 200 }); // silent drop

    // Log server-side
    console.log(`[/api/leads] Received lead: ${data.type}, email=${data.email}`);

    // Forward to intake
    await forwardToIntake(data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[/api/leads] Error:', error.message);
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
```

---

## 3) Design Tokens FAST (Tailwind v4)

### Palette couleurs (dark industriel + cyan accent)

```typescript
// lib/colors.ts
export const FAST_COLORS = {
  // Neutres (noir/gris industriel)
  'slate-950': '#0f172a',  // Noir très foncé
  'slate-900': '#0f172a',  // Fond sections
  'slate-800': '#1e293b',  // Fond alt
  'slate-700': '#334155',
  'slate-600': '#475569',
  'slate-400': '#94a3b8',  // Texte léger
  'slate-300': '#cbd5e1',  // Texte clair
  'slate-100': '#f1f5f9',  // Fond clair
  'white': '#ffffff',

  // Accents (cyan / bleu énergie)
  'cyan-500': '#06b6d4',   // Accent primaire
  'cyan-600': '#0891b2',   // Hover
  'blue-600': '#2563eb',   // Accent alternatif

  // Status
  'green-500': '#10b981',  // Success
  'red-500': '#ef4444',    // Error
  'amber-500': '#f59e0b',  // Warning
};
```

**Tailwind config :**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      'slate': {
        50: '#f8fafc',
        100: '#f1f5f9',
        300: '#cbd5e1',
        400: '#94a3b8',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#030712',
      },
      'cyan': {
        500: '#06b6d4',
        600: '#0891b2',
      },
      'white': '#ffffff',
    },
  },
};
```

**Usage dans composants :**
```tsx
<section className="bg-slate-900 text-white">
  <h1 className="text-cyan-500 font-bold">
    Dépannage premium
  </h1>
  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded">
    Démarrer FAST Remote
  </button>
</section>
```

---

## 4) Stratégie images + fallbacks

### Utiliser `next/image` pour perfo + responsive

```typescript
// components/ImageWithFallback.tsx
import Image from 'next/image';

export function ImageWithFallback({
  src,
  fallback,
  alt,
  width = 1200,
  height = 600,
  objectFit = 'cover',
  className = '',
}) {
  const [error, setError] = useState(false);

  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: '16/9' }}>
      {!error && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          style={{ objectFit }}
          onError={() => setError(true)}
        />
      ) : (
        // Fallback : dégradé gris + texte
        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
          <p className="text-slate-600 text-center">{fallback || 'Image à venir'}</p>
        </div>
      )}
    </div>
  );
}
```

**Usage :**
```tsx
<ImageWithFallback
  src="/media/hero-fast-remote.jpg"
  fallback="Image de présentation FAST Remote"
  alt="FAST Remote visio"
/>
```

---

## 5) Stratégie CSS : Migration CarServ → Tailwind

### Option A : Import + purge (recommandé)

1. **Analyser CarServ CSS** (Bootstrap + custom)
2. **Extraire classes utilisées** dans HTML
3. **Refacto en Tailwind** (ex: `class="col-md-6"` → `className="md:w-1/2"`)
4. **Ignorer fichiers CSS legacy** (via `.eslintignore` + `.gitignore`)

### Option B : Wrapper CSS-in-JS (alternatif)

```typescript
// lib/styles.ts
export const heroStyle = {
  container: 'py-20 bg-gradient-to-b from-slate-900 to-slate-800',
  headline: 'text-4xl font-bold text-white',
  subheadline: 'text-xl text-slate-300 mt-4',
};

// Usage
<div className={heroStyle.container}>
  <h1 className={heroStyle.headline}>...</h1>
</div>
```

---

## 6) Commandes dev + build

```bash
# Installation dépendances
npm install

# Dev local (watch mode)
npm run dev
# → http://localhost:3000

# Build production
npm run build

# Start prod (après build)
npm run start

# Lint (ESLint)
npm run lint

# Tests (Jest)
npm run test
npm run test:watch

# Type check (TypeScript)
npm run typecheck
```

---

## 7) Checkpoint validation (per PR)

### PR1 (Socle)
- ✅ Layout header/footer affichés
- ✅ Nav links présents
- ✅ Design tokens appliqués (couleurs visibles)
- ✅ Build OK, Lighthouse ~85+

### PR2 (Pages conversion)
- ✅ `/` + `/fast-remote` complètes
- ✅ SLA badges identiques
- ✅ Images fallbacks élégantes
- ✅ Responsive 375px–1920px

### PR3 (Pages SEO P0)
- ✅ 4 pages équipement créées
- ✅ Méthode + réalisations + zones + contact
- ✅ Aucun placeholder texte
- ✅ Meta tags uniques par page

### PR4 (Formulaires)
- ✅ `/api/leads` POST 200
- ✅ Formulaires soumettent sans erreur
- ✅ Leads forwarded à intake
- ✅ Zéro secret client

### PR5 (Finitions)
- ✅ Pages légales + cookies banner
- ✅ Sitemap ≥ 13 URLs
- ✅ Lighthouse full ~90+
- ✅ Recette PASS

---

**Fin blueprints architecte**

