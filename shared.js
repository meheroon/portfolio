// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navToggle) navToggle.classList.remove('active');
    if (navLinks) navLinks.classList.remove('active');
  });
});

// Active link highlight based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navItems.forEach(item => {
  const href = item.getAttribute('href');
  item.classList.remove('active');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    item.classList.add('active');
  }
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
revealElements.forEach(el => revealObserver.observe(el));

// ===== SKILL BARS ANIMATION =====
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute('data-width');
      entry.target.style.width = width + '%';
    }
  });
}, { threshold: 0.5 });
skillBars.forEach(bar => skillObserver.observe(bar));
