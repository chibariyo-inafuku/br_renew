/**
 * Shared scroll-in effects for card grids (home batches + inner listing pages).
 * Depends: GSAP, ScrollTrigger (registered by caller on home; auto here on inner).
 */
(function (global) {
	'use strict';

	var BAND_INNER_DELAY = 0.42;
	var NEWS_ITEM_STAGGER = 0.18;
	var INNER_CARD_STAGGER = 0.18;
	/** Works light grid (TOP + /works/): row-major from top-left, one card at a time. */
	var WORKS_GRID_STAGGER_EACH = 0.1;
	var WORKS_GRID_DURATION = 0.44;
	/** Larger, more editorial motion (home + inner listings). */
	var CARD_EASE = 'power3.out';
	var CARD_DURATION = 0.82;
	var CARD_Y_IN = 64;
	var CARD_SCALE_IN = 0.93;
	var BAND_CARD_Y_IN = 52;
	var BAND_CARD_SCALE_IN = 0.94;

	/**
	 * @param {typeof window.gsap} gsap
	 * @param {typeof window.ScrollTrigger} ScrollTrigger
	 * @param {Element} root .br-home
	 * @param {function} scheduleRefresh
	 */
	function initHomeScrollCardEffects(gsap, ScrollTrigger, root, scheduleRefresh) {
		var sectionHeads = gsap.utils
			.toArray(root.querySelectorAll('.br-home__section-head'))
			.filter(function (el) {
				return !el.closest('.br-home__section--band-reveal');
			});
		if (sectionHeads.length) {
			gsap.set(sectionHeads, { autoAlpha: 0, y: 40, scale: 0.97 });
			ScrollTrigger.batch(sectionHeads, {
				start: 'top 88%',
				onEnter: function (batch) {
					gsap.to(batch, {
						autoAlpha: 1,
						y: 0,
						scale: 1,
						duration: 0.72,
						stagger: 0.08,
						ease: CARD_EASE,
						overwrite: true,
					});
				},
				once: true,
			});
		}

		var workItems = gsap.utils
			.toArray(
				root.querySelectorAll(
					'.br-home__works-item, .br-home__works-footer, .br-home__project-item, .br-home__project-footer, .br-home__blog-item, .br-home__blog-footer, .br-home__service-footer'
				)
			)
			.filter(function (el) {
				if (el.closest('.br-home__section--band-reveal')) {
					return false;
				}
				if (
					el.classList.contains('br-home__works-item') ||
					el.classList.contains('br-home__works-footer')
				) {
					return false;
				}
				return true;
			});
		if (workItems.length) {
			gsap.set(workItems, { autoAlpha: 0, y: CARD_Y_IN, scale: CARD_SCALE_IN });
			ScrollTrigger.batch(workItems, {
				start: 'top 90%',
				interval: 0.1,
				onEnter: function (batch) {
					gsap.to(batch, {
						autoAlpha: 1,
						y: 0,
						scale: 1,
						duration: CARD_DURATION,
						stagger: 0.09,
						ease: CARD_EASE,
						overwrite: true,
					});
				},
				once: true,
			});
		}

		var railSlides = gsap.utils
			.toArray(root.querySelectorAll('.br-home__swiper .swiper-slide'))
			.filter(function (el) {
				return !el.closest('.br-home__section--band-reveal');
			});
		if (railSlides.length) {
			gsap.set(railSlides, { autoAlpha: 0, y: CARD_Y_IN, scale: CARD_SCALE_IN });
			ScrollTrigger.batch(railSlides, {
				start: 'top 91%',
				interval: 0.08,
				onEnter: function (batch) {
					gsap.to(batch, {
						autoAlpha: 1,
						y: 0,
						scale: 1,
						duration: CARD_DURATION,
						stagger: 0.08,
						ease: CARD_EASE,
						overwrite: true,
					});
				},
				once: true,
			});
		}

		var bandRevealSections = gsap.utils.toArray(
			root.querySelectorAll('.br-home__section--band-reveal')
		);
		bandRevealSections.forEach(function (section) {
			var isWorksBand = section.classList.contains('br-home__section--works-band');
			var bandCards = gsap.utils
				.toArray(
					section.querySelectorAll(
						'.br-home__works-item, .br-home__works-footer, .br-home__project-item, .br-home__project-footer, .br-home__blog-item, .br-home__blog-footer, .br-home__service-footer, .br-home__swiper .swiper-slide'
					)
				)
				.filter(function (el) {
					if (isWorksBand) {
						return (
							!el.classList.contains('br-home__works-item') &&
							!el.classList.contains('br-home__works-footer')
						);
					}
					return true;
				});
			if (bandCards.length) {
				gsap.set(bandCards, { y: BAND_CARD_Y_IN, scale: BAND_CARD_SCALE_IN });
			}
			ScrollTrigger.create({
				trigger: section,
				start: 'top 75%',
				onEnter: function () {
					section.classList.add('is-active');
					if (bandCards.length) {
						gsap.to(bandCards, {
							y: 0,
							scale: 1,
							duration: 0.72,
							stagger: 0.1,
							delay: BAND_INNER_DELAY,
							ease: CARD_EASE,
							overwrite: true,
						});
					}
				},
				onLeaveBack: function () {
					section.classList.remove('is-active');
					if (bandCards.length) {
						gsap.set(bandCards, { y: BAND_CARD_Y_IN, scale: BAND_CARD_SCALE_IN });
					}
				},
			});
		});

		var worksLightSection = root.querySelector('.br-home__section--works-light');
		if (worksLightSection) {
			bindWorksLightGridScrollReveal(
				gsap,
				ScrollTrigger,
				worksLightSection.querySelector('.br-home__works-grid')
			);
		}

		var newsList = root.querySelector('.br-home__news-list');
		var newsItemsOrdered = newsList
			? gsap.utils.toArray(newsList.querySelectorAll('.br-home__news-item'))
			: [];
		var newsCta = root.querySelector('.br-home__news-cta-wrap');
		if (newsList && newsItemsOrdered.length) {
			gsap.set(newsItemsOrdered, {
				autoAlpha: 0,
				y: CARD_Y_IN,
				scale: CARD_SCALE_IN,
			});
			if (newsCta) {
				gsap.set(newsCta, { autoAlpha: 0, y: 48, scale: 0.96 });
			}
			ScrollTrigger.create({
				trigger: newsList,
				start: 'top 88%',
				once: true,
				onEnter: function () {
					var tl = gsap.timeline({ defaults: { ease: CARD_EASE, overwrite: true } });
					tl.to(newsItemsOrdered, {
						autoAlpha: 1,
						y: 0,
						scale: 1,
						duration: CARD_DURATION,
						stagger: NEWS_ITEM_STAGGER,
					});
					if (newsCta) {
						var ctaStart =
							(newsItemsOrdered.length > 0 ? newsItemsOrdered.length - 1 : 0) *
								NEWS_ITEM_STAGGER +
								CARD_DURATION;
						tl.to(
							newsCta,
							{ autoAlpha: 1, y: 0, scale: 1, duration: CARD_DURATION * 0.85 },
							ctaStart
						);
					}
				},
			});
		} else if (newsCta) {
			gsap.set(newsCta, { autoAlpha: 0, y: 48, scale: 0.96 });
			ScrollTrigger.create({
				trigger: newsCta,
				start: 'top 90%',
				once: true,
				onEnter: function () {
					gsap.to(newsCta, {
						autoAlpha: 1,
						y: 0,
						scale: 1,
						duration: CARD_DURATION,
						ease: CARD_EASE,
						overwrite: true,
					});
				},
			});
		}

		if (typeof scheduleRefresh === 'function') {
			scheduleRefresh();
		}
	}

	global.brInitHomeScrollCardEffects = initHomeScrollCardEffects;

	/**
	 * @param {typeof window.gsap} gsap
	 * @param {typeof window.ScrollTrigger} ScrollTrigger
	 * @param {Element|null} grid .br-home__works-grid
	 */
	function bindWorksLightGridScrollReveal(gsap, ScrollTrigger, grid) {
		if (!grid) {
			return;
		}
		var items = gsap.utils.toArray(grid.querySelectorAll('.br-home__works-item'));
		if (!items.length) {
			return;
		}
		/* Start slightly up-left of rest so motion reads as “from top-left”. */
		gsap.set(items, {
			autoAlpha: 0,
			x: -28,
			y: -20,
			scale: 0.94,
		});
		ScrollTrigger.create({
			trigger: grid,
			start: 'top 86%',
			once: true,
			onEnter: function () {
				var ordered = items.slice();
				if (ordered.length > 1) {
					ordered.sort(function (a, b) {
						var ra = a.getBoundingClientRect();
						var rb = b.getBoundingClientRect();
						var dy = ra.top - rb.top;
						/* Same row: tops within a few px → sort by x (left first). */
						if (Math.abs(dy) > 12) {
							return dy;
						}
						return ra.left - rb.left;
					});
				}
				gsap.to(ordered, {
					autoAlpha: 1,
					x: 0,
					y: 0,
					scale: 1,
					duration: WORKS_GRID_DURATION,
					stagger: {
						each: WORKS_GRID_STAGGER_EACH,
						from: 'start',
					},
					ease: CARD_EASE,
					overwrite: true,
				});
			},
		});
	}

	function initInnerListingCards(gsap, ScrollTrigger) {
		var root = global.document.querySelector('#main.br-main');
		if (!root) {
			return;
		}

		var heads = gsap.utils.toArray(
			root.querySelectorAll('.br-page__header, .br-archive-header')
		);
		if (heads.length) {
			gsap.set(heads, { autoAlpha: 0, y: 40, scale: 0.97 });
			ScrollTrigger.batch(heads, {
				start: 'top 88%',
				onEnter: function (batch) {
					gsap.to(batch, {
						autoAlpha: 1,
						y: 0,
						scale: 1,
						duration: 0.72,
						stagger: 0.08,
						ease: CARD_EASE,
						overwrite: true,
					});
				},
				once: true,
			});
		}

		var cardGrid = root.querySelector('.br-card-grid');
		var cardsOrdered = cardGrid
			? gsap.utils.toArray(cardGrid.querySelectorAll('.br-card'))
			: [];
		if (cardGrid && cardsOrdered.length) {
			gsap.set(cardsOrdered, { autoAlpha: 0, y: CARD_Y_IN, scale: CARD_SCALE_IN });
			ScrollTrigger.create({
				trigger: cardGrid,
				start: 'top 88%',
				once: true,
				onEnter: function () {
					gsap.to(cardsOrdered, {
						autoAlpha: 1,
						y: 0,
						scale: 1,
						duration: CARD_DURATION,
						stagger: INNER_CARD_STAGGER,
						ease: CARD_EASE,
						overwrite: true,
					});
				},
			});
		}

		var innerWorksGrid = root.querySelector('.br-home__works-grid');
		if (innerWorksGrid && innerWorksGrid.closest('.br-works')) {
			bindWorksLightGridScrollReveal(gsap, ScrollTrigger, innerWorksGrid);
		}
	}

	function scheduleInnerRefresh() {
		if (typeof global.ScrollTrigger === 'undefined') {
			return;
		}
		var ScrollTrigger = global.ScrollTrigger;
		function refreshLater() {
			ScrollTrigger.refresh();
		}
		global.requestAnimationFrame(function () {
			refreshLater();
			global.setTimeout(refreshLater, 250);
		});
	}

	if (global.document.querySelector('.br-home')) {
		return;
	}

	var main = global.document.querySelector('#main.br-main');
	if (!main) {
		return;
	}
	var hasCards = !!main.querySelector('.br-card');
	var hasListHeader = !!main.querySelector('.br-page__header, .br-archive-header');
	var hasWorksGrid =
		!!main.querySelector('.br-works .br-home__works-grid .br-home__works-item');
	if (!hasCards && !hasListHeader && !hasWorksGrid) {
		return;
	}

	if (typeof global.gsap === 'undefined' || typeof global.ScrollTrigger === 'undefined') {
		global.document.documentElement.classList.remove('br-scroll-cards-js');
		return;
	}

	if (global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		global.document.documentElement.classList.remove('br-scroll-cards-js');
		return;
	}

	var gsap = global.gsap;
	var ScrollTrigger = global.ScrollTrigger;
	gsap.registerPlugin(ScrollTrigger);

	gsap.context(function () {
		initInnerListingCards(gsap, ScrollTrigger);
		scheduleInnerRefresh();
		if (global.document.fonts && global.document.fonts.ready) {
			global.document.fonts.ready.then(function () {
				ScrollTrigger.refresh();
			});
		}
		global.window.addEventListener('load', function () {
			ScrollTrigger.refresh();
		});
	}, main);
})(window);
