# ⚙️ Dossier: /hero/services

## Description
Images héros pour la **page Services** (route `/services`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Portefeuille services techniques, équipements
- **Thème:** Expertise technique, outillage, équipements industriels
- **Couleurs:** Mix **ACCENT GOLD #FF9A2E** + BRIGHT
- **Style:** Professionnel, technique, confiance

### Éléments à inclure (recommandé)
- Équipements garage/industrie:
  - Ponts élévateurs
  - Compresseurs
  - Équipements diagnostic (Beamex, etc)
- Outils/toolbox
- Techniciens en action
- Diagnostic/maintenance

### Comment intégrer

1. Créer image montrant services/équipements
2. Exporter en JPEG 1920×1080
3. Convertir en WebP:
   ```bash
   ffmpeg -i hero.jpg -quality 85 hero.webp
   ```
4. Placer dans ce dossier

### Lien vers la page
Le bandeau sera affiché dans [/services](/services)

### Services détaillés
- Diagnostic structuré
- Maintenance préventive
- Interventions terrain
- Assistance distance

---

## Notes
- Portfolio complet → banneau doit montrer **diversité services**
- Orange (#FF9A2E) couleur secondaire
- Peut inclure photos réelles d'équipements
- Montrer équipements spécifiques mentionnés sur la page
