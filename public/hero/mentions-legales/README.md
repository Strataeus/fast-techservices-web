# ⚖️ Dossier: /hero/mentions-legales

## Description
Images héros pour la **page Mentions Légales** (route `/mentions-legales`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Légalité, compliance, documentation
- **Thème:** Confiance, légalité, documentation officielle
- **Couleurs:** **ACCENT BRIGHT #00D9FF** (confiance/légalité)
- **Style:** Professionnel, formel, légal

### Éléments à inclure (recommandé)
- Documents/papiers (symbolique)
- Timbre/seal officiel
- Symboles de légalité (checkmark, légalité)
- Couleurs froides/sérieuses
- Pas de personnages

### Comment intégrer

1. Créer image légale/documentation
2. Exporter en JPEG 1920×1080
3. Convertir en WebP:
   ```bash
   ffmpeg -i hero.jpg -quality 85 hero.webp
   ```
4. Placer dans ce dossier

### Lien vers la page
Le bandeau sera affiché dans [/mentions-legales](/mentions-legales)

### Contenu de la page
- Informations légales et administratives FAST Tech Services
- Statut juridique
- Coordonnées
- Copyright
- CNIL compliance

---

## Notes
- Page **administrative** → banneau peut être minimaliste
- Cyan (#00D9FF) = confiance légale
- Éviter couleurs trop flashy
- Formel et professionnel
