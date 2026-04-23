/**
 * Lenis smooth scroll — site-wide; GSAP ScrollTrigger sync when GSAP is enqueued (home + card listings).
 */
(function () {
	'use strict';

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	if (typeof window.Lenis === 'undefined') {
		return;
	}

	var lenis = new window.Lenis({
		smoothWheel: true,
	});

	window.brLenis = lenis;

	if (document.documentElement.classList.contains('br-home-loading')) {
		lenis.stop();
	}

	function raf(time) {
		lenis.raf(time);
		window.requestAnimationFrame(raf);
	}

	if (
		typeof window.gsap !== 'undefined' &&
		typeof window.ScrollTrigger !== 'undefined'
	) {
		lenis.on('scroll', window.ScrollTrigger.update);
		window.gsap.ticker.add(function (time) {
			lenis.raf(time * 1000);
		});
		window.gsap.ticker.lagSmoothing(0);
	} else {
		window.requestAnimationFrame(raf);
	}

	window.addEventListener(
		'resize',
		function () {
			if (typeof window.ScrollTrigger !== 'undefined') {
				window.ScrollTrigger.refresh();
			}
		},
		false
	);

	if (typeof window.ScrollTrigger !== 'undefined') {
		window.requestAnimationFrame(function () {
			window.ScrollTrigger.refresh();
		});
	}
})();

/**
 * In-page anchors: smooth scroll via Lenis when available; otherwise native smooth (unless reduced motion).
 * Respects CSS scroll-margin on the target (e.g. fixed header / section offset).
 */
(function () {
	'use strict';

	function targetFromHash(href) {
		if (!href || href.charAt(0) !== '#' || href.length <= 1) {
			return null;
		}
		var id = decodeURIComponent(href.slice(1));
		if (!id) {
			return null;
		}
		return document.getElementById(id);
	}

	function scrollMarginTop(el) {
		var v = parseFloat(window.getComputedStyle(el).scrollMarginTop);
		return isNaN(v) ? 0 : v;
	}

	/*
	 * Site-wide floating SP header offset.
	 *
	 * At SP (≤768px) .br-header--sidebar is position:fixed at the top of the
	 * viewport, so any anchor jump needs the target pushed down by its height
	 * to avoid the header covering the heading. Measuring live also handles
	 * the WP admin bar (which shifts the header down by 46px).
	 *
	 * On desktop the header is a left sidebar (not occupying the top), so we
	 * return 0 here and let each page's own CSS scroll-margin-top win.
	 */
	function floatingHeaderOffset() {
		if (!window.matchMedia('(max-width: 768px)').matches) {
			return 0;
		}
		var header = document.querySelector('.br-header--sidebar');
		if (!header) {
			return 0;
		}
		var rect = header.getBoundingClientRect();
		if (!rect || !rect.height) {
			return 0;
		}
		if (rect.top > 4 || rect.height > window.innerHeight * 0.5) {
			return 0;
		}
		return Math.round(rect.height) + 16;
	}

	function effectiveTopOffset(el) {
		return Math.max(scrollMarginTop(el), floatingHeaderOffset());
	}

	function scrollToTarget(el) {
		if (!el) {
			return;
		}
		var offset = -effectiveTopOffset(el);
		if (window.brLenis) {
			window.brLenis.scrollTo(el, { offset: offset });
			return;
		}
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			el.scrollIntoView({ block: 'start' });
			return;
		}
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	document.addEventListener(
		'click',
		function (e) {
			var a = e.target.closest('a[href^="#"]');
			if (!a) {
				return;
			}
			var href = a.getAttribute('href');
			if (!href || href === '#') {
				return;
			}
			var target = targetFromHash(href);
			if (!target) {
				return;
			}
			e.preventDefault();
			scrollToTarget(target);
			if (window.history && window.history.pushState) {
				window.history.pushState(null, '', href);
			}
		},
		false
	);
})();
