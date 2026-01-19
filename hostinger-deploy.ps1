# Premier Lumber Company - Windows Hostinger Deployment
# Usage: powershell -ExecutionPolicy Bypass -File hostinger-deploy.ps1

Write-Host "🚀 Premier Lumber - Windows Deployment" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green

# Create deployment structure
Write-Host ""
Write-Host "📁 Creating deployment folders..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path "deploy\public_html" -Force | Out-Null

# Copy files
Write-Host "📋 Copying files..." -ForegroundColor Cyan
Copy-Item "index.html" "deploy\public_html\" -Force
Copy-Item ".htaccess" "deploy\public_html\" -Force
Copy-Item "robots.txt" "deploy\public_html\" -Force
Copy-Item "sitemap.xml" "deploy\public_html\" -Force
Copy-Item "mail.php" "deploy\public_html\" -Force

Write-Host ""
Write-Host "✅ Deployment Ready!" -ForegroundColor Green
Write-Host ""
Write-Host "📂 Files created in: deploy\public_html\" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Green
Write-Host "1. Open Hostinger File Manager"
Write-Host "2. Navigate to public_html\"
Write-Host "3. Upload all files from deploy\public_html\"
Write-Host "4. Set permissions: .htaccess (644), folders (755)"
Write-Host "5. Update email in mail.php to your actual email"
Write-Host "6. Test at https://yourdomain.com"

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
