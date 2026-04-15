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

		var parallax = root.querySelector('.br-home__parallax');
		if (parallax) {
			var parallaxScene = parallax.querySelector('.br-home__parallax-scene');
			var globeWrap = parallax.querySelector('.br-home__parallax-globe-wrap');
			var parallaxTrigger = parallaxScene || parallax;
			if (globeWrap) {
				gsap.set(globeWrap, {
					transformOrigin: '50% 100%',
					scale: 0.55,
					y: '13.75rem',
				});
			}
			var earthTl = gsap.timeline({
				scrollTrigger: {
					trigger: parallaxTrigger,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
					invalidateOnRefresh: true,
				},
			});
			if (globeWrap) {
				earthTl.fromTo(
					globeWrap,
					{ scale: 0.55, y: '13.75rem' },
					{ scale: 2.24, y: '-4rem', duration: 1, ease: 'none' },
					0
				);
			}

			var parallaxQuote = parallax.querySelector('.br-home__parallax-quote');
			if (parallaxQuote) {
				gsap.set(parallaxQuote, { clipPath: 'inset(100% 0 0 0)' });
			}
			var parallaxQuoteTl = gsap.timeline({
				scrollTrigger: {
					trigger: parallax,
					start: 'top bottom',
					end: 'center center',
					scrub: true,
					invalidateOnRefresh: true,
				},
			});
			if (parallaxQuote) {
				parallaxQuoteTl.to(
					parallaxQuote,
					{ clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'none' },
					0
				);
			}
		}

		var palarax = root.querySelector('.br-home__palarax');
		if (palarax) {
			var palaraxMedia = palarax.querySelector('.br-home__palarax-media');
			var palaraxOverlay = palarax.querySelector('.br-home__palarax-overlay');
			var palaraxTagline = palarax.querySelector('.br-home__palarax-tagline');
			/* Shorter scrub than full viewport pass: overlay + text finish by section center */
			if (palaraxMedia) {
				gsap.set(palaraxMedia, {
					backgroundPositionX: '50%',
					backgroundPositionY: '28%',
				});
			}
			if (palaraxOverlay) {
				gsap.set(palaraxOverlay, { opacity: 0 });
			}
			if (palaraxTagline) {
				gsap.set(palaraxTagline, { clipPath: 'inset(100% 0 0 0)' });
			}
			var palaraxTl = gsap.timeline({
				scrollTrigger: {
					trigger: palarax,
					start: 'top bottom',
					end: 'center center',
					scrub: true,
					invalidateOnRefresh: true,
				},
			});
			if (palaraxOverlay) {
				palaraxTl.to(
					palaraxOverlay,
					{ opacity: 0.8, duration: 1, ease: 'none' },
					0
				);
			}
			if (palaraxMedia) {
				palaraxTl.to(
					palaraxMedia,
					{ backgroundPositionY: '72%', duration: 1, ease: 'none' },
					0
				);
			}
			if (palaraxTagline) {
				palaraxTl.to(
					palaraxTagline,
					{ clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'none' },
					0
				);
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

		var sectionHeads = gsap.utils
			.toArray(root.querySelectorAll('.br-home__section-head'))
			.filter(function (el) {
				return !el.closest('.br-home__section--band-reveal');
			});
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

		var workItems = gsap.utils
			.toArray(
				root.querySelectorAll(
					'.br-home__works-item, .br-home__works-footer, .br-home__project-item, .br-home__project-footer, .br-home__blog-item, .br-home__blog-footer, .br-home__service-footer'
				)
			)
			.filter(function (el) {
				return !el.closest('.br-home__section--band-reveal');
			});
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

		var railSlides = gsap.utils
			.toArray(root.querySelectorAll('.br-home__swiper .swiper-slide'))
			.filter(function (el) {
				return !el.closest('.br-home__section--band-reveal');
			});
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

		/* Band background slide + inner reveal (see home.css). ~match sample IO rootMargin -25% */
		var bandRevealSections = gsap.utils.toArray(
			root.querySelectorAll('.br-home__section--band-reveal')
		);
		bandRevealSections.forEach(function (section) {
			ScrollTrigger.create({
				trigger: section,
				start: 'top 75%',
				onEnter: function () {
					section.classList.add('is-active');
				},
				onLeaveBack: function () {
					section.classList.remove('is-active');
				},
			});
		});

		var newsLead = gsap.utils.toArray(root.querySelectorAll('.br-home__news-cta-wrap'));
		if (newsLead.length) {
			gsap.set(newsLead, { autoAlpha: 0, y: 28 });
			ScrollTrigger.batch(newsLead, {
				start: 'top 90%',
				interval: 0.08,
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

		/* CTA: omit heading (SVG + IO) so GSAP does not hide it while svg-heading-inview runs. */
		var ctaInner = root.querySelector('.br-home__cta-inner');
		if (ctaInner) {
			var ctaForm = ctaInner.querySelector('.br-home__cta-col--form');
			var ctaCopy = ctaInner.querySelector('.br-home__cta-col--copy');
			var ctaFade = [];
			if (ctaCopy) {
				ctaFade = ctaFade.concat(
					gsap.utils.toArray(
						ctaCopy.querySelectorAll('.br-home__cta-body, .br-home__cta-urgent')
					)
				);
			}
			if (ctaForm) {
				ctaFade.push(ctaForm);
			}
			if (ctaFade.length) {
				gsap.set(ctaFade, { autoAlpha: 0, y: 30 });
				gsap.to(ctaFade, {
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
		}

		scheduleRefresh();

		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(function () {
				ScrollTrigger.refresh();
			});
		}
		window.addEventListener('load', function () {
			ScrollTrigger.refresh();
		});
	}, root);
})();
