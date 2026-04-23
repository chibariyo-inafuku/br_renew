<?php
/**
 * Home: hero — Figma 準拠.
 *
 * @package br
 */

$copy = br_home_get_copy();
$cta  = br_get_page_permalink_by_slug( 'contact' );
$img  = get_template_directory_uri() . '/assets/images/home';
$vid  = get_template_directory_uri() . '/assets/videos/fv_movie.mp4';
?>
<section class="br-home__section br-home__section--hero br-home__hero" aria-label="<?php esc_attr_e( 'Introduction', 'br' ); ?>">
	<div class="br-home__hero-bg" aria-hidden="true">
		<video
			class="br-home__hero-video"
			poster="<?php echo esc_url( $img . '/hero-bg.png' ); ?>"
			preload="auto"
			muted
			loop
			playsinline
		>
			<source src="<?php echo esc_url( $vid ); ?>" type="video/mp4">
		</video>
		<div class="br-home__hero-mesh"></div>
	</div>
	<div class="br-home__hero-inner">
		<div class="br-home__hero-text">
			<div class="br-home__hero-copy">
				<h1 class="br-home__hero-title">
					<span class="screen-reader-text">マーケティングプロモーションに、AIという武器を。</span>
					<span class="br-home__hero-title-layer br-home__hero-title-layer--desktop" aria-hidden="true">
						<span class="br-home__hero-title-line"><span class="br-home__hero-title-box">マーケティングプロモーションに、</span></span>
						<span class="br-home__hero-title-line"><span class="br-home__hero-title-box">AIという武器を。</span></span>
					</span>
					<span class="br-home__hero-title-layer br-home__hero-title-layer--mobile" aria-hidden="true">
						<span class="br-home__hero-title-line-group">
							<span class="br-home__hero-title-line"><span class="br-home__hero-title-box">マーケティング</span></span>
							<span class="br-home__hero-title-line"><span class="br-home__hero-title-box">プロモーションに、</span></span>
						</span>
						<span class="br-home__hero-title-line"><span class="br-home__hero-title-box">AIという武器を。</span></span>
					</span>
				</h1>
				<p class="br-home__hero-lead">期待を超えるクオリティとスピードで価値を創る、<br class="br-home__hero-lead-br" aria-hidden="true">AIクリエイティブスタジオ。</p>
			</div>
			<?php if ( $cta !== '' && $copy['hero_cta'] !== '' ) : ?>
				<p class="br-home__hero-cta">
					<a
						class="br-hop-btn"
						href="<?php echo esc_url( $cta ); ?>"
						data-text="<?php echo esc_attr( $copy['hero_cta'] ); ?>"
						aria-label="<?php echo esc_attr( $copy['hero_cta'] ); ?>"
					>
						<span class="br-hop-btn__dot-mover" aria-hidden="true"><span class="br-hop-btn__dot"></span></span>
					</a>
				</p>
			<?php endif; ?>
		</div>
	</div>
</section>
