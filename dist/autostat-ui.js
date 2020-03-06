(function() {
  const hamburger = document.querySelector('header .Hamburger');
  const header = document.querySelector('header');
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