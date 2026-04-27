/**
 * GSAP + ScrollTrigger — front page (.br-home): hero, parallax, concept, CTA.
 * Card grid scroll-in lives in scroll-cards-gsap.js (shared with inner listings).
 */
(function () {
	'use strict';

	var root = document.querySelector('.br-home');
	if (!root) {
		return;
	}

	/* Under reduced motion the bg video should not play. Autoplay is no
	   longer declared on the <video>, so a user with reduced-motion simply
	   never sees the video start (the poster image is shown instead). This
	   early pause() is kept as a safety net for browsers that might preroll. */
	var heroEarly = root.querySelector('.br-home__hero');
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		if (heroEarly) {
			var heroVid = heroEarly.querySelector('.br-home__hero-video');
			if (heroVid && typeof heroVid.pause === 'function') {
				heroVid.pause();
			}
		}
		var movieVidEarly = root.querySelector('.br-home__movie-video');
		if (movieVidEarly && typeof movieVidEarly.pause === 'function') {
			movieVidEarly.pause();
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
		var homeMovieVideo = root.querySelector('.br-home__movie-video');
		function playHomeMovieVideo() {
			if (!homeMovieVideo || typeof homeMovieVideo.play !== 'function') {
				return;
			}
			var pm = homeMovieVideo.play();
			if (pm && typeof pm.catch === 'function') {
				pm.catch(function () {});
			}
		}

		var hero = root.querySelector('.br-home__hero');
		if (hero) {
			var heroVideo = hero.querySelector('.br-home__hero-video');
			var heroVideoScale = hero.querySelector('.br-home__hero-video-scale');
			var heroMedia = hero.querySelector('.br-home__hero-media');
			var heroColMedia = hero.querySelector('.br-home__hero-col--media');
			var heroTitleH1 = hero.querySelector('.br-home__hero-title');
			var lead = hero.querySelector('.br-home__hero-lead');
			var cta = hero.querySelector('.br-home__hero-cta');
			var playBtn = hero.querySelector('[data-br-hero-play]');

			if (heroTitleH1) {
				gsap.set(heroTitleH1, { autoAlpha: 0, y: 36 });
			}
			if (lead) {
				gsap.set(lead, { autoAlpha: 0, y: 22 });
			}
			if (cta) {
				gsap.set(cta, { autoAlpha: 0, y: 18 });
			}
			if (heroColMedia) {
				gsap.set(heroColMedia, { autoAlpha: 0, y: 48, scale: 0.97 });
			}
			var heroScaleTarget = heroVideoScale || heroVideo;
			if (heroScaleTarget) {
				gsap.set(heroScaleTarget, { scale: 1.04 });
			}

			var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
			if (heroTitleH1) {
				heroTitleH1.setAttribute('aria-busy', 'true');
				tl.eventCallback('onComplete', function () {
					heroTitleH1.removeAttribute('aria-busy');
				});
			}
			if (heroColMedia) {
				tl.to(heroColMedia, { autoAlpha: 1, y: 0, scale: 1, duration: 0.85 }, 0);
			}
			if (heroScaleTarget) {
				tl.to(heroScaleTarget, { scale: 1, duration: 0.95 }, 0.05);
			}
			if (heroTitleH1) {
				tl.to(heroTitleH1, { autoAlpha: 1, y: 0, duration: 0.65, ease: 'power3.out' }, 0.12);
			}
			if (lead) {
				tl.to(lead, { autoAlpha: 1, y: 0, duration: 0.55 }, '-=0.38');
			}
			if (cta) {
				tl.to(cta, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.32');
			}

			function playHeroVideo() {
				if (!heroVideo || typeof heroVideo.play !== 'function') {
					return;
				}
				var p = heroVideo.play();
				if (p && typeof p.catch === 'function') {
					p.catch(function () {});
				}
			}

			function pauseHeroVideo() {
				if (!heroVideo || typeof heroVideo.pause !== 'function') {
					return;
				}
				heroVideo.pause();
			}

			var playLabel = playBtn ? playBtn.querySelector('.br-home__hero-playmovie-label') : null;
			function setPlayBtnLabel(isPlaying) {
				if (!playLabel) {
					return;
				}
				playLabel.textContent = isPlaying ? 'Pause movie' : 'Play movie';
			}

			function syncPlayLabelFromVideo() {
				if (!heroVideo) {
					return;
				}
				setPlayBtnLabel(!heroVideo.paused);
			}

			function toggleHeroPlayback() {
				if (!heroVideo) {
					return;
				}
				if (heroVideo.paused) {
					playHeroVideo();
					setPlayBtnLabel(true);
				} else {
					pauseHeroVideo();
					setPlayBtnLabel(false);
				}
			}

			var pageLoader = document.querySelector('[data-br-home-page-loader]');
			var deferHeroToLoader =
				pageLoader &&
				!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
			if (deferHeroToLoader) {
				tl.pause(0);
				function onLoaderDone() {
					window.removeEventListener('br-home-loader-done', onLoaderDone);
					tl.play(0);
					playHeroVideo();
					playHomeMovieVideo();
				}
				window.addEventListener('br-home-loader-done', onLoaderDone, false);
				window.setTimeout(function () {
					window.removeEventListener('br-home-loader-done', onLoaderDone);
					if (tl.paused()) {
						tl.play(0);
					}
					playHeroVideo();
					playHomeMovieVideo();
				}, 6000);
			} else {
				playHeroVideo();
				playHomeMovieVideo();
			}

			syncPlayLabelFromVideo();
			if (heroVideo) {
				heroVideo.addEventListener('play', syncPlayLabelFromVideo);
				heroVideo.addEventListener('pause', syncPlayLabelFromVideo);
			}

			if (heroMedia && heroVideo) {
				heroMedia.addEventListener('click', function (e) {
					if (e.target.closest && e.target.closest('[data-br-hero-play]')) {
						return;
					}
					toggleHeroPlayback();
				});
			}

			if (playBtn && heroVideo) {
				playBtn.addEventListener('click', function (e) {
					e.stopPropagation();
					toggleHeroPlayback();
				});
			}

			if (heroMedia) {
				gsap.to(heroMedia, {
					yPercent: 4,
					ease: 'none',
					scrollTrigger: {
						trigger: hero,
						start: 'top bottom',
						end: 'bottom top',
						scrub: true,
						invalidateOnRefresh: true,
					},
				});
			}
		} else {
			playHomeMovieVideo();
		}

		var movie = root.querySelector('.br-home__movie');
		if (movie) {
			var movieMedia = movie.querySelector('.br-home__movie-media');
			var movieTitle = movie.querySelector('.br-home__movie-title');
			if (movieMedia) {
				gsap.fromTo(
					movieMedia,
					{ yPercent: 10 },
					{
						yPercent: -10,
						ease: 'none',
						scrollTrigger: {
							trigger: movie,
							start: 'top bottom',
							end: 'bottom top',
							scrub: true,
							invalidateOnRefresh: true,
						},
					}
				);
			}
			if (movieTitle) {
				gsap.set(movieTitle, { transformOrigin: '50% 50%' });
				gsap.fromTo(
					movieTitle,
					{ scale: 1 },
					{
						scale: 1.38,
						ease: 'none',
						scrollTrigger: {
							trigger: movie,
							start: 'top bottom',
							end: 'bottom top',
							scrub: true,
							invalidateOnRefresh: true,
						},
					}
				);
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

		if (typeof window.brInitHomeScrollCardEffects === 'function') {
			window.brInitHomeScrollCardEffects(gsap, ScrollTrigger, root, scheduleRefresh);
		}

		/* CTA banner: fade title, subline, button (no svg-heading on this block). */
		var ctaBanner = root.querySelector('.br-home__cta-banner');
		if (ctaBanner) {
			var ctaFade = gsap.utils.toArray(
				ctaBanner.querySelectorAll('.br-home__cta-banner__heading, .br-home__cta-banner__actions')
			);
			if (ctaFade.length) {
				gsap.set(ctaFade, { autoAlpha: 0, y: 28 });
				gsap.to(ctaFade, {
					autoAlpha: 1,
					y: 0,
					duration: 0.58,
					stagger: 0.12,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: ctaBanner,
						start: 'top 86%',
						toggleActions: 'play none none none',
					},
				});
			}
		}

		/* Legacy two-column CTA + CF7 (e.g. Recruit inner markup if ever under .br-home). */
		var ctaInner = root.querySelector('.br-home__cta-inner');
		if (ctaInner) {
			var ctaForm = ctaInner.querySelector('.br-home__cta-col--form');
			var ctaCopy = ctaInner.querySelector('.br-home__cta-col--copy');
			var ctaFadeLegacy = [];
			if (ctaCopy) {
				ctaFadeLegacy = ctaFadeLegacy.concat(
					gsap.utils.toArray(
						ctaCopy.querySelectorAll('.br-home__cta-body, .br-home__cta-urgent')
					)
				);
			}
			if (ctaForm) {
				ctaFadeLegacy.push(ctaForm);
			}
			if (ctaFadeLegacy.length) {
				gsap.set(ctaFadeLegacy, { autoAlpha: 0, y: 30 });
				gsap.to(ctaFadeLegacy, {
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
