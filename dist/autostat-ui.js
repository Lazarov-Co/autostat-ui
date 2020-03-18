(function() {
  const header = document.querySelector('.Header');
  if (header === null) return;

  const hamburger = document.querySelector('.Header-hamburger');
  if (hamburger === null) return;
  
  let isActive = false;

  function open() {
    header.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    isActive = true;
  }

  function close() {
    header.classList.remove('is-active');
    document.body.style.overflow = 'auto';
    isActive = false;
  }

  function hamburgerHandler() {
    if (!isActive) open();
    else close();
  }

  function closeHamburger() {
    if (window.innerWidth < 801) return;
    if (isActive) close();
  }

  hamburger.addEventListener('click', hamburgerHandler);
  window.addEventListener('resize', closeHamburger);
})();
(function() {
  const sidebars = document.querySelectorAll('.Sidebar');

  function init() {
    sidebars.forEach(sidebar => setActiveItem(sidebar));
  }

  function setActiveItem(sidebar) {
    const listItems = sidebar.querySelectorAll('li');
    const links = sidebar.querySelectorAll('a');

    links.forEach((link, index) => {
      const href = link.getAttribute('href');
      const targetUrl = new URL(href, document.baseURI).href;

      if (targetUrl === document.URL) listItems[index].classList.add('is-active');
    });
  }

  window.addEventListener('DOMContentLoaded', init);
})();