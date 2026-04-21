<?php
/**
 * Blog listing card (same markup as home section-blog grid item).
 *
 * @package br
 *
 * @param array $args {
 *     @type int $post_id Post ID. Optional when called inside a loop after the_post().
 * }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$pid = 0;
if ( isset( $args ) && is_array( $args ) && isset( $args['post_id'] ) ) {
	$pid = (int) $args['post_id'];
}
if ( $pid < 1 ) {
	$pid = (int) get_the_ID();
}
if ( $pid < 1 ) {
	return;
}

$permalink = get_permalink( $pid );
$title       = get_the_title( $pid );
if ( $permalink === false ) {
	return;
}
?>
<li class="br-home__blog-item" data-br-subpage-reveal data-br-subpage-reveal-stagger>
	<a class="br-home__blog-card" href="<?php echo esc_url( $permalink ); ?>">
		<div class="br-home__blog-card-media">
			<?php
			if ( ! br_the_portfolio_hover_cycle_stack( $pid, 'br-home__blog-card-image' ) ) :
				if ( has_post_thumbnail( $pid ) ) :
					?>
			<div class="br-home__blog-card-image">
				<?php echo get_the_post_thumbnail( $pid, 'medium_large' ); ?>
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
			<span class="br-home__blog-card-title"><?php echo esc_html( $title ); ?></span>
		</div>
	</a>
</li>
