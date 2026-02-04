(() => {
  const scriptUrl = new URL(document.currentScript.src);
  const configUrl = new URL('../data/config.json', scriptUrl);

  const state = { config: null };

  function resolveLink(key) {
    if (!state.config) return '';
    const parts = key.split('.');
    let ref = state.config.externalLinks || {};
    for (const part of parts) {
      if (ref && Object.prototype.hasOwnProperty.call(ref, part)) {
        ref = ref[part];
      } else {
        return '';
      }
    }
    return typeof ref === 'string' ? ref : '';
  }

  function applyLinks() {
    if (!state.config) return;
    document.querySelectorAll('[data-link]').forEach(el => {
      const key = el.getAttribute('data-link');
      const href = resolveLink(key);
      if (href) {
        const finalHref = key === 'contactEmail' && !href.startsWith('mailto:') ? `mailto:${href}` : href;
        el.setAttribute('href', finalHref);
        el.removeAttribute('aria-disabled');
        el.classList.remove('disabled');
      } else {
        el.setAttribute('aria-disabled', 'true');
        el.classList.add('disabled');
        el.addEventListener('click', e => e.preventDefault());
      }
    });
  }

  function fillCopy() {
    if (!state.config) return;
    document.querySelectorAll('[data-fill="aheadCount"]').forEach(node => {
      node.textContent = state.config.aheadCount ?? 'X';
    });
  }

  function wireNewsletter() {
    const form = document.querySelector('#newsletter-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]')?.value || '';
      if (email.trim().length === 0) {
        alert('Please enter an email to join the newsletter.');
        return;
      }
      alert('Thanks! You are on the list. (This demo form does not send yet.)');
      form.reset();
    });
  }

  function highlightNav() {
    const path = window.location.pathname;
    const navMap = [
      { key: 'books', selector: 'a[href$="books/index.html"], a[href="books/"]' },
      { key: 'world', selector: 'a[href$="world/index.html"], a[href="world/"]' },
      { key: 'news', selector: 'a[href$="news/index.html"], a[href="news/"]' },
      { key: 'about', selector: 'a[href$="about/index.html"], a[href="about/"]' },
      { key: 'patreon', selector: 'a[href$="patreon/index.html"], a[href="patreon/"]' },
    ];
    navMap.forEach(({ key, selector }) => {
      if (path.includes(`/${key}`)) {
        document.querySelectorAll(selector).forEach(el => el.classList.add('active'));
      }
    });
    if (path.endsWith('/') || path.endsWith('index.html')) {
      // Root index highlight
      if (path === '/' || !path.split('/').filter(Boolean).length) {
        document.querySelectorAll('a[href="index.html"], a[href="./"]')
          .forEach(el => el.classList.add('active'));
      }
    }
  }

  function wireMenuToggle() {
    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');
    if (menuButton && nav) {
      menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
      });
    }
  }

  async function init() {
    try {
      const res = await fetch(configUrl.href);
      state.config = await res.json();
    } catch (err) {
      console.warn('Config load failed', err);
      state.config = { externalLinks: {}, aheadCount: 'X' };
    }
    applyLinks();
    fillCopy();
    wireNewsletter();
    wireMenuToggle();
    highlightNav();
  }

  document.addEventListener('DOMContentLoaded', init);
})();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service worker registered:', reg))
      .catch(err => console.error('Service worker registration failed:', err));
  });
}
