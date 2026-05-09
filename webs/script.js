/* ===========================
   CAREER DISRUPTERS — script.js
   =========================== */

/* ---------- Navbar scroll state ---------- */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- Mobile menu toggle ---------- */
(function initMobileMenu() {
  const btn  = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ---------- Scroll-triggered animations ---------- */
(function initScrollAnimations() {
  const animatedEls = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
  if (!animatedEls.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  animatedEls.forEach(function (el) {
    observer.observe(el);
  });
})();

/* ---------- Sticky WhatsApp button (shows after 2s) ---------- */
(function initStickyWa() {
  const btn = document.getElementById('stickyWa');
  if (!btn) return;

  setTimeout(function () {
    btn.classList.add('visible');
  }, 2000);
})();

/* ---------- Dynamic copyright year ---------- */
(function initCopyright() {
  const el = document.getElementById('copyright');
  if (!el) return;
  el.textContent = '© ' + new Date().getFullYear() + ' Career Disrupters. All rights reserved. — careerdisrupters.co';
})();

/* ---------- Smooth scroll for anchor links ---------- */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();
