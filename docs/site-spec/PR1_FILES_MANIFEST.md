# PR1_FILES_MANIFEST.md — Liste détaillée fichiers PR1..PR5

**But** : Donnez à Fortunat l'inventaire exact des fichiers à créer/modifier per PR (checklist implémentation).

---

## PR1 — Socle (layout/tokens/assets import)

### À CRÉER (nouveaux fichiers)

#### Layout & pages
```
app/layout.tsx
├── Import Header, Footer, Navigation
├── Metadata globale (title, favicon, OpenGraph)
├── Root HTML structure (html, head, body)
├── Next.js providers (si Tailwind CSS v4 + outros)
└── Fonts import

app/not-found.tsx
├── Composant page 404 premium (brand colors)
├── Texte cohérent ("Page non trouvée")
├── Link retour home
└── Style dark industriel

app/sandbox/page.tsx
├── Route **non-linkée** publiquement
├── Composant playground (demo sections)
└── Instructions "Pour dev uniquement"
```

#### Composants layout (réutilisables)
```
components/Layout/Header.tsx
├── Logo (placeholder ou réel)
├── Navigation horizontale (6 items)
├── Mobile menu (burger) optionnel
└── Sticky/fixed position

components/Layout/Footer.tsx
├── Logo footer
├── Liens légaux (3 pages)
├── Contact info basique
├── Copyright
└── Design sombre

components/Layout/Navigation.tsx
├── Links array
├── Active state
├── Responsive behavior
└── Réutilisable pour Header + Footer

components/Layout/Container.tsx
├── Max-width wrapper (1200px)
├── Padding responsive
└── Réutilisable partout
```

#### Design tokens & styles
```
lib/colors.ts
├── Export FAST_COLORS (palette)
├── Dark slate (900, 800, 700, 600, 400, 300, 100)
├── Cyan accent (500, 600)
├── Status colors (green, red, amber)
└── Usage: tailwind config + components

app/globals.css
├── Reset CSS (Tailwind base)
├── Body background (light/dark)
├── Typography defaults
├── Link styles
└── Animation imports (si Framer Motion)
```

#### Config & ignores
```
.eslintignore
├── app/web/_template/CarServ/**
├── node_modules/
└── .next/
```

### À MODIFIER

#### Design tokens
```
tailwind.config.js
├── Ajouter colors section (FAST palette)
├── Override default Tailwind colors (slate + cyan)
├── Custom spacing/font-size si besoin
├── Plugins (forms, typography, etc.)
└── Save avec format lisible
```

### Fichiers assets (public/)

#### Brand
```
public/brand/
├── logo-fast.svg (PLACEHOLDER si réel absent : circle + "F")
├── logo-fast-mark.svg (PLACEHOLDER : simplified mark)
├── favicon.ico (généré depuis logo ou placeholder)
└── apple-touch-icon.png (180x180, généré depuis logo)
```

#### Media (fallbacks)
```
public/media/
├── hero-fast-remote-fallback.jpg (PLACEHOLDER : dégradé gris)
├── hero-remote.jpg (PLACEHOLDER : idem)
├── hero-services.jpg (PLACEHOLDER : idem)
├── hero-method.jpg (PLACEHOLDER : idem)
└── hero-cases.jpg (PLACEHOLDER : idem)
```

#### Icons (SVG basiques)
```
public/icons/
├── lift.svg (PLACEHOLDER : circle + "Pont")
├── compressor.svg (PLACEHOLDER : idem)
├── booth.svg (PLACEHOLDER : idem)
├── wash.svg (PLACEHOLDER : idem)
├── remote.svg (PLACEHOLDER : circle + "Visio")
├── safety.svg (PLACEHOLDER : circle + "Sécurité")
├── proof.svg (PLACEHOLDER : circle + "Preuve")
└── verdict.svg (PLACEHOLDER : circle + "Verdict")
```

#### Proofs (galerie + cases)
```
public/proofs/
├── gallery/
│   ├── 01.jpg (PLACEHOLDER : gris 1920x1080)
│   ├── 02.jpg
│   └── ... [à remplir — fallback pour maintenant]
└── cases/
    ├── case-01/
    │   ├── before.jpg (PLACEHOLDER)
    │   ├── diagnostic.jpg
    │   ├── action.jpg
    │   └── after.jpg
    ├── case-02/ [idem]
    └── case-03/ [idem]
```

### Validation PR1 (test)
```bash
npm run build                   # Doit passer
npm run lint                    # Ignore CarServ errors
curl http://localhost:3000/    # Header + footer visibles
curl http://localhost:3000/404 # Page 404 OK
```

