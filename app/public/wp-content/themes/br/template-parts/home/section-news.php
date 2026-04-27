<?php
/**
 * Home: News list — single column (date / category / title; optional thumb).
 *
 * @package br
 */

$q    = br_query_posts_for_category_slug_limited( 'news-s', 5 );
$more = br_get_page_permalink_by_slug( 'news' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section
	class="br-home__section br-home__section--news"
	data-br-home-section-reveal
	aria-labelledby="br-home-news-heading"
>
	<div class="br-container br-home__news-reveal-inner">
		<div class="br-home__works-band-head">
			<header class="br-home__news-heading br-home__section-head">
				<h2 class="br-home__news-title br-home__works-title--capture-row" id="br-home-news-heading">
					<span class="screen-reader-text">News / お知らせ</span>
					<span class="br-home__works-title-capture" aria-hidden="true">
						<span class="br-home__works-title-capture__en">News</span>
						<span class="br-home__works-title-capture__jp">お知らせ</span>
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

		<ul class="br-home__news-list">
			<?php
			while ( $q->have_posts() ) :
				$q->the_post();
				$pid    = (int) get_the_ID();
				$badge  = function_exists( 'br_get_news_post_card_category_label' ) ? br_get_news_post_card_category_label( $pid ) : '';
				$has_th = has_post_thumbnail();
				?>
			<li class="br-home__news-item">
				<a
					class="br-home__news-link<?php echo $has_th ? ' br-home__news-link--has-thumb' : ''; ?>"
					href="<?php the_permalink(); ?>"
				>
					<?php if ( $has_th ) : ?>
					<div class="br-home__news-media">
						<?php the_post_thumbnail( 'thumbnail' ); ?>
					</div>
					<?php endif; ?>
					<div class="br-home__news-meta">
						<time class="br-home__news-date" datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>"><?php echo esc_html( get_the_date( 'Y.m.d' ) ); ?></time>
						<?php if ( $badge !== '' ) : ?>
						<span class="br-home__news-cat"><?php echo esc_html( $badge ); ?></span>
						<?php endif; ?>
					</div>
					<span class="br-home__news-item-title"><?php the_title(); ?></span>
				</a>
			</li>
				<?php
			endwhile;
			?>
		</ul>
	</div>
</section>
<?php
wp_reset_postdata();
