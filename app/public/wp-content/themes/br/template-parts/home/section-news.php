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
					<span class="screen-reader-text">News / 事業紹介</span>
					<div class="br-svg-heading" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 720 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">News</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__news-title-jp br-svg-heading__sub">/ 事業紹介</span>
						</div>
					</div>
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
				<a
					class="br-hop-btn br-hop-btn--inverted"
					href="/news/"
					data-text="View All News"
					aria-label="View All News"
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
