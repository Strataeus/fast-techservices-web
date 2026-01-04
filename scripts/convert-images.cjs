#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Using Node.js built-in zlib and manually converting to WebP is complex
// Better approach: use native tools available

console.log('🖼️ Image Conversion Tool');
console.log('========================\n');

// Map of PNG files to convert
const imagesToConvert = [
  'public/hero/home/hero.png',
  'public/hero/methode/hero.png',
  'public/hero/contact/hero.png',
  'public/hero/fast-remote/hero.png',
  'public/hero/services/hero.png',
  'public/hero/preuves/hero.png',
  'public/hero/zones/hero.png',
  'public/hero/mentions-legales/hero.png',
  'public/hero/confidentialite/hero.png',
  'public/hero/error/hero.png',
  'public/hero/not-found/hero.png',
];

console.log('⚠️  NOTE: WebP conversion requires external tools (FFmpeg or ImageMagick)');
console.log('📋 Files to convert:\n');

imagesToConvert.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    const sizeKb = (stats.size / 1024).toFixed(2);
    console.log(`   ✓ ${file} (${sizeKb} KB)`);
  } else {
    console.log(`   ✗ ${file} (NOT FOUND)`);
  }
});

console.log('\n📝 RECOMMENDED STEPS:');
console.log('1. Install FFmpeg: https://ffmpeg.org/download.html');
console.log('2. Run conversion using bash/PowerShell script');
console.log('3. Or use online tool: https://convertio.co/png-webp/');
console.log('4. Target: <120 KB per WebP file');

// List alternative approach
console.log('\n💡 QUICK CONVERSION (Windows PowerShell):');
console.log(`
# Install ImageMagick first
choco install imagemagick

# Then run:
Get-ChildItem -Path "public/hero" -Recurse -Filter "*.png" | ForEach-Object {
  $outputPath = $_.FullName -replace "\.png$", ".webp"
  magick "$($_.FullName)" -quality 85 "$outputPath"
  Write-Host "Converted: $($_.Name) -> $(Split-Path $outputPath -Leaf)"
}
`);
