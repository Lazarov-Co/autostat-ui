(function() {
  const dialogs = document.querySelectorAll('.js-dialog');
  const openDialogTriggers = document.querySelectorAll('.js-open-dialog');
  const closeDialogTriggers = document.querySelectorAll('.js-close-dialog');

  function init() {
    dialogs.forEach(dialog => {
      const overlay = document.createElement('div');
      overlay.classList.add('DialogOverlay', 'js-dialog-overlay');
      overlay.addEventListener('click', () => close(dialog));
      document.body.prepend(overlay);
      
      dialog.autostat_ui = {
        overlay,
        close: function() {
          close(dialog);
        },
        open: function() {
          open(dialog);
        }
      }
    });

    openDialogTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => openDialogTriggerHandler(trigger));
    });

    closeDialogTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => closeDialogTriggerHandler(trigger));
    });
  }

  function open(dialog) {
    document.body.style.overflow = 'hidden';
    dialog.autostat_ui.overlay.style.display = 'block';
    dialog.style.display = 'block';
  }

  function close(dialog) {
    document.body.style.overflow = 'auto';
    dialog.autostat_ui.overlay.style.display = 'none';
    dialog.style.display = 'none';
  }

  function openDialogTriggerHandler(trigger) {
    const id = trigger.getAttribute('data-dialog-id');
    const dialog = document.querySelector(`#${id}`);
    open(dialog);
  }

  function closeDialogTriggerHandler(trigger) {
    const id = trigger.getAttribute('data-dialog-id');
    const dialog = document.querySelector(`#${id}`);
    close(dialog);
  }

  window.addEventListener('load', init);
})();
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
  function setHeatScales() {
    const heatScales = document.querySelectorAll('.HeatScale');

    heatScales.forEach(heatScale => {
      const value = parseFloat(heatScale.getAttribute('data-value'));
      const percentage = (value * 100) + '%';
      const indicator = heatScale.querySelector('.HeatScale-scale-indicator');
      const realValue = heatScale.querySelector('.HeatScale-realValue');

      indicator.style.left = percentage;
      realValue.style.left = percentage;
      if (value > 0.25 && value < 0.75) indicator.classList.add('HeatScale-scale-indicator--yellow'); 
      if (value >= 0.75) indicator.classList.add('HeatScale-scale-indicator--green');
      realValue.classList.add('is-active');
    });
  }

  window.addEventListener('load', setHeatScales);
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