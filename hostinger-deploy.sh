#!/bin/bash
# Premier Lumber Company - Mac/Linux Hostinger Deployment
# Usage: bash hostinger-deploy.sh

echo ""
echo "========================================"
echo " Premier Lumber - Linux/Mac Deployment"
echo "========================================"
echo ""

# Step 1: Create deployment structure
echo "📁 Creating deployment folders..."
mkdir -p deploy/public_html

# Step 2: Copy files
echo "📋 Copying files..."
cp index.html deploy/public_html/
cp .htaccess deploy/public_html/
cp robots.txt deploy/public_html/
cp sitemap.xml deploy/public_html/
cp mail.php deploy/public_html/

# Step 3: Set permissions
echo "🔒 Setting file permissions..."
chmod 644 deploy/public_html/.htaccess
chmod 644 deploy/public_html/robots.txt
chmod 644 deploy/public_html/sitemap.xml
chmod 644 deploy/public_html/mail.php
chmod 644 deploy/public_html/index.html
chmod 755 deploy/public_html
for file in "${optional[@]}"; do
    if [ -f "$file" ]; then
        cp "$file" deploy/public_html/
        echo "  ✓ $file"
    fi
done

# Step 3: Set permissions
echo ""
echo "🔒 Setting file permissions..."
chmod 644 deploy/public_html/.htaccess 2>/dev/null
chmod 644 deploy/public_html/robots.txt 2>/dev/null
chmod 644 deploy/public_html/sitemap.xml 2>/dev/null
chmod 644 deploy/public_html/mail.php 2>/dev/null
chmod 755 deploy/public_html 2>/dev/null

echo ""
echo "✅ Deployment Ready!"
echo ""
echo "📂 Files created in: deploy/public_html/"
echo ""
echo "Next Steps:"
echo "  1. Open Hostinger File Manager"
echo "  2. Navigate to public_html/"
echo "  3. Upload all files from deploy/public_html/"
echo "  4. Set permissions: .htaccess (644), folders (755)"
echo "  5. Update email in mail.php to your actual email"
echo "  6. Test at https://yourdomain.com"
echo ""
