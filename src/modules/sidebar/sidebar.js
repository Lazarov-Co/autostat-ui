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