# PREMIER LUMBER - QUICK REFERENCE CARD
## 1-Page Cheat Sheet for Building & Deploying

---

## 🎯 YOUR GOAL
Build a **high-conversion landing page** for Premier Lumber on Hostinger that drives quote requests and emphasizes reliable shipping/delivery.

---

## 🛠️ TOOLS TO USE (IN THIS ORDER)

| # | Task | Tool | Output |
|---|------|------|--------|
| 1 | Create website | `html_app` artifact | `index.html` |
| 2 | Linux/Mac script | `file_write` | `hostinger-deploy.sh` |
| 3 | Windows script | `file_write` | `hostinger-deploy.ps1` |
| 4 | Apache config | `file_write` | `.htaccess` |
| 5 | Search engine | `file_write` | `robots.txt` |
| 6 | XML sitemap | `file_write` | `sitemap.xml` |
| 7 | PHP form handler | `file_write` | `mail.php` |

**DON'T USE:** code_interpreter, create_text_file for scripts, create_chart

---

## 🎨 DESIGN TOKENS (COPY-PASTE)

```css
/* Colors */
--teal: #2186a8;              /* Trust, headers */
--teal-dark: #1a6b85;         /* Hover states */
--charcoal: #2d2d2d;          /* Primary text */
--success: #10b981;           /* CTA Green (HORMOZI) */
--warning: #f59e0b;           /* Urgency Orange */

/* Buttons */
PRIMARY: Green (#10b981), padding 16px 40px, border-radius 8px
SECONDARY: Teal (#2186a8), padding 14px 32px, border-radius 6px
```

---

## 📄 LANDING PAGE STRUCTURE

```
HEADER (Sticky)
  Logo | Nav Links | Phone: (219) 938-6275

HERO
  H1: "Your Local Source for Quality Lumber"
  Subheading: "Serving Gary & NW Indiana..."
  CTA: Green "Get Free Quote"

TRUST BADGES (4 items)
  👨‍👩‍👧 Family-Owned
  ⚡ Prompt Delivery (same-day/next-day)
  💰 Competitive Pricing
  ✓ Quality Assured

PRODUCTS (6 cards)
  🪵 Lumber
  📦 Plywood
  🎨 Millwork
  🚪 Doors & Windows
  🛠️ Building Materials
  🏡 Decking & Fencing

WHY CHOOSE US (6 benefits with ✓)
  Premium materials, Personalized service,
  Prompt delivery, Competitive pricing,
  Local expertise, Contractors welcome

HOW IT WORKS (4 steps)
  1. Select Materials
  2. Get Quote
  3. Schedule Delivery
  4. Receive Materials

SHIPPING & DELIVERY ⭐ KEY SECTION
  "Same-day or next-day available"
  "Live arrival guarantee" ← TRUST BUILDER
  Orange badge: "ORDER NOW FOR DELIVERY THIS WEEK"

CTA BANNER
  "Ready to Build?"
  White button "Request Quote Now"

CONTACT (ID: #contact)
  3 info cards: Phone | Address | Hours
  Form: Name | Email | Phone | Project | Message

FOOTER
  Company info | Quick links | Contact
```

---

## 🚀 DEPLOYMENT STEPS (15-30 minutes)

### Step 1: Prepare Locally (5 min)
```bash
# Mac/Linux
bash hostinger-deploy.sh

# Windows
powershell -ExecutionPolicy Bypass -File hostinger-deploy.ps1
# Creates: deploy/public_html/ folder
```

### Step 2: Update Email (2 min)
Edit `deploy/public_html/mail.php`:
```php
$to = 'contact@premierlumber.com';  // Your real email
```

Edit `index.html` contact form:
```javascript
fetch('https://formsubmit.co/ajax/contact@premierlumber.com', {
```

### Step 3: Upload to Hostinger (10 min)
1. Log in to Hostinger Dashboard
2. Domains → Select domain → File Manager
3. Navigate to `public_html/`
4. Delete old files (if replacing)
5. Upload all files from `deploy/public_html/`
6. Set permissions:
   - `.htaccess`: 644
   - Folders: 755
   - `mail.php`: 644

### Step 4: Test (3 min)
1. Visit `https://yourdomain.com`
2. Verify homepage loads
3. Test contact form
4. Check email inbox for submission
5. Verify mobile responsive (test on phone)

---

## 🌐 HOSTINGER LINUX DETAILS

