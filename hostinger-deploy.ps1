# Premier Lumber Company - Windows Hostinger Deployment
# Usage: powershell -ExecutionPolicy Bypass -File hostinger-deploy.ps1

Write-Host "Premier Lumber - Windows Deployment" -ForegroundColor Green

# Create deployment structure
Write-Host "Creating deployment folders..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path "deploy\public_html" -Force | Out-Null

# Copy all HTML files
Write-Host "Copying files..." -ForegroundColor Cyan
Copy-Item "index.html" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "products.html" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "delivery.html" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "contractors.html" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "thank-you.html" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "privacy.html" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "terms.html" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "404.html" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item ".htaccess" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "robots.txt" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "sitemap.xml" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "mail.php" "deploy\public_html\" -Force -ErrorAction SilentlyContinue
Copy-Item "logo.jpg" "deploy\public_html\" -Force -ErrorAction SilentlyContinue

# Copy optional assets if they exist
if (Test-Path "logo.png") { Copy-Item "logo.png" "deploy\public_html\" -Force }
if (Test-Path "favicon.ico") { Copy-Item "favicon.ico" "deploy\public_html\" -Force }
if (Test-Path "og-image.png") { Copy-Item "og-image.png" "deploy\public_html\" -Force }

Write-Host "Deployment Ready!" -ForegroundColor Green
Write-Host "Files created in: deploy\public_html\" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next Steps:"
Write-Host "1. Open Hostinger File Manager"
Write-Host "2. Navigate to public_html/"
Write-Host "3. Upload all files from deploy\public_html\"
Write-Host "4. Set permissions: .htaccess (644), folders (755)"
Write-Host "5. Update email in mail.php"
Write-Host "6. Test at https://yourdomain.com"
