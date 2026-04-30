<?php
/**
 * Home: Project portfolio grid — capture heading + VIEW ALL + cards (thumb, title + category below; Blog と同型).
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
<section class="br-home__section br-home__section--project br-home__section--project-band br-home__section--project-light br-home__project">
	<div class="br-container">
		<div class="br-home__project-band-head">
			<header class="br-home__project-heading br-home__section-head">
				<h2 class="br-home__project-title br-home__project-title--capture-row">
					<span class="screen-reader-text">Project / プロジェクト紹介</span>
					<span class="br-home__project-title-capture" aria-hidden="true">
						<span class="br-home__project-title-capture__en">Project</span>
						<span class="br-home__project-title-capture__jp">プロジェクト紹介</span>
					</span>
				</h2>
			</header>
			<?php if ( $more !== '' ) : ?>
				<a class="br-home__project-viewall" href="<?php echo esc_url( $more ); ?>">
					<span class="br-home__project-viewall__label">VIEW ALL</span>
					<span class="br-home__project-viewall__icon" aria-hidden="true">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
							<path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</span>
				</a>
			<?php endif; ?>
		</div>
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
						<div class="br-home__project-card-body">
							<div class="br-home__project-card-text-stack">
								<div class="br-home__project-card-text-slide">
									<span class="br-home__project-card-title"><?php the_title(); ?></span>
									<?php if ( $badge !== '' ) : ?>
										<span class="br-home__project-card-meta"><?php echo esc_html( $badge ); ?></span>
									<?php endif; ?>
								</div>
							</div>
						</div>
					</a>
				</li>
			<?php endwhile; ?>
		</ul>
	</div>
</section>
<?php
wp_reset_postdata();
