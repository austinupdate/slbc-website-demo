// SLBC Demo Site — Minimal JS
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }

  // FAQ accordion (for giving page)
  document.querySelectorAll('.faq-item summary').forEach(function(summary) {
    summary.addEventListener('click', function(e) {
      const parent = this.parentElement;
      // Close other open items
      document.querySelectorAll('.faq-item[open]').forEach(function(item) {
        if (item !== parent) item.removeAttribute('open');
      });
    });
  });
});
