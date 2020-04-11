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