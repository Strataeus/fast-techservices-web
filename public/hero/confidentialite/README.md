# 🔒 Dossier: /hero/confidentialite

## Description
Images héros pour la **page Politique de Confidentialité** (route `/confidentialite`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Protection des données, sécurité, confidentialité
- **Thème:** Sécurité, protection, privacy, confiance
- **Couleurs:** **ACCENT BRIGHT #00D9FF** (sécurité numérique)
- **Style:** Professionnel, sécurisé, moderne

### Éléments à inclure (recommandé)
- Symbolique de sécurité:
  - Cadenas/lock icon
  - Shield/protection visuel
  - Données protégées
- Éléments numériques (bits, code)
- Couleurs froides/sécurisantes
- Pas de texte long

### Comment intégrer

1. Créer image protection/confidentialité
2. Exporter en JPEG 1920×1080
3. Convertir en WebP:
   ```bash
   ffmpeg -i hero.jpg -quality 85 hero.webp
   ```
4. Placer dans ce dossier

### Lien vers la page
Le bandeau sera affiché dans [/confidentialite](/confidentialite)

### Contenu de la page
- Politique de confidentialité FAST Tech Services
- Protection des données personnelles
- RGPD compliance
- Cookies/tracking info
- Droits utilisateurs

---

## Notes
- Page **trust & security** → banneau doit renforcer confiance
- Cyan (#00D9FF) = sécurité numérique
- Visuels de protection (cadenas, shield)
- Minimaliste et formel
