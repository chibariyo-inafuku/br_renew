<?php
/**
 * Single portfolio project.
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	$pid          = get_the_ID();
	$gallery_ids  = br_get_portfolio_gallery_ids( $pid );
	$summary      = br_get_portfolio_summary( $pid );
	$external_url = '';
	if ( function_exists( 'get_field' ) ) {
		$external_url = (string) get_field( 'br_external_url', $pid );
	}
	?>
<main id="main" class="br-main br-container">
	<article <?php post_class( 'br-project' ); ?>>
		<header class="br-project__header">
			<h1 class="br-project__title"><?php the_title(); ?></h1>
			<?php if ( $summary !== '' ) : ?>
				<p class="br-project__summary"><?php echo esc_html( $summary ); ?></p>
			<?php endif; ?>
			<?php if ( $external_url !== '' && wp_http_validate_url( $external_url ) ) : ?>
				<p class="br-project__link">
					<a href="<?php echo esc_url( $external_url ); ?>" rel="noopener noreferrer" target="_blank"><?php esc_html_e( 'Visit project', 'br' ); ?></a>
				</p>
			<?php endif; ?>
		</header>

		<?php if ( has_post_thumbnail() ) : ?>
			<div class="br-project__hero">
				<?php the_post_thumbnail( 'large' ); ?>
			</div>
		<?php endif; ?>

		<?php if ( $gallery_ids ) : ?>
			<div class="br-project__gallery" aria-label="<?php esc_attr_e( 'Gallery', 'br' ); ?>">
				<?php
				foreach ( $gallery_ids as $att_id ) {
					if ( ! wp_attachment_is_image( $att_id ) ) {
						continue;
					}
					echo '<figure class="br-project__gallery-item">';
					echo wp_get_attachment_image( $att_id, 'large' );
					$caption = wp_get_attachment_caption( $att_id );
					if ( is_string( $caption ) && $caption !== '' ) {
						echo '<figcaption>' . esc_html( $caption ) . '</figcaption>';
					}
					echo '</figure>';
				}
				?>
			</div>
		<?php endif; ?>

		<div class="br-project__content br-content">
			<?php the_content(); ?>
		</div>

		<?php
		$terms = get_the_terms( $pid, 'project-categories' );
		if ( $terms && ! is_wp_error( $terms ) ) :
			?>
			<ul class="br-project__terms">
				<?php foreach ( $terms as $term ) : ?>
					<li><a href="<?php echo esc_url( get_term_link( $term ) ); ?>"><?php echo esc_html( $term->name ); ?></a></li>
				<?php endforeach; ?>
			</ul>
		<?php endif; ?>
	</article>
</main>
	<?php
endwhile;

get_footer();
