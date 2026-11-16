/* site.js — progressive enhancement for guillermodroppelmann.github.io
   Reading progress bar only. Content is never hidden by script. */
(function () {
  'use strict';

  var bar = document.createElement('div');
  bar.id = 'progress';
  document.body.appendChild(bar);

  var ticking = false;
  function update() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = pct + '%';
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  update();
})();
