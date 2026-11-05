/* site.js — progressive enhancement for guillermodroppelmann.github.io
   Reading progress bar + scroll reveal. Degrades gracefully. */
(function () {
  'use strict';

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- reading progress ---- */
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

  /* ---- scroll reveal ---- */
  if (reduce || !('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    '.content h2, .content p, .content ul, .pub, .talk, .consult-card, .upcoming-box'
  );
  if (!targets.length) return;

  Array.prototype.forEach.call(targets, function (el) {
    el.classList.add('reveal');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
})();
