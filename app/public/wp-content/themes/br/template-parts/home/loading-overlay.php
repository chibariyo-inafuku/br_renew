<?php
/**
 * TOP only: full-screen white loader that assembles the BR mark piece by piece.
 *
 * Final stacking (bottom -> top):
 *   tri (loading01) -> d2 (loading02) -> d3 (loading03) -> d4 (loading04)
 *
 * Animation sequence (see home-loading.js):
 *   1. loading01.png — navy triangle, slides in from the left
 *   2. loading02.png — medium-blue D, slides in from the left
 *   3. loading03.png — dark-navy D, slides in from the left
 *   4. loading04.png — cyan D, slides in from the left
 *   5. tagline text — fades up
 *
 * @package br
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$br_img = get_template_directory_uri() . '/assets/images/home';
?>
<div
	id="br-home-page-loader"
	class="br-home__page-loader"
	data-br-home-page-loader
	aria-hidden="true"
>
	<div class="br-home__page-loader-inner">
		<div class="br-home__page-loader-mark" aria-hidden="true">
			<img
				class="br-home__page-loader-piece br-home__page-loader-piece--tri"
				data-piece="tri"
				src="<?php echo esc_url( $br_img . '/loading01.png' ); ?>"
				alt=""
				width="147"
				height="174"
				decoding="async"
				fetchpriority="high"
			/>
			<img
				class="br-home__page-loader-piece br-home__page-loader-piece--d2"
				data-piece="d2"
				src="<?php echo esc_url( $br_img . '/loading02.png' ); ?>"
				alt=""
				width="144"
				height="148"
				decoding="async"
			/>
			<img
				class="br-home__page-loader-piece br-home__page-loader-piece--d3"
				data-piece="d3"
				src="<?php echo esc_url( $br_img . '/loading03.png' ); ?>"
				alt=""
				width="144"
				height="148"
				decoding="async"
			/>
			<img
				class="br-home__page-loader-piece br-home__page-loader-piece--d4"
				data-piece="d4"
				src="<?php echo esc_url( $br_img . '/loading04.png' ); ?>"
				alt=""
				width="144"
				height="148"
				decoding="async"
			/>
		</div>
		<p class="br-home__page-loader-tagline">AIと共創する新しい<br class="br-home__page-loader-tagline-br" />プロモーションパートナー</p>
	</div>
</div>
