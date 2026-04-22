/**
 * TOP-only loader.
 *
 * Timeline (white bg, pieces assemble first, then tagline types in):
 *   0 ms     initial blank white
 *   100 ms   loading01 (triangle)    — slide in from the left
 *   450 ms   loading02 (medium blue) — slide in from the left
 *   800 ms   loading03 (dark navy)   — slide in from the left
 *   1150 ms  loading04 (cyan)        — slide in from the left
 *   ~1550 ms last logo piece settles
 *   1600 ms  tagline                 — starts revealing char by char (50ms stagger)
 *   ~2950 ms last tagline character settles
 *   T_TAGLINE + TAGLINE_HOLD_MS  hand off to hero (respects MIN_MS / window.load)
 */
(function () {
	'use strict';

	var root = document.querySelector('[data-br-home-page-loader]');
	if (!root) {
		return;
	}

	var pieces = {
		tri: root.querySelector('[data-piece="tri"]'),
		d2: root.querySelector('[data-piece="d2"]'),
		d3: root.querySelector('[data-piece="d3"]'),
		d4: root.querySelector('[data-piece="d4"]')
	};
	var tagline = root.querySelector('.br-home__page-loader-tagline');
	var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	/**
	 * Split the tagline's text nodes into one span per character so CSS can
	 * stagger the reveal via --br-tagline-i. Non-text children (e.g. the SP
	 * <br>) are preserved in place. Runs once on init; safe under reduced
	 * motion (the CSS override snaps everything in).
	 */
	function splitTaglineChars() {
		if (!tagline) {
			return 0;
		}
		var originalText = (tagline.textContent || '').trim();
		var chars = [];
		var newNodes = [];
		Array.prototype.forEach.call(tagline.childNodes, function (n) {
			if (n.nodeType === 3) {
				var txt = n.nodeValue || '';
				Array.from(txt).forEach(function (ch) {
					var span = document.createElement('span');
					span.className = 'br-home__page-loader-tagline-char';
					span.setAttribute('aria-hidden', 'true');
					span.textContent = ch;
					chars.push(span);
					newNodes.push(span);
				});
			} else {
				var clone = n.cloneNode(true);
				if (clone.setAttribute) {
					clone.setAttribute('aria-hidden', 'true');
				}
				newNodes.push(clone);
			}
		});
		tagline.setAttribute('aria-label', originalText);
		while (tagline.firstChild) {
			tagline.removeChild(tagline.firstChild);
		}
		newNodes.forEach(function (n) {
			tagline.appendChild(n);
		});
		for (var i = 0; i < chars.length; i++) {
			chars[i].style.setProperty('--br-tagline-i', String(i));
		}
		return chars.length;
	}

	splitTaglineChars();

	var MIN_MS = 1200;
	var MAX_WAIT_MS = 8000;
	var started = Date.now();
	var triggered = false;
	var loadDone = false;
	var introDone = false;

	/* Frame timings (ms) — see header comment */
	var T_TRI = 100;
	var T_D2 = 450;
	var T_D3 = 800;
	var T_D4 = 1150;
	/* Tagline starts AFTER the logo pieces have settled (d4 arrives ~1550ms),
	   then reveals one char at a time via the CSS stagger (--br-tagline-i).
	   Hold ends the intro after the last char settles with a beat to read. */
	var T_TAGLINE = 1600;
	var TAGLINE_HOLD_MS = 2400;

	var timers = [];

	function schedule(ms, fn) {
		timers.push(window.setTimeout(fn, ms));
	}

	function clearTimers() {
		for (var i = 0; i < timers.length; i++) {
			window.clearTimeout(timers[i]);
		}
		timers = [];
	}

	function showPiece(key) {
		if (pieces[key]) {
			pieces[key].classList.add('is-in');
		}
	}

	function releaseScrollLock() {
		document.documentElement.classList.remove('br-home-loading');
	}

	function dispatchLoaderDone() {
		window.dispatchEvent(new CustomEvent('br-home-loader-done'));
	}

	function cleanupDom() {
		root.classList.add('br-home__page-loader--hidden');
		releaseScrollLock();
		if (typeof window.ScrollTrigger !== 'undefined') {
			window.ScrollTrigger.refresh();
		}
	}

	function finish() {
		if (root.classList.contains('br-home__page-loader--exiting')) {
			return;
		}
		root.classList.add('br-home__page-loader--exiting');
		dispatchLoaderDone();

		if (reduced) {
			cleanupDom();
			return;
		}

		var done = false;
		function onTe(ev) {
			if (ev.target !== root || done) {
				return;
			}
			if (ev.propertyName !== 'transform') {
				return;
			}
			done = true;
			root.removeEventListener('transitionend', onTe);
			cleanupDom();
		}

		root.addEventListener('transitionend', onTe, false);
		window.setTimeout(function () {
			if (!done) {
				done = true;
				root.removeEventListener('transitionend', onTe);
				cleanupDom();
			}
		}, 1000);
	}

	function tryMaybeFinish() {
		if (triggered || !loadDone || !introDone) {
			return;
		}
		var elapsed = Date.now() - started;
		var wait = Math.max(0, MIN_MS - elapsed);
		window.setTimeout(function () {
			if (triggered) {
				return;
			}
			triggered = true;
			finish();
		}, wait);
	}

	function runIntro(done) {
		if (reduced) {
			showPiece('tri');
			showPiece('d2');
			showPiece('d3');
			showPiece('d4');
			if (tagline) {
				tagline.classList.add('is-visible');
			}
			window.setTimeout(done, 0);
			return;
		}

		schedule(T_TRI, function () {
			showPiece('tri');
		});
		schedule(T_D2, function () {
			showPiece('d2');
		});
		schedule(T_D3, function () {
			showPiece('d3');
		});
		schedule(T_D4, function () {
			showPiece('d4');
		});
		schedule(T_TAGLINE, function () {
			if (tagline) {
				tagline.classList.add('is-visible');
			}
		});
		schedule(T_TAGLINE + TAGLINE_HOLD_MS, function () {
			clearTimers();
			done();
		});
	}

	window.addEventListener(
		'load',
		function () {
			loadDone = true;
			tryMaybeFinish();
		},
		false
	);

	window.setTimeout(function () {
		loadDone = true;
		tryMaybeFinish();
	}, MAX_WAIT_MS);

	runIntro(function () {
		introDone = true;
		tryMaybeFinish();
	});
}());
