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

	var mq = window.matchMedia('(max-width: 48rem)');
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
