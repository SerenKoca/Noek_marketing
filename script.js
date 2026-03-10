const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = mobileMenu?.querySelectorAll('a') ?? [];
const backToTopButton = document.querySelector('.back-to-top');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Sluit menu' : 'Open menu');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
    });
  });
}

if (backToTopButton) {
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
