var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-scrollspy'
});

var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]');
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function() {
  // do something...
});
