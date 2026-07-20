// --- Nav toggle ---
const header = document.querySelector('header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-list');

if (navToggle && navMenu) {
  const closeMenu = () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };
  const openMenu = () => {
    navMenu.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  navToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) closeMenu();
    else openMenu();
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && navMenu.classList.contains('open')) closeMenu();
  });
}

// --- Header shadow on scroll ---
const toggleHeaderShadow = () => {
  if (!header) return;
  if (window.scrollY > 8) {
    header.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
  } else {
    header.style.boxShadow = 'none';
  }
};
toggleHeaderShadow();
window.addEventListener('scroll', toggleHeaderShadow, { passive: true });

// --- Fade-up on scroll ---
const fadeEls = document.querySelectorAll('.fade-up');
if ('IntersectionObserver' in window && fadeEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  fadeEls.forEach((el) => io.observe(el));
} else {
  fadeEls.forEach((el) => el.classList.add('visible'));
}

// --- Year in footer ---
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
