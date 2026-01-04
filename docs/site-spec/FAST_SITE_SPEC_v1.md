# FAST_SITE_SPEC.md — Document Directeur Site FAST Tech Services (v1.2)
**Statut : ACTIF / OPPOSABLE**  
**Repo : monorepo FAST — `apps/web` (Next.js) sur Vercel**  
**Langue : FR uniquement**  
**Date : 2026-01-04**  
**Owner : Fortunat**  
**Principe : 1 intention = 1 PR — Zéro refacto non demandé**

---

## 0) Mission (but produit)
Construire un site **premium / high-tech / industriel** pour **FAST Tech Services** qui :
1) **Convertit** vers **FAST Remote** (offre cœur) + génère des demandes onsite qualifiées.  
2) **Crédibilise** (méthode, preuves, livrables) : pas de marketing creux.  
3) **Intègre** un intake fiable **sans exposer FASTCore** : site → API web → intake gateway → FASTCore.  
4) Reste **rapide, stable, maintenable** : HTML-first, JS minimal, design cohérent, aucune page cassée.

---

## 1) Sources de vérité (ordre de priorité)
**Règle : si conflit, la priorité la plus haute gagne.**

1) `docs/site-spec/FAST_SITE_SPEC.md` (CE DOCUMENT)  
2) `docs/site-spec/FAST_TECH_SERVICES_COPY_v1.md` (**copywriting officiel** : promesse, périmètre, méthode, ton)  
3) `docs/site-spec/content-map.yml` (**SEO + structure sections + mapping de copy**)  
4) `docs/site-spec/assets-manifest.md` (**inventaire assets + exigences**)  
5) `docs/site-audit/*` (constats d’audit = erreurs à éliminer, pas un guide créatif)  
6) Tout le reste = **NON OPPOSABLE** (donc interdit d’inventer)

**Interdit absolu :** inventer stats/avis/notes, promesses contradictoires, SLA multiples.

---

## 2) Doctrine non négociable (site aligné FAST)
Même si le site est marketing, il doit respecter les garde-fous FAST :
- **TERRAIN → PREUVE → VERDICT** (transposé : promesse → preuves → livrables)
- **PAS DE PREUVE = PAS FAIT** (transposé : pas de cas/proofs = pas d’affirmations “performance”)
- **UNKNOWN** explicite si info critique absente (ex : délais impossibles à garantir, chiffres non mesurés)
- **SAFE-BY-DEFAULT** (pas de solutions fragiles type widget externe pour contact)
- **STOP & CALL** (transposé : si formulaire/contact cassé → NO-GO prod)

**Sécurité opposable :**
- Le site public **ne contacte jamais FASTCore directement**.
- Aucun secret côté navigateur (pas de localStorage/sessionStorage pour clés).
- Tous les leads sont traités **server-side** via `/api/leads`.

---

## 3) Objectifs mesurables (KPIs)
### 3.1 Conversion
- Taux de conversion **FAST Remote** ≥ 2% (cible initiale ; ajuste après data).
- 100% des soumissions : accusé immédiat + enregistrement server-side + transmission intake.

### 3.2 Qualité / performance
- Lighthouse : Perf/SEO/Best Practices/Accessibility ≥ 90 (cible).
- LCP mobile ≤ 2.5s (cible).
- Aucune page “Chargement…” / erreur / placeholder visible en prod.

### 3.3 Crédibilité
- Page Réalisations : **≥ 3 case studies** structurées (ou fallback “Coming soon” premium sans fake preuves).

---

## 4) Positionnement & promesse (à appliquer sans dérive)
**Source : `FAST_TECH_SERVICES_COPY_v1.md`**

- FAST Tech Services : maintenance / diagnostic / remise en service d’équipements techniques de garages :
  - ponts élévateurs
  - compresseurs & réseaux d’air
  - cabines peinture & ventilation/traitement d’air
  - stations de lavage
- Signature : **terrain-first**, méthode, sécurité, preuves, tests de sortie, dossier clair.
- Offre cœur : **FAST Remote** (visio) = diagnostic guidé + décision rapide.

---

## 5) SLA unique (source unique + affichage global)
**SLA (unique, identique partout) :**
- Accusé automatique : immédiat  
- Réponse humaine : **≤ 4h ouvrées**  
- Créneau visio : **≤ 24h ouvrées (J+1 ouvré)**  
- Verdict/plan : **≤ 2h après session** si preuves suffisantes, sinon **UNKNOWN + plan**

