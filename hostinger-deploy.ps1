#!/usr/bin/env pwsh
# Premier Lumber -- Hostinger Deploy Script (Windows)
# Creates deploy/public_html with all site files ready for upload

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$deploy = Join-Path $root "deploy/public_html"

Write-Host "Premier Lumber - Hostinger Deploy Script" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

# Clean and create deploy directory
if (Test-Path $deploy) { Remove-Item -Recurse -Force $deploy }
New-Item -ItemType Directory -Force -Path $deploy | Out-Null

# HTML pages
$pages = @(
    "index.html", "about.html", "pallets.html", "firewood.html",
    "sawdust.html", "custom-lumber.html", "log-pickup.html",
    "gallery.html", "contact.html", "privacy.html", "terms.html"
)
foreach ($p in $pages) {
    Copy-Item (Join-Path $root $p) (Join-Path $deploy $p)
    Write-Host "  Copied: $p"
}

# Supporting files
$support = @(".htaccess", "robots.txt", "sitemap.xml", "mail.php", "logo.jpg", "logo.png", "favicon.ico", "apple-touch-icon.png", "og-image.png")
foreach ($s in $support) {
    $src = Join-Path $root $s
    if (Test-Path $src) {
        Copy-Item $src (Join-Path $deploy $s)
        Write-Host "  Copied: $s"
    }
}

# CSS
New-Item -ItemType Directory -Force -Path (Join-Path $deploy "css") | Out-Null
Copy-Item (Join-Path $root "css/premier.css") (Join-Path $deploy "css/premier.css")
Write-Host "  Copied: css/premier.css"

# JS
New-Item -ItemType Directory -Force -Path (Join-Path $deploy "js") | Out-Null
Copy-Item (Join-Path $root "js/premier.js") (Join-Path $deploy "js/premier.js")
Write-Host "  Copied: js/premier.js"

# Images
if (Test-Path (Join-Path $root "images")) {
    Copy-Item -Recurse (Join-Path $root "images") (Join-Path $deploy "images")
    Write-Host "  Copied: images/ directory"
}

Write-Host ""
Write-Host "Deploy package created at: deploy/public_html/" -ForegroundColor Green
Write-Host ""
Write-Host "NEXT STEPS:" -ForegroundColor Yellow
Write-Host "1. Log in to Hostinger File Manager"
Write-Host "2. Navigate to public_html/"
Write-Host "3. Upload ALL contents of deploy/public_html/ into public_html/"
Write-Host "4. Set permissions: folders 755, files 644"
Write-Host "5. Test the site: check forms, links, mobile, and security headers"
Write-Host ""
Write-Host "VERIFY AFTER UPLOAD:" -ForegroundColor Yellow
Write-Host "- No Lorem Ipsum or placeholders remain"
Write-Host "- Contact form submits and sends email"
Write-Host "- Privacy and Terms links work"
Write-Host "- Mobile menu and Call Now buttons work"
Write-Host "- Security headers present (X-Frame-Options, X-Content-Type-Options)"