### Livrables PR1
- ✅ Layout header/footer compilés
- ✅ 6 nav items
- ✅ Logo placeholder visible
- ✅ Design tokens Tailwind appliqués
- ✅ Build OK, page 404 OK
- ✅ `/sandbox` exists (non-linkée)

---

## PR2 — Pages conversion (Home + FAST Remote + SLA)

### À CRÉER

#### Pages
```
app/page.tsx (Accueil — remplacement)
├── Imports Hero, EquipmentGrid, MethodTeaser, CaseStudiesTeaser, SLABadges
├── Metadata (title, description, og:image)
├── 6 sections :
│  ├── Hero (headline + subheading + media + CTAs + SLA)
│  ├── EquipmentGrid (4 cartes équipements)
│  ├── MethodTeaser (5 étapes succinctes)
│  ├── CaseStudiesTeaser (3 cas images)
│  ├── Emergency CTA (encore une hero mineure)
│  └── Footer padding
└── Responsive (mobile first)

app/fast-remote/page.tsx
├── Metadata
├── Hero (FAST Remote spécifique)
├── PricingTeaser (section "tarif en développement")
├── ContactForm (statique pour maintenant)
└── SLA badges
```

#### Composants sections
```
components/Sections/Hero.tsx
├── Props : headline, subheadline, media, ctaPrimary, ctaSecondary, slaBadges
├── Responsive grid (1 col mobile, 2 col desktop)
├── Gestion media (image OU vidéo)
├── Fallback élégant si image cassée
└── Styling dark slide

components/Sections/EquipmentGrid.tsx
├── Props : items (array)
├── Grid 1/2/4 cols responsive
├── Utilise EquipmentCard
└── Titre centré

components/Sections/EquipmentCard.tsx
├── Props : title, href, icon, bullets
├── Card hover effect
├── Icon SVG embed
├── Link vers page équipement
└── Réutilisable

components/Sections/MethodTeaser.tsx
├── Props : steps (5 items)
├── Timeline visuelle (optionnel)
├── Textes descriptifs courts
├── Icons per étape
└── Peut être réutilisée (version courte home)

components/Sections/CaseStudiesTeaser.tsx
├── Props : items (3 cas)
├── Grid 3 colonnes (mobile : 1)
├── Image + titre par cas
├── Links vers /realisations#case-id
└── Peut être réutilisée

components/Sections/SLABadges.tsx
├── Props : sla object (config)
├── Affiche 4 badges (ack, response, slot, verdict)
├── Style "timeline" ou "flex"
├── Couleurs cyan accent
├── **Réutilisable PARTOUT**
```

#### Composants UI
```
components/UI/Button.tsx
├── Props : variant (primary/secondary/ghost), size, children
├── Utilise tailwind classes
├── Responsive padding
└── Hover states

components/UI/Card.tsx
├── Simple wrapper avec border + shadow
├── Réutilisable
└── Hover lift effect optional

components/Forms/ContactForm.tsx
├── Fields : name, email, phone, message
├── **Statique pour PR2** (submit en PR4)
├── Honeypot field (caché)
├── Zod schema associé
└── Validation client display
```

#### Config centralisée (SLA)
```
content/config.ts
├── Export SLA unique :
│  ├── ack: "Accusé immédiat"
│  ├── response: "Réponse sous 4h ouvrées"
│  ├── slot: "Créneau visio sous 24h ouvrées (J+1 ouvré)"
│  └── verdict: "Verdict / plan sous 2h après session (si preuves suffisantes), sinon UNKNOWN + plan"
├── Brand info (name, domain)
├── Primary CTA (label, href)
├── Secondary CTA
├── Phone CTA
└── Zones intervention (future)
```

### À MODIFIER

#### Pages existantes
```
app/page.tsx → Accueil complet (remplacer totalement)
```

### Validation PR2
```bash
npm run build
npm run lint
curl http://localhost:3000/                    # SLA badges visibles
curl http://localhost:3000/fast-remote         # Idem
# Grep SLA : vérifier identique partout
grep -r "4h\|24h\|2h" app/ --include="*.tsx"  # Trouver toutes les mentions
```

### Livrables PR2
- ✅ `/` accueil complète (6 sections)
- ✅ `/fast-remote` page complète
- ✅ SLA badges identiques sur 2+ pages
- ✅ Config centralisée (`content/config.ts`)
- ✅ Responsive 375–1920px
- ✅ Zéro placeholder texte, zéro "Chargement…"
- ✅ Lighthouse Perf ≥ 85

---

## PR3 — Pages SEO P0 (services + méthode + réalisations + zones + contact)

