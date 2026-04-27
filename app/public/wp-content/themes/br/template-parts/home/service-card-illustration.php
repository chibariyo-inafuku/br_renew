<?php
/**
 * Home SERVICE rail: inline illustration by variant (unified art style).
 *
 * @package br
 *
 * @param array $args {
 *     @type string $variant One of branding|web|uiux|creative|marketing|consulting.
 * }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$v = isset( $args['variant'] ) ? sanitize_key( (string) $args['variant'] ) : 'branding';
?>
<span class="br-home__service-card-illus-svg" aria-hidden="true">
<?php
switch ( $v ) {
	case 'web':
		?>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="120" height="100" focusable="false">
			<rect x="18" y="22" width="84" height="58" rx="8" fill="#e8ecf8" stroke="#4338ca" stroke-width="2.2"/>
			<rect x="24" y="30" width="72" height="8" rx="2" fill="#c7d2fe"/>
			<text x="42" y="72" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="700" fill="#4338ca">&lt;/&gt;</text>
			<path d="M88 48l12 8-12 8" fill="none" stroke="#f97316" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M96 56h-8" stroke="#f97316" stroke-width="2.5" stroke-linecap="round"/>
		</svg>
		<?php
		break;
	case 'uiux':
		?>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="120" height="100" focusable="false">
			<rect x="28" y="38" width="52" height="36" rx="6" fill="#86efac" transform="rotate(-8 54 56)"/>
			<rect x="34" y="32" width="52" height="36" rx="6" fill="#374151" transform="rotate(4 60 50)"/>
			<rect x="40" y="26" width="52" height="36" rx="6" fill="#f9a8d4" transform="rotate(10 66 44)"/>
		</svg>
		<?php
		break;
	case 'creative':
		?>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="120" height="100" focusable="false">
			<circle cx="60" cy="50" r="34" fill="#ffedd5" stroke="#fb923c" stroke-width="2.5"/>
			<circle cx="48" cy="44" r="3.5" fill="#1f2937"/>
			<circle cx="72" cy="44" r="3.5" fill="#1f2937"/>
			<path d="M44 58q16 14 32 0" fill="none" stroke="#1f2937" stroke-width="2.5" stroke-linecap="round"/>
		</svg>
		<?php
		break;
	case 'marketing':
		?>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="120" height="100" focusable="false">
			<rect x="32" y="58" width="14" height="28" rx="2" fill="#0071bc"/>
			<rect x="53" y="42" width="14" height="44" rx="2" fill="#0071bc" opacity="0.85"/>
			<rect x="74" y="28" width="14" height="58" rx="2" fill="#0071bc" opacity="0.7"/>
			<path d="M26 86h68" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/>
		</svg>
		<?php
		break;
	case 'consulting':
		?>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="120" height="100" focusable="false">
			<path d="M44 38c0-10 8-18 18-18h12c10 0 18 8 18 18v6c0 4-3 7-7 7H51c-4 0-7-3-7-7v-6z" fill="#ffedd5" stroke="#fb923c" stroke-width="2.2"/>
			<path d="M50 38v-4c0-6 5-11 11-11h8c6 0 11 5 11 11v4" fill="none" stroke="#fb923c" stroke-width="2.2" stroke-linecap="round"/>
			<line x1="60" y1="72" x2="60" y2="82" stroke="#fb923c" stroke-width="2.5" stroke-linecap="round"/>
			<path d="M52 82h16" stroke="#fb923c" stroke-width="2.5" stroke-linecap="round"/>
		</svg>
		<?php
		break;
	case 'branding':
	default:
		?>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="120" height="100" focusable="false">
			<path d="M60 18l10 22 22 4-16 16 4 22-20-11-20 11 4-22-16-16 22-4z" fill="#0071bc" opacity="0.95"/>
			<path d="M28 36l4 4-4 4-4-4z" fill="#0071bc"/>
			<path d="M88 28l3 3-3 3-3-3z" fill="#0071bc"/>
			<path d="M92 62l3 3-3 3-3-3z" fill="#0071bc"/>
		</svg>
		<?php
		break;
}
?>
</span>
