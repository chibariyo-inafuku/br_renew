/**
 * Adds .is-inview to [data-br-svg-heading] and [data-br-home-section-reveal] when scrolled into view (once).
 * No dependencies; safe on fixed pages and home.
 */
(function () {
	'use strict';

	/** Extra delay after intersection before CSS animation starts (ms). */
	var REVEAL_DELAY_MS = 180;

	var headingNodes = document.querySelectorAll('[data-br-svg-heading]');
	var homeSectionNodes = document.querySelectorAll('[data-br-home-section-reveal]');

	if (!headingNodes.length && !homeSectionNodes.length) {
		return;
	}

	function reveal(el) {
		el.classList.add('is-inview');
	}

	if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		headingNodes.forEach(reveal);
		homeSectionNodes.forEach(reveal);
		return;
	}

	if (typeof window.IntersectionObserver === 'undefined') {
		headingNodes.forEach(reveal);
		homeSectionNodes.forEach(reveal);
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
			/* Less bottom shrink than -38% + lower threshold = earlier fire; see also REVEAL_DELAY_MS. */
			rootMargin: '0px 0px -22% 0px',
			threshold: 0.15,
		}
	);

	headingNodes.forEach(function (el) {
		io.observe(el);
	});
	homeSectionNodes.forEach(function (el) {
		io.observe(el);
	});
})();
