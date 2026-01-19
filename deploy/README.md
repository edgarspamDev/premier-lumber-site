# Premier Lumber - Hostinger Deployment Package

## Folder Structure (Linux/Apache Compatible)

```
deploy/public_html/
├── index.html          ← Homepage (main entry)
├── products.html       ← Products page
├── delivery.html       ← Delivery & Pickup
├── contractors.html    ← Pro Desk
├── thank-you.html      ← Form confirmation
├── privacy.html        ← Privacy Policy
├── terms.html          ← Terms of Use
├── 404.html            ← Error page
├── .htaccess           ← Apache config (CRITICAL)
├── mail.php            ← Contact form handler
├── robots.txt          ← SEO crawler rules
├── sitemap.xml         ← Search engine sitemap
└── logo.jpg            ← Logo image
```

## Upload Instructions (Hostinger)

1. **Log in** to Hostinger → Domains → File Manager
2. **Navigate** to `public_html/`
3. **Delete** old files (backup first if needed)
4. **Upload** ALL files from this `deploy/public_html/` folder
5. **Set permissions:**
   - Files: 644
   - Folders: 755
   - `.htaccess`: 644

## Important Notes

- **Flat structure** = Best for Hostinger Apache
- **No subfolders** for HTML = Clean URLs work via .htaccess
- Update email in `mail.php` before going live
- All paths are relative, works with any domain

## Test After Upload

- https://yourdomain.com (homepage)
- https://yourdomain.com/products
- https://yourdomain.com/delivery
- https://yourdomain.com/contractors
