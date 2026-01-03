# Script de conversion PNG vers WebP avec ImageMagick
$ImageMagickPath = "C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe"
$PublicHeroPath = "C:\dev\fast-techservices-web\public\hero"

# Paramètres de conversion
$Quality = 85
$Width = 1920
$Height = 1080

# Trouver tous les PNG
$PngFiles = Get-ChildItem -Path $PublicHeroPath -Recurse -Filter "hero.png" -ErrorAction SilentlyContinue

Write-Host "Trouvé $($PngFiles.Count) fichiers PNG" -ForegroundColor Green

foreach ($File in $PngFiles) {
    $OutputPath = $File.FullName -replace '\.png$', '.webp'
    
    Write-Host "Conversion: $($File.Name) -> $(Split-Path -Leaf $OutputPath)" -ForegroundColor Cyan
    
    # Commande ImageMagick
    & $ImageMagickPath convert "$($File.FullName)" `
        -resize "${Width}x${Height}>" `
        -quality $Quality `
        -define webp:method=6 `
        "$OutputPath"
    
    if ($?) {
        $OrigSize = [math]::Round($File.Length / 1024, 2)
        $NewSize = [math]::Round((Get-Item $OutputPath).Length / 1024, 2)
        $Ratio = [math]::Round((1 - ($NewSize / $OrigSize)) * 100, 1)
        Write-Host "  OK - Original: ${OrigSize}KB to WebP: ${NewSize}KB (-${Ratio}%)" -ForegroundColor Green
    } else {
        Write-Host "  ERROR" -ForegroundColor Red
    }
}

Write-Host "`nConversion terminée!" -ForegroundColor Green