### À CRÉER

#### Pages
```
app/services/page.tsx
├── Metadata
├── Hero (Services hub)
├── Description
├── EquipmentGrid (réutilisé)
└── SLA badges

app/services/ponts-elevateurs/page.tsx
├── Metadata unique (SEO)
├── Hero équipement
├── Description service (from copy)
├── Icône équipement (left/right layout optionnel)
├── Bullets services offerts
├── CTA FAST Remote + Contact
└── SLA badges

app/services/compresseurs-air/page.tsx
├── [idem ponts]

app/services/cabines-peinture-ventilation/page.tsx
├── [idem ponts]

app/services/stations-lavage/page.tsx
├── [idem ponts — **CRITICAL : non-négociable**]

app/methode/page.tsx
├── Metadata
├── Hero (Méthode FAST)
├── MethodSteps (5 étapes détaillées — version complète)
├── Icons + textes longs
├── SLA badges
└── CTA final

app/realisations/page.tsx
├── Metadata
├── Hero (Réalisations)
├── CaseStudies (3 cas détaillés)
│  ├── Chaque cas :
│  │  ├── Images before/diag/action/after
│  │  ├── Titre, équipement, problème
│  │  ├── Solution, résultat
│  │  └── Verdict
│  └── **Si photos manquantes : fallback "Coming soon" premium** (pas fake)
├── CTA
└── SLA badges

app/zones/page.tsx
├── Metadata
├── Hero (Zones intervention)
├── Description "FAST Remote France entière"
├── Zones onsite (zones géographiques — description ou placeholder)
└── SLA badges

app/contact/page.tsx
├── Metadata
├── Hero (Contact)
├── Description
├── ContactForm (statique PR3, API PR4)
├── Info contact basique (phone, email placeholder)
└── SLA badges
```

#### Composants
```
components/Sections/MethodSteps.tsx
├── Props : steps (5 items, détaillés)
├── Timeline ou grid (responsive)
├── Icons per step
├── Textes longs (descriptions)
└── Version "complète" de MethodTeaser

components/Sections/CaseStudies.tsx
├── Props : cases (3 items)
├── Chaque cas : before/diag/action/after images
├── Layout : image + texte (optionnel alternating)
├── Si images manquantes : afficher "Coming soon" premium
├── Pas de fake témoignages
└── Verdict par cas (PASS/RESERVE/etc)
```

#### Contenu données
```
content/pages/
├── services.json (structure hub + items grid)
├── methode.json (5 étapes + descriptions)
├── realisations.json (3 cas ou fallback)
├── zones.json (description zones + géo)
└── contact.json (contact form fields + info)

content/case-studies/ (optionnel si data en fichiers séparés)
├── case-01.json
├── case-02.json
└── case-03.json
```

### À MODIFIER

#### Pages existantes
```
app/methode/page.tsx → version complète (augmenter depuis teaser)
app/realisations/page.tsx → 3 cas + fallbacks
app/zones/page.tsx → contenu description
app/contact/page.tsx → formulaire + info contact
```

### Assets manquants (pour Fortunat — délai PR3)
| Asset | Criticité | Fallback |
|-------|-----------|----------|
| 20 photos terrain galerie | HAUTE | Placeholder gris (peut être rempli après) |
| 3 case studies complets (text + images) | HAUTE | Fallback "Coming soon" premium (visible, pas fake) |

### Validation PR3
```bash
npm run build
curl http://localhost:3000/services/ponts-elevateurs
curl http://localhost:3000/methode
curl http://localhost:3000/realisations
curl http://localhost:3000/zones
curl http://localhost:3000/contact
# Vérifier zéro placeholder texte, zéro "Chargement…"
grep -r "Insérer\|TODO\|fake\|Coming" app/ --include="*.tsx" | grep -v "Coming soon"
```

### Livrables PR3
- ✅ 4 pages équipement créées + naviguables
- ✅ `/methode`, `/realisations`, `/zones`, `/contact` complètes
- ✅ 3 cas études ou fallback premium (pas fake)
- ✅ Métadonnées SEO uniques par page
- ✅ Responsive OK
- ✅ Zéro placeholder, zéro "Chargement…"
- ✅ Lighthouse Perf ≥ 85

---

## PR4 — Formulaires + `/api/leads` (intake)

### À CRÉER

#### API endpoint
```
app/api/leads/route.ts
├── POST handler
├── Zod validation (leadSchema)
├── Honeypot anti-spam (champ caché)
├── Rate limit (5 leads/IP/hour)
├── Logging server-side (request_id, timestamp, type, success/fail)
├── Forward to intake gateway (INTAKE_URL env)
├── Error handling (400/429/500 avec messages génériques)
└── Zéro secrets en output
```

