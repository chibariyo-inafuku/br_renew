<?php
/**
 * Home: MOVIE — full-bleed hero video (parallax) + scroll-scaling headline (GSAP).
 *
 * @package br
 */

$img = get_template_directory_uri() . '/assets/images/home';
$vid = get_template_directory_uri() . '/assets/videos/fv_movie.mp4';
?>
<section class="br-home__movie" aria-labelledby="br-home-movie-heading">
	<div class="br-home__movie-bg" aria-hidden="true">
		<div class="br-home__movie-media">
			<video
				class="br-home__movie-video"
				poster="<?php echo esc_url( $img . '/hero-bg.png' ); ?>"
				preload="metadata"
				muted
				loop
				playsinline
			>
				<source src="<?php echo esc_url( $vid ); ?>" type="video/mp4">
			</video>
		</div>
	</div>
	<div class="br-home__movie-scrim" aria-hidden="true"></div>
	<div class="br-home__movie-mesh" aria-hidden="true"></div>
	<div class="br-home__movie-inner">
		<h2 id="br-home-movie-heading" class="br-home__movie-title">CREATIVE with AI</h2>
	</div>
</section>
