# Premier Lumber Co — Website

Family-owned lumber company in Gary, Indiana. React + Vite + TailwindCSS.

## Quick Start (Any PC)

```bash
# 1. Clone the repo
git clone https://github.com/edgarspamDev/premier-lumber-site.git
cd premier-lumber-site

# 2. Install & run (requires Node 18+)
npm install
npm run dev
```

Browser opens automatically at **http://localhost:3000**

## Scripts

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start dev server (auto-opens browser)       |
| `npm run build`   | Build production bundle to `dist/`          |
| `npm run preview` | Preview production build locally            |
| `npm run setup`   | Install deps + build (one command)          |
| `npm run deploy`  | Build + create Hostinger `deploy_fixed.zip` |
| `npm run lint`    | Run ESLint                                  |

## Deploy to Hostinger

1. Run `npm run deploy` (creates `deploy_fixed.zip`)
2. Upload to Hostinger → File Manager → `public_html/`
3. Extract the zip
4. Edit `mail.php` — set your real email address

## Phone Testing

Dev server is accessible from any device on your WiFi:

1. Run `npm run dev`
2. Find your IP in the terminal output (e.g. `Network: http://192.168.1.5:3000`)
3. Open that URL on your phone

## Tech Stack

- **React 19** + TypeScript
- **Vite 7** (dev server + bundler)
- **TailwindCSS 3** (styling)
- **PHP** (form handler — `mail.php`)

## Security

- HSTS, CSP, Permissions-Policy headers
- 5-layer anti-bot protection on contact form
- Rate limiting (3 submissions / 10 min per IP)
- No database, no admin panel, minimal attack surface
