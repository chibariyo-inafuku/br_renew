/**
 * FAQ: smooth height transition for <details> answers (native open/attr kept for a11y).
 * Skips when prefers-reduced-motion: reduce (browser default <details> toggle).
 *
 * @package br
 */
(function () {
	'use strict';

	if ( window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ) {
		return;
	}

	var list = document.querySelector( '.br-faq__list' );
	if ( ! list ) {
		return;
	}

	var DURATION_MS = 400;
	var EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';

	function getPanel( details ) {
		return details.querySelector( '.br-faq__answer-panel' );
	}

	function clearPanelStyles( panel ) {
		if ( ! panel ) {
			return;
		}
		panel.style.removeProperty( 'height' );
		panel.style.removeProperty( 'overflow' );
		panel.style.removeProperty( 'transition' );
	}

	function finishClose( details, panel ) {
		details.removeAttribute( 'open' );
		details.removeAttribute( 'data-br-faq-animating' );
		if ( ! panel ) {
			return;
		}
		clearPanelStyles( panel );
	}

	function finishOpen( details, panel ) {
		details.removeAttribute( 'data-br-faq-animating' );
		if ( ! panel ) {
			return;
		}
		// 1 フレーム遅らせてから height: auto 相当の解除。height 直後のサブピクセル巻き戻しを防ぐ
		requestAnimationFrame( function () {
			clearPanelStyles( panel );
		} );
	}

	/** 高さの計測を整数 px に揃え、transition 直後の 1px ブレを減らす */
	function toPx( n ) {
		return Math.max( 0, Math.round( n ) ) + 'px';
	}

	function bind( details ) {
		var summary = details.querySelector( 'summary' );
		var panel = getPanel( details );
		if ( ! summary || ! panel ) {
			return;
		}

		summary.addEventListener( 'click', function ( e ) {
			if ( details.getAttribute( 'data-br-faq-animating' ) === '1' ) {
				e.preventDefault();
				return;
			}

			if ( details.open ) {
				e.preventDefault();
				details.setAttribute( 'data-br-faq-animating', '1' );
				var h = panel.scrollHeight;
				if ( h <= 0 ) {
					finishClose( details, panel );
					return;
				}
				panel.style.overflow = 'hidden';
				panel.style.transition = 'none';
				panel.style.height = toPx( h );
				panel.getBoundingClientRect();
				panel.style.transition = 'height ' + DURATION_MS / 1000 + 's ' + EASE;
				var done = false;
				var timeoutId = setTimeout( function () {
					if ( done ) {
						return;
					}
					done = true;
					panel.removeEventListener( 'transitionend', onEnd );
					finishClose( details, panel );
				}, DURATION_MS + 80 );

				function onEnd( ev ) {
					if ( ev.propertyName && ev.propertyName !== 'height' ) {
						return;
					}
					if ( done ) {
						return;
					}
					done = true;
					clearTimeout( timeoutId );
					panel.removeEventListener( 'transitionend', onEnd );
					finishClose( details, panel );
				}

				requestAnimationFrame( function () {
					panel.style.height = '0px';
				} );
				panel.addEventListener( 'transitionend', onEnd );
			} else {
				e.preventDefault();
				details.setAttribute( 'data-br-faq-animating', '1' );
				details.setAttribute( 'open', '' );
				panel.style.overflow = 'hidden';
				panel.style.transition = 'none';
				panel.style.height = '0px';
				panel.getBoundingClientRect();
				// レイアウト確定を待ってから scrollHeight 取得
				requestAnimationFrame( function () {
					requestAnimationFrame( function () {
						var hOpen = panel.scrollHeight;
						if ( hOpen <= 0 ) {
							finishOpen( details, panel );
							return;
						}
						var hStr = toPx( hOpen );
						panel.style.transition = 'height ' + DURATION_MS / 1000 + 's ' + EASE;
						var doneO = false;
						var timeoutIdO = setTimeout( function () {
							if ( doneO ) {
								return;
							}
							doneO = true;
							panel.removeEventListener( 'transitionend', onEndO );
							finishOpen( details, panel );
						}, DURATION_MS + 80 );

						function onEndO( ev ) {
							if ( ev.propertyName && ev.propertyName !== 'height' ) {
								return;
							}
							if ( doneO ) {
								return;
							}
							doneO = true;
							clearTimeout( timeoutIdO );
							panel.removeEventListener( 'transitionend', onEndO );
							finishOpen( details, panel );
						}

						requestAnimationFrame( function () {
							panel.style.height = hStr;
						} );
						panel.addEventListener( 'transitionend', onEndO );
					} );
				} );
			}
		} );
	}

	var items = list.querySelectorAll( 'details.br-faq__item' );
	for ( var i = 0; i < items.length; i++ ) {
		bind( items[ i ] );
	}
} )();
