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