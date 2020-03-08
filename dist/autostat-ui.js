(function() {
  const header = document.querySelector('.Header');
  const hamburger = document.querySelector('.Header-hamburger');
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

  sidebars.forEach(sidebar => {
    const listItems = Array.from(sidebar.querySelectorAll('li'));
    const links = Array.from(sidebar.querySelectorAll('a'));

    links.forEach((link, index) => {
      const href = link.getAttribute('href');
      const targetUrl = new URL(href, document.baseURI).href;
      if (targetUrl === document.url) listItems[index].classList.add('is-active');
    });
  });
})();