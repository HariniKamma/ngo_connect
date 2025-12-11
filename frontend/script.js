// Navbar mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Scroll fade-in animation
const fadeElements = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => appearOnScroll.observe(el));

// Form handling (demo)
document.getElementById('volunteer-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for joining as a volunteer!');
  e.target.reset();
});
