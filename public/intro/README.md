# 🎬 Dossier: /intro

## Description
Vidéos d'introduction pour la **page d'accueil** (HomePage).

## Ce que vous devez implémenter

### Fichiers requis
- [x] `fast-intro.mp4` (existant - video H.264)
- [ ] `fast-intro.webm` (À CRÉER - video VP9) - priorité 1
- [ ] `fast-intro-poster.png` (Image de couverture, 1920×1080, ~80 KB)

### Spécifications vidéo

#### Format WebM (Principal - Nouvelle)
- **Format:** WebM (VP9 codec + Opus audio)
- **Dimensions:** 1920×1080 (ou 1280×720)
- **Bitrate vidéo:** 2 Mbps
- **Bitrate audio:** 128 kbps
- **Codec audio:** Opus
- **FPS:** 30
- **Poids cible:** 3-6 MB par minute
- **Qualité:** 85%

#### Format MP4 (Fallback - Existant)
- [x] Déjà présent: `fast-intro.mp4`
- Format: MP4 (H.264 + AAC)
- Utilisé pour: Navigateurs anciens/Safari

#### Poster Image (Image de couverture)
- **Format:** PNG
- **Dimensions:** 1920×1080
- **Poids:** ~80-100 KB
- **Contenu:** Première frame vidéo OU image attractive
- **Usage:** Affichée avant que vidéo ne se charge

### Comment intégrer

#### Option A: Convertir via FFmpeg (RECOMMANDÉ)
```bash
# 1. Convertir MP4 existant → WebM
ffmpeg -i fast-intro.mp4 \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 2M \
  -c:a libopus \
  -b:a 128k \
  fast-intro.webm

# 2. Extraire poster image (1ère seconde)
ffmpeg -ss 00:00:01 -i fast-intro.mp4 -vframes 1 fast-intro-poster.png
```

#### Option B: Via Node/Squoosh (Alternative)
```bash
npx @squoosh/cli --webp fast-intro.mp4
```

### Lien vers la page
Les vidéos seront affichées dans [/](/homepage) (HomePage) via composant `<VideoIntro>`

### Ordre priorité
1. **CRITIQUE:** Créer `fast-intro.webm`
2. **Important:** Créer `fast-intro-poster.png`
3. **Existant:** `fast-intro.mp4` OK tel quel

---

## Guide FFmpeg Installation

### Windows
```powershell
# Via Chocolatey (easiest)
choco install ffmpeg

# Ou manuel: https://ffmpeg.org/download.html
# Puis ajouter au PATH système
```

### macOS
```bash
brew install ffmpeg
```

### Linux (Ubuntu/Debian)
```bash
sudo apt-get install ffmpeg
```

---

## Notes
- **VideoIntro component** utilise: WebM + MP4 + poster
- WebM = format moderne, compression optimale
- MP4 = fallback pour compatibilité
- Poster = image visible avant chargement vidéo
- Durée: recommandation < 10-15 secondes (engagement)
