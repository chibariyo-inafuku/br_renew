/**
 * Mobile header: hamburger overlay, scroll lock, Lenis pause, Escape / backdrop close.
 */
(function () {
	'use strict';

	var toggle = document.getElementById('br-header-menu-toggle');
	var panel = document.getElementById('br-header-panel');
	if (!toggle || !panel) {
		return;
	}

	var mq = window.matchMedia('(max-width: 768px)');
	var closeEls = panel.querySelectorAll('[data-br-nav-close]');

	function isMobile() {
		return mq.matches;
	}

	function setOpen(open) {
		if (!isMobile()) {
			document.documentElement.classList.remove('br-nav-open');
			toggle.setAttribute('aria-expanded', 'false');
			panel.removeAttribute('aria-hidden');
			panel.removeAttribute('inert');
			return;
		}

		document.documentElement.classList.toggle('br-nav-open', open);
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		panel.setAttribute('aria-hidden', open ? 'false' : 'true');
		if ('inert' in panel) {
			panel.inert = !open;
		}

		if (window.brLenis) {
			if (open) {
				window.brLenis.stop();
			} else {
				window.brLenis.start();
			}
		}

		if (open) {
			var firstLink = panel.querySelector('a[href]');
			if (firstLink) {
				window.requestAnimationFrame(function () {
					firstLink.focus();
				});
			}
		}
	}

	function close() {
		setOpen(false);
		toggle.focus();
	}

	function toggleNav() {
		setOpen(!document.documentElement.classList.contains('br-nav-open'));
	}

	toggle.addEventListener('click', function () {
		if (!isMobile()) {
			return;
		}
		toggleNav();
	});

	closeEls.forEach(function (el) {
		el.addEventListener('click', function () {
			if (isMobile()) {
				close();
			}
		});
	});

	panel.querySelectorAll('a[href]').forEach(function (a) {
		a.addEventListener('click', function () {
			if (isMobile()) {
				close();
			}
		});
	});

	document.addEventListener('keydown', function (e) {
		if (e.key !== 'Escape') {
			return;
		}
		if (!isMobile() || !document.documentElement.classList.contains('br-nav-open')) {
			return;
		}
		e.preventDefault();
		close();
	});

	mq.addEventListener('change', function () {
		if (!isMobile()) {
			setOpen(false);
		} else {
			panel.setAttribute('aria-hidden', 'true');
			if ('inert' in panel) {
				panel.inert = true;
			}
		}
	});

	function initMobileAria() {
		if (isMobile()) {
			panel.setAttribute('aria-hidden', 'true');
			if ('inert' in panel) {
				panel.inert = true;
			}
		} else {
			panel.removeAttribute('aria-hidden');
			panel.removeAttribute('inert');
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initMobileAria);
	} else {
		initMobileAria();
	}
})();

/**
 * Header bar: transparent at top of page, white background after a small scroll.
 * Uses html.br-header--past-hero (same hook as existing CSS). Syncs with Lenis when present.
 */
(function () {
	'use strict';

	var root = document.documentElement;
	var SCROLL_THRESHOLD_PX = 48;
	var ticking = false;

	function setPastHero(on) {
		root.classList.toggle('br-header--past-hero', on);
	}

	function getScrollY() {
		if (window.brLenis && typeof window.brLenis.scroll === 'number') {
			return window.brLenis.scroll;
		}
		return window.scrollY || document.documentElement.scrollTop || 0;
	}

	function readScroll() {
		setPastHero(getScrollY() > SCROLL_THRESHOLD_PX);
	}

	function onLenisScroll(lenis) {
		if (lenis && typeof lenis.scroll === 'number') {
			setPastHero(lenis.scroll > SCROLL_THRESHOLD_PX);
		} else {
			readScroll();
		}
	}

	function onScrollOrResize() {
		if (ticking) {
			return;
		}
		ticking = true;
		window.requestAnimationFrame(function () {
			ticking = false;
			readScroll();
		});
	}

	function bindLenisWhenReady() {
		if (window.brLenis && typeof window.brLenis.on === 'function') {
			window.brLenis.on('scroll', onLenisScroll);
			return;
		}
		var attempts = 0;
		var id = window.setInterval(function () {
			attempts += 1;
			if (window.brLenis && typeof window.brLenis.on === 'function') {
				window.clearInterval(id);
				window.brLenis.on('scroll', onLenisScroll);
			} else if (attempts > 80) {
				window.clearInterval(id);
			}
		}, 50);
	}

	function init() {
		readScroll();
		window.addEventListener('scroll', onScrollOrResize, { passive: true });
		window.addEventListener('resize', onScrollOrResize, { passive: true });
		bindLenisWhenReady();
		window.addEventListener('load', readScroll, false);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
