<?php
/**
 * Project category term archive (`project-categories` taxonomy).
 *
 * @package br
 */

get_header();
?>
<main id="main" class="br-main br-container">
	<header class="br-archive-header">
		<h1 class="br-archive-header__title"><?php single_term_title(); ?></h1>
		<?php
		$desc = term_description();
		if ( $desc ) {
			echo '<div class="br-archive-header__desc br-content">' . wp_kses_post( $desc ) . '</div>';
		}
		?>
	</header>

	<?php if ( have_posts() ) : ?>
		<ul class="br-card-grid">
			<?php
			while ( have_posts() ) :
				the_post();
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
		<?php br_the_pagination(); ?>
	<?php else : ?>
		<p><?php esc_html_e( 'Nothing found.', 'br' ); ?></p>
	<?php endif; ?>
</main>
<?php
get_footer();
