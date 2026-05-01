<?php
/**
 * Hero PLAY lettering: inline SVG with one wrapper per path for staggered scatter CSS.
 * Paths are sourced from assets/images/home/txt.svg (same geometry as the file asset).
 *
 * @package br
 */

$br_play_svg_path = get_template_directory() . '/assets/images/home/txt.svg';
$br_play_svg_raw  = is_readable( $br_play_svg_path ) ? file_get_contents( $br_play_svg_path ) : '';

if ( $br_play_svg_raw === '' || ! preg_match_all( '/<path\s+d="([^"]*)"/', $br_play_svg_raw, $br_play_path_matches ) || empty( $br_play_path_matches[1] ) ) {
	return;
}
?>
<svg class="br-home__hero-play-letters-svg" width="345" height="362" viewBox="0 0 345 362" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
<?php
foreach ( $br_play_path_matches[1] as $br_play_i => $br_play_d ) {
	echo '<g class="br-home__hero-play-letter" style="--br-play-letter-i:' . (int) $br_play_i . '">';
	echo '<path fill="currentColor" d="' . esc_attr( $br_play_d ) . '"></path>';
	echo '</g>';
}
?>
</svg>
