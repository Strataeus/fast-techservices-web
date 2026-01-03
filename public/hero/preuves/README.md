# 📊 Dossier: /hero/preuves

## Description
Images héros pour la **page Preuves & Cas Clients** (route `/preuves`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Cas clients, résultats, preuves concrètes
- **Thème:** Succès, ROI, résultats mesurables, confiance
- **Couleurs:** **ACCENT GOLD #FF9A2E** (résultats positifs)
- **Style:** Confiance, résultats, données

### Éléments à inclure (recommandé)
- Graphiques/statistiques (croissance, ROI)
- Cas clients (anonymisés ou génériques)
- Résultats positifs
- Chiffres/métriques
- Success story visuel

### Comment intégrer

1. Créer image montrant résultats/cas clients
2. Exporter en JPEG 1920×1080
3. Convertir en WebP:
   ```bash
   ffmpeg -i hero.jpg -quality 85 hero.webp
   ```
4. Placer dans ce dossier

### Lien vers la page
Le bandeau sera affiché dans [/preuves](/preuves)

### Contenu de la page
Page affiche cas clients anonymisés:
- Symptômes
- Mesures/diagnostic
- Actions prises
- Résultats/test de sortie

---

## Notes
- Page de **social proof** → banneau doit montrer **résultats/succès**
- Orange (#FF9A2E) = confiance et résultats
- Focus sur données/chiffres si possible
- Montrer ROI ou économies réalisées
