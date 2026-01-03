# 🏠 Dossier: /hero/home

## Description
Images héros pour la **page d'accueil** (HomePage - route `/`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Bandeau accrocheur pour homepage
- **Couleurs:** Utiliser les couleurs de marque:
  - Couleur primaire: #0B0F17 (noir profond)
  - Accent bright: #00D9FF (cyan)
  - Accent gold: #FF9A2E (orange)

### Comment intégrer les fichiers

**Option 1: Via outils online**
1. Créer/designer votre image (Figma, Adobe XD, Canva, etc.)
2. Exporter en JPEG 1920×1080
3. Convertir en WebP via: https://convertio.co/jpeg-webp/
4. Placer les 2 fichiers dans ce dossier

**Option 2: Via FFmpeg (ligne de commande)**
```bash
# Depuis JPEG vers WebP
ffmpeg -i hero.jpg -quality 85 hero.webp

# Ou via Node:
npx @squoosh/cli --webp --quality 85 hero.jpg
```

### Vérification
Après upload, vérifier:
```bash
ls -la public/hero/home/
# Doit afficher:
# - hero.webp (< 120 KB)
# - hero.jpg (< 150 KB)
```

### Code utilisé
Le code sera automatiquement mis à jour pour utiliser:
```tsx
<picture>
  <source srcset="/hero/home/hero.webp" type="image/webp">
  <img src="/hero/home/hero.jpg" alt="FAST Tech Services - Homepage">
</picture>
```

---

## Notes
- La homepage a également une vidéo d'intro (`/public/intro/fast-intro.webm`)
- Ce bandeau héro est secondaire à la vidéo intro
- Recommandation: Design minimaliste avec logo/texte important
