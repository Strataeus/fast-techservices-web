# 📹 Conversion Vidéo WebM - Instructions

## Étape 1: Installer FFmpeg

### Windows (avec Chocolatey)
```powershell
choco install ffmpeg
```

### Windows (manuel)
Télécharger depuis: https://ffmpeg.org/download.html
Ajouter au PATH systématique

### macOS (avec Homebrew)
```bash
brew install ffmpeg
```

### Linux (Debian/Ubuntu)
```bash
sudo apt-get install ffmpeg
```

---

## Étape 2: Convertir fast-intro.mp4 en WebM

### Option A: Ligne de commande simple (recommandée)
```powershell
cd c:\dev\fast-techservices-web

ffmpeg -i public/intro/fast-intro.mp4 `
  -c:v libvpx-vp9 `
  -crf 30 `
  -b:v 2M `
  -c:a libopus `
  -b:a 128k `
  public/intro/fast-intro.webm
```

### Option B: Via script PowerShell
```powershell
$inputVideo = "public/intro/fast-intro.mp4"
$outputVideo = "public/intro/fast-intro.webm"

ffmpeg -i $inputVideo `
  -c:v libvpx-vp9 `
  -crf 30 `
  -b:v 2M `
  -c:a libopus `
  -b:a 128k `
  $outputVideo

Write-Host "✅ Conversion terminée: $outputVideo"
```

### Option C: Paramètres avancés (si vidéo trop grosse)
```powershell
# Plus compressée
ffmpeg -i public/intro/fast-intro.mp4 `
  -c:v libvpx-vp9 `
  -crf 35 `
  -b:v 1M `
  -c:a libopus `
  -b:a 96k `
  public/intro/fast-intro.webm
```

---

## 📊 Explications des paramètres FFmpeg

| Paramètre | Valeur | Signification |
|-----------|--------|---------------|
| `-c:v libvpx-vp9` | - | Codec vidéo VP9 (optimal pour WebM) |
| `-crf` | 30 | Qualité (18-51, moins = mieux mais + gros) |
| `-b:v` | 2M | Bitrate vidéo: 2 Mbps (ajustez selon besoins) |
| `-c:a libopus` | - | Codec audio Opus |
| `-b:a` | 128k | Bitrate audio: 128 kbps |

---

## ⚡ Résultats attendus

**Vidéo originale:** `fast-intro.mp4`
- Taille: ~50-100 MB (dépend de la durée)

**Vidéo convertie:** `fast-intro.webm`
- Taille: ~20-40 MB (compression ~60%)
- Format: WebM (VP9 + Opus)
- Qualité: 1080p/720p (selon original)

---

## 🎬 Générer une miniature (optionnel)

```powershell
# Extraire l'image à 1 seconde
ffmpeg -ss 00:00:01 `
  -i public/intro/fast-intro.mp4 `
  -vframes 1 `
  public/intro/fast-intro-poster.png
```

---

## ✅ Vérification

Après conversion, vérifier:
```powershell
dir public/intro/fast-intro.webm
# Doit afficher le fichier avec sa taille
```

Utiliser dans le HTML:
```html
<video controls poster="/intro/fast-intro-poster.png">
  <source src="/intro/fast-intro.webm" type="video/webm">
  <source src="/intro/fast-intro.mp4" type="video/mp4">
</video>
```

---

## 🆘 Dépannage

**Erreur: FFmpeg not found**
- Installer FFmpeg via chocolatey/package manager
- Redémarrer le terminal après installation

**Vidéo WebM trop grosse**
- Augmenter `-crf` (ex: 35 au lieu de 30)
- Réduire `-b:v` (ex: 1M au lieu de 2M)
- Ré-encoder le MP4 source avant

**Audio absent dans WebM**
- Ajouter: `-c:a libopus -b:a 128k`
- Vérifier que le MP4 source a l'audio

**Conversion très lente**
- Normal: VP9 est lent (peut prendre 5-30 min selon durée)
- Utiliser `-preset veryfast` pour accélérer (qualité réduite)
