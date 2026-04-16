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
 * TOP: over hero = transparent bar + white hamburger; past hero = white bar + #0f3568 lines.
 * Other pages: always "past hero" (solid + dark icon).
 */
(function () {
	'use strict';

	var root = document.documentElement;
	var hero = document.querySelector('.br-home__section--hero');

	function setPastHero(on) {
		root.classList.toggle('br-header--past-hero', on);
	}

	function initHeroState() {
		var body = document.body;
		if (!body.classList.contains('home') || !hero) {
			setPastHero(true);
			return;
		}

		if (typeof IntersectionObserver === 'undefined') {
			setPastHero(true);
			return;
		}

		var io = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					setPastHero(!entry.isIntersecting);
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0,
			}
		);

		io.observe(hero);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initHeroState);
	} else {
		initHeroState();
	}
})();
