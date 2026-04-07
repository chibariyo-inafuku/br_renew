<?php
/**
 * Static page slug: service
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	$q = br_query_posts_for_page( 'service', 10 );
	?>
<main id="main" class="br-main br-container">
	<article <?php post_class( 'br-page' ); ?>>
		<header class="br-page__header">
			<h1 class="br-page__title"><?php the_title(); ?></h1>
			<div class="br-page__intro br-content"><?php the_content(); ?></div>
		</header>

		<?php if ( $q->have_posts() ) : ?>
			<ul class="br-card-grid br-card-grid--posts">
				<?php
				while ( $q->have_posts() ) :
					$q->the_post();
					?>
					<li class="br-card">
						<a class="br-card__link" href="<?php the_permalink(); ?>">
							<?php if ( has_post_thumbnail() ) : ?>
								<div class="br-card__image"><?php the_post_thumbnail( 'medium_large' ); ?></div>
							<?php endif; ?>
							<h2 class="br-card__title"><?php the_title(); ?></h2>
							<p class="br-card__meta"><?php echo esc_html( get_the_date() ); ?></p>
							<p class="br-card__excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p>
						</a>
					</li>
				<?php endwhile; ?>
			</ul>
			<?php
			br_the_pagination( $q, get_permalink() );
			wp_reset_postdata();
		else :
			?>
			<p><?php esc_html_e( 'No posts yet.', 'br' ); ?></p>
		<?php endif; ?>
	</article>
</main>
	<?php
endwhile;

get_footer();
