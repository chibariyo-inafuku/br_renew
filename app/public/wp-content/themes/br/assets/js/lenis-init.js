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
