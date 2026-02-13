#!/bin/bash
# Premier Lumber -- Hostinger Deploy Script (Mac/Linux)
# Creates deploy/public_html with all site files ready for upload

set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
DEPLOY="$ROOT/deploy/public_html"

echo "Premier Lumber - Hostinger Deploy Script"
echo "========================================="

# Clean and create deploy directory
rm -rf "$DEPLOY"
mkdir -p "$DEPLOY"

# HTML pages
for page in index.html about.html pallets.html firewood.html sawdust.html custom-lumber.html log-pickup.html gallery.html contact.html privacy.html terms.html; do
  cp "$ROOT/$page" "$DEPLOY/$page"
  echo "  Copied: $page"
done

# Supporting files
for file in .htaccess robots.txt sitemap.xml mail.php logo.jpg logo.png favicon.ico apple-touch-icon.png og-image.png; do
  if [ -f "$ROOT/$file" ]; then
    cp "$ROOT/$file" "$DEPLOY/$file"
    echo "  Copied: $file"
  fi
done

# CSS
mkdir -p "$DEPLOY/css"
cp "$ROOT/css/premier.css" "$DEPLOY/css/premier.css"
echo "  Copied: css/premier.css"

# JS
mkdir -p "$DEPLOY/js"
cp "$ROOT/js/premier.js" "$DEPLOY/js/premier.js"
echo "  Copied: js/premier.js"

# Images
if [ -d "$ROOT/images" ]; then
  cp -r "$ROOT/images" "$DEPLOY/images"
  echo "  Copied: images/ directory"
fi

echo ""
echo "Deploy package created at: deploy/public_html/"
echo ""
echo "NEXT STEPS:"
echo "1. Log in to Hostinger File Manager"
echo "2. Navigate to public_html/"
echo "3. Upload ALL contents of deploy/public_html/ into public_html/"
echo "4. Set permissions: folders 755, files 644"
echo "5. Test the site: check forms, links, mobile, and security headers"
echo ""
echo "VERIFY AFTER UPLOAD:"
echo "- No Lorem Ipsum or placeholders remain"
echo "- Contact form submits and sends email"
echo "- Privacy and Terms links work"
echo "- Mobile menu and Call Now buttons work"
echo "- Security headers present (X-Frame-Options, X-Content-Type-Options)"
