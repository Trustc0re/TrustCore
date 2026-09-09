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

const themeBtn = document.getElementById('theme');

themeBtn.addEventListener('click', function() {
    // 1. Получаем текущее значение атрибута data-theme
    const currentTheme = document.documentElement.getAttribute('data-theme');

    // 2. Проверяем: если сейчас 'dark', меняем на 'light' (светлую)
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        // Иначе (если темы нет или она light) — включаем 'dark'
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});