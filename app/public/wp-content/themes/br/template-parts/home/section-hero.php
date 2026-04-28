<?php
/**
 * Home: hero — two-column (copy + CTA | masked video), decorative art layer.
 *
 * @package br
 */

$copy    = br_home_get_copy();
$cta_url = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'contact' ) : '';
$cta_href = ( $cta_url !== '' ) ? esc_url( $cta_url ) : esc_url( '#' );
$img     = get_template_directory_uri() . '/assets/images/home';
$vid     = get_template_directory_uri() . '/assets/videos/fv_movie.mp4';
$title   = isset( $copy['hero_title'] ) && $copy['hero_title'] !== '' ? $copy['hero_title'] : $copy['hero_line_1'];
$news_q  = function_exists( 'br_query_posts_for_category_slug_limited' ) ? br_query_posts_for_category_slug_limited( 'news-s', 1 ) : new WP_Query();

$hero_title_break = '遊び心で、';
$hero_title_lines = null;
if ( function_exists( 'mb_strpos' ) && function_exists( 'mb_strlen' ) && function_exists( 'mb_substr' ) ) {
	if ( mb_strpos( $title, $hero_title_break, 0, 'UTF-8' ) === 0 ) {
		$hero_title_lines = array(
			$hero_title_break,
			mb_substr( $title, mb_strlen( $hero_title_break, 'UTF-8' ), null, 'UTF-8' ),
		);
	}
} elseif ( strpos( $title, $hero_title_break ) === 0 ) {
	$hero_title_lines = array(
		$hero_title_break,
		substr( $title, strlen( $hero_title_break ) ),
	);
}
?>
<div class="br-home__hero-art-piece br-home__hero-art-piece--blue"></div>
<section class="br-home__section br-home__section--hero br-home__hero" aria-label="<?php esc_attr_e( 'Introduction', 'br' ); ?>">
	<div class="br-home__hero-art" aria-hidden="true">
		<div class="br-home__hero-art-piece br-home__hero-art-piece--blob"></div>
		
		<!--<div class="br-home__hero-art-piece br-home__hero-art-piece--scribble"></div>-->
		<div class="br-home__hero-art-piece br-home__hero-art-piece--dashes"></div>
		<p class="br-home__hero-play-letters">
			<span>P</span><span>L</span><span>A</span><span>Y</span>
		</p>
	</div>

	<div class="br-home__hero-inner br-container">
		<div class="br-home__hero-layout">
			<div class="br-home__hero-col br-home__hero-col--text">
				<h1 class="br-home__hero-title">
					<?php if ( is_array( $hero_title_lines ) && $hero_title_lines[1] !== '' ) : ?>
						<span class="br-home__hero-title-line"><?php echo esc_html( $hero_title_lines[0] ); ?></span><br class="br-home__hero-title-br" aria-hidden="true" /><span class="br-home__hero-title-line"><?php echo esc_html( $hero_title_lines[1] ); ?></span>
					<?php else : ?>
						<?php echo esc_html( $title ); ?>
					<?php endif; ?>
				</h1>
				<?php if ( $copy['hero_lead'] !== '' ) : ?>
					<p class="br-home__hero-lead"><?php echo esc_html( $copy['hero_lead'] ); ?></p>
				<?php endif; ?>
				<?php if ( $copy['hero_cta'] !== '' && $cta_href !== '#' ) : ?>
					<p class="br-home__hero-cta">
						<a
							class="br-header__cta--pill br-home__hero-cta-link"
							href="<?php echo $cta_href; ?>"
							aria-label="<?php echo esc_attr( $copy['hero_cta'] ); ?>"
						>
							<span class="br-header__cta-text"><?php echo esc_html( $copy['hero_cta'] ); ?></span>
							<span class="br-header__cta-arrow" aria-hidden="true">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
									<path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</span>
						</a>
					</p>
				<?php endif; ?>
			</div>

			<div class="br-home__hero-col br-home__hero-col--media">
				<div class="br-home__hero-media" data-br-hero-media>
					<div class="br-home__hero-media-clip">
						<div class="br-home__hero-media-clip-spin">
							<div class="br-home__hero-media-clip-morph">
								<div class="br-home__hero-video-scale">
									<div class="br-home__hero-video-overscan">
										<div class="br-home__hero-video-rotate">
											<video
												id="br-home-hero-video"
												class="br-home__hero-video"
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
								</div>
							</div>
						</div>
					</div>
					<button
						type="button"
						class="br-home__hero-playmovie"
						data-br-hero-play
						aria-controls="br-home-hero-video"
					>
						<span class="br-home__hero-playmovie-label"><?php esc_html_e( 'Pause movie', 'br' ); ?></span>
						<span class="br-home__hero-playmovie-icon" aria-hidden="true">
							<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
								<circle cx="22" cy="22" r="21" stroke="currentColor" stroke-width="1.5"/>
								<path d="M18 15L30 22L18 29V15Z" fill="currentColor"/>
							</svg>
						</span>
					</button>
				</div>

				<div class="br-home__hero-inset" aria-hidden="true">
					<img
						class="br-home__hero-inset-img"
						src="<?php echo esc_url( $img . '/1.png' ); ?>"
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>
		</div>
	</div>

	<?php if ( $news_q instanceof WP_Query && $news_q->have_posts() ) : ?>
	<div class="br-home__hero-foot br-container">
		<aside class="br-home__hero-news" aria-label="<?php esc_attr_e( 'Latest news', 'br' ); ?>">
			<ul class="br-home__hero-news-list br-home__news-list">
				<?php
				while ( $news_q->have_posts() ) :
					$news_q->the_post();
					get_template_part( 'template-parts/post/news', 'home-card', array( 'post_id' => (int) get_the_ID() ) );
				endwhile;
				?>
			</ul>
		</aside>
	</div>
	<?php wp_reset_postdata(); endif; ?>
</section>
