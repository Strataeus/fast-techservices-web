#!/bin/bash
# Script pour convertir fast-intro.mp4 en WebM (VP9)
# Prérequis: ffmpeg installé (apt-get install ffmpeg)

INPUT="public/intro/fast-intro.mp4"
OUTPUT="public/intro/fast-intro.webm"
POSTER="public/intro/fast-intro-poster.png"

if [ ! -f "$INPUT" ]; then
    echo "❌ Fichier non trouvé: $INPUT"
    exit 1
fi

echo "📹 Conversion en cours: $INPUT → $OUTPUT"
echo "(Cela peut prendre 2-5 minutes selon la durée vidéo)"

# Conversion WebM (VP9 + Opus audio)
# -crf 30 = qualité (18-51, 28 défaut, < = meilleur mais + gros)
# -b:v 1M = bitrate vidéo (ajustez selon vos besoins)
# -c:a libopus = codec audio Opus
# -b:a 128k = bitrate audio
ffmpeg -i "$INPUT" \
    -c:v libvpx-vp9 \
    -crf 30 \
    -b:v 2M \
    -c:a libopus \
    -b:a 128k \
    "$OUTPUT"

if [ $? -eq 0 ]; then
    echo "✅ Conversion réussie: $OUTPUT"
    
    # Générer une miniature (poster)
    echo "📸 Génération du poster..."
    ffmpeg -ss 00:00:01 -i "$INPUT" -vframes 1 "$POSTER" 2>/dev/null
    echo "✅ Poster créé: $POSTER"
else
    echo "❌ Erreur lors de la conversion"
    exit 1
fi
