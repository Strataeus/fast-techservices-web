# 🔍 Dossier: /hero/not-found

## Description
Images héros pour la **page 404 - Non Trouvée** (route `/not-found`).

## Ce que vous devez implémenter

### Fichiers requis
- [ ] `hero.webp` (1920×1080, ~80-120 KB)
- [ ] `hero.jpg` (1920×1080, ~100-150 KB) - fallback

### Spécifications
- **Dimensions:** 1920×1080 pixels (16:9)
- **Format principal:** WebP 85% qualité
- **Format fallback:** JPEG 85% qualité
- **Poids cible:** WebP < 120 KB, JPEG < 150 KB
- **Contenu:** Page non trouvée, mais aide utile
- **Thème:** 404, page perdue, redirection
- **Couleurs:** Mix **ACCENT BRIGHT #00D9FF** + GOLD
- **Style:** Léger, friendly, mais clair

### Éléments à inclure (recommandé)
- Symbole de "404" ou "Not Found"
- Point d'interrogation (?)
- Illustration perdue/désorientée (friendly)
- Navigation/direction icons
- Pas trop "dark"

### Comment intégrer

1. Créer image 404/page non trouvée
2. Exporter en JPEG 1920×1080
3. Convertir en WebP:
   ```bash
   ffmpeg -i hero.jpg -quality 85 hero.webp
   ```
4. Placer dans ce dossier

### Lien vers la page
Le bandeau sera affiché quand utilisateur accède à **URL inexistante** (404)

### Contenu de la page
- Titre: "Page non trouvée"
- Description: Page n'existe pas ou a été déplacée
- CTA: Bouton retour à l'accueil
- Navigation: Liens vers pages principales

---

## Notes
- Page **404** → tonalité doit rester **friendly** et **utile**
- Cyan (#00D9FF) = navigation/aide
- Illustration légère et humoristique OK
- Guider vers pages principales
- Pas trop d'alarm bells
