// Mobile nav toggle, dropdown accessibility, and site language toggle
document.addEventListener('DOMContentLoaded', function () {
  // NAVIGATION: mobile toggle
  const navToggle = document.querySelectorAll('.nav-toggle');
  navToggle.forEach(btn => {
    btn.addEventListener('click', () => {
      const navList = btn.closest('.site-header').querySelector('.nav-list');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  });

  // Dropdown toggles for touch devices
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(t => {
    t.addEventListener('click', (e) => {
      const menu = t.parentElement.querySelector('.dropdown-menu');
      const expanded = t.getAttribute('aria-expanded') === 'true';
      t.setAttribute('aria-expanded', String(!expanded));
      menu.style.display = expanded ? 'none' : 'block';
      e.stopPropagation();
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      if (window.getComputedStyle(m).display === 'block') m.style.display = 'none';
    });
    document.querySelectorAll('.dropdown-toggle').forEach(t => t.setAttribute('aria-expanded', 'false'));
  });

  // LANGUAGE SWITCH: global handler for elements with data-lang
  try {
    const btnEn = document.getElementById('btn-en');
    const btnId = document.getElementById('btn-id');
    if (btnEn || btnId) {
  const defaultLang = localStorage.getItem('siteLang') || (navigator.language && navigator.language.startsWith('id') ? 'id' : 'en');
      const buttons = { en: btnEn, id: btnId };

      function applyLang(lang) {
        localStorage.setItem('siteLang', lang);
  // set document lang for semantics
  try { document.documentElement.lang = lang; } catch (e) { /* ignore */ }
  // toggle visible elements that carry data-lang
        document.querySelectorAll('[data-lang]').forEach(el => {
          const d = el.getAttribute('data-lang');
          if (d === lang) {
            el.hidden = false;
            el.classList.add('fade-in-up');
            setTimeout(() => el.classList.remove('fade-in-up'), 600);
          } else {
            el.hidden = true;
          }
        });

        // toggle language block elements
        document.querySelectorAll('.lang-block').forEach(block => {
          if (block.getAttribute('data-lang') === lang) {
            block.hidden = false;
            block.classList.add('fade-in-up');
            setTimeout(() => block.classList.remove('fade-in-up'), 600);
          } else {
            block.hidden = true;
          }
        });

        if (buttons.en) buttons.en.setAttribute('aria-pressed', String(lang === 'en'));
        if (buttons.id) buttons.id.setAttribute('aria-pressed', String(lang === 'id'));
      }

      if (buttons.en) buttons.en.addEventListener('click', () => applyLang('en'));
      if (buttons.id) buttons.id.addEventListener('click', () => applyLang('id'));

      // initialize language
      applyLang(defaultLang);

      // respect reduced motion
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        document.querySelectorAll('.animated, .animated-pulse').forEach(el => {
          el.style.animation = 'none';
        });
      }
    }
  } catch (e) {
    console.warn('language switch init failed', e);
  }
});