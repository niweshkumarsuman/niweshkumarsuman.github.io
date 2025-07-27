function loadSection(name) {
  fetch(`sections/${name}.html`)
    .then(response => {
      if (!response.ok) throw new Error(`Section load failed: ${name}`);
      return response.text();
    })
    .then(html => {
      document.getElementById('content').innerHTML = html;
      if (typeof window[`${name}Init`] === 'function') {
        window[`${name}Init`]();
      }
    })
    .catch(err => {
      document.getElementById('content').innerHTML =
        `<section><h2>Error</h2><p>Could not load section "<b>${name}</b>". Please check file exists and refresh.<br><br><small>${err.message}</small></p></section>`;
      console.error('Failed to load section:', err);
    });

  // --- Update active class on nav buttons ---
  const navBtns = document.querySelectorAll('nav button.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));
  // Find the button whose onclick includes the selected section name:
  navBtns.forEach(btn => {
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${name}'`)) {
      btn.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadSection('about');
});
