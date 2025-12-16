// Reveal on scroll
const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });
revealItems.forEach((el) => revealObserver.observe(el));

// Nav active states
const navLinks = document.querySelectorAll('.nav a');
const sections = Array.from(document.querySelectorAll('section'));
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach((section) => sectionObserver.observe(section));

// Modal logic for Google Form
const modal = document.getElementById('form-modal');
const openBtn = document.getElementById('open-form');
const closeBtn = document.getElementById('close-modal');

function openModal() {
  modal.classList.add('is-open');
  modal.querySelector('iframe').focus();
}

function closeModal() {
  modal.classList.remove('is-open');
}

openBtn?.addEventListener('click', openModal);
closeBtn?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Mini form submit -> open modal
const miniForm = document.getElementById('mini-form');
miniForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  openModal();
});
