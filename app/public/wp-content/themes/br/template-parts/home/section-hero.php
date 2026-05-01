<?php
/**
 * Home: hero — two-column (copy + CTA | masked video), decorative art layer.
 *
 * @package br
 */

$copy    = br_home_get_copy();
$cta_url = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'works' ) : '';
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

<section class="br-home__section br-home__section--hero br-home__hero" aria-label="<?php esc_attr_e( 'Introduction', 'br' ); ?>">
	<div class="br-home__hero-art" aria-hidden="true">
		<svg class="br-hero-blob-mask-def" width="0" height="0" aria-hidden="true" focusable="false">
			<defs>
				<mask id="br-hero-blob-dynamic-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox" x="0" y="0" width="1" height="1">
					<!-- 空 d のままだと初回ペイントでマスクが破綻するため、home-gsap.js の BLOB_BASE と同じ初期パスを埋める -->
					<path id="br-hero-blob-morph-path" fill="white" fill-rule="evenodd" d="M 0.36427 0.83652 C 0.23271 0.76823 0.04980 0.73890 0.01770 0.59565 C -0.01530 0.44840 0.12043 0.32721 0.22566 0.21797 C 0.32855 0.11114 0.44171 -0.01297 0.59041 0.00109 C 0.73715 0.01497 0.82540 0.15629 0.90014 0.28175 C 0.96691 0.39383 1.00551 0.51897 0.97412 0.64520 C 0.94016 0.78170 0.86578 0.92287 0.73009 0.96544 C 0.60031 1.00616 0.48484 0.89911 0.36427 0.83652 Z" />
				</mask>
			</defs>
		</svg>
		<div class="br-home__hero-art-piece br-home__hero-art-piece--blue" aria-hidden="true">
			<div class="br-home__hero-art-blue-anchor">
				<span class="br-home__hero-art-blue-ring"></span>
				<span class="br-home__hero-art-blue-split-dots">
					<span class="br-home__hero-art-blue-split-dot"></span>
					<span class="br-home__hero-art-blue-split-dot"></span>
					<span class="br-home__hero-art-blue-split-dot"></span>
					<span class="br-home__hero-art-blue-split-dot"></span>
					<span class="br-home__hero-art-blue-split-dot"></span>
					<span class="br-home__hero-art-blue-split-dot"></span>
					<span class="br-home__hero-art-blue-split-dot"></span>
					<span class="br-home__hero-art-blue-split-dot"></span>
					<span class="br-home__hero-art-blue-split-dot"></span>
					<span class="br-home__hero-art-blue-split-dot"></span>
				</span>
			</div>
		</div>
		<div class="br-home__hero-art-piece br-home__hero-art-piece--blob">
			<img
				class="br-home__hero-art-blob-img"
				src="<?php echo esc_url( $img . '/object1.svg' ); ?>"
				alt=""
				loading="eager"
				decoding="async"
			/>
		</div>
		<!--<div class="br-home__hero-art-piece br-home__hero-art-piece--blob br-home__hero-art-piece--blob--accent" aria-hidden="true">
			<img
				class="br-home__hero-art-blob-img"
				src="<?php echo esc_url( $img . '/object1.svg' ); ?>"
				alt=""
				loading="eager"
				decoding="async"
			/>
		</div>-->
		<script>
		(function () {
			document.querySelectorAll('.br-home__hero-art-blob-img').forEach(function (img) {
				function markReady() {
					var piece = img.closest('.br-home__hero-art-piece--blob');
					if (piece) {
						piece.classList.add('br-home__hero-art-blob--piece-ready');
					}
				}
				if (img.complete) {
					markReady();
				} else {
					img.addEventListener('load', markReady, { once: true });
					img.addEventListener('error', markReady, { once: true });
				}
			});
		}());
		</script>

		<!--<div class="br-home__hero-art-piece br-home__hero-art-piece--scribble"></div>-->
		<div class="br-home__hero-play-letters" aria-hidden="true">
			<img
				class="br-home__hero-play-letters-img"
				src="<?php echo esc_url( $img . '/txt.svg' ); ?>"
				alt=""
				loading="eager"
				decoding="async"
			/>
		</div>
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
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
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
						class="br-home__hero-playmovie is-playing"
						data-br-hero-play
						aria-controls="br-home-hero-video"
					>
						<span class="br-home__hero-playmovie-label"><?php esc_html_e( 'Pause movie', 'br' ); ?></span>
						<span class="br-home__hero-playmovie-icon" aria-hidden="true">
							<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
								<circle cx="22" cy="22" r="21" stroke="currentColor" stroke-width="1.5"/>
								<path class="br-home__hero-playmovie-icon-play" d="M18 15L30 22L18 29V15Z" fill="currentColor"/>
								<g class="br-home__hero-playmovie-icon-pause" fill="currentColor">
									<rect x="17" y="15" width="4" height="14" rx="1"/>
									<rect x="23" y="15" width="4" height="14" rx="1"/>
								</g>
							</svg>
						</span>
					</button>
				</div>

				<div class="br-home__hero-inset" aria-hidden="true">
					<div class="br-home__hero-art-piece br-home__hero-art-piece--dashes">
						<img
							class="br-home__hero-art-dashes-img"
							src="<?php echo esc_url( $img . '/rain.svg' ); ?>"
							alt=""
							loading="eager"
							decoding="async"
						/>
					</div>
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
					get_template_part(
						'template-parts/post/news',
						'home-card',
						array(
							'post_id' => (int) get_the_ID(),
							'variant' => 'hero',
						)
					);
				endwhile;
				?>
			</ul>
		</aside>
	</div>
	<?php wp_reset_postdata(); endif; ?>
</section>
