/**
 * Swiper initialization for front-page carousels.
 */
(function () {
	'use strict';

	var gap = window.innerWidth * 1.17 / 100;

	document.querySelectorAll('.br-home__swiper').forEach(function (el) {
		var container = el.closest('.br-container');
		new Swiper(el, {
			slidesPerView: 'auto',
			spaceBetween: gap,
			navigation: {
				prevEl: container ? container.querySelector('.swiper-button-prev') : null,
				nextEl: container ? container.querySelector('.swiper-button-next') : null,
			},
		});
	});
})();
