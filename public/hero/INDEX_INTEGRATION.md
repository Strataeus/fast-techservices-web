# 📁 STRUCTURE COMPLÈTE - Guide d'intégration des images

## 🎯 Vue d'ensemble

Tous les dossiers pour recevoir vos images personnalisées ont été créés. Chaque dossier contient un fichier `README.md` avec instructions détaillées.

---

## 📂 Structure créée

```
public/
└── hero/
    ├── home/                          # 🏠 Homepage
    │   └── README.md                 # ← LIRE INSTRUCTIONS
    │
    ├── methode/                       # 🎯 Méthode FAST
    │   └── README.md                 # ← LIRE INSTRUCTIONS
    │
    ├── contact/                       # 💬 Contact
    │   └── README.md                 # ← LIRE INSTRUCTIONS
    │
    ├── fast-remote/                   # 💻 FAST Remote
    │   └── README.md                 # ← LIRE INSTRUCTIONS
    │
    ├── services/                      # ⚙️ Services
    │   └── README.md                 # ← LIRE INSTRUCTIONS
    │
    ├── preuves/                       # 📊 Preuves & Cas clients
    │   └── README.md                 # ← LIRE INSTRUCTIONS
    │
    ├── zones/                         # 📍 Zones d'intervention
    │   └── README.md                 # ← LIRE INSTRUCTIONS
    │
    ├── mentions-legales/              # ⚖️ Mentions légales
    │   └── README.md                 # ← LIRE INSTRUCTIONS
    │
    ├── confidentialite/               # 🔒 Confidentialité
    │   └── README.md                 # ← LIRE INSTRUCTIONS
    │
    ├── error/                         # ⚠️ Erreur 500
    │   └── README.md                 # ← LIRE INSTRUCTIONS
    │
    └── not-found/                     # 🔍 Erreur 404
        └── README.md                 # ← LIRE INSTRUCTIONS

intro/
└── README.md                          # 🎬 Vidéo intro - LIRE INSTRUCTIONS
```

---

## 🚀 Étapes d'intégration

### Phase 1: Lire les instructions (5 min)
1. Ouvrir chaque dossier dans `public/hero/`
2. Lire le `README.md` correspondant
3. Noter les spécifications (dimensions, formats, poids)

### Phase 2: Préparer vos images (1-3 jours)
1. Créer/designer vos images (Figma, Photoshop, etc.)
2. Exporter en JPEG 1920×1080 (comme base)
3. Suivre les instructions du README pour convertir

### Phase 3: Convertir formats (1-2 heures)
1. Convertir JPEG → WebP via FFmpeg
2. Vérifier dimensions et poids
3. Placer les fichiers dans les dossiers

### Phase 4: Commit & Push (15 min)
1. Une fois tous les fichiers en place
2. Lancer `git add` et commit
3. Le site sera automatiquement mis à jour

---

## 📋 Checklist complet

### Fichiers à créer

**Héros/Bandeaux (11 pages × 2 formats)**
- [ ] `public/hero/home/hero.webp` + `.jpg`
- [ ] `public/hero/methode/hero.webp` + `.jpg`
- [ ] `public/hero/contact/hero.webp` + `.jpg`
- [ ] `public/hero/fast-remote/hero.webp` + `.jpg`
- [ ] `public/hero/services/hero.webp` + `.jpg`
- [ ] `public/hero/preuves/hero.webp` + `.jpg`
- [ ] `public/hero/zones/hero.webp` + `.jpg`
- [ ] `public/hero/mentions-legales/hero.webp` + `.jpg`
- [ ] `public/hero/confidentialite/hero.webp` + `.jpg`
- [ ] `public/hero/error/hero.webp` + `.jpg`
- [ ] `public/hero/not-found/hero.webp` + `.jpg`

**Vidéos (2 formats + 1 poster)**
- [ ] `public/intro/fast-intro.webm` (à créer via FFmpeg)
- [ ] `public/intro/fast-intro.mp4` (existant ✓)
- [ ] `public/intro/fast-intro-poster.png` (optionnel mais recommandé)

**Total: 24 fichiers images + 1 vidéo WebM**

---

## 🎨 Spécifications résumées

### Tous les héros (sauf intro)
| Aspect | Spécification |
|--------|---|
| **Dimensions** | 1920×1080 (16:9) |
| **Format principal** | WebP 85% qualité |
| **Format fallback** | JPEG 85% qualité |
| **Poids WebP** | < 120 KB |
| **Poids JPEG** | < 150 KB |
| **DPI** | 72 (web) |
| **Profil couleur** | sRGB |

### Vidéo intro
| Aspect | Spécification |
|--------|---|
| **Format principal** | WebM (VP9) |
| **Format fallback** | MP4 (H.264) |
| **Dimensions** | 1920×1080 (16:9) |
| **Bitrate vidéo** | 2 Mbps |
| **Bitrate audio** | 128 kbps |
| **Poids** | 3-6 MB/min |

---

## 💡 Recommandations

### Tools recommandés pour créer les images
- **Figma** (gratuit, collaborative) - MEILLEUR
- **Canva Pro** (simple, templates)
- **Adobe XD** (professionnel)
- **Photoshop** (complet mais cher)

### Tools pour convertir les images
- **FFmpeg** (CLI, puissant) - MEILLEUR
- **Squoosh** (CLI Node.js)
- **TinyPNG** (online)
- **Convertio.co** (online simple)

### Tools pour optimiser les images
- **TinyPNG** (compression online)
- **ImageOptim** (macOS)
- **ImageMagick** (CLI)
- **OptiPNG** / **JpegOptim** (CLI)

---

## ❓ FAQ Rapide

### Q: Je n'ai pas d'images - Que faire?
**A:** Utilisez Figma/Canva pour créer designs simples avec les couleurs de marque fournies.

### Q: Quel programme pour convertir en WebP?
**A:** FFmpeg (recommandé) - voir README.md dans `/intro/` pour installation

### Q: Les images doivent être exactement 1920×1080?
**A:** Oui, idéalement. Ratio 16:9 essentiel pour banneau harmonieux.

### Q: Peut je utiliser PNG au lieu de WebP+JPEG?
**A:** Oui mais moins optimal - PNG sera plus gros (~250-300 KB vs 120 KB WebP)

### Q: Et si je remplace uniquement certaines images?
**A:** C'est OK. Les images existantes (SVG) resteront tant que vous n'ajoutez pas WebP/JPEG

### Q: Comment je sais si mes images sont assez compressées?
**A:** Vérifier taille: `ls -lh public/hero/*/hero.webp` doit montrer < 120 KB chacun

---

## 🆘 Support

Pour questions spécifiques:
1. Lire le `README.md` du dossier concerné
2. Vérifier spécifications (dimensions, formats, poids)
3. Utiliser FFmpeg comme recommandé dans les READMEs

---

## ✅ Status Actuel

| Élément | Status |
|---------|--------|
| Dossiers créés | ✅ 11 dossiers héros + 1 intro |
| READMEs d'instructions | ✅ Chaque dossier |
| Fichiers existants | ✅ SVG + JPEG anciens |
| **À FAIRE** | **👇** |
| Créer/designer images | ⏳ VOTRE ACTION |
| Convertir en WebP | ⏳ VOTRE ACTION |
| Convertir vidéo MP4→WebM | ⏳ VOTRE ACTION |
| Upload fichiers | ⏳ VOTRE ACTION |
| Commit & Push | ⏳ VOTRE ACTION |

---

**Quand vous êtes prêt, placez les fichiers dans les dossiers respectifs et je mettrai à jour le code!** 🎨🚀
