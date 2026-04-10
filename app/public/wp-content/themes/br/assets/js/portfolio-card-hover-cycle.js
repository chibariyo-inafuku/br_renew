/**
 * Cycle stacked portfolio card images on hover (parent <a> so overlay does not stop the cycle).
 */
(function () {
	'use strict';

	var INTERVAL_MS = 300;

	function prefersReducedMotion() {
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	function initRoot(root) {
		var anchor = root.closest('a');
		if (!anchor) {
			return;
		}

		var imgs = root.querySelectorAll('.br-hover-cycle__img');
		if (imgs.length < 2) {
			return;
		}

		var timer = null;

		function show(index) {
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].classList.toggle('is-active', i === index);
			}
		}

		anchor.addEventListener('mouseenter', function () {
			if (prefersReducedMotion()) {
				return;
			}
			show(0);
			if (timer) {
				window.clearInterval(timer);
			}
			var idx = 0;
			timer = window.setInterval(function () {
				idx = (idx + 1) % imgs.length;
				show(idx);
			}, INTERVAL_MS);
		});

		anchor.addEventListener('mouseleave', function () {
			if (timer) {
				window.clearInterval(timer);
				timer = null;
			}
			show(0);
		});
	}

	document.querySelectorAll('.br-hover-cycle').forEach(initRoot);
})();
