<?php
/**
 * Home: Blog grid — capture row + VIEW ALL, 4×3 cards (12), image + title + date.
 *
 * @package br
 */

$q    = br_query_posts_for_category_slug_limited( 'blogs', 12 );
$more = br_get_page_permalink_by_slug( 'blog' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section class="br-home__section br-home__section--blog br-home__section--blog-band br-home__section--blog-light br-home__blog">
	<div class="br-container">
		<div class="br-home__blog-band-head">
			<header class="br-home__blog-heading br-home__section-head">
				<h2 class="br-home__blog-title br-home__blog-title--capture-row">
					<span class="screen-reader-text">Blog / ブログ</span>
					<span class="br-home__blog-title-capture" aria-hidden="true">
						<span class="br-home__blog-title-capture__en">Blog</span>
						<span class="br-home__blog-title-capture__jp">ブログ</span>
					</span>
				</h2>
			</header>
			<?php if ( $more !== '' ) : ?>
				<a class="br-home__blog-viewall" href="<?php echo esc_url( $more ); ?>">
					<span class="br-home__blog-viewall__label">VIEW ALL</span>
					<span class="br-home__blog-viewall__icon" aria-hidden="true">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
							<path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</span>
				</a>
			<?php endif; ?>
		</div>
		<ul class="br-home__blog-grid">
			<?php
			while ( $q->have_posts() ) :
				$q->the_post();
				get_template_part(
					'template-parts/post/blog',
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
