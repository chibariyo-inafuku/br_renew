<?php
/**
 * Home: Service–CTA strip — palarax image + scroll-driven navy overlay + tagline (GSAP).
 *
 * @package br
 */

$palarax = get_template_directory_uri() . '/assets/images/home/palarax.png';
?>
<section
	class="br-home__section br-home__palarax"
	aria-labelledby="br-home-palarax-tagline"
>
	<div class="br-home__palarax-media" style="--br-palarax-image: url('<?php echo esc_url( $palarax ); ?>');"></div>
	<div class="br-home__palarax-overlay" aria-hidden="true"></div>
	<div class="br-home__palarax-inner">
		<div class="br-home__palarax-text-clip">
			<p id="br-home-palarax-tagline" class="br-home__palarax-tagline"><?php echo esc_html( 'Accelerate results. Master AI together.' ); ?></p>
		</div>
	</div>
</section>
