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