**Implémentation :**
- SLA défini une seule fois dans `content/config.json` (ou `content/config.ts`) et injecté partout.
- Tout autre SLA ailleurs = **FAIL**.

---

## 6) Information Architecture (pages obligatoires)
### P0 (publication)
1. `/` Accueil (landing conversion FAST Remote)
2. `/fast-remote` Page offre + formulaire qualifiant
3. `/services` Hub
4. `/services/ponts-elevateurs`
5. `/services/compresseurs-air`
6. `/services/cabines-peinture-ventilation`
7. `/services/stations-lavage`
8. `/methode` Méthode FAST (preuve/validation/tests)
9. `/realisations` Réalisations & preuves
10. `/zones` Zones d’intervention
11. `/contact` Contact fiable
12. `/mentions-legales`
13. `/confidentialite`
14. `/cookies`

### P1 (premium / SEO)
15. `/tarifs`
16. `/faq`
17. `/a-propos`
18. `/ressources` + `/ressources/[slug]`

**Source structure + sections :** `content-map.yml`

---

## 7) UX & Copywriting (règles opposables)
- FR uniquement, vouvoiement uniforme.
- Ton : premium technique, clair, sobre, orienté résultats.
- Chaque page doit :
  - rappeler ce que le client **obtient** (livrables + verdict)
  - cadrer les limites (NO-GO / onsite requis)
  - proposer un CTA net

**Interdits :**
- Placeholders visibles (ex : “insérer image ici”)
- Widgets externes fragiles pour contact
- Carousels lourds / animations gadget
- “Notes Google 5/5” / chiffres non prouvables

---

## 8) Design System (rendu premium)
### 8.1 Direction artistique
- Dark industriel (noir/graphite) + accents cyan/bleu énergie.
- Spacing généreux, grilles nettes, typographie moderne.
- Iconographie technique (SVG) + photos terrain réelles.

### 8.2 Règles de rendu
- HTML-first : sections statiques, hydration minimale.
- Animations : micro-interactions sobres (fade/slide léger), jamais envahissantes.
- Visuels :
  - priorité aux **preuves terrain**
  - high-tech en fond subtil uniquement (pas de stock cheap)

**Source assets :** `assets-manifest.md`

---

## 9) Modèle de contenu (données versionnées)
### 9.1 Fichiers contenu
- `content/config.(json|ts)` : brand, SLA, coordonnées, zones
- `content/pages/*.(json|mdx)` : textes et sections
- `content/case-studies/*.json` : structure case studies
- `content/legal/*.mdx` : légal

### 9.2 Référence “source de vérité sections”
Tout mapping SEO/sections/CTA = `content-map.yml`.

---

## 10) Architecture technique (Next.js / Vercel)
### 10.1 Structure recommandée
- `apps/web/app/(site)/...` : routes publiques
- `apps/web/app/api/leads/route.ts` : endpoint server-side
- `apps/web/components/` : sections + UI
- `apps/web/content/` : data
- `apps/web/public/` : assets

### 10.2 Rendering & perf
- Pages marketing : SSG par défaut.
- Images via `next/image` (formats modernes).
- Pas de jQuery runtime (sauf justification écrite + ADR interne).

---

## 11) Formulaires & Intake (intégration FASTCore/FAST IA)
### 11.1 Principe non négociable
Le navigateur n’appelle **jamais** FASTCore.  
Le navigateur appelle **uniquement** `/api/leads` (server-side).

### 11.2 Endpoint web
`POST /api/leads`
- Validation stricte (Zod)
- Anti-spam :
  - honeypot
  - rate limit (basique)
- Logs server-side :
  - `request_id`
  - timestamp
  - type lead
  - résultat (success/fail)
  - pas de secrets

### 11.3 Destination
`/api/leads` forward vers `INTAKE_URL` (env)
- **Option A recommandée** : Intake Gateway dédié (FastAPI) exposé public, puis push FASTCore via WireGuard.
- **Option B temporaire** : Webhook n8n (réception + email + log), puis migration vers gateway.

### 11.4 Schéma Lead minimal (payload)
- `type`: `fast_remote | onsite | contact`
- `name`, `company?`, `email`, `phone?`
- `city`, `postal_code`
- `equipment_category`, `brand_model?`, `serial?`
- `symptom` (min 40 chars)
- `urgency` (enum)
- `availability?`
- `consent_rgpd` (true)
- `meta`: `utm`, `referer`, `user_agent` (option : ip_hash)

### 11.5 Réponse UX
- Succès : message + accusé (email si configuré, sinon message UI)
- Échec : message clair + retry possible, pas de crash

