<?php
/**
 * Home: Blog grid — same structure/behavior as Project; distinct band color.
 *
 * @package br
 */

$q    = br_query_posts_for_category_slug_limited( 'blogs', 8 );
$more = br_get_page_permalink_by_slug( 'blog' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section class="br-home__section br-home__section--blog br-home__section--blog-band br-home__blog br-home__section--band-reveal br-home__band-reveal--left">
	<div class="br-container">
		<div class="br-home__band-reveal-inner">
		<header class="br-home__blog-heading br-home__section-head">
			<h2 class="br-home__blog-title">
				<span class="br-home__blog-title-en"><?php esc_html_e( 'Blog', 'br' ); ?></span>
				<span class="br-home__blog-title-jp"><?php esc_html_e( '/ ブログ', 'br' ); ?></span>
			</h2>
		</header>
		<ul class="br-home__blog-grid">
			<?php
			while ( $q->have_posts() ) :
				$q->the_post();
				$pid = get_the_ID();
				?>
				<li class="br-home__blog-item">
					<a class="br-home__blog-card" href="<?php the_permalink(); ?>">
						<div class="br-home__blog-card-media">
							<?php
							if ( ! br_the_portfolio_hover_cycle_stack( $pid, 'br-home__blog-card-image' ) ) :
								if ( has_post_thumbnail() ) :
									?>
							<div class="br-home__blog-card-image">
								<?php the_post_thumbnail( 'medium_large' ); ?>
							</div>
									<?php
								else :
									?>
							<div class="br-home__blog-card-image br-home__blog-card-image--placeholder" aria-hidden="true"></div>
									<?php
								endif;
							endif;
							?>
						</div>
						<div class="br-home__blog-card-overlay">
							<span class="br-home__blog-card-title"><?php the_title(); ?></span>
						</div>
					</a>
				</li>
			<?php endwhile; ?>
		</ul>
		<?php if ( $more !== '' ) : ?>
			<div class="br-home__blog-footer">
				<a class="br-home__btn br-home__btn--works-cta" href="<?php echo esc_url( $more ); ?>">
					<span class="br-home__btn-dot" aria-hidden="true"></span>
					<span class="br-home__btn-label"><?php esc_html_e( 'View All Blog', 'br' ); ?></span>
				</a>
			</div>
		<?php endif; ?>
		</div>
	</div>
</section>
<?php
wp_reset_postdata();
