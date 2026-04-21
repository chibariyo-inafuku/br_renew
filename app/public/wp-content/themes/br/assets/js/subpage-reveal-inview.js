/**
 * Sub-pages (non-front): fade + float-up when [data-br-subpage-reveal] enters view (once).
 * Uses html.br-subpage-reveal-armed so below-fold blocks stay visible until JS runs (no blank flash).
 *
 * Optional [data-br-subpage-reveal-stagger]: excluded from the pre-arm sync so first-paint visible
 * items still transition; batched per parent <ul> with horizontal-then-vertical sort and delay.
 *
 * Re-checks after layout stabilizes (fonts, images, rAF, load). IO uses loose thresholds so
 * transform-shifted boxes still intersect. Lenis smooth scroll can delay IO callbacks; stagger
 * nodes also run flushStaggerVisibleInViewport on the same hooks as syncRevealWithLayout.
 */
(function () {
	'use strict';

	var STAGGER_MS = 75;

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

	function isStagger(el) {
		return el.hasAttribute('data-br-subpage-reveal-stagger');
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
		/* Any overlap with the viewport (do not use vh * 0.92 — that hid the bottom ~8%). */
		return r.top < vh && r.bottom > 0;
	}

	function sortStaggerBatch(batch) {
		return batch.slice().sort(function (a, b) {
			var ra = a.getBoundingClientRect();
			var rb = b.getBoundingClientRect();
			if (Math.abs(ra.top - rb.top) > 8) {
				return ra.top - rb.top;
			}
			return ra.left - rb.left;
		});
	}

	function collectStaggerVisibleInUl(ul) {
		var batch = [];
		var items = ul.querySelectorAll('[data-br-subpage-reveal-stagger]');
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if (item.classList.contains('is-inview')) {
				continue;
			}
			if (!intersectsViewport(item)) {
				continue;
			}
			batch.push(item);
		}
		return batch;
	}

	function revealStaggerBatchFromSeed(seedEl) {
		var ul = seedEl.closest('ul');
		if (!ul) {
			window.setTimeout(function () {
				if (!seedEl.classList.contains('is-inview')) {
					reveal(seedEl);
				}
			}, 0);
			return;
		}
		if (ul.getAttribute('data-br-stagger-lock') === '1') {
			return;
		}
		var batch = collectStaggerVisibleInUl(ul);
		if (!batch.length) {
			return;
		}
		ul.setAttribute('data-br-stagger-lock', '1');
		batch = sortStaggerBatch(batch);
		var maxIdx = batch.length - 1;
		if (io) {
			batch.forEach(function (el) {
				io.unobserve(el);
			});
		}
		batch.forEach(function (el, idx) {
			window.setTimeout(function () {
				if (!el.classList.contains('is-inview')) {
					reveal(el);
				}
				if (io) {
					io.unobserve(el);
				}
			}, idx * STAGGER_MS);
		});
		window.setTimeout(function () {
			ul.removeAttribute('data-br-stagger-lock');
		}, maxIdx * STAGGER_MS + 120);
	}

	/**
	 * Lenis / layout: IO alone may not fire for below-fold stagger items; mirror non-stagger sync.
	 */
	function flushStaggerVisibleInViewport() {
		var seenUls = [];
		for (var i = 0; i < nodes.length; i++) {
			var el = nodes[i];
			if (!isStagger(el)) {
				continue;
			}
			if (el.classList.contains('is-inview')) {
				continue;
			}
			if (!intersectsViewport(el)) {
				continue;
			}
			var ul = el.closest('ul');
			if (!ul) {
				revealStaggerBatchFromSeed(el);
				continue;
			}
			if (seenUls.indexOf(ul) >= 0) {
				continue;
			}
			seenUls.push(ul);
			revealStaggerBatchFromSeed(el);
		}
		if (io && typeof io.takeRecords === 'function') {
			io.takeRecords();
		}
	}

	function syncRevealWithLayout() {
		nodes.forEach(function (el) {
			if (el.classList.contains('is-inview')) {
				return;
			}
			if (isStagger(el)) {
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
			flushStaggerVisibleInViewport();
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
		flushStaggerVisibleInViewport();

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
					if (isStagger(t)) {
						revealStaggerBatchFromSeed(t);
					} else {
						io.unobserve(t);
						reveal(t);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px 0px 15% 0px',
				threshold: [0, 0.01, 0.05, 0.1, 0.25],
			}
		);

		nodes.forEach(function (el) {
			if (!el.classList.contains('is-inview')) {
				io.observe(el);
			}
		});

		function syncAllReveals() {
			syncRevealWithLayout();
			flushStaggerVisibleInViewport();
		}

		window.requestAnimationFrame(function () {
			syncAllReveals();
		});
		window.requestAnimationFrame(function () {
			window.requestAnimationFrame(function () {
				syncAllReveals();
			});
		});

		window.addEventListener('load', syncAllReveals, false);

		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(function () {
				syncAllReveals();
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
