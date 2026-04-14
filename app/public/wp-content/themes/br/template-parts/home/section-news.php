<?php
/**
 * Home: News list — two-column (Figma 159:6138 + capture).
 *
 * @package br
 */

$q    = br_query_posts_for_category_slug_limited( 'news-s', 2 );
$more = br_get_page_permalink_by_slug( 'news' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section class="br-home__section br-home__section--news br-home__section--tint">
	<div class="br-container">
		<div class="br-home__news-layout">
			<header class="br-home__news-heading">
				<h2 class="br-home__news-title">
					<span class="br-home__news-title-en"><?php esc_html_e( 'News', 'br' ); ?></span>
					<span class="br-home__news-title-jp"><?php esc_html_e( '/ 事業紹介', 'br' ); ?></span>
				</h2>
			</header>
			<ul class="br-home__news-list">
				<?php
				while ( $q->have_posts() ) :
					$q->the_post();
					?>
				<li class="br-home__news-item">
					<a class="br-home__news-link" href="<?php the_permalink(); ?>">
						<div class="br-home__news-media">
							<?php
							if ( has_post_thumbnail() ) {
								the_post_thumbnail( 'medium' );
							} else {
								?>
							<span class="br-home__news-media-placeholder" aria-hidden="true"></span>
								<?php
							}
							?>
						</div>
						<div class="br-home__news-body">
							<time class="br-home__news-date" datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>"><?php echo esc_html( get_the_date( 'Y.m.d' ) ); ?></time>
							<span class="br-home__news-item-title"><?php the_title(); ?></span>
						</div>
					</a>
				</li>
				<?php endwhile; ?>
			</ul>
			<?php if ( $more !== '' ) : ?>
			<div class="br-home__news-cta-wrap">
				<a class="br-home__btn br-home__btn--news-cta" href="<?php echo esc_url( $more ); ?>">
					<span class="br-home__btn-dot" aria-hidden="true"></span>
					<span class="br-home__btn-label"><?php esc_html_e( 'View All News', 'br' ); ?></span>
				</a>
			</div>
			<?php endif; ?>
		</div>
	</div>
</section>
<?php
wp_reset_postdata();
