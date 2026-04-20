/**
 * Blog single post: auto-generated table of contents.
 *
 * Scans the post body (.br-post-single__content) for h2/h3/h4, builds a
 * nested ordered list with hierarchical numbering (1, 1-1, 1-2, 2 ...),
 * assigns ids to each heading, and inserts the TOC just before the first h2.
 *
 * - No-op when fewer than 2 matching headings exist (short articles).
 * - Existing heading ids are preserved; only ids missing one are auto-assigned.
 * - Anchor smooth-scroll (and the floating SP-header offset) is delegated to
 *   the site-wide handler in lenis-init.js, so this module does not bind its
 *   own click handlers and does not need to touch scroll-margin-top.
 */
(function () {
	'use strict';

	var MIN_HEADINGS = 2;
	var ID_PREFIX = 'br-toc-';

	function init() {
		var contentArea = document.querySelector('.br-post-single__content');
		if (!contentArea) {
			return;
		}

		var headings = contentArea.querySelectorAll('h2, h3, h4');
		if (headings.length < MIN_HEADINGS) {
			return;
		}

		var firstH2 = contentArea.querySelector('h2');
		if (!firstH2) {
			return;
		}

		var toc = document.createElement('nav');
		toc.className = 'br-post-toc';
		toc.id = 'br-post-toc';
		toc.setAttribute('aria-labelledby', 'br-post-toc-title');

		var title = document.createElement('h2');
		title.className = 'br-post-toc__title';
		title.id = 'br-post-toc-title';
		title.textContent = '目次';
		toc.appendChild(title);

		var rootList = document.createElement('ol');
		rootList.className = 'br-post-toc__list';
		toc.appendChild(rootList);

		var currentList = rootList;
		var currentLevel = 2;
		var counters = [0, 0, 0]; // h2, h3, h4

		Array.prototype.forEach.call(headings, function (heading) {
			var level = parseInt(heading.tagName.slice(1), 10);
			if (isNaN(level) || level < 2 || level > 4) {
				return;
			}
			var levelIndex = level - 2;

			counters[levelIndex] += 1;
			for (var i = levelIndex + 1; i < counters.length; i += 1) {
				counters[i] = 0;
			}

			var numberingParts = [];
			for (var j = 0; j <= levelIndex; j += 1) {
				if (counters[j] > 0) {
					numberingParts.push(counters[j]);
				}
			}
			var numbering = numberingParts.join('-');

			if (!heading.id) {
				heading.id = ID_PREFIX + numbering;
			}

			var li = document.createElement('li');
			li.className = 'br-post-toc__item br-post-toc__item--lv' + level;

			var num = document.createElement('span');
			num.className = 'br-post-toc__num';
			num.textContent = numbering + '.';

			var link = document.createElement('a');
			link.className = 'br-post-toc__link';
			link.href = '#' + heading.id;
			link.textContent = (heading.textContent || '').trim();

			li.appendChild(num);
			li.appendChild(link);

			if (level > currentLevel) {
				var newList = document.createElement('ol');
				newList.className =
					'br-post-toc__list br-post-toc__list--nested';
				var anchorLi = currentList.lastElementChild;
				if (anchorLi) {
					anchorLi.appendChild(newList);
					currentList = newList;
				}
			} else if (level < currentLevel) {
				while (currentLevel > level && currentList !== rootList) {
					var parentList = currentList.parentNode
						? currentList.parentNode.closest('ol.br-post-toc__list')
						: null;
					if (!parentList) {
						currentList = rootList;
						break;
					}
					currentList = parentList;
					currentLevel -= 1;
				}
			}

			currentLevel = level;
			currentList.appendChild(li);
		});

		contentArea.insertBefore(toc, firstH2);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
