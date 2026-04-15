<?php
/**
 * Home: Project portfolio grid — same behavior as Works; landscape aspect only.
 *
 * @package br
 */

$q    = br_query_portfolio_for_list_term_limited( 'project-s', 8 );
$more = br_get_page_permalink_by_slug( 'project' );
if ( ! $q->have_posts() ) {
	wp_reset_postdata();
	return;
}
?>
<section class="br-home__section br-home__section--project br-home__section--project-band br-home__project br-home__section--band-reveal br-home__band-reveal--right">
	<div class="br-container">
		<div class="br-home__band-reveal-inner">
		<header class="br-home__project-heading br-home__section-head">
			<h2 class="br-home__project-title">
				<span class="br-home__project-title-en">Project</span>
				<span class="br-home__project-title-jp">/ プロジェクト紹介</span>
			</h2>
		</header>
		<ul class="br-home__project-grid">
			<?php
			while ( $q->have_posts() ) :
				$q->the_post();
				$pid   = get_the_ID();
				$badge = br_get_portfolio_card_category_label( $pid );
				?>
				<li class="br-home__project-item">
					<a class="br-home__project-card" href="<?php the_permalink(); ?>">
						<div class="br-home__project-card-media">
							<?php
							if ( ! br_the_portfolio_hover_cycle_stack( $pid, 'br-home__project-card-image' ) ) :
								if ( has_post_thumbnail() ) :
									?>
							<div class="br-home__project-card-image">
								<?php the_post_thumbnail( 'medium_large' ); ?>
							</div>
									<?php
								else :
									?>
							<div class="br-home__project-card-image br-home__project-card-image--placeholder" aria-hidden="true"></div>
									<?php
								endif;
							endif;
							?>
						</div>
						<div class="br-home__project-card-overlay">
							<?php if ( $badge !== '' ) : ?>
								<span class="br-home__project-card-badge"><?php echo esc_html( $badge ); ?></span>
							<?php endif; ?>
							<span class="br-home__project-card-title"><?php the_title(); ?></span>
						</div>
					</a>
				</li>
			<?php endwhile; ?>
		</ul>
		<?php if ( $more !== '' ) : ?>
			<div class="br-home__project-footer">
				<a class="br-home__btn br-home__btn--works-cta" href="<?php echo esc_url( $more ); ?>">
					<span class="br-home__btn-dot" aria-hidden="true"></span>
					<span class="br-home__btn-label"><?php esc_html_e( 'View All Project', 'br' ); ?></span>
				</a>
			</div>
		<?php endif; ?>
		</div>
	</div>
</section>
<?php
wp_reset_postdata();
