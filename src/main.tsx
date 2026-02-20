import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ─── Loader Reveal Logic ─────────────────────────────────────────────────────
// #root starts opacity:0 (set in index.html). We reveal it here once content is ready.
// The loader overlay stays on top until we call revealSite().

const revealSite = () => {
  const root = document.getElementById('root');
  const loader = document.getElementById('initial-loader');
  // 1. Reveal app content
  if (root) {
    root.style.transition = 'opacity 0.3s ease-out';
    root.style.opacity = '1';
  }
  // 2. Fade out loader overlay
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 500);
  }
};

const lang = navigator.language || '';
const urlParams = new URLSearchParams(window.location.search);
const isSpanish = lang.startsWith('es') || urlParams.get('lang') === 'es';

if (isSpanish) {
  // Spanish: keep everything hidden until Google Translate applies translation
  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    revealSite();
  };

  // Safety fallback — never wait more than 3s
  setTimeout(reveal, 3000);

  // Fire as soon as Google Translate adds its class to <html>
  const observer = new MutationObserver((_m, obs) => {
    if (
      document.documentElement.classList.contains('translated-ltr') ||
      document.documentElement.classList.contains('translated-rtl')
    ) {
      obs.disconnect();
      reveal();
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
} else {
  // English: wait 150ms so React has time to fully render & paint before revealing
  // rAF alone is not enough — StrictMode double-renders and first paint can be delayed
  setTimeout(revealSite, 150);
}

