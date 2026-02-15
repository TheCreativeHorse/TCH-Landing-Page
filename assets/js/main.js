// The Creative Horse — Main JS
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Testimonials simple carousel
  const track = document.querySelector('.testimonial-track');
  const dots = document.querySelectorAll('.dot');
  if (track && dots.length) {
    let index = 0;
    const slide = () => {
      const card = track.querySelector('.testimonial');
      const width = card ? card.getBoundingClientRect().width + 24 : 0;
      track.style.transform = `translateX(${-index * width}px)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    };
    const advance = () => {
      index = (index + 1) % dots.length;
      slide();
    };
    dots.forEach((dot, i) => dot.addEventListener('click', () => { index = i; slide(); }));
    slide();
    setInterval(advance, 5000);
  }

  // Contact form validation
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[name="email"]');
      const name = form.querySelector('input[name="name"]');
      const message = form.querySelector('textarea[name="message"]');
      let valid = true;
      const showError = (el, msg) => {
        let err = el.parentElement.querySelector('.error');
        if (!err) { err = document.createElement('div'); err.className = 'error'; el.parentElement.appendChild(err); }
        err.textContent = msg;
      };
      const clearError = (el) => {
        const err = el.parentElement.querySelector('.error');
        if (err) err.textContent = '';
      };
      if (!name.value.trim()) { valid = false; showError(name, 'Please enter your name'); } else { clearError(name); }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { valid = false; showError(email, 'Please enter a valid email'); } else { clearError(email); }
      if (!message.value.trim()) { valid = false; showError(message, 'Please enter a message'); } else { clearError(message); }
      const success = form.querySelector('.success');
      if (valid) {
        if (success) success.textContent = "Thanks! We'll be in touch within 24h.";
        form.reset();
      }
    });
  }
});


