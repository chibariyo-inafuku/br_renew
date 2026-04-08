<?php
/**
 * Home: News list.
 *
 * @package br
 */

$q    = br_query_posts_for_category_slug_limited( 'news-s', 4 );
$more = br_get_page_permalink_by_slug( 'news' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section class="br-home__section br-home__section--news br-home__section--tint">
	<div class="br-container">
		<header class="br-home__section-head br-home__section-head--split">
			<h2 class="br-home__section-title">
				<span class="br-home__section-title-en"><?php esc_html_e( 'News', 'br' ); ?></span>
				<span class="br-home__section-title-jp"><?php esc_html_e( '/ ニュース', 'br' ); ?></span>
			</h2>
			<?php if ( $more !== '' ) : ?>
				<a class="br-home__btn br-home__btn--accent br-home__btn--lg" href="<?php echo esc_url( $more ); ?>"><?php esc_html_e( 'View All News', 'br' ); ?></a>
			<?php endif; ?>
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
							}
							?>
						</div>
						<div class="br-home__news-body">
							<time class="br-home__news-date" datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time>
							<span class="br-home__news-title"><?php the_title(); ?></span>
						</div>
					</a>
				</li>
			<?php endwhile; ?>
		</ul>
	</div>
</section>
<?php
wp_reset_postdata();
