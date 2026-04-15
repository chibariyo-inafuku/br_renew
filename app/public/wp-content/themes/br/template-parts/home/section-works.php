<?php
/**
 * Home: Works teaser grid — Figma 準拠.
 *
 * br-svg-heading: To reuse the animated H2 on a fixed page, copy the entire <h2>…</h2>
 * block below. Keep data-br-svg-heading; set an ancestor color (e.g. white on dark).
 * Theme assets: main.css (.br-svg-heading*) + svg-heading-inview.js (enqueued globally).
 *
 * @package br
 */

$q    = br_query_portfolio_for_list_term_limited( 'works-s', 9 );
$more = br_get_page_permalink_by_slug( 'works' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section class="br-home__section br-home__section--works br-home__section--works-band br-home__works br-home__section--band-reveal br-home__band-reveal--up">
	<div class="br-container">
		<div class="br-home__band-reveal-inner">
		<!-- br-svg-heading: copy this <h2> block; optional class br-svg-heading--on-light on light backgrounds. -->
		<header class="br-home__works-heading br-home__section-head">
			<h2 class="br-home__works-title">
				<span class="screen-reader-text">Works / 実績紹介</span>
				<div class="br-svg-heading" data-br-svg-heading>
					<svg
						class="br-svg-heading__svg"
						aria-hidden="true"
						viewBox="0 0 640 102"
						preserveAspectRatio="xMinYMin meet"
						focusable="false"
					>
						<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Works</text>
					</svg>
					<div class="br-svg-heading__sub-wrap">
						<span class="br-home__works-title-jp br-svg-heading__sub">/ 実績紹介</span>
					</div>
				</div>
			</h2>
		</header>
		<ul class="br-home__works-grid">
			<?php
			while ( $q->have_posts() ) :
				$q->the_post();
				$pid   = get_the_ID();
				$badge = br_get_portfolio_card_category_label( $pid );
				?>
				<li class="br-home__works-item">
					<a class="br-home__works-card" href="<?php the_permalink(); ?>">
						<div class="br-home__works-card-media">
							<?php
							if ( ! br_the_portfolio_hover_cycle_stack( $pid, 'br-home__works-card-image' ) ) :
								if ( has_post_thumbnail() ) :
									?>
							<div class="br-home__works-card-image">
								<?php the_post_thumbnail( 'medium_large' ); ?>
							</div>
									<?php
								else :
									?>
							<div class="br-home__works-card-image br-home__works-card-image--placeholder" aria-hidden="true"></div>
									<?php
								endif;
							endif;
							?>
						</div>
						<div class="br-home__works-card-overlay">
							<?php if ( $badge !== '' ) : ?>
								<span class="br-home__works-card-badge"><?php echo esc_html( $badge ); ?></span>
							<?php endif; ?>
							<span class="br-home__works-card-title"><?php the_title(); ?></span>
						</div>
					</a>
				</li>
			<?php endwhile; ?>
		</ul>
		<?php if ( $more !== '' ) : ?>
			<div class="br-home__works-footer">
				<a class="br-home__btn br-home__btn--works-cta" href="<?php echo esc_url( $more ); ?>">
					<span class="br-home__btn-dot" aria-hidden="true"></span>
					<span class="br-home__btn-label"><?php esc_html_e( 'View All Works', 'br' ); ?></span>
				</a>
			</div>
		<?php endif; ?>
		</div>
	</div>
</section>
<?php
wp_reset_postdata();
