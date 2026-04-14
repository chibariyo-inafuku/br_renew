<?php
/**
 * Home: Project / News — scroll-driven earth scale + rise; centered quote (GSAP).
 *
 * @package br
 */

$earth = get_template_directory_uri() . '/assets/images/home/earth.png';
?>
<section class="br-home__parallax" aria-labelledby="br-home-parallax-quote">
	<div class="br-home__parallax-scene">
		<div class="br-home__parallax-globe-wrap" aria-hidden="true">
			<img
				class="br-home__parallax-globe"
				src="<?php echo esc_url( $earth ); ?>"
				alt=""
				decoding="async"
				loading="lazy"
			>
		</div>
		<div class="br-home__parallax-inner">
			<p id="br-home-parallax-quote" class="br-home__parallax-quote">
				<?php esc_html_e( 'Creativity endures. Innovation evolves.', 'br' ); ?>
			</p>
		</div>
	</div>
</section>
