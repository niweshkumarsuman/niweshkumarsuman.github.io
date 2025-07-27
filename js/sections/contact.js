function contactInit() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const thanks = document.getElementById('thanksMsg');
    if (thanks) {
      thanks.style.display = 'block';
    }
    form.reset();
  });
}