#### Composants formulaires
```
components/Forms/FastRemoteForm.tsx
├── Props : onSubmit (callback)
├── Fields : name, company?, email, phone, city, postal_code, equipment_category, brand_model?, symptom, urgency, availability?, consent_rgpd
├── Zod validation (client-side display)
├── Submit → POST /api/leads
├── Feedback message (succès/erreur)
└── Loading state (disabled button)

components/Forms/ContactForm.tsx
├── Fields : name, email, phone?, message
├── Consent RGPD
├── Honeypot
├── Submit → POST /api/leads (type: "contact")
└── Feedback message

components/Forms/FormFeedback.tsx
├── Props : type (success/error), message
├── Style vert/rouge
├── Auto-dismiss optional (5s)
└── Réutilisable
```

#### Validation & helpers
```
lib/schemas/lead.ts
├── Zod schema leadSchema
├── Fields : type, name, email, phone, city, postal_code, equipment_category, symptom, urgency, consent_rgpd
├── Min length checks (symptom ≥ 40 chars)
├── Email validation
└── Export schema

lib/intake.ts
├── Function forwardToIntake(data)
├── Appelle INTAKE_URL (POST)
├── Gère auth (API key si besoin)
├── Logs success/failure
└── Throws on error

lib/rate-limit.ts
├── Function checkRateLimit(ip)
├── Simple in-memory counter (ou Redis future)
├── 5 leads per IP per hour
├── Returns true/false
└── Optional : honeypot helper
```

#### Tests
```
__tests__/api/leads.test.ts
├── Test POST /api/leads (valid data → 200)
├── Test validation (missing field → 400)
├── Test honeypot (filled → 200 silent)
├── Test rate limit (6+ requests → 429)
└── Test forward to intake (logs confirm)
```

### À MODIFIER

#### Pages (formulaires now functional)
```
app/fast-remote/page.tsx
├── Remplacer ContactForm statique par FastRemoteForm
├── Ajouter FormFeedback container
└── Test submit

app/contact/page.tsx
├── Remplacer ContactForm statique par version soumission
├── Ajouter FormFeedback
└── Test submit
```

#### Config & env
```
.env.example
├── Ajouter : INTAKE_URL=https://...
├── Ajouter : INTAKE_API_KEY=... (si besoin)
└── Commenter : quelle est la config requise

package.json
├── Vérifier dépendances (react-hook-form?, zod déjà present)
└── Ajouter si manquantes
```

### Validation PR4
```bash
npm run build
npm run test                                # Tests API
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "type":"fast_remote",
    "name":"Test",
    "email":"test@example.com",
    "city":"Paris",
    "postal_code":"75001",
    "equipment_category":"Pont élévateur",
    "symptom":"Ne monte plus correctement depuis 2 jours"
  }'
# Doit répondre 200 + message succès affiché
```

### Livrables PR4
- ✅ `/api/leads` POST 200
- ✅ Validation stricte (Zod)
- ✅ Honeypot fonctionne
- ✅ Rate limit fonctionne
- ✅ Forward à intake OK (logs confirment)
- ✅ Formulaires soumettent sans erreur
- ✅ Feedback messages (succès/erreur clairs)
- ✅ Tests passent

---

## PR5 — Légal + perf + finitions

### À CRÉER

#### Pages légales
```
app/mentions-legales/page.tsx
├── Metadata
├── Hero + Layout légal
├── Contenu MDX (import from content/legal/mentions-legales.mdx)
└── Info : SIRET, adresse, contact légal, numéro phone

app/confidentialite/page.tsx
├── Metadata
├── Contenu MDX (import from content/legal/confidentialite.mdx)
└── RGPD : données collectées, durée rétention, droits utilisateur

app/cookies/page.tsx
├── Metadata
├── Contenu MDX (import from content/legal/cookies.mdx)
├── CookiesBanner component
└── Preferences panel (accepter/rejeter/personnaliser)
```

#### Composants cookies
```
components/CookiesBanner.tsx
├── Affiche au premier accès (localStorage)
├── Boutons : Accepter, Rejeter, Personnaliser
├── Texte : "Nous utilisons des cookies pour améliorer..."
├── Style sombre (bar bottom ou modal)
└── Gère localStorage (choix utilisateur)

components/CookiesPrefs.tsx
├── Modal preferences
├── Checkboxes : Essential, Analytics, Marketing
├── Boutons : Accepter sélection, Rejeter tout
└── Sauve choix localStorage
```

