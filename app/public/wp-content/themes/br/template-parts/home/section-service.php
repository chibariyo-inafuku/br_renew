<?php
/**
 * Home: Service posts rail — Swiper carousel.
 *
 * @package br
 */

$q    = br_query_posts_for_category_slug_limited( 'services', 6 );
$more = br_get_page_permalink_by_slug( 'service' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section class="br-home__section br-home__section--service br-home__section--tint">
	<div class="br-container">
		<header class="br-home__section-head br-home__section-head--with-nav">
			<h2 class="br-home__section-title">
				<span class="br-home__section-title-en"><?php esc_html_e( 'Service', 'br' ); ?></span>
				<span class="br-home__section-title-jp"><?php esc_html_e( '/ 事業紹介', 'br' ); ?></span>
			</h2>
			<div class="br-home__section-head-right">
				<div class="br-home__rail-nav" role="group" aria-label="<?php esc_attr_e( 'Scroll services', 'br' ); ?>">
					<button type="button" class="br-home__rail-btn swiper-button-prev">
						<span class="screen-reader-text"><?php esc_html_e( 'Previous', 'br' ); ?></span>
						<span aria-hidden="true">&#8592;</span>
					</button>
					<button type="button" class="br-home__rail-btn swiper-button-next">
						<span class="screen-reader-text"><?php esc_html_e( 'Next', 'br' ); ?></span>
						<span aria-hidden="true">&#8594;</span>
					</button>
				</div>
				<?php if ( $more !== '' ) : ?>
					<a class="br-home__btn br-home__btn--accent" href="<?php echo esc_url( $more ); ?>"><?php esc_html_e( 'See More', 'br' ); ?></a>
				<?php endif; ?>
			</div>
		</header>
		<div class="swiper br-home__swiper">
			<div class="swiper-wrapper">
				<?php
				while ( $q->have_posts() ) :
					$q->the_post();
					?>
					<article class="swiper-slide br-home__service-card">
						<a class="br-home__service-card-link" href="<?php the_permalink(); ?>">
							<div class="br-home__service-card-media">
								<?php
								if ( has_post_thumbnail() ) {
									the_post_thumbnail( 'medium_large' );
								}
								?>
							</div>
							<div class="br-home__service-card-body">
								<h3 class="br-home__service-card-title"><?php the_title(); ?></h3>
								<p class="br-home__service-card-text"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 28 ) ); ?></p>
							</div>
						</a>
					</article>
				<?php endwhile; ?>
			</div>
		</div>
	</div>
</section>
<?php
wp_reset_postdata();
