<?php
/**
 * Static page slug: project
 *
 * Same portfolio grid as works; use page content for a distinct intro or split content in the editor.
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	$q = br_query_portfolio_for_page( 12 );
	?>
<main id="main" class="br-main br-container">
	<article <?php post_class( 'br-page' ); ?>>
		<header class="br-page__header">
			<h1 class="br-page__title"><?php the_title(); ?></h1>
			<div class="br-page__intro br-content"><?php the_content(); ?></div>
		</header>

		<?php if ( $q->have_posts() ) : ?>
			<ul class="br-card-grid">
				<?php
				while ( $q->have_posts() ) :
					$q->the_post();
					$pid = get_the_ID();
					?>
					<li class="br-card">
						<a class="br-card__link" href="<?php the_permalink(); ?>">
							<?php if ( has_post_thumbnail() ) : ?>
								<div class="br-card__image"><?php the_post_thumbnail( 'medium_large' ); ?></div>
							<?php endif; ?>
							<h2 class="br-card__title"><?php the_title(); ?></h2>
							<?php
							$sum = br_get_portfolio_summary( $pid );
							if ( $sum !== '' ) {
								echo '<p class="br-card__excerpt">' . esc_html( wp_trim_words( $sum, 24 ) ) . '</p>';
							}
							?>
						</a>
					</li>
				<?php endwhile; ?>
			</ul>
			<?php
			br_the_pagination( $q, get_permalink() );
			wp_reset_postdata();
		else :
			?>
			<p><?php esc_html_e( 'No projects found.', 'br' ); ?></p>
		<?php endif; ?>
	</article>
</main>
	<?php
endwhile;

get_footer();
