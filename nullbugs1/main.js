document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header on Scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Active Link State based on current pathname
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    const itemHref = item.getAttribute('href');
    // Simple check if path ends with href or if it's home page
    if (currentPath.endsWith(itemHref) || (itemHref === 'index.html' && (currentPath.endsWith('/') || currentPath === ''))) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Scroll Entrance Animations using Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-in');
  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused'; // pause until visible
    observer.observe(el);
  });
});
