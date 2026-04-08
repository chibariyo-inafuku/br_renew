<?php
/**
 * Home: contact CTA band — Figma 準拠 (background image + overlay).
 *
 * @package br
 */

$copy = br_home_get_copy();
$cta  = br_get_page_permalink_by_slug( 'contact' );
$img  = get_template_directory_uri() . '/assets/images/home';
if ( $cta === '' ) {
	return;
}
?>
<section class="br-home__section br-home__section--cta br-home__cta">
	<div class="br-home__cta-bg" aria-hidden="true">
		<img class="br-home__cta-bg-img" src="<?php echo esc_url( $img . '/cta-bg.png' ); ?>" alt="" loading="lazy">
		<div class="br-home__cta-bg-overlay"></div>
	</div>
	<div class="br-container br-home__cta-inner">
		<p class="br-home__cta-title-jp"><?php echo esc_html( $copy['cta_title_jp'] ); ?></p>
		<h2 class="br-home__cta-title-en"><?php echo esc_html( $copy['cta_title_en'] ); ?></h2>
		<p class="br-home__cta-lead"><?php echo esc_html( $copy['cta_lead'] ); ?></p>
		<p class="br-home__cta-action">
			<a class="br-home__btn br-home__btn--on-dark" href="<?php echo esc_url( $cta ); ?>"><?php echo esc_html( $copy['cta_button'] ); ?></a>
		</p>
	</div>
</section>
