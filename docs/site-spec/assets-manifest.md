# assets-manifest.md — Inventaire des assets (v1.0)
**Objectif :** lister tous les assets nécessaires, leur source, et leur usage par page/section.  
**Règle :** priorité aux **photos terrain réelles**. Les visuels “high-tech” ne doivent pas remplacer les preuves.

---

## 1) Logos & identité
- `public/brand/logo-fast.svg` — Logo principal (header, footer)
- `public/brand/logo-fast-mark.svg` — Mark simplifié (favicon social)
- `public/brand/favicon.ico` — Favicon
- `public/brand/apple-touch-icon.png` — iOS icon

## 2) Hero / visuels premium
### Vidéo (optionnelle)
- `public/media/hero-fast-remote-5s.mp4` — Vidéo 5s intro (Home hero)
  - Usage : `/` section `hero`
  - Fallback : `public/media/hero-fast-remote-fallback.jpg`

### Images hero (fallback ou autres pages)
- `public/media/hero-remote.jpg` — `/fast-remote` hero
- `public/media/hero-services.jpg` — `/services` hero
- `public/media/hero-method.jpg` — `/methode` hero
- `public/media/hero-cases.jpg` — `/realisations` hero

## 3) Photos terrain (preuves)
### Galerie globale
- `public/proofs/gallery/01.jpg` ... `public/proofs/gallery/20.jpg`
  - Usage : `/realisations` section `gallery`
  - Exigence : résolution ≥ 1920x1080, pas de flou, pas de données sensibles visibles.

### Case studies (3 minimum)
- `public/proofs/cases/case-01/` (avant/pendant/apres)
- `public/proofs/cases/case-02/`
- `public/proofs/cases/case-03/`

Structure recommandée par cas :
- `before.jpg`
- `diagnostic.jpg`
- `action.jpg`
- `after.jpg`
- `evidence-01.jpg` (option)

## 4) Icônes (SVG)
- `public/icons/lift.svg` — ponts élévateurs (cards)
- `public/icons/compressor.svg` — compresseur / air
- `public/icons/booth.svg` — cabine / ventilation
- `public/icons/wash.svg` — station lavage
- `public/icons/remote.svg` — remote visio
- `public/icons/safety.svg` — sécurité/LOTO
- `public/icons/proof.svg` — preuve
- `public/icons/verdict.svg` — verdict/PV

## 5) Illustrations “high-tech”
⚠️ Limitées et sobres (pas de stock cheap).
- `public/illustrations/circuit-bg.png` — fond section (subtil)
- `public/illustrations/grid-glow.png` — accent

## 6) Template CarServ (assets import)
À importer proprement depuis CarServ :
- CSS de base (Bootstrap + custom) → refactor tokens FAST
- Images génériques CarServ → à remplacer progressivement

Chemins sources :
- `apps/web/_template/CarServ/css/`
- `apps/web/_template/CarServ/img/`
- `apps/web/_template/CarServ/js/`
- `apps/web/_template/CarServ/lib/`

## 7) Mapping assets → pages
### `/` Home
- Hero vidéo + fallback
- 4 icônes équipement
- 3 images teasers case studies

### `/fast-remote`
- hero-remote.jpg
- icon remote/safety/proof/verdict
- 1 mini galerie (3 images max)

### `/services/*`
- hero spécifique ou déclinaison
- icône équipement correspondante
- 1 photo terrain liée

### `/methode`
- hero-method.jpg
- icons safety/proof/verdict

### `/realisations`
- hero-cases.jpg
- case studies photos + galerie

---

## 8) TODO (à remplir par Fortunat)
- [ ] Fournir le logo final en SVG/PNG haute définition
- [ ] Fournir 20 photos terrain sélectionnées (qualité pro)
- [ ] Fournir 3 cas détaillés (texte + preuves)
- [ ] Fournir la vidéo hero 5s (ou décider “image only”)
