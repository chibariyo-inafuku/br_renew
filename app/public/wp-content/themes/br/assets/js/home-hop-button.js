/**
 * Hop CTA — builds label from data-text (animation/button.html parity), then distances + stepped chars.
 */
(function () {
	'use strict';

	/* TOP の .br-home 内だけでなく、About プロモなどドキュメント上のすべての .br-hop-btn を対象 */
	var buttons = document.querySelectorAll('.br-hop-btn');
	if (!buttons.length) {
		return;
	}

	var reducedMotion =
		typeof window.matchMedia === 'function' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	buttons.forEach(function (button) {
		if (button.getAttribute('data-br-hop-init') === '1') {
			return;
		}

		var mover = button.querySelector('.br-hop-btn__dot-mover');
		if (!mover) {
			return;
		}

		var raw = button.getAttribute('data-text');
		var label = raw === null || typeof raw !== 'string' ? '' : raw;

		var existing = button.querySelector('.br-hop-btn__text-container');
		if (existing) {
			existing.remove();
		}

		var textContainer = document.createElement('div');
		textContainer.className = 'br-hop-btn__text-container';

		if (label !== '') {
			Array.from(label).forEach(function (ch) {
				var span = document.createElement('span');
				span.className = 'br-hop-btn__char';
				span.textContent = ch === ' ' ? '\u00A0' : ch;
				textContainer.appendChild(span);
			});
		}

		button.appendChild(textContainer);
		button.setAttribute('data-br-hop-init', '1');

		var chars = textContainer.querySelectorAll('.br-hop-btn__char');
		var stepInterval;

		function updateDistances() {
			var textWidth = textContainer.offsetWidth;
			var dotWidth = mover.offsetWidth;
			var dotStyle = window.getComputedStyle(mover);
			var dotMarginRight = parseFloat(dotStyle.marginRight) || 0;

			button.style.setProperty('--travel-distance', textWidth + dotMarginRight + 'px');
			button.style.setProperty('--text-slide-distance', -(dotWidth + dotMarginRight) + 'px');
		}

		updateDistances();
		window.addEventListener('resize', updateDistances);

		function triggerSteppedEffect(isReverse) {
			if (reducedMotion || !chars.length) {
				return;
			}

			var i = isReverse ? chars.length - 1 : 0;
			var stepTime = 900 / chars.length;

			window.clearInterval(stepInterval);
			stepInterval = window.setInterval(function () {
				var condition = isReverse ? i >= 0 : i < chars.length;
				if (condition) {
					chars[i].classList.add('br-hop-btn__char--stepped');
					var currentIndex = i;
					window.setTimeout(function () {
						chars[currentIndex].classList.remove('br-hop-btn__char--stepped');
					}, 200);
					if (isReverse) {
						i--;
					} else {
						i++;
					}
				} else {
					window.clearInterval(stepInterval);
				}
			}, stepTime);
		}

		if (!reducedMotion) {
			button.addEventListener('mouseenter', function () {
				triggerSteppedEffect(false);
			});
			button.addEventListener('mouseleave', function () {
				triggerSteppedEffect(true);
			});
			button.addEventListener('focusin', function () {
				triggerSteppedEffect(false);
			});
			button.addEventListener('focusout', function () {
				triggerSteppedEffect(true);
			});
		}
	});
})();