---

## 12) SEO / Meta / Analytics
- Meta title/description uniques (source : `content-map.yml`)
- OpenGraph image par page
- Sitemap + robots.txt
- Analytics privacy-friendly (P1) : Umami/Plausible via feature flag.
- Zéro cookie non nécessaire par défaut.

---

## 13) Environnements & variables (Vercel)
Variables minimum :
- `SITE_URL`
- `INTAKE_URL`

Optionnelles :
- `ANALYTICS_ENABLED=true|false`
- `ANALYTICS_PROVIDER=umami|plausible`
- `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` (si anti-spam avancé)

**Règle :** aucune clé en front si elle doit rester secrète.

---

## 14) Plan d’exécution (PR obligatoires)
### Règles communes à toutes les PR
- PR0 snapshot obligatoire.
- 1 intention = 1 PR.
- Pas de refacto opportuniste.
- Tout ce qui est “critique” doit être stable sans JS (progressive enhancement).

---

### PR0 — Snapshot + plan (docs uniquement)
**DoR (entrée) :**
- Spec + copy + yml + manifest dans repo
- CarServ dans `apps/web/_template/CarServ`

**DoD (sortie) :**
- `docs/site-spec/PR0_SNAPSHOT.md` avec :
  - `git status`, `git diff`, `tree -L 4`
  - commandes build/lint/test + outputs
  - plan conversion
  - liste fichiers PR1
- Aucun code fonctionnel modifié

---

### PR1 — Socle (layout/tokens/assets)
**Objectif :** site Next “vide mais premium”.
**DoD :**
- layout header/footer + navigation
- design tokens
- import assets CarServ propre (sans coller les pages)
- `/sandbox` non linkée
- build OK

---

### PR2 — Pages conversion (Home + FAST Remote)
**Objectif :** conversion FAST Remote.
**DoD :**
- `/` + `/fast-remote` conformes `content-map.yml`
- CTA primaire/secondaire cohérents
- SLA unique affiché via config
- responsive OK
- pas de placeholder visible

---

### PR3 — Pages SEO (services + méthode + réalisations)
**Objectif :** P0 complet.
**DoD :**
- `/services` + 4 pages équipement
- `/methode` + `/realisations` + `/zones` + `/contact` (page)
- stations lavage incluse (obligatoire)
- réalisations : structure prête, fallback premium si preuves manquantes
- build OK

---

### PR4 — Formulaires + `/api/leads`
**Objectif :** conversion fonctionnelle et fiable.
**DoD :**
- formulaire FAST Remote + Contact -> `/api/leads`
- validation Zod + honeypot + rate limit
- forward `INTAKE_URL` côté serveur
- logs server-side + handling erreurs UX propre
- documentation env vars

---

### PR5 — Légal + cookies + perf + finitions
**Objectif :** publication propre.
**DoD :**
- pages légales (mdx)
- cookies banner minimal
- sitemap/robots + 404 premium
- suppression dépendances inutiles
- Lighthouse ~90+ (cible)
- checklist recette PASS/FAIL jointe

---

## 15) Recette finale (PASS/FAIL) — NO-GO si FAIL
### PASS obligatoire
- 0 placeholder visible
- 0 page cassée (pas de “Chargement…”)
- SLA unique identique partout
- Formulaires : envoi OK, accusé OK, lead reçu côté intake
- Pages P0 complètes en ligne
- Légal OK
- Perf acceptable (Lighthouse proche 90)

### FAIL immédiat
- Contact cassé
- SLA contradictoire
- Stats/avis non prouvables affichés
- FASTCore exposé
- Secrets côté navigateur

---

## 16) Gouvernance & évolution
- Toute modification majeure : PR + mise à jour de `FAST_SITE_SPEC.md`.
- Les contenus “promesse/ton” : uniquement via `FAST_TECH_SERVICES_COPY_v1.md`.
- Le mapping SEO/sections : uniquement via `content-map.yml`.
- Les assets : référencés dans `assets-manifest.md`.

---

## 17) Notes d’intégration FASTCore / FAST IA (architecture cible)
- Le site = acquisition + intake.
- FASTCore = GMAO / tickets / preuves / audit / exports (interne).
- FAST IA = exosquelette cognitif (interne) : consomme tickets, preuves et docs via FASTCore.
- Les analytics (option) : agrégés (journalier) → n8n → FASTCore (résumé), pas de tracking brut dans FASTCore.

---

**FIN — Document opposable**
