const header = document.querySelector('header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-list');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const toggleHeaderShadow = () => {
  if (!header) return;
  if (window.scrollY > 8) {
    header.style.boxShadow = '0 10px 30px rgba(2, 6, 23, 0.35)';
  } else {
    header.style.boxShadow = 'none';
  }
};

toggleHeaderShadow();
window.addEventListener('scroll', toggleHeaderShadow);
