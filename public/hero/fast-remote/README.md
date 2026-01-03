# 💻 Dossier: /hero/fast-remote

## Description
Images héros pour la **page FAST Remote** (route `/fast-remote`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Service technologique à distance, diagnostic digital
- **Thème:** Remote, diagnostic, technologie, rapidité
- **Couleurs:** **ACCENT BRIGHT #00D9FF** (cyan dominant)
- **Style:** Technologique, moderne, rapide

### Éléments à inclure (recommandé)
- Interface/écran (ordinateur, tablet, smartphone)
- Connections/réseaux (visuels digitaux)
- Support/assistance à distance
- Équipement industriel (optionnel mais mieux)
- Vitesse/efficacité

### Comment intégrer

1. Créer image illustrant diagnostic/support à distance
2. Exporter en JPEG 1920×1080
3. Convertir en WebP:
   ```bash
   ffmpeg -i hero.jpg -quality 85 hero.webp
   ```
4. Placer dans ce dossier

### Lien vers la page
Le bandeau sera affiché dans [/fast-remote](/fast-remote)

### Service description
- Diagnostic équipements industriels à distance
- Verdict en 1-2h
- Preuves documentées
- Plan d'action clair

---

## Notes
- Service phare → banneau **DOIT être accrocheur**
- Cyan (#00D9FF) couleur principale
- Souligner aspect "distance" et "rapide"
- Peut montrer écrans/interface technologique
