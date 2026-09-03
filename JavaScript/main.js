const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav_list');
const navLinks = document.querySelectorAll('.nav_list a');

burger.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('active');

  burger.classList.toggle('active', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
  });
});