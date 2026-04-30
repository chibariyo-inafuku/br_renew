<?php
/**
 * Single Works band card (same markup as home section-works grid item).
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
<li class="br-home__works-item">
	<a class="br-home__works-card" href="<?php echo esc_url( $permalink ); ?>">
		<div class="br-home__works-card-media">
			<?php if ( has_post_thumbnail( $pid ) ) : ?>
				<div class="br-home__works-card-image">
					<?php echo get_the_post_thumbnail( $pid, 'medium_large' ); ?>
				</div>
			<?php else : ?>
				<div class="br-home__works-card-image br-home__works-card-image--placeholder" aria-hidden="true"></div>
			<?php endif; ?>
		</div>
		<div class="br-home__works-card-body">
			<div class="br-home__works-card-text-stack">
				<div class="br-home__works-card-text-slide">
					<span class="br-home__works-card-title"><?php echo esc_html( $title ); ?></span>
					<?php if ( $badge !== '' ) : ?>
						<span class="br-home__works-card-cat"><?php echo esc_html( $badge ); ?></span>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</a>
</li>
