// script.js
export function setupMenuToggle() {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  if (menuToggle && navbar) {
      menuToggle.addEventListener('click', () => {
          navbar.classList.toggle('active');
      });
  }
}

export function setupNavLinks() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const navbar = document.getElementById('navbar');

  function removeActiveClasses() {
      navLinks.forEach(link => {
          link.classList.remove('active');
      });
  }

  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          removeActiveClasses();
          link.classList.add('active');

          // Auto-close navbar on small screens
          if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
              navbar.classList.remove('active');
          }
      });
  });
}