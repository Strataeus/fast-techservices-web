# 🎯 Dossier: /hero/methode

## Description
Images héros pour la **page Méthode FAST** (route `/methode`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Visual représentant le processus 3-étapes
- **Thème:** Terrain → Preuve → Verdict (processus structuré)
- **Couleurs:** Priorité couleur **ACCENT BRIGHT #00D9FF** (cyan)
- **Style:** Professionnel, technique, rigoureux

### Éléments à inclure (recommandé)
- Visual montrant 3 étapes ou phases
- Logo FAST Tech Services
- Peut inclure: équipement, outils, processus
- Pas de texte long (le titre/description sont dans la page)

### Comment intégrer

1. Créer une image illustrant le processus FAST (3 étapes)
2. Exporter en JPEG 1920×1080
3. Convertir en WebP via FFmpeg:
   ```bash
   ffmpeg -i hero.jpg -quality 85 hero.webp
   ```
4. Placer les 2 fichiers dans ce dossier

### Lien vers la page
Le bandeau sera affiché dans [/methode](/methode)

---

## Notes
- Page très technique → banneau doit être professionnel
- Le cyan (#00D9FF) est la couleur de marque pour cette section
- Éviter texte alboratoire - juste visuels puissants
