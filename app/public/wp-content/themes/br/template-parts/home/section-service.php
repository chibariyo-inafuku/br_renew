<?php
/**
 * Home: Service posts rail — Swiper carousel (band + CTA like Project).
 *
 * @package br
 */

$q    = br_query_posts_for_category_slug_limited( 'services', 6, 'ASC' );
$more = br_get_page_permalink_by_slug( 'service' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section class="br-home__section br-home__section--service br-home__section--service-band br-home__service br-home__section--band-reveal br-home__band-reveal--up">
	<div class="br-container">
		<div class="br-home__band-reveal-inner">
		<header class="br-home__service-heading br-home__section-head br-home__section-head--with-nav">
			<h2 class="br-home__service-title">
				<span class="screen-reader-text">Service / 実績紹介</span>
				<div class="br-svg-heading" data-br-svg-heading>
					<svg
						class="br-svg-heading__svg"
						aria-hidden="true"
						viewBox="0 0 720 102"
						preserveAspectRatio="xMinYMin meet"
						focusable="false"
					>
						<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Service</text>
					</svg>
					<div class="br-svg-heading__sub-wrap">
						<span class="br-home__service-title-jp br-svg-heading__sub">/ 実績紹介</span>
					</div>
				</div>
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
			</div>
		</header>
		<div class="swiper br-home__swiper">
			<div class="swiper-wrapper">
				<?php
				while ( $q->have_posts() ) :
					$q->the_post();
					$pid        = get_the_ID();
					$card_href  = br_get_service_card_permalink( $pid );
					$card_blank = br_service_card_link_opens_new_tab( $pid );
					?>
					<article class="swiper-slide br-home__service-card">
						<a
							class="br-home__service-card-link"
							href="<?php echo esc_url( $card_href ); ?>"
							<?php echo $card_blank ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>
						>
							<div class="br-home__service-card-media">
								<?php
								if ( has_post_thumbnail() ) {
									the_post_thumbnail( 'medium_large' );
								}
								?>
							</div>
							<div class="br-home__service-card-body">
								<h3 class="br-home__service-card-title"><?php the_title(); ?></h3>
								<p class="br-home__service-card-text"><?php
									$excerpt = get_post_field( 'post_excerpt', $pid );
									$text    = ( is_string( $excerpt ) && trim( $excerpt ) !== '' )
										? $excerpt
										: wp_strip_all_tags( (string) get_post_field( 'post_content', $pid ) );
									echo esc_html( $text );
								?></p>
							</div>
						</a>
					</article>
				<?php endwhile; ?>
			</div>
		</div>
		<?php if ( $more !== '' ) : ?>
			<div class="br-home__service-footer">
				<a
					class="br-hop-btn"
					href="<?php echo esc_url( $more ); ?>"
					data-text="<?php echo esc_attr( __( 'View All Service', 'br' ) ); ?>"
					aria-label="<?php echo esc_attr( __( 'View All Service', 'br' ) ); ?>"
				>
					<span class="br-hop-btn__dot-mover" aria-hidden="true"><span class="br-hop-btn__dot"></span></span>
				</a>
			</div>
		<?php endif; ?>
		</div>
	</div>
</section>
<?php
wp_reset_postdata();
