// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar shrink effect on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-shrink');
  } else {
    navbar.classList.remove('navbar-shrink');
  }
});

// Optional: Form submission handler (dummy for demo)
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for contacting NeuroLaunch! We will get back to you soon.');
    contactForm.reset();
  });
}

// Fade-in effect on scroll for elements with .fade-in class
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Highlight active nav-link based on scroll position
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-nav a");

const highlightNav = () => {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionTop = current.offsetTop - 100;
    const sectionHeight = current.offsetHeight;
    const sectionId = current.getAttribute("id");

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
};

window.addEventListener("scroll", highlightNav);

// ==================== DARK MODE TOGGLE ====================
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggle-dark');
  const body = document.body;

  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    applyDarkModeStyles();
  }

  // Toggle dark mode on click
  if (toggle) {
    toggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      if (isDark) {
        applyDarkModeStyles();
      } else {
        resetNavLinkStyles();
      }
    });
  }

  function applyDarkModeStyles() {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(link => {
      link.style.color = '#00ffff';
      link.style.textShadow = '0 0 6px #00ffff, 0 0 12px #00ffff';
    });
  }

  function resetNavLinkStyles() {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(link => {
      link.style.color = '';
      link.style.textShadow = '';
    });
  }
});