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
	if (heroEarly && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		var heroVid = heroEarly.querySelector('.br-home__hero-video');
		if (heroVid && typeof heroVid.pause === 'function') {
			heroVid.pause();
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

	/** CodePen ZYdopE–style noise pool (symbols; no Snap.svg). */
	var HERO_SCRAMBLE_NOISE = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';

	/** >1 stretches hero title slide + scramble (wall-clock); tweak for pacing. */
	var HERO_TITLE_TIME_SCALE = 2.85;

	function heroScrambleImmediateChar(ch) {
		return /[\s\u3000、。，．]/.test(ch);
	}

	function heroScrambleNoiseChar() {
		return HERO_SCRAMBLE_NOISE.charAt(Math.floor(Math.random() * HERO_SCRAMBLE_NOISE.length));
	}

	/**
	 * Split .br-home__hero-title-box text into per-grapheme spans (for...of).
	 * @return {Array<{ el: HTMLSpanElement, final: string }>}
	 */
	function heroWrapTitleBoxChars(box) {
		var raw = box.textContent;
		box.textContent = '';
		var out = [];
		var it = raw[Symbol.iterator]();
		var step;
		while (!(step = it.next()).done) {
			var ch = step.value;
			var span = document.createElement('span');
			span.className = 'br-home__hero-title-char';
			/* Noise first so the slide-in never reveals the final copy; timeline
			   then ticks more noise and resolves to `final` (same as scramble). */
			span.textContent = heroScrambleImmediateChar(ch) ? ch : heroScrambleNoiseChar();
			box.appendChild(span);
			out.push({ el: span, final: ch });
		}
		return out;
	}

	/**
	 * Schedule tl.call steps: noise ticks then lock to final (per char, staggered).
	 */
	function heroAddScrambleToTimeline(tl, charItems, tStart) {
		var charStagger = 0.055 * HERO_TITLE_TIME_SCALE;
		var tickInterval = 0.038 * HERO_TITLE_TIME_SCALE;
		var baseCycles = 5;
		var gi = 0;
		for (var i = 0; i < charItems.length; i++) {
			var item = charItems[i];
			var fin = item.final;
			if (heroScrambleImmediateChar(fin)) {
				continue;
			}
			var cycles = baseCycles + (gi % 4);
			var start = tStart + gi * charStagger;
			gi++;
			for (var k = 0; k < cycles; k++) {
				tl.call(
					function (el) {
						el.textContent = heroScrambleNoiseChar();
					},
					[item.el],
					start + k * tickInterval
				);
			}
			tl.call(
				function (el, text) {
					el.textContent = text;
				},
				[item.el, fin],
				start + cycles * tickInterval
			);
		}
	}

	gsap.context(function () {
		var hero = root.querySelector('.br-home__hero');
		if (hero) {
			var bgVideo = hero.querySelector('.br-home__hero-video');
			var bgMesh = hero.querySelector('.br-home__hero-mesh');
			var titleLayer =
				window.matchMedia('(min-width: 769px)').matches
					? hero.querySelector('.br-home__hero-title-layer--desktop')
					: hero.querySelector('.br-home__hero-title-layer--mobile');
			if (!titleLayer) {
				titleLayer = hero;
			}
			var titleLines = titleLayer.querySelectorAll('.br-home__hero-title-line');
			var titleBoxes = titleLayer.querySelectorAll('.br-home__hero-title-box');
			var heroTitleH1 = hero.querySelector('.br-home__hero-title');
			var lead = hero.querySelector('.br-home__hero-lead');
			var cta = hero.querySelector('.br-home__hero-cta');

			var allTitleChars = [];
			for (var bi = 0; bi < titleBoxes.length; bi++) {
				var merged = heroWrapTitleBoxChars(titleBoxes[bi]);
				for (var mj = 0; mj < merged.length; mj++) {
					allTitleChars.push(merged[mj]);
				}
			}

			if (titleLines.length) {
				gsap.set(titleLines, { autoAlpha: 1, y: 0 });
			}
			if (titleBoxes.length) {
				gsap.set(titleBoxes, { x: '-110%' });
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
			if (heroTitleH1) {
				heroTitleH1.setAttribute('aria-busy', 'true');
				tl.eventCallback('onComplete', function () {
					heroTitleH1.removeAttribute('aria-busy');
				});
			}
			if (bgVideo) {
				tl.to(bgVideo, { scale: 1, opacity: 1, duration: 1.15 }, 0);
			}
			if (bgMesh) {
				tl.to(bgMesh, { scale: 1, opacity: 0.5, duration: 1 }, 0.08);
			}
			if (titleBoxes.length) {
				tl.to(
					titleBoxes,
					{
						x: 0,
						duration: 0.58 * HERO_TITLE_TIME_SCALE,
						stagger: 0.12 * HERO_TITLE_TIME_SCALE,
						ease: 'power3.out',
					},
					0.14
				);
			}
			if (allTitleChars.length) {
				heroAddScrambleToTimeline(tl, allTitleChars, 0.22 * HERO_TITLE_TIME_SCALE);
			}
			if (lead) {
				tl.to(lead, { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.28');
			}
			if (cta) {
				tl.to(cta, { autoAlpha: 1, y: 0, duration: 0.55 }, '-=0.34');
			}

			/* Kick off hero bg video playback. Autoplay is intentionally removed
			   on the <video> tag so the video stays on its poster until the
			   loader finishes. Swallow the promise rejection that browsers
			   throw when playback is blocked (e.g. battery saver). */
			function playHeroVideo() {
				if (!bgVideo || typeof bgVideo.play !== 'function') {
					return;
				}
				var p = bgVideo.play();
				if (p && typeof p.catch === 'function') {
					p.catch(function () {});
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
				}
				window.addEventListener('br-home-loader-done', onLoaderDone, false);
				window.setTimeout(function () {
					window.removeEventListener('br-home-loader-done', onLoaderDone);
					if (tl.paused()) {
						tl.play(0);
					}
					playHeroVideo();
				}, 6000);
			} else {
				/* No loader to wait on (or it was disabled): start the bg video
				   alongside the timeline that is already auto-playing. */
				playHeroVideo();
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

		if (typeof window.brInitHomeScrollCardEffects === 'function') {
			window.brInitHomeScrollCardEffects(gsap, ScrollTrigger, root, scheduleRefresh);
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
