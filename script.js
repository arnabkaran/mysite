document.addEventListener('DOMContentLoaded', () => {
  /* Footer year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Mobile nav toggle */
  const menuButton = document.getElementById('menuButton');
  const navMenu = document.getElementById('navMenu');
  if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  /* Share links toggle */
  const shareTrigger = document.querySelector('.share-trigger');
  const shareLinks = document.querySelector('.share-links');
  if (shareTrigger && shareLinks) {
    shareTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      shareLinks.classList.toggle('open');
    });
    document.addEventListener('click', () => shareLinks.classList.remove('open'));
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const emailLink = shareLinks.querySelector('.share-link.email');
    const whatsappLink = shareLinks.querySelector('.share-link.whatsapp');
    const fbLink = shareLinks.querySelector('.share-link.facebook');
    const twitterLink = shareLinks.querySelector('.share-link.twitter');
    const linkedinLink = shareLinks.querySelector('.share-link.linkedin');
    if (emailLink) emailLink.href = `mailto:?subject=${pageTitle}&body=${pageUrl}`;
    if (whatsappLink) whatsappLink.href = `https://wa.me/?text=${pageTitle}%20${pageUrl}`;
    if (fbLink) fbLink.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    if (twitterLink) twitterLink.href = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
    if (linkedinLink) linkedinLink.href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
  }

  /* Gallery slider - Dynamically load photos */
  const track = document.getElementById('galleryTrack');
  const prevBtn = document.getElementById('galleryPrevious');
  const nextBtn = document.getElementById('galleryNext');
  const counter = document.getElementById('galleryCounter');
  
  if (track && prevBtn && nextBtn) {
    // Array of photo filenames
    const photos = [
      'photos/1.jpeg',
      'photos/2.jpeg',
      'photos/3.jpeg',
      'photos/4.jpeg',
      'photos/5.jpeg',
      'photos/6.jpeg',
      'photos/7.jpeg',
      'photos/8.jpeg',
      'photos/9.jpeg',
      'photos/10.jpeg',
      'photos/11.jpeg',
      'photos/12.jpeg',
      'photos/13.jpeg',
      'photos/14.jpeg',
      'photos/15.jpeg',
      'photos/16.jpeg',
      'photos/17.jpeg',
      'photos/18.jpeg',
      'photos/19.jpeg',
      'photos/20.jpeg',
      'photos/21.jpeg',
      'photos/22.jpeg',
      'photos/23.jpeg',
      'photos/24.jpeg',
      'photos/25.jpeg',
      'photos/26.jpeg',
      'photos/27.jpeg',
      'photos/28.jpeg'
    ];

    // Create gallery items
    photos.forEach((photoPath, index) => {
      const item = document.createElement('article');
      item.className = 'gallery-item';
      item.innerHTML = `
        <img src="${photoPath}" alt="Academic moment ${index + 1}" style="width: 100%; height: auto; border-radius: 12px;">
      `;
      track.appendChild(item);
    });

    const slides = track.children.length;
    let index = 0;
    
    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      if (counter) counter.textContent = `${index + 1} / ${slides}`;
    };
    
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + slides) % slides;
      update();
    });
    
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % slides;
      update();
    });
    
    update();
  }
});

/* Background is now the supplied artwork (set via CSS on <body>), so the
   #wallpaperCanvas element is left unused/hidden — no canvas drawing needed. */
