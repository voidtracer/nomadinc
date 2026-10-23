// Gallery data loader + lightbox
(async function() {
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = lightbox.querySelector('.lightbox-close');
  const lbPrev = lightbox.querySelector('.lightbox-prev');
  const lbNext = lightbox.querySelector('.lightbox-next');
  let images = [];
  let currentIndex = 0;
  // Load gallery data
  try {
    const res = await fetch('data/gallery.json');
    if (!res.ok) throw new Error('Failed to load gallery');
    images = await res.json();
    renderGallery();
  } catch (e) {
    console.error(e);
    gallery.innerHTML = '<p style="text-align:center;color:var(--olive);opacity:0.6;grid-column:1/-1;">Gallery data not found. Add <code>data/gallery.json</code>.</p>';
  }
  function renderGallery() {
    if (!images.length) return;
    const grid = document.createElement('div');
    grid.className = 'gallery-grid';
    grid.setAttribute('role', 'list');
    images.forEach((item, i) => {
      const figure = document.createElement('figure');
      figure.className = 'gallery-item';
      figure.setAttribute('role', 'listitem');
      figure.tabIndex = 0;
      figure.dataset.index = i;
      figure.innerHTML = `
        <img src="${item.src}" alt="${item.alt || ''}" loading="lazy" width="${item.width || 1200}" height="${item.height || 1600}">
        <figcaption>
          <h3>${item.title || ''}</h3>
          ${item.category ? `<p>${item.category}</p>` : ''}
        </figcaption>
      `;
      figure.addEventListener('click', () => openLightbox(i));
      figure.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); } });
      grid.appendChild(figure);
    });
    gallery.appendChild(grid);
  }
  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbImg.focus();
    trapFocus(lightbox);
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    lbImg.src = '';
  }
  function updateLightbox() {
    const item = images[currentIndex];
    lbImg.src = item.src;
    lbImg.alt = item.alt || '';
    lbCaption.innerHTML = `<strong>${item.title || ''}</strong>${item.category ? ` — ${item.category}` : ''}${item.description ? `<br><span style="opacity:0.7;font-weight:300;">${item.description}</span>` : ''}`;
  }
  function navigate(dir) {
    currentIndex = (currentIndex + dir + images.length) % images.length;
    updateLightbox();
  }
  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => navigate(-1));
  lbNext.addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
  // Basic focus trap
  function trapFocus(el) {
    const focusable = el.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    el.addEventListener('keydown', function trap(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }, { once: true });
  }
})();
