# ⚠️ Dossier: /hero/error

## Description
Images héros pour la **page Erreur 500** (route `/error`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Erreur, dépannage, aide
- **Thème:** Erreur technique, mais approche rassurante
- **Couleurs:** Mix **ACCENT GOLD #FF9A2E** (alerte) + texte clair
- **Style:** Technique mais friendly, aide visible

### Éléments à inclure (recommandé)
- Symbole d'erreur (⚠️, triangle d'alerte)
- Équipe de support (rassurant)
- Code/éléments techniques
- Message d'aide visible
- Pas trop "scary"

### Comment intégrer

1. Créer image erreur/dépannage
2. Exporter en JPEG 1920×1080
3. Convertir en WebP:
   ```bash
   ffmpeg -i hero.jpg -quality 85 hero.webp
   ```
4. Placer dans ce dossier

### Lien vers la page
Le bandeau sera affiché quand une **erreur 500 serveur** survient

### Contenu de la page
- Titre: "Oups! Une erreur est survenue"
- Message d'excuses
- Bouton réessayer
- Lien retour à l'accueil
- Code d'erreur (ID) pour support

---

## Notes
- Page **erreur** → mais tonalité doit rester **positive/rassurante**
- Orange (#FF9A2E) = attention/alerte
- Montrer support disponible si possible
- Guider utilisateur vers solutions (réessayer, accueil, contact)
