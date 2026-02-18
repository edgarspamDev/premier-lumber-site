$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$dist = Join-Path $root "dist"
$zip = Join-Path $root "deploy_fixed.zip"

Write-Host "Premier Lumber - Packaging for Hostinger..." -ForegroundColor Cyan

if (-not (Test-Path $dist)) {
    Write-Error "dist/ folder not found! Run 'npm run build' first."
}

if (Test-Path $zip) { Remove-Item $zip -Force }

Write-Host "Zipping dist/ folder content to deploy_fixed.zip..."
Compress-Archive -Path "$dist\*" -DestinationPath $zip -Force

Write-Host "✅ Deployment package created: $zip" -ForegroundColor Green
Write-Host "Upload this ZIP file to Hostinger public_html and extract it." -ForegroundColor Yellow
