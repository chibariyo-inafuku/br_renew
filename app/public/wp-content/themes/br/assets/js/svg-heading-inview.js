/**
 * Adds .is-inview to [data-br-svg-heading] when scrolled into view (once).
 * No dependencies; safe on fixed pages and home.
 */
(function () {
	'use strict';

	/** Extra delay after intersection before CSS animation starts (ms). */
	var REVEAL_DELAY_MS = 420;

	var nodes = document.querySelectorAll('[data-br-svg-heading]');
	if (!nodes.length) {
		return;
	}

	function reveal(el) {
		el.classList.add('is-inview');
	}

	if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		nodes.forEach(reveal);
		return;
	}

	if (typeof window.IntersectionObserver === 'undefined') {
		nodes.forEach(reveal);
		return;
	}

	var io = new IntersectionObserver(
		function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) {
					return;
				}
				var t = entry.target;
				io.unobserve(t);
				window.setTimeout(function () {
					t.classList.add('is-inview');
				}, REVEAL_DELAY_MS);
			});
		},
		{
			root: null,
			/* Stricter box + higher ratio = later fire; see also REVEAL_DELAY_MS. */
			rootMargin: '0px 0px -38% 0px',
			threshold: 0.28,
		}
	);

	nodes.forEach(function (el) {
		io.observe(el);
	});
})();
