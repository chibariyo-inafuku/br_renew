/**
 * Swiper initialization for front-page carousels.
 */
(function () {
	'use strict';

	var gap = window.innerWidth * 1.17 / 100;
	var reducedMotion =
		typeof window.matchMedia === 'function' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	document.querySelectorAll('.br-home__swiper').forEach(function (el) {
		var container = el.closest('.br-container');
		var slideCount = el.querySelectorAll('.swiper-slide').length;
		var isService = el.classList.contains('br-home__swiper--service');

		if (isService) {
			var maxSix = Math.min(6, Math.max(1, slideCount));
			new Swiper(el, {
				slidesPerView: 1,
				spaceBetween: gap,
				loop: false,
				speed: 600,
				watchOverflow: true,
				roundLengths: true,
				autoplay: reducedMotion
					? false
					: {
							delay: 5000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						},
				breakpoints: {
					576: {
						slidesPerView: Math.min(2, maxSix),
					},
					769: {
						slidesPerView: Math.min(3, maxSix),
					},
					992: {
						slidesPerView: Math.min(4, maxSix),
					},
					1200: {
						slidesPerView: maxSix,
					},
				},
				navigation: {
					prevEl: container ? container.querySelector('.swiper-button-prev') : null,
					nextEl: container ? container.querySelector('.swiper-button-next') : null,
				},
			});
			return;
		}

		var useLoop = slideCount >= 3;

		new Swiper(el, {
			slidesPerView: 1.3,
			spaceBetween: gap,
			loop: useLoop,
			loopedSlides: useLoop ? slideCount : undefined,
			speed: 600,
			autoplay: reducedMotion
				? false
				: {
						delay: 5000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					},
			breakpoints: {
				769: {
					slidesPerView: 'auto',
				},
			},
			navigation: {
				prevEl: container ? container.querySelector('.swiper-button-prev') : null,
				nextEl: container ? container.querySelector('.swiper-button-next') : null,
			},
		});
	});
})();
