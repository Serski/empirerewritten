(() => {
  const scriptUrl = new URL(document.currentScript.src);
  const dataUrl = new URL('../data/library.json', scriptUrl);
  const galleryEl = document.querySelector('.gallery');
  const filtersEl = document.querySelector('.filters');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox img');
  const lightboxTitle = document.querySelector('.lightbox h3');
  const lightboxMeta = document.querySelector('.lightbox .meta');
  const lightboxCaption = document.querySelector('.lightbox .caption');

  let items = [];
  let currentFilter = 'All';

  function buildFilters() {
    if (!filtersEl) return;
    const categories = ['All', 'Books', 'Characters', 'Maps', 'Timeline', 'News', 'Misc'];
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.textContent = cat;
      btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
      btn.addEventListener('click', () => {
        currentFilter = cat;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
      });
      filtersEl.appendChild(btn);
    });
  }

  function render() {
    if (!galleryEl) return;
    galleryEl.innerHTML = '';
    const filtered = items.filter(item => currentFilter === 'All' || item.category === currentFilter);
    filtered.forEach(entry => {
      const fig = document.createElement('figure');
      const img = document.createElement('img');
      img.src = entry.src;
      img.alt = entry.title;
      img.loading = 'lazy';
      img.width = entry.width || 600;
      img.height = entry.height || 340;
      img.onerror = () => {
        fig.innerHTML = `<div class="fallback">Image unavailable</div><figcaption>${entry.title}</figcaption>`;
      };
      fig.appendChild(img);
      const caption = document.createElement('figcaption');
      caption.innerHTML = `<strong>${entry.title}</strong><br><span>${entry.caption}</span>`;
      fig.appendChild(caption);
      fig.addEventListener('click', () => openLightbox(entry));
      galleryEl.appendChild(fig);
    });
  }

  function openLightbox(entry) {
    if (!lightbox) return;
    lightboxImg.src = entry.src;
    lightboxImg.alt = entry.title;
    lightboxTitle.textContent = entry.title;
    lightboxMeta.textContent = `${entry.category} • ${entry.tags.join(', ')}`;
    lightboxCaption.textContent = entry.caption + (entry.credit ? ` — Credit: ${entry.credit}` : '');
    const sourceLink = lightbox.querySelector('.source-link');
    if (entry.source) {
      sourceLink.href = entry.source;
      sourceLink.textContent = 'Source';
      sourceLink.style.display = 'inline-flex';
    } else {
      sourceLink.style.display = 'none';
    }
    lightbox.classList.add('active');
  }

  function closeLightbox() {
    lightbox?.classList.remove('active');
  }

  async function load() {
    try {
      const res = await fetch(dataUrl.href);
      items = await res.json();
    } catch (err) {
      console.warn('Library load failed', err);
      items = [];
    }
    buildFilters();
    render();
  }

  document.addEventListener('DOMContentLoaded', load);
  document.querySelector('.lightbox .close-btn')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
})();
