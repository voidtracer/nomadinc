(async function() {
  const gallery = document.getElementById('gallery');
  const navButtons = document.querySelectorAll('.gallery-nav button');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = lightbox.querySelector('.lightbox-close');
  const lbPrev = lightbox.querySelector('.lightbox-prev');
  const lbNext = lightbox.querySelector('.lightbox-next');
  let images = [];
  let currentIndex = 0;
  try {
    const res = await fetch('data/gallery.json');
    if (!res.ok) throw new Error('Failed to load gallery');
    images = await res.json();
  } catch (e) {
    console.error(e);
    gallery.innerHTML = '<p style="text-align:center;color:var(--olive);opacity:0.6;grid-column:1/-1;">Gallery data not found. Add <code>data/gallery.json</code>.</p>';
    return;
  }
  render(images);
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.category;
      const filtered = filter === 'all'
        ? images
        : images.filter(img => img.category === filter);
      render(filtered);
    });
  });
  function render(list) {
    gallery.innerHTML = '';
    if (!list.length) {
      gallery.innerHTML = '<p style="text-align:center;color:var(--olive);opacity:0.6;grid-column:1/-1;">No images in this category yet.</p>';
      return;
    }
    const grid = document.createElement('div');
    grid.className = 'gallery-grid';
    grid.setAttribute('role', 'list');
    list.forEach((item, i) => {
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
      grid.appendChild(figure);
    });
    gallery.appendChild(grid);
  }
  // Event delegation: clicks work even after re-rendering the grid
  gallery.addEventListener('click', e => {
    const figure = e.target.closest('.gallery-item');
    if (figure) openLightbox(parseInt(figure.dataset.index, 10));
  });
  gallery.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const figure = e.target.closest('.gallery-item');
      if (figure) {
        e.preventDefault();
        openLightbox(parseInt(figure.dataset.index, 10));
      }
    }
  });
  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbImg.focus();
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
})();
