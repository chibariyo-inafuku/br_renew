/**
 * Sub-pages (non-front): fade + float-up when [data-br-subpage-reveal] enters view (once).
 * Uses html.br-subpage-reveal-armed so below-fold blocks stay visible until JS runs (no blank flash).
 *
 * Re-checks after layout stabilizes (fonts, images, rAF, load). IO uses loose thresholds so
 * transform-shifted boxes still intersect. Lenis scroll is hooked (rAF-throttled) so virtual
 * scroll updates do not miss reveals.
 */
(function () {
	'use strict';

	var roots = document.querySelectorAll('#main.br-main:not(.br-home)');
	if (!roots.length) {
		roots = document.querySelectorAll('main.br-main:not(.br-home)');
	}
	if (!roots.length) {
		return;
	}

	var nodes = [];
	for (var ri = 0; ri < roots.length; ri++) {
		var found = roots[ri].querySelectorAll('[data-br-subpage-reveal]');
		for (var ni = 0; ni < found.length; ni++) {
			nodes.push(found[ni]);
		}
	}
	if (!nodes.length) {
		return;
	}

	var io = null;
	var lenisScrollScheduled = false;

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

	function syncRevealWithLayout() {
		nodes.forEach(function (el) {
			if (el.classList.contains('is-inview')) {
				return;
			}
			if (intersectsViewport(el)) {
				reveal(el);
				if (io) {
					io.unobserve(el);
				}
			}
		});
		if (io && typeof io.takeRecords === 'function') {
			io.takeRecords();
		}
	}

	function onLenisScrollThrottled() {
		if (lenisScrollScheduled) {
			return;
		}
		lenisScrollScheduled = true;
		window.requestAnimationFrame(function () {
			lenisScrollScheduled = false;
			syncRevealWithLayout();
		});
	}

	if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		nodes.forEach(reveal);
		arm();
		return;
	}

	function init() {
		syncRevealWithLayout();
		arm();

		if (typeof window.IntersectionObserver === 'undefined') {
			nodes.forEach(reveal);
			return;
		}

		io = new window.IntersectionObserver(
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
				rootMargin: '0px 0px 0px 0px',
				threshold: [0, 0.01, 0.05, 0.1, 0.25],
			}
		);

		nodes.forEach(function (el) {
			if (!el.classList.contains('is-inview')) {
				io.observe(el);
			}
		});

		window.requestAnimationFrame(function () {
			syncRevealWithLayout();
		});
		window.requestAnimationFrame(function () {
			window.requestAnimationFrame(function () {
				syncRevealWithLayout();
			});
		});

		window.addEventListener('load', syncRevealWithLayout, false);

		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(function () {
				syncRevealWithLayout();
			});
		}

		if (window.brLenis && typeof window.brLenis.on === 'function') {
			window.brLenis.on('scroll', onLenisScrollThrottled);
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
