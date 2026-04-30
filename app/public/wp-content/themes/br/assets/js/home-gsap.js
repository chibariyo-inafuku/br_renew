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

	gsap.context(function (ctx) {
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
		function pauseHomeMovieVideo() {
			if (!homeMovieVideo || typeof homeMovieVideo.pause !== 'function') {
				return;
			}
			homeMovieVideo.pause();
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

			function buildHeroBlobPathD(nums) {
				function pt(i) {
					return nums[i * 2].toFixed(5) + ' ' + nums[i * 2 + 1].toFixed(5);
				}
				return (
					'M ' +
					pt(0) +
					' C ' +
					pt(1) +
					' ' +
					pt(2) +
					' ' +
					pt(3) +
					' C ' +
					pt(4) +
					' ' +
					pt(5) +
					' ' +
					pt(6) +
					' C ' +
					pt(7) +
					' ' +
					pt(8) +
					' ' +
					pt(9) +
					' C ' +
					pt(10) +
					' ' +
					pt(11) +
					' ' +
					pt(12) +
					' C ' +
					pt(13) +
					' ' +
					pt(14) +
					' ' +
					pt(15) +
					' C ' +
					pt(16) +
					' ' +
					pt(17) +
					' ' +
					pt(18) +
					' C ' +
					pt(19) +
					' ' +
					pt(20) +
					' ' +
					pt(21) +
					' Z'
				);
			}

			var heroBlobMorphPath = document.getElementById('br-hero-blob-morph-path');
			var heroBlobPiece = hero.querySelector('.br-home__hero-art-piece--blob');
			if (heroBlobMorphPath && heroBlobPiece) {
				/* Normalized base path (316×320 viewBox) — single source of truth for “丸み”のシルエット */
				var BLOB_BASE = [
					0.36426898734177215, 0.83651875, 0.2327123417721519, 0.768228125, 0.049803481012658225,
					0.738896875, 0.01770240506329114, 0.595646875, -0.015295158227848101, 0.448396875,
					0.12042816455696204, 0.32720625000000003, 0.22565664556962026, 0.21796500000000002,
					0.3285537974683544, 0.11114312500000001, 0.44171202531645565, -0.012966406250000001,
					0.5904050632911393, 0.00109475625, 0.7371455696202531, 0.014971000000000002,
					0.8254018987341772, 0.156286875, 0.9001424050632911, 0.2817471875, 0.9669113924050632,
					0.39383124999999997, 1.0055126582278482, 0.518971875, 0.974117088607595, 0.645196875,
					0.9401645569620253, 0.7817000000000001, 0.8657784810126583, 0.922871875,
					0.7300886075949367, 0.9654406249999999, 0.6003101265822786, 1.00615625,
					0.4848449367088608, 0.8991093749999999, 0.36426898734177215, 0.83651875,
				];
				/* ベース付近のみを複数周波の sin/cos で揺らし、有機的かつ常に丸みを維持 */
				function sampleHeroBlobOrganic(base, tSec) {
					var amp1 = 0.012;
					var amp2 = 0.0065;
					var out = new Array(44);
					var pi;
					for (pi = 0; pi < 22; pi++) {
						var i = pi * 2;
						var phase = pi * 0.714159265 + 0.31831;
						var s1 = tSec * 0.82;
						var s2 = tSec * 1.29;
						var wx =
							amp1 * Math.sin(s1 + phase) +
							amp2 * Math.sin(s2 * 1.03 + phase * 2.17);
						var wy =
							amp1 * Math.cos(s1 * 0.91 + phase * 1.13) +
							amp2 * Math.cos(s2 * 0.87 + phase * 1.91);
						out[i] = base[i] + wx;
						out[i + 1] = base[i + 1] + wy;
					}
					out[42] = out[0];
					out[43] = out[1];
					return out;
				}
				heroBlobMorphPath.setAttribute('d', buildHeroBlobPathD(BLOB_BASE));
				heroBlobPiece.classList.add('br-home__hero-art-piece--blob-morph-js');
				ctx.add(function () {
					function blobTick() {
						var tSec = performance.now() * 0.001;
						heroBlobMorphPath.setAttribute(
							'd',
							buildHeroBlobPathD(sampleHeroBlobOrganic(BLOB_BASE, tSec))
						);
					}
					gsap.ticker.add(blobTick);
					return function () {
						gsap.ticker.remove(blobTick);
					};
				});
			}

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

			function setPlayBtnState(isPlaying) {
				if (playBtn && playBtn.classList) {
					playBtn.classList.toggle('is-playing', !!isPlaying);
				}
				setPlayBtnLabel(isPlaying);
			}

			function syncPlayLabelFromVideo() {
				if (!heroVideo) {
					return;
				}
				setPlayBtnState(!heroVideo.paused);
			}

			function toggleHeroPlayback() {
				if (!heroVideo) {
					return;
				}
				if (heroVideo.paused) {
					playHeroVideo();
					setPlayBtnState(true);
				} else {
					pauseHeroVideo();
					setPlayBtnState(false);
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

			/* Cursor-follow play button (desktop hover only). */
			var canHoverFollow =
				window.matchMedia &&
				window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
				playBtn &&
				heroMedia &&
				typeof gsap !== 'undefined';
			if (canHoverFollow) {
				var followActive = false;
				var followXTo = gsap.quickTo(playBtn, 'x', { duration: 0.12, ease: 'power1.out' });
				var followYTo = gsap.quickTo(playBtn, 'y', { duration: 0.12, ease: 'power1.out' });

				var followBase = null;
				var pendingFollowEvent = null;
				var followRaf = 0;

				function computeFollowBase() {
					if (!heroMedia || !playBtn) {
						return null;
					}
					// Compute base (rest) center using CSS left/bottom + heroMedia rect.
					// This avoids jumps when heroMedia is transformed by scroll/parallax.
					var mediaRect = heroMedia.getBoundingClientRect();
					var btnRect = playBtn.getBoundingClientRect();
					var cs = window.getComputedStyle(playBtn);
					var leftPx = parseFloat(cs.left) || 0;
					var bottomPx = parseFloat(cs.bottom) || 0;
					return {
						left: mediaRect.left,
						top: mediaRect.top,
						width: mediaRect.width,
						height: mediaRect.height,
						baseCenterX: leftPx + btnRect.width * 0.5,
						baseCenterY: mediaRect.height - bottomPx - btnRect.height * 0.5,
					};
				}

				function flushFollow() {
					followRaf = 0;
					if (!followActive || !pendingFollowEvent) {
						return;
					}
					if (!followBase) {
						followBase = computeFollowBase();
					}
					if (!followBase) {
						return;
					}
					// Refresh rect each frame (cheaper than per-pointer event).
					var mediaRect = heroMedia.getBoundingClientRect();
					followBase.left = mediaRect.left;
					followBase.top = mediaRect.top;
					followBase.width = mediaRect.width;
					followBase.height = mediaRect.height;

					var e = pendingFollowEvent;
					pendingFollowEvent = null;

					var pointerX = e.clientX - followBase.left;
					var pointerY = e.clientY - followBase.top;
					var dx = pointerX - followBase.baseCenterX;
					var dy = pointerY - followBase.baseCenterY;

					followXTo(dx);
					followYTo(dy);
				}

				heroMedia.addEventListener('pointerenter', function () {
					followActive = true;
					followBase = computeFollowBase();
				});
				heroMedia.addEventListener('pointermove', function (e) {
					if (!followActive) {
						return;
					}
					pendingFollowEvent = e;
					if (!followRaf) {
						followRaf = requestAnimationFrame(flushFollow);
					}
				});
				heroMedia.addEventListener('pointerleave', function () {
					followActive = false;
					pendingFollowEvent = null;
					followBase = null;
					followXTo(0);
					followYTo(0);
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

		/* Video performance: avoid decoding two videos offscreen.
		   Play only when the section is meaningfully in view. */
		(function () {
			if (!(window.IntersectionObserver && typeof window.IntersectionObserver === 'function')) {
				return;
			}

			function canAutoPlayNow() {
				// Avoid spinning decoders when tab isn't visible.
				if (typeof document !== 'undefined' && document.visibilityState) {
					return document.visibilityState === 'visible';
				}
				return true;
			}

			function observeVideo(el, onPlay, onPause) {
				if (!el) {
					return null;
				}
				var io = new IntersectionObserver(
					function (entries) {
						var entry = entries && entries[0];
						if (!entry) {
							return;
						}
						var shouldPlay = entry.isIntersecting && entry.intersectionRatio >= 0.25 && canAutoPlayNow();
						if (shouldPlay) {
							onPlay();
						} else {
							onPause();
						}
					},
					{ threshold: [0, 0.25, 0.5] }
				);
				io.observe(el);
				return io;
			}

			var heroSection = root.querySelector('.br-home__hero');
			var movieSection = root.querySelector('.br-home__movie');
			var heroIo = observeVideo(heroSection, function () {
				if (typeof playHeroVideo === 'function') {
					playHeroVideo();
				}
			}, function () {
				if (typeof pauseHeroVideo === 'function') {
					pauseHeroVideo();
				}
			});
			var movieIo = observeVideo(movieSection, playHomeMovieVideo, pauseHomeMovieVideo);

			function onVisibilityChange() {
				if (!canAutoPlayNow()) {
					if (typeof pauseHeroVideo === 'function') {
						pauseHeroVideo();
					}
					pauseHomeMovieVideo();
					return;
				}
				// Let IO callbacks decide; force a refresh by toggling play based on current state.
				// If IO hasn't fired yet, this is harmless.
				if (heroSection && heroSection.getBoundingClientRect) {
					// no-op: IO will handle; keep lightweight
				}
			}
			document.addEventListener('visibilitychange', onVisibilityChange, false);

			// Cleanup when gsap context reverts (defensive)
			ScrollTrigger.addEventListener('killAll', function () {
				if (heroIo && heroIo.disconnect) {
					heroIo.disconnect();
				}
				if (movieIo && movieIo.disconnect) {
					movieIo.disconnect();
				}
				document.removeEventListener('visibilitychange', onVisibilityChange, false);
			});
		})();

		var movie = root.querySelector('.br-home__movie');
		if (movie) {
			var movieMedia = movie.querySelector('.br-home__movie-media');
			var movieTitle = movie.querySelector('.br-home__movie-title');
			if (movieMedia) {
				// Make the parallax more obvious: stronger on desktop, slightly reduced on mobile.
				var movieMm = gsap.matchMedia();
				movieMm.add(
					{
						isMobile: '(max-width: 768px)',
						isDesktop: '(min-width: 769px)',
					},
					function (ctx) {
						// Balance: big enough to feel parallax, small enough to avoid exposing edges.
						var amp = ctx.conditions.isMobile ? 14 : 22;
						gsap.fromTo(
							movieMedia,
							{ yPercent: amp },
							{
								yPercent: -amp,
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
				);
			}
			if (movieTitle) {
				gsap.set(movieTitle, { transformOrigin: '50% 50%' });
				var movieTitleMm = gsap.matchMedia();
				movieTitleMm.add(
					{
						isMobile: '(max-width: 768px)',
						isDesktop: '(min-width: 769px)',
					},
					function (ctx) {
						// Two-phase scale:
						// - Early: min -> 1.38 (so the change is obvious quickly)
						// - After ~half scroll: ramp up to oversized, cropping offscreen
						var minScale = ctx.conditions.isMobile ? 0.62 : 0.52;
						var bigScale = ctx.conditions.isMobile ? 2.05 : 2.6;
						var tl = gsap.timeline({
							scrollTrigger: {
								trigger: movie,
								start: 'top bottom',
								end: 'bottom top',
								scrub: true,
								invalidateOnRefresh: true,
							},
							defaults: { ease: 'none' },
						});

						tl.fromTo(movieTitle, { scale: minScale }, { scale: 1.38, duration: 0.4 }, 0);
						tl.to(movieTitle, { scale: bigScale, duration: 0.6 }, 0.4);
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
