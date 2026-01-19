/* ==================== MAIN.JS ==================== */
/* Premier Lumber Co - Core behaviors aligned to current markup */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navLinks.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Smooth scroll for on-page anchors
  document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks) {
          navLinks.classList.remove('show');
          navToggle?.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Scroll-to-top button
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // FAQ accordion (matches .faq-item markup)
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length) {
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      if (!questionBtn) return;

      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => {
          i.classList.remove('open');
          const btn = i.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // Phone number formatting
  document.querySelectorAll('input[type=\"tel\"]').forEach(input => {
    input.addEventListener('input', e => {
      let value = e.target.value.replace(/\D/g, '').slice(0, 10);
      if (value.length > 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
      } else if (value.length > 3) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }
      e.target.value = value;
    });
  });

  // Lightweight CTA click tracking (Rule #10)
  const trackCta = (label) => {
    if (typeof window.gtag === 'function' && label) {
      window.gtag('event', 'cta_click', {
        event_category: 'CTA',
        event_label: label
      });
    }
  };
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => trackCta(el.dataset.track));
  });
});
