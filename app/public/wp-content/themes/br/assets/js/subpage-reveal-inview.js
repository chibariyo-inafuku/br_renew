/**
 * Sub-pages (non-front): fade + float-up when [data-br-subpage-reveal] enters view (once).
 * Uses html.br-subpage-reveal-armed so below-fold blocks stay visible until JS runs (no blank flash).
 */
(function () {
	'use strict';

	var root = document.querySelector('main.br-main:not(.br-home)');
	if (!root) {
		return;
	}

	var nodes = root.querySelectorAll('[data-br-subpage-reveal]');
	if (!nodes.length) {
		return;
	}

	function reveal(el) {
		el.classList.add('is-inview');
	}

	function arm() {
		document.documentElement.classList.add('br-subpage-reveal-armed');
	}

	function intersectsViewport(el) {
		var r = el.getBoundingClientRect();
		var vh = window.innerHeight || document.documentElement.clientHeight || 0;
		if (vh <= 0) {
			return true;
		}
		return r.top < vh * 0.92 && r.bottom > 0;
	}

	if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		nodes.forEach(reveal);
		arm();
		return;
	}

	function init() {
		nodes.forEach(function (el) {
			if (intersectsViewport(el)) {
				reveal(el);
			}
		});

		arm();

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
					reveal(t);
				});
			},
			{
				root: null,
				rootMargin: '0px 0px -8% 0px',
				threshold: 0.08,
			}
		);

		nodes.forEach(function (el) {
			if (!el.classList.contains('is-inview')) {
				io.observe(el);
			}
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
