// Show/hide back to top button on scroll
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Scroll to top when button clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hide loading spinner when page fully loads
window.addEventListener('load', () => {
  const spinner = document.getElementById('loading-spinner');
  spinner.style.display = 'none';
});
