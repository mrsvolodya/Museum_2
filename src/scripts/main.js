'use strict';

// ─── Burger / Side-menu ───────────────────────────────────────────────────────

const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-menu');
const sideMenuClose = document.querySelector('.side-menu__close');
const sideMenuBackdrop = document.querySelector('.side-menu__backdrop');

function openSideMenu() {
  sideMenu.classList.add('side-menu--open');
  sideMenu.setAttribute('aria-hidden', 'false');
  burger.classList.add('burger--active');
  burger.setAttribute('aria-expanded', 'true');
  burger.setAttribute('aria-label', 'Close menu');
  document.body.style.overflow = 'hidden';
}

function closeSideMenu() {
  sideMenu.classList.remove('side-menu--open');
  sideMenu.setAttribute('aria-hidden', 'true');
  burger.classList.remove('burger--active');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Open menu');
  document.body.style.overflow = '';
}

if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = sideMenu.classList.contains('side-menu--open');

    if (isOpen) {
      closeSideMenu();
    } else {
      openSideMenu();
    }
  });
}

if (sideMenuClose) {
  sideMenuClose.addEventListener('click', closeSideMenu);
}

if (sideMenuBackdrop) {
  sideMenuBackdrop.addEventListener('click', closeSideMenu);
}

// Close side-menu with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sideMenu.classList.contains('side-menu--open')) {
    closeSideMenu();
    burger.focus();
  }
});

// Close side-menu when a nav link is clicked
document.querySelectorAll('.side-menu__link').forEach((link) => {
  link.addEventListener('click', closeSideMenu);
});

// ─── Language Switcher ────────────────────────────────────────────────────────

document.querySelectorAll('.lang-switcher').forEach((switcher) => {
  const toggle = switcher.querySelector('.lang-switcher__toggle');
  const options = switcher.querySelectorAll('.lang-switcher__option');

  function openDropdown() {
    switcher.classList.add('lang-switcher--open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    switcher.classList.remove('lang-switcher--open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = switcher.classList.contains('lang-switcher--open');

      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });
  }

  options.forEach((option) => {
    option.addEventListener('click', () => {
      // Update active state
      options.forEach((o) => {
        o.classList.remove('lang-switcher__option--active');
        o.setAttribute('aria-selected', 'false');
      });
      option.classList.add('lang-switcher__option--active');
      option.setAttribute('aria-selected', 'true');

      // Update toggle label
      if (toggle) {
        toggle.textContent = option.textContent.trim();
      }

      closeDropdown();
    });
  });
});

// Close all language dropdowns when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.lang-switcher--open').forEach((switcher) => {
    switcher.classList.remove('lang-switcher--open');
    const toggle = switcher.querySelector('.lang-switcher__toggle');

    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
