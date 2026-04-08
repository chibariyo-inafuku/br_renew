<?php
/**
 * Home: hero — Figma 準拠.
 *
 * @package br
 */

$copy = br_home_get_copy();
$cta  = br_get_page_permalink_by_slug( 'contact' );
$img  = get_template_directory_uri() . '/assets/images/home';
?>
<section class="br-home__section br-home__section--hero br-home__hero" aria-label="<?php esc_attr_e( 'Introduction', 'br' ); ?>">
	<div class="br-home__hero-bg" aria-hidden="true">
		<img class="br-home__hero-bg-img" src="<?php echo esc_url( $img . '/hero-bg.png' ); ?>" alt="" loading="eager">
		<img class="br-home__hero-bg-overlay" src="<?php echo esc_url( $img . '/hero-overlay.png' ); ?>" alt="" loading="eager">
	</div>
	<div class="br-home__hero-inner">
		<div class="br-home__hero-text">
			<h1 class="br-home__hero-title">
				<span class="br-home__hero-title-line"><span class="br-home__hero-title-box"><?php echo esc_html( $copy['hero_line_1'] ); ?></span></span>
				<span class="br-home__hero-title-line"><span class="br-home__hero-title-box"><?php echo esc_html( $copy['hero_line_2'] ); ?></span></span>
			</h1>
			<p class="br-home__hero-lead"><?php echo esc_html( $copy['hero_lead'] ); ?></p>
			<?php if ( $cta !== '' ) : ?>
				<p class="br-home__hero-cta">
					<a class="br-home__btn br-home__btn--hero" href="<?php echo esc_url( $cta ); ?>">
						<span><?php echo esc_html( $copy['hero_cta'] ); ?></span>
						<span class="br-home__btn-dot" aria-hidden="true"></span>
					</a>
				</p>
			<?php endif; ?>
		</div>
	</div>
</section>
