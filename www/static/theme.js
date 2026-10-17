(() => {
  const root = document.documentElement;
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('c0wrk-site-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (_) { /* The theme also works when storage is unavailable. */ }
  root.dataset.theme = theme;
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
    const updateButton = () => {
      const light = root.dataset.theme === 'light';
      button.textContent = light ? 'Dark theme' : 'Light theme';
      button.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
      button.setAttribute('aria-pressed', String(light));
    };
    updateButton();
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('c0wrk-site-theme', root.dataset.theme); } catch (_) {}
      updateButton();
    });
  });
})();
