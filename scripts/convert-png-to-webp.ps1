#!/usr/bin/env powershell

# Find ImageMagick installation
$imageMagickPath = Get-ChildItem "C:\Program Files\ImageMagick*" -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty FullName

if (-not $imageMagickPath) {
    Write-Host "❌ ImageMagick not found!"
    Write-Host "Please install ImageMagick from: https://imagemagick.org/script/download.php"
    exit 1
}

$convertExe = Join-Path $imageMagickPath "convert.exe"

if (-not (Test-Path $convertExe)) {
    Write-Host "❌ convert.exe not found at: $convertExe"
    exit 1
}

Write-Host "✅ ImageMagick found at: $imageMagickPath"
Write-Host ""
Write-Host "📦 Converting PNG images to WebP..."
Write-Host "Target: 1920x1080, 85% quality, < 120KB per image"
Write-Host ""

# Get all PNG files in public/hero recursively
$pngFiles = Get-ChildItem -Path "public/hero" -Recurse -Filter "*.png" -File

if ($pngFiles.Count -eq 0) {
    Write-Host "⚠️  No PNG files found in public/hero"
    exit 1
}

$converted = 0
$failed = 0

foreach ($file in $pngFiles) {
    $webpPath = $file.FullName -replace "\.png$", ".webp"
    $fileName = Split-Path $file.FullName -Leaf
    $folderName = Split-Path (Split-Path $file.FullName) -Leaf
    
    Write-Host -NoNewline "Converting [$folderName/$fileName]... "
    
    try {
        # Convert with ImageMagick
        & $convertExe "$($file.FullName)" -quality 85 -resize 1920x1080 "$webpPath"
        
        if (Test-Path $webpPath) {
            $webpSize = (Get-Item $webpPath).Length / 1KB
            $webpSizeRounded = [math]::Round($webpSize, 2)
            Write-Host "✅ OK ($webpSizeRounded KB)"
            $converted++
        } else {
            Write-Host "❌ Failed to create WebP"
            $failed++
        }
    } catch {
        Write-Host "❌ Error: $_"
        $failed++
    }
}

Write-Host ""
Write-Host "========================================="
Write-Host "📊 Conversion Summary"
Write-Host "========================================="
Write-Host "✅ Converted: $converted files"
Write-Host "❌ Failed: $failed files"
Write-Host ""

if ($failed -eq 0) {
    Write-Host "🎉 All images converted successfully!"
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "1. Commit the WebP files: git add . && git commit -m 'Add optimized WebP images'"
    Write-Host "2. Push to main: git push origin main"
    Write-Host "3. Test the site!"
} else {
    Write-Host "⚠️  Some conversions failed. Check errors above."
    exit 1
}
