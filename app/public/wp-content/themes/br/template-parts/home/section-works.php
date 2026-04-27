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

$q    = br_query_portfolio_for_list_term_limited( 'works-s', 16 );
$more = br_get_page_permalink_by_slug( 'works' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section class="br-home__section br-home__section--works br-home__section--works-band br-home__section--works-light br-home__works">
	<div class="br-container">
		<div class="br-home__works-band-head">
			<!-- br-svg-heading: copy this <h2> block; br-svg-heading--on-light on light backgrounds. -->
			<header class="br-home__works-heading br-home__section-head">
				<h2 class="br-home__works-title br-home__works-title--capture-row">
					<span class="screen-reader-text">Works / 制作実績</span>
					<span class="br-home__works-title-capture" aria-hidden="true">
						<span class="br-home__works-title-capture__en">Works</span>
						<span class="br-home__works-title-capture__jp">制作実績</span>
					</span>
				</h2>
			</header>
			<?php if ( $more !== '' ) : ?>
				<a class="br-home__works-viewall" href="<?php echo esc_url( $more ); ?>">
					<span class="br-home__works-viewall__label">VIEW ALL</span>
					<span class="br-home__works-viewall__icon" aria-hidden="true">
						<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
							<path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</span>
				</a>
			<?php endif; ?>
		</div>
		<ul class="br-home__works-grid">
			<?php
			while ( $q->have_posts() ) :
				$q->the_post();
				get_template_part(
					'template-parts/portfolio/works',
					'home-card',
					array( 'post_id' => (int) get_the_ID() )
				);
			endwhile;
			?>
		</ul>
	</div>
</section>
<?php
wp_reset_postdata();
