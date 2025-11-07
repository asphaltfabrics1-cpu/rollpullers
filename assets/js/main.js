const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.setAttribute(
      'aria-expanded',
      navMenu.classList.contains('open') ? 'true' : 'false'
    );
  });
}
