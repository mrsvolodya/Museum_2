'use strict';

// --- Hamburger menu toggle ---
const burger = document.querySelector('.header__burger');
const sideMenu = document.querySelector('.side-menu');
const sideMenuClose = document.querySelector('.side-menu__close');
const sideMenuBackdrop = document.querySelector('.side-menu__backdrop');

function openMenu() {
  sideMenu.classList.add('side-menu--open');
  sideMenu.setAttribute('aria-hidden', 'false');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  sideMenu.classList.remove('side-menu--open');
  sideMenu.setAttribute('aria-hidden', 'true');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (burger) {
  burger.addEventListener('click', openMenu);
}

if (sideMenuClose) {
  sideMenuClose.addEventListener('click', closeMenu);
}

if (sideMenuBackdrop) {
  sideMenuBackdrop.addEventListener('click', closeMenu);
}

// Close menu when a nav link is clicked
document.querySelectorAll('.side-menu__link').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// --- Language switcher toggle ---
const langToggle = document.querySelector('.lang-switcher__toggle');
const langDropdown = document.querySelector('.lang-switcher__dropdown');

function openLangDropdown() {
  langDropdown.classList.add('lang-switcher__dropdown--open');
  langToggle.setAttribute('aria-expanded', 'true');
}

function closeLangDropdown() {
  langDropdown.classList.remove('lang-switcher__dropdown--open');
  langToggle.setAttribute('aria-expanded', 'false');
}

if (langToggle) {
  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langToggle.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      closeLangDropdown();
    } else {
      openLangDropdown();
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  closeLangDropdown();
});

// Language option selection
document.querySelectorAll('.lang-switcher__option').forEach((option) => {
  option.addEventListener('click', (e) => {
    e.stopPropagation();

    // Update toggle label
    if (langToggle) {
      langToggle.firstChild.textContent = option.textContent.trim();
    }

    // Mark selected option as active
    document.querySelectorAll('.lang-switcher__option').forEach((opt) => {
      opt.classList.remove('lang-switcher__option--active');
    });
    option.classList.add('lang-switcher__option--active');

    closeLangDropdown();
  });
});

// Side menu language option selection
document.querySelectorAll('.side-menu__lang-option').forEach((option) => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.side-menu__lang-option').forEach((opt) => {
      opt.classList.remove('side-menu__lang-option--active');
    });
    option.classList.add('side-menu__lang-option--active');
  });
});
