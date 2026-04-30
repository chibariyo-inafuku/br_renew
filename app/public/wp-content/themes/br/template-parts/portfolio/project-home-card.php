<?php
/**
 * Project listing card — thumb + title + category meta below (same as home section-project).
 *
 * @package br
 *
 * @param array $args {
 *     @type int $post_id Portfolio post ID. Optional when called inside a loop after the_post().
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

$badge     = br_get_portfolio_card_category_label( $pid );
$permalink = get_permalink( $pid );
$title     = get_the_title( $pid );
if ( $permalink === false ) {
	return;
}
?>
<li class="br-home__project-item" data-br-subpage-reveal data-br-subpage-reveal-stagger>
	<a class="br-home__project-card" href="<?php echo esc_url( $permalink ); ?>">
		<div class="br-home__project-card-media">
			<?php
			if ( ! br_the_portfolio_hover_cycle_stack( $pid, 'br-home__project-card-image' ) ) :
				if ( has_post_thumbnail( $pid ) ) :
					?>
			<div class="br-home__project-card-image">
				<?php echo get_the_post_thumbnail( $pid, 'medium_large' ); ?>
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
					<span class="br-home__project-card-title"><?php echo esc_html( $title ); ?></span>
					<?php if ( $badge !== '' ) : ?>
						<span class="br-home__project-card-meta"><?php echo esc_html( $badge ); ?></span>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</a>
</li>