#### Contenu MDX
```
content/legal/mentions-legales.mdx
├── Heading : "Mentions légales"
├── Sections : SIRET, adresse, contact, directeur
└── 500–1000 chars

content/legal/confidentialite.mdx
├── Heading : "Politique de confidentialité"
├── Sections : données collectées, RGPD, droits, contact DPO
└── Lien vers cookies

content/legal/cookies.mdx
├── Heading : "Gestion des cookies"
├── Types : essential, analytics, marketing
├── Lien vers preferences
└── Tech : description cookies utilisés
```

#### Helpers cookies
```
lib/cookies.ts
├── Function getCookie(name)
├── Function setCookie(name, value, days)
├── Function deleteCookie(name)
├── Function getConsent()
├── Function setConsent(prefs)
└── Utilise localStorage (pas sécurité-critical)
```

### À MODIFIER

#### Layout root
```
app/layout.tsx
├── Importer CookiesBanner
├── Afficher avant </body>
└── Passé config initial

app/robots.ts
├── Allow: /
├── Disallow: /sandbox/
└── Sitemap: /sitemap.xml

app/sitemap.ts
├── Générer automatiquement (Next.js feature)
├── Inclure : /, fast-remote, services + 4 équipements, méthode, réalisations, zones, contact, mentions-legales, confidentialite, cookies
├── Priority : services = 0.8, autres = 0.7
└── Change frequency : weekly (marketing pages)
```

#### Package.json (cleanup)
```
package.json
├── Identifier dépendances inutiles (old jQuery, etc.)
├── npm audit (vérifier vulnérabilités)
├── Supprimer devDependencies unused
└── Committer `npm ci` pour lock reproducible
```

### Fichiers validation (livrables)
```
PR_RECETTE_CHECKLIST_PR5.md
├── 20+ critères PASS/FAIL
├── Test chaque page P0 (accessible, pas 404)
├── Test formulaires (soumission)
├── Test cookies (banner, consent, localStorage)
├── Test lighthouse (audit full mobile + desktop)
├── Greps : zéro placeholder, zéro "Chargement…", zéro secret client
└── Sign-off final
```

### Validation PR5
```bash
npm run build
npm run test
npm audit                                     # Pas de vulnérabilités
npm run start &
# Lighthouse audit
curl http://localhost:3000/sitemap.xml       # ≥13 URLs
curl http://localhost:3000/robots.txt        # Allow + Disallow
# Test chaque page (no 404)
# Test cookies (banner, consent)
# Manual recette : toutes les cases PR_RECETTE_CHECKLIST_PR5.md
```

### Livrables PR5
- ✅ Pages légales 3 + contenu complet
- ✅ Cookies banner affiche + fonctionne
- ✅ Preferences modal OK
- ✅ Sitemap ≥ 13 URLs
- ✅ robots.txt OK (Disallow /sandbox)
- ✅ Lighthouse full audit :
  - Perf ≥ 90 (mobile)
  - SEO ≥ 95
  - Accessibility ≥ 95
  - Best Practices ≥ 95
- ✅ Dépendances inutiles supprimées
- ✅ Audit npm clean
- ✅ Recette PASS (20+ cases)

---

## Résumé fichiers par PR

| PR | Créer | Modifier | Assets |
|----|-------|----------|--------|
| **PR1** | Header, Footer, Nav, Container, colors.ts, globals.css, layout.tsx, not-found.tsx, .eslintignore | tailwind.config.js | Logo + 5 images fallback + 8 icônes + proofs placeholder |
| **PR2** | page.tsx (accueil), fast-remote/page.tsx, Hero, EquipmentGrid, EquipmentCard, MethodTeaser, CaseStudiesTeaser, SLABadges, ContactForm, Button, Card, config.ts | — | — |
| **PR3** | services/page.tsx + 4 équipements, methode/page.tsx (complet), realisations/page.tsx, zones/page.tsx, contact/page.tsx, MethodSteps, CaseStudies, content/*.json | methode, realisations, zones, contact pages | — |
| **PR4** | api/leads/route.ts, FastRemoteForm, FormFeedback, lead.ts, intake.ts, rate-limit.ts, leads.test.ts | fast-remote/page.tsx, contact/page.tsx, .env.example | — |
| **PR5** | mentions-legales/page.tsx, confidentialite/page.tsx, cookies/page.tsx, CookiesBanner, CookiesPrefs, cookies.ts, legal/*.mdx, PR_RECETTE_CHECKLIST_PR5.md | layout.tsx, robots.ts, sitemap.ts, package.json | — |

---

**FIN MANIFEST FICHIERS**

