# 💬 Dossier: /hero/contact

## Description
Images héros pour la **page Contact** (route `/contact`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Communication, équipe, contact amical
- **Thème:** Approche accessible et professionnelle
- **Couleurs:** Mix **ACCENT GOLD #FF9A2E** (orange) + BRIGHT
- **Style:** Accueillant, moderne, dynamique

### Éléments à inclure (recommandé)
- Équipe FAST en action (photos ou illustration)
- Éléments de communication (chat, email, téléphone visuels)
- Ambiance collaborative
- Contact/approachability

### Comment intégrer

1. Créer image montrant équipe/communication
2. Exporter en JPEG 1920×1080
3. Convertir en WebP:
   ```bash
   ffmpeg -i hero.jpg -quality 85 hero.webp
   ```
4. Placer dans ce dossier

### Lien vers la page
Le bandeau sera affiché dans [/contact](/contact)

### Page associée
- Formulaire de contact en-dessous du héros
- 3 types de demandes (FAST Remote, Intervention, Audit)

---

## Notes
- Page Call-to-Action → banneau doit être **accueillant et engageant**
- Orange (#FF9A2E) est couleur secondaire pour contact
- Peut inclure photos réelles d'équipe si disponible
