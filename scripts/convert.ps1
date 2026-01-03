#!/usr/bin/env powershell
param()

# Find ImageMagick
$imageMagickPath = Get-ChildItem "C:\Program Files\ImageMagick*" -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty FullName
$convertExe = Join-Path $imageMagickPath "convert.exe"

if (-not (Test-Path $convertExe)) {
    Write-Host "ImageMagick not found!"
    exit 1
}

Write-Host "ImageMagick found!"
Write-Host "Converting PNG to WebP..."
Write-Host ""

$pngFiles = Get-ChildItem -Path "public/hero" -Recurse -Filter "*.png" -File
$converted = 0

foreach ($file in $pngFiles) {
    $webpPath = $file.FullName -replace "\.png$", ".webp"
    $folderName = Split-Path (Split-Path $file.FullName) -Leaf
    $fileName = $file.Name
    
    Write-Host -NoNewline "Converting [$folderName/$fileName]... "
    
    try {
        & $convertExe "$($file.FullName)" -quality 85 -resize 1920x1080 "$webpPath" 2>&1 | Out-Null
        
        if (Test-Path $webpPath) {
            $webpSize = [math]::Round((Get-Item $webpPath).Length / 1KB, 2)
            Write-Host "OK ($webpSize KB)"
            $converted++
        } else {
            Write-Host "FAILED"
        }
    } catch {
        Write-Host "ERROR: $_"
    }
}

Write-Host ""
Write-Host "Converted: $converted files"