**Hostinger uses Linux-based servers with Apache.**

| Feature | Support | Details |
|---------|---------|---------|
| .htaccess | ✅ | Apache routing + gzip compression |
| PHP | ✅ | PHP 8.0+ for mail handler |
| SSL | ✅ | Free HTTPS certificate auto-enabled |
| File Perms | ✅ | Unix chmod (644 files, 755 folders) |

---

## 💡 CONVERSION BOOSTERS

Add any of these (easy wins):
1. **Live Chat** - Jotform widget
2. **Video Testimonials** - Embed YouTube
3. **Urgency Badges** - "Limited Stock: Cedaronly 50 left"
4. **Comparison Table** - Premier vs. Big Box stores
5. **ROI Calculator** - "Save $X with Premier"
6. **Bulk Pricing Tiers** - Small/Medium/Commercial
7. **Project Gallery** - Before/after photos
8. **Local Love Stats** - "20+ years serving Gary"

---

## ✅ PRE-LAUNCH CHECKLIST

- [ ] All files created (index.html, .htaccess, mail.php, etc.)
- [ ] Email updated in mail.php AND index.html
- [ ] Deployment script run locally
- [ ] Files uploaded to Hostinger public_html/
- [ ] Permissions set (644/755)
- [ ] Website loads at https://yourdomain.com
- [ ] Contact form submits successfully
- [ ] Email received in inbox
- [ ] Mobile responsive (tested on phone)
- [ ] No console errors (F12 → Console)
- [ ] Sitemap submitted to Google Search Console

---

## 🎨 COLOR QUICK-REF

```
Teal Blue:        #2186a8  ← Trust, professional
Teal Dark:        #1a6b85  ← Hover states
Charcoal Gray:    #2d2d2d  ← Text
Green (CTA):      #10b981  ← "Get Quote" buttons (HORMOZI)
Orange (Urgency): #f59e0b  ← "Order Now" badges
```

---

## 📞 KEY CONTACTS & LINKS

**Premier Lumber:**
- Phone: (219) 938-6275
- Address: 6717 Atcheson Drive, Gary, IN 46403
- Hours: Mon-Fri 7:00 AM - 3:00 PM

**Services:**
- FormSubmit.co: Free form handler
- Hostinger: Domain + hosting
- Google Search Console: SEO submission

---

## 🎯 SUCCESS METRICS (Track These)

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Monthly Visitors | 200+ | Google Analytics |
| Form Submissions | 5-10/month | Check email inbox |
| Mobile Traffic | 40%+ | Google Analytics |
| Bounce Rate | <50% | Google Analytics |
| Avg Session Time | 2-3 min | Google Analytics |

---

## 🆘 COMMON ISSUES & FIXES

| Problem | Solution |
|---------|----------|
| Site shows blank | Check .htaccess uploaded and visible |
| Contact form not working | Verify mail.php exists + email is correct |
| 404 errors | Enable hidden files in Hostinger File Manager |
| Slow loading | Run gzip compression check + optimize images |
| Mobile layout broken | Check viewport meta tag in <head> |

---

## 📋 FILE REFERENCE

```
YOUR FILES:
├── index.html              ← Main website (from html_app)
├── .htaccess               ← Apache routing (from file_write)
├── robots.txt              ← SEO (from file_write)
├── sitemap.xml             ← XML sitemap (from file_write)
├── mail.php                ← Contact form handler (from file_write)
├── hostinger-deploy.sh     ← Linux/Mac script (from file_write)
└── hostinger-deploy.ps1    ← Windows script (from file_write)

DOCUMENTATION:
├── PREMIER-ENHANCED-PROMPT.md       ← Complete build guide
├── PREMIER-DEPLOYMENT-SUMMARY.md    ← This summary
└── PREMIER-PROMPT.md                ← Original prompt (reference)
```

---

## 🚀 NEXT ACTION

**Choose your operating system and run:**

### Mac/Linux:
```bash
cd ~/premier-lumber
bash hostinger-deploy.sh
```

### Windows:
```powershell
cd C:\Users\YourName\premier-lumber
powershell -ExecutionPolicy Bypass -File hostinger-deploy.ps1
```

Then follow: **Deployment Steps 2-4 above** (upload, test, launch).

---

**YOU'RE READY. NO MAINTENANCE REQUIRED AFTER LAUNCH. THIS IS A BULLETPROOF SYSTEM.**
