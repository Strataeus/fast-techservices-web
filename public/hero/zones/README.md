# 📍 Dossier: /hero/zones

## Description
Images héros pour la **page Zones d'Intervention** (route `/zones`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Couverture géographique, zones d'intervention
- **Thème:** Géographie, coverage, disponibilité
- **Couleurs:** **ACCENT BRIGHT #00D9FF** (couverture/localisation)
- **Style:** Professionnel, géographique

### Éléments à inclure (recommandé)
- Carte de France (ou région couverte)
- Pins/markers de localisation
- Zones d'intervention surlignées
- Coverage area highlighting
- Icônes région/géographie

### Comment intégrer

1. Créer image montrant carte/zones d'intervention
2. Exporter en JPEG 1920×1080
3. Convertir en WebP:
   ```bash
   ffmpeg -i hero.jpg -quality 85 hero.webp
   ```
4. Placer dans ce dossier

### Lien vers la page
Le bandeau sera affiché dans [/zones](/zones)

### Contenu de la page
- FAST Remote: couvre France entière en 1-2h
- Interventions terrain: zone Île-de-France (Paris et région)
- Tarifs dégressifs selon distance

---

## Notes
- Page **informative** → banneau doit montrer **couverture/disponibilité**
- Cyan (#00D9FF) = accès et localisation
- Carte actualisée si zones changent
- Peut montrer région parisienne en détail
