#!/usr/bin/env python3
"""
Script pour générer les images héros du site FAST Tech Services
Génère les images fallback JPEG avec logos et dégradés de marque
"""

import os
from PIL import Image, ImageDraw, ImageFont
import colorsys

# Couleurs de marque
PRIMARY_DARK = (11, 15, 23)  # #0B0F17
ACCENT_BRIGHT = (0, 217, 255)  # #00D9FF
ACCENT_GOLD = (255, 154, 46)  # #FF9A2E
WHITE = (255, 255, 255)
GRAY_DARK = (50, 60, 80)

def create_gradient_image(width, height, color1, color2):
    """Crée une image avec dégradé linéaire"""
    image = Image.new('RGB', (width, height), color1)
    pixels = image.load()
    
    for y in range(height):
        # Interpolation entre les deux couleurs
        ratio = y / height
        r = int(color1[0] * (1 - ratio) + color2[0] * ratio)
        g = int(color1[1] * (1 - ratio) + color2[1] * ratio)
        b = int(color1[2] * (1 - ratio) + color2[2] * ratio)
        
        for x in range(width):
            pixels[x, y] = (r, g, b)
    
    return image

def add_text_centered(image, text, position_y, color=WHITE, font_size=80):
    """Ajoute du texte centré à l'image"""
    draw = ImageDraw.Draw(image)
    width = image.width
    
    try:
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    x = (width - text_width) // 2
    
    draw.text((x, position_y), text, fill=color, font=font)

def create_hero_desktop():
    """Crée l'image héro desktop 1920x1080"""
    img = create_gradient_image(1920, 1080, PRIMARY_DARK, GRAY_DARK)
    draw = ImageDraw.Draw(img)
    
    # Ajouter des éléments graphiques (carrés/cercles avec accent colors)
    for i in range(5):
        x = 200 + i * 300
        y = 200 + (i % 2) * 400
        size = 80
        color = ACCENT_BRIGHT if i % 2 == 0 else ACCENT_GOLD
        draw.rectangle([x, y, x + size, y + size], outline=color, width=2)
    
    # Texte
    try:
        font_large = ImageFont.truetype("arial.ttf", 120)
        font_small = ImageFont.truetype("arial.ttf", 40)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    draw.text((100, 400), "FAST Tech Services", fill=WHITE, font=font_large)
    draw.text((100, 550), "Diagnostic • Maintenance • Expertise", fill=ACCENT_BRIGHT, font=font_small)
    
    img.save('public/hero/fast-hero.jpeg', 'JPEG', quality=85)
    print("✓ Créé: public/hero/fast-hero.jpeg (1920×1080)")

def create_hero_mobile():
    """Crée l'image héro mobile 768x1024"""
    img = create_gradient_image(768, 1024, PRIMARY_DARK, GRAY_DARK)
    draw = ImageDraw.Draw(img)
    
    # Éléments graphiques réduits pour mobile
    for i in range(3):
        x = 100 + i * 200
        y = 200 + i * 200
        size = 50
        color = ACCENT_BRIGHT if i % 2 == 0 else ACCENT_GOLD
        draw.rectangle([x, y, x + size, y + size], outline=color, width=2)
    
    # Texte adapté mobile
    try:
        font_large = ImageFont.truetype("arial.ttf", 60)
        font_small = ImageFont.truetype("arial.ttf", 24)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    draw.text((50, 350), "FAST Tech", fill=WHITE, font=font_large)
    draw.text((50, 450), "Services", fill=WHITE, font=font_large)
    draw.text((50, 550), "Diagnostic Expertise", fill=ACCENT_BRIGHT, font=font_small)
    
    img.save('public/hero/fast-hero_mobile.jpeg', 'JPEG', quality=85)
    print("✓ Créé: public/hero/fast-hero_mobile.jpeg (768×1024)")

def create_contact_banner():
    """Crée un banneau pour la page contact"""
    img = create_gradient_image(1920, 600, PRIMARY_DARK, GRAY_DARK)
    draw = ImageDraw.Draw(img)
    
    # Cercles décoratives
    for i in range(4):
        x = 300 + i * 400
        y = 150
        draw.ellipse([x, y, x + 200, y + 200], outline=ACCENT_GOLD, width=3)
    
    try:
        font = ImageFont.truetype("arial.ttf", 80)
    except:
        font = ImageFont.load_default()
    
    draw.text((200, 250), "Contact FAST", fill=ACCENT_GOLD, font=font)
    
    img.save('public/hero/contact/contact-banner.jpeg', 'JPEG', quality=85)
    print("✓ Créé: public/hero/contact/contact-banner.jpeg (1920×600)")

def create_methode_banner():
    """Crée un banneau pour la page methode"""
    img = create_gradient_image(1920, 600, PRIMARY_DARK, GRAY_DARK)
    draw = ImageDraw.Draw(img)
    
    # Trois étapes visuelles
    for i in range(3):
        x = 400 + i * 400
        y = 200
        draw.rectangle([x, y, x + 100, y + 200], fill=ACCENT_BRIGHT, outline=WHITE, width=2)
        
        try:
            font = ImageFont.truetype("arial.ttf", 60)
            bbox = draw.textbbox((0, 0), str(i+1), font=font)
            text_w = bbox[2] - bbox[0]
            draw.text((x + (100-text_w)//2, y + 50), str(i+1), fill=PRIMARY_DARK, font=font)
        except:
            pass
    
    try:
        font = ImageFont.truetype("arial.ttf", 80)
    except:
        font = ImageFont.load_default()
    
    draw.text((200, 50), "Méthode FAST", fill=ACCENT_BRIGHT, font=font)
    
    img.save('public/hero/methode/methode-banner.jpeg', 'JPEG', quality=85)
    print("✓ Créé: public/hero/methode/methode-banner.jpeg (1920×600)")

def create_remote_banner():
    """Crée un banneau pour la page fast-remote"""
    img = create_gradient_image(1920, 600, PRIMARY_DARK, GRAY_DARK)
    draw = ImageDraw.Draw(img)
    
    # Simulation d'onde/signal
    for i in range(4):
        radius = 100 + i * 80
        x, y = 900, 300
        draw.ellipse([x - radius, y - radius, x + radius, y + radius], 
                    outline=ACCENT_BRIGHT, width=2)
    
    try:
        font = ImageFont.truetype("arial.ttf", 80)
    except:
        font = ImageFont.load_default()
    
    draw.text((200, 200), "FAST Remote", fill=ACCENT_BRIGHT, font=font)
    draw.text((200, 350), "Diagnostic à distance", fill=ACCENT_GOLD, font=ImageFont.load_default())
    
    img.save('public/hero/fast-remote/remote-banner.jpeg', 'JPEG', quality=85)
    print("✓ Créé: public/hero/fast-remote/remote-banner.jpeg (1920×600)")

if __name__ == '__main__':
    # Créer les répertoires s'ils n'existent pas
    os.makedirs('public/hero/contact', exist_ok=True)
    os.makedirs('public/hero/methode', exist_ok=True)
    os.makedirs('public/hero/fast-remote', exist_ok=True)
    
    print("🎨 Génération des images héros...")
    create_hero_desktop()
    create_hero_mobile()
    create_contact_banner()
    create_methode_banner()
    create_remote_banner()
    print("\n✅ Toutes les images ont été créées!")
