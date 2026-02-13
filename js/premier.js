/* ============================================================
   PREMIER LUMBER CO — Shared JavaScript
   Nav drawer, accordion, form validation, scroll effects
   ============================================================ */

(function() {
  'use strict';

  // --- Mobile Drawer ---
  var toggle = document.getElementById('nav-toggle');
  var drawer = document.getElementById('drawer');
  var overlay = document.getElementById('drawer-overlay');
  var closeBtn = document.getElementById('drawer-close');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle) toggle.addEventListener('click', function() {
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  });
  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  // Close drawer on link click
  if (drawer) {
    var links = drawer.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', closeDrawer);
    });
  }

  // --- Accordion ---
  var triggers = document.querySelectorAll('.accordion__trigger');
  triggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      var content = this.nextElementSibling;
      var isOpen = this.getAttribute('aria-expanded') === 'true';

      // Close all others
      triggers.forEach(function(t) {
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling.style.maxHeight = null;
      });

      if (!isOpen) {
        this.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // --- Contact Form ---
  var form = document.getElementById('rfq-form');
  var formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Honeypot check
      var hp = form.querySelector('[name="website_url"]');
      if (hp && hp.value) return;

      // Clear errors
      form.querySelectorAll('.form-group').forEach(function(g) {
        g.classList.remove('has-error');
      });

      var valid = true;
      var name = form.querySelector('[name="name"]');
      var phone = form.querySelector('[name="phone"]');
      var message = form.querySelector('[name="message"]');
      var email = form.querySelector('[name="email"]');

      // Name required
      if (!name || !name.value.trim() || name.value.trim().length < 2) {
        name.closest('.form-group').classList.add('has-error');
        valid = false;
      }
      // Phone required
      if (!phone || !phone.value.trim() || phone.value.replace(/\D/g,'').length < 7) {
        phone.closest('.form-group').classList.add('has-error');
        valid = false;
      }
      // Message required
      if (!message || !message.value.trim() || message.value.trim().length < 5) {
        message.closest('.form-group').classList.add('has-error');
        valid = false;
      }
      // Email optional but validate format if provided
      if (email && email.value.trim()) {
        var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email.value.trim())) {
          email.closest('.form-group').classList.add('has-error');
          valid = false;
        }
      }

      if (!valid) return;

      // Submit
      var submitBtn = form.querySelector('button[type="submit"]');
      var btnText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      var data = {
        name: name.value.trim(),
        phone: phone.value.trim(),
        message: message.value.trim()
      };
      if (email && email.value.trim()) data.email = email.value.trim();
      var service = form.querySelector('[name="service"]');
      if (service && service.value) data.service = service.value;

      fetch('mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function(res) { return res.json(); })
      .then(function(result) {
        if (result.success) {
          form.style.display = 'none';
          if (formSuccess) formSuccess.style.display = 'block';
        } else {
          submitBtn.textContent = btnText;
          submitBtn.disabled = false;
          alert(result.error || 'Something went wrong. Please call us at (219) 938-6275.');
        }
      })
      .catch(function() {
        submitBtn.textContent = btnText;
        submitBtn.disabled = false;
        alert('Connection error. Please call us at (219) 938-6275.');
      });
    });
  }

  // --- Scroll Reveal ---
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up').forEach(function(el) {
      observer.observe(el);
    });
  }

  // --- Sticky Header shadow on scroll ---
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,.12)';
      } else {
        header.style.boxShadow = '';
      }
    }, { passive: true });
  }

})();
