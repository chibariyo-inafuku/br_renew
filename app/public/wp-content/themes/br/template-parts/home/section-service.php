<?php
/**
 * Home: Service posts — Swiper carousel, illustrated cards, hover reveals organic photo.
 *
 * @package br
 */

$q    = br_query_posts_for_category_slug_limited( 'services', -1, 'ASC' );
$more = br_get_page_permalink_by_slug( 'service' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section class="br-home__section br-home__section--service br-home__section--service-band br-home__section--service-light br-home__service br-home__section--band-reveal br-home__band-reveal--up">
	<div class="br-container">
		<div class="br-home__band-reveal-inner">
		<div class="br-home__service-band-head">
			<header class="br-home__service-heading br-home__section-head">
				<h2 class="br-home__service-title br-home__service-title--capture-row">
					<span class="screen-reader-text">Service / サービス</span>
					<span class="br-home__service-title-capture" aria-hidden="true">
						<span class="br-home__service-title-capture__en">Service</span>
						<span class="br-home__service-title-capture__jp">サービス</span>
					</span>
				</h2>
			</header>
			<div class="br-home__service-band-head__rail">
				<div class="br-home__rail-nav" role="group" aria-label="<?php esc_attr_e( 'Scroll services', 'br' ); ?>">
					<button type="button" class="br-home__rail-btn swiper-button-prev">
						<span class="screen-reader-text"><?php esc_html_e( 'Previous', 'br' ); ?></span>
						<span aria-hidden="true">&#8592;</span>
					</button>
					<button type="button" class="br-home__rail-btn br-home__rail-btn--accent swiper-button-next">
						<span class="screen-reader-text"><?php esc_html_e( 'Next', 'br' ); ?></span>
						<span aria-hidden="true">&#8594;</span>
					</button>
				</div>
			</div>
		</div>
		<div class="swiper br-home__swiper br-home__swiper--service">
			<div class="swiper-wrapper">
				<?php
				$svc_i = 0;
				while ( $q->have_posts() ) :
					$q->the_post();
					$pid        = get_the_ID();
					$card_href  = br_get_service_card_permalink( $pid );
					$card_blank = br_service_card_link_opens_new_tab( $pid );
					$variant    = function_exists( 'br_home_service_card_illus_variant' )
						? br_home_service_card_illus_variant( $pid, $svc_i )
						: 'branding';
					$lines = function_exists( 'br_home_service_card_headlines' )
						? br_home_service_card_headlines( $pid )
						: array( get_the_title(), '' );
					$title_en = isset( $lines[0] ) ? $lines[0] : get_the_title();
					$title_jp = isset( $lines[1] ) ? $lines[1] : '';
					$excerpt  = get_post_field( 'post_excerpt', $pid );
					$text = ( is_string( $excerpt ) && trim( $excerpt ) !== '' )
						? trim( $excerpt )
						: wp_strip_all_tags( (string) get_post_field( 'post_content', $pid ) );
					++$svc_i;
					?>
					<article class="swiper-slide br-home__service-card" data-br-service-variant="<?php echo esc_attr( $variant ); ?>">
						<a
							class="br-home__service-card-link"
							href="<?php echo esc_url( $card_href ); ?>"
							<?php echo $card_blank ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>
						>
							<div class="br-home__service-card-visual">
								<div class="br-home__service-card-illus">
									<?php get_template_part( 'template-parts/home/service-card', 'illustration', array( 'variant' => $variant ) ); ?>
								</div>
								<?php if ( has_post_thumbnail( $pid ) ) : ?>
									<div class="br-home__service-card-photo" aria-hidden="true">
										<div class="br-home__service-card-photo-clip">
											<div class="br-home__service-card-photo-spin">
												<div class="br-home__service-card-photo-morph">
													<div class="br-home__service-card-photo-overscan">
														<div class="br-home__service-card-photo-rotate">
															<?php echo get_the_post_thumbnail( $pid, 'medium_large', array( 'class' => 'br-home__service-card-photo-img', 'alt' => '' ) ); ?>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								<?php endif; ?>
							</div>
							<div class="br-home__service-card-body">
								<h3 class="br-home__service-card-title">
									<span class="br-home__service-card-title-en"><?php echo esc_html( $title_en ); ?></span>
									<?php if ( $title_jp !== '' ) : ?>
										<span class="br-home__service-card-title-jp"><?php echo esc_html( $title_jp ); ?></span>
									<?php endif; ?>
								</h3>
								<?php if ( $text !== '' ) : ?>
									<p class="br-home__service-card-text"><?php echo esc_html( $text ); ?></p>
								<?php endif; ?>
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
