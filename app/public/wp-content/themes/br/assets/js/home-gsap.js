/**
 * GSAP + ScrollTrigger — front page (.br-home) only.
 */
(function () {
	'use strict';

	var root = document.querySelector('.br-home');
	if (!root) {
		return;
	}

	var heroEarly = root.querySelector('.br-home__hero');
	if (heroEarly && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		var heroVid = heroEarly.querySelector('.br-home__hero-video');
		if (heroVid && typeof heroVid.pause === 'function') {
			heroVid.pause();
			heroVid.removeAttribute('autoplay');
		}
	}

	if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
		document.documentElement.classList.remove('br-home-js');
		return;
	}

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		document.documentElement.classList.remove('br-home-js');
		return;
	}

	var gsap = window.gsap;
	var ScrollTrigger = window.ScrollTrigger;

	gsap.registerPlugin(ScrollTrigger);

	function refreshLater() {
		ScrollTrigger.refresh();
	}

	function scheduleRefresh() {
		requestAnimationFrame(function () {
			refreshLater();
			window.setTimeout(refreshLater, 250);
		});
	}

	gsap.context(function () {
		var hero = root.querySelector('.br-home__hero');
		if (hero) {
			var bgVideo = hero.querySelector('.br-home__hero-video');
			var bgMesh = hero.querySelector('.br-home__hero-mesh');
			var titleLines = hero.querySelectorAll('.br-home__hero-title-line');
			var lead = hero.querySelector('.br-home__hero-lead');
			var cta = hero.querySelector('.br-home__hero-cta');

			if (titleLines.length) {
				gsap.set(titleLines, { autoAlpha: 0, y: 36 });
			}
			if (lead) {
				gsap.set(lead, { autoAlpha: 0, y: 24 });
			}
			if (cta) {
				gsap.set(cta, { autoAlpha: 0, y: 20 });
			}
			if (bgVideo) {
				gsap.set(bgVideo, { scale: 1.08, opacity: 0.88 });
			}
			if (bgMesh) {
				gsap.set(bgMesh, { scale: 1.06, opacity: 0.35 });
			}

			var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
			if (bgVideo) {
				tl.to(bgVideo, { scale: 1, opacity: 1, duration: 1.15 }, 0);
			}
			if (bgMesh) {
				tl.to(bgMesh, { scale: 1, opacity: 0.5, duration: 1 }, 0.08);
			}
			if (titleLines.length) {
				tl.to(
					titleLines,
					{ autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.12 },
					0.22
				);
			}
			if (lead) {
				tl.to(lead, { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.32');
			}
			if (cta) {
				tl.to(cta, { autoAlpha: 1, y: 0, duration: 0.55 }, '-=0.38');
			}

			if (bgVideo) {
				gsap.to(bgVideo, {
					yPercent: 10,
					ease: 'none',
					scrollTrigger: {
						trigger: hero,
						start: 'top top',
						end: 'bottom top',
						scrub: true,
						invalidateOnRefresh: true,
					},
				});
			}
			if (bgMesh) {
				gsap.to(bgMesh, {
					yPercent: 5,
					ease: 'none',
					scrollTrigger: {
						trigger: hero,
						start: 'top top',
						end: 'bottom top',
						scrub: true,
						invalidateOnRefresh: true,
					},
				});
			}
		}

		var concept = root.querySelector('.br-home__concept');
		if (concept) {
			var conceptText = concept.querySelector('.br-home__concept-text');
			var conceptTextBlocks = conceptText ? gsap.utils.toArray(conceptText.children) : [];
			var conceptImages = concept.querySelectorAll('.br-home__concept-img');

			if (conceptTextBlocks.length) {
				gsap.fromTo(
					conceptTextBlocks,
					{ autoAlpha: 0, y: 28 },
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.65,
						stagger: 0.08,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: conceptText,
							start: 'top 86%',
							toggleActions: 'play none none none',
						},
					}
				);
			}

			if (conceptImages.length) {
				var imgTrigger = concept.querySelector('.br-home__concept-images') || concept;
				gsap.fromTo(
					conceptImages,
					{ autoAlpha: 0, y: 40 },
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.7,
						stagger: 0.12,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: imgTrigger,
							start: 'top 88%',
							toggleActions: 'play none none none',
						},
					}
				);
			}
		}

		var sectionHeads = gsap.utils.toArray(root.querySelectorAll('.br-home__section-head'));
		if (sectionHeads.length) {
			gsap.set(sectionHeads, { autoAlpha: 0, y: 28 });
			ScrollTrigger.batch(sectionHeads, {
				start: 'top 88%',
				onEnter: function (batch) {
					gsap.to(batch, {
						autoAlpha: 1,
						y: 0,
						duration: 0.62,
						stagger: 0.06,
						ease: 'power2.out',
						overwrite: true,
					});
				},
				once: true,
			});
		}

		var workItems = gsap.utils.toArray(
			root.querySelectorAll('.br-home__works-item, .br-home__works-footer')
		);
		if (workItems.length) {
			gsap.set(workItems, { autoAlpha: 0, y: 36 });
			ScrollTrigger.batch(workItems, {
				start: 'top 90%',
				interval: 0.1,
				onEnter: function (batch) {
					gsap.to(batch, {
						autoAlpha: 1,
						y: 0,
						duration: 0.55,
						stagger: 0.07,
						ease: 'power2.out',
						overwrite: true,
					});
				},
				once: true,
			});
		}

		var railSlides = gsap.utils.toArray(root.querySelectorAll('.br-home__swiper .swiper-slide'));
		if (railSlides.length) {
			gsap.set(railSlides, { autoAlpha: 0, y: 32 });
			ScrollTrigger.batch(railSlides, {
				start: 'top 91%',
				interval: 0.08,
				onEnter: function (batch) {
					gsap.to(batch, {
						autoAlpha: 1,
						y: 0,
						duration: 0.52,
						stagger: 0.06,
						ease: 'power2.out',
						overwrite: true,
					});
				},
				once: true,
			});
		}

		var newsItems = gsap.utils.toArray(root.querySelectorAll('.br-home__news-item'));
		if (newsItems.length) {
			gsap.set(newsItems, { autoAlpha: 0, y: 30 });
			ScrollTrigger.batch(newsItems, {
				start: 'top 90%',
				interval: 0.1,
				onEnter: function (batch) {
					gsap.to(batch, {
						autoAlpha: 1,
						y: 0,
						duration: 0.55,
						stagger: 0.08,
						ease: 'power2.out',
						overwrite: true,
					});
				},
				once: true,
			});
		}

		var ctaInner = root.querySelector('.br-home__cta-inner');
		if (ctaInner && ctaInner.children.length) {
			var ctaKids = gsap.utils.toArray(ctaInner.children);
			gsap.set(ctaKids, { autoAlpha: 0, y: 30 });
			gsap.to(ctaKids, {
				autoAlpha: 1,
				y: 0,
				duration: 0.58,
				stagger: 0.1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: ctaInner,
					start: 'top 86%',
					toggleActions: 'play none none none',
				},
			});
		}

		scheduleRefresh();
	}, root);
})();
