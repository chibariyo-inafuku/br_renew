<?php
/**
 * News teaser row (hero + /news/ list): thumbnail + date + title in .br-home__news-body.
 *
 * @package br
 *
 * @param array $args {
 *     @type int    $post_id Post ID. Optional when called inside a loop after the_post().
 *     @type string $variant Optional. Pass `hero` for TOP hero card (kicker + title + date order).
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

$variant = '';
if ( isset( $args['variant'] ) && is_string( $args['variant'] ) ) {
	$variant = $args['variant'];
}
$is_hero = ( $variant === 'hero' );

$permalink = get_permalink( $pid );
$title     = get_the_title( $pid );
if ( $permalink === false ) {
	return;
}

$date_display = get_the_date( 'Y.m.d', $pid );
$date_attr    = get_the_date( DATE_W3C, $pid );

$item_classes = 'br-home__news-item';
if ( $is_hero ) {
	$item_classes .= ' br-home__news-item--hero';
}
?>
<li class="<?php echo esc_attr( $item_classes ); ?>"<?php echo $is_hero ? '' : ' data-br-subpage-reveal data-br-subpage-reveal-stagger'; ?>>
	<a class="br-home__news-link" href="<?php echo esc_url( $permalink ); ?>">
		<div class="br-home__news-media">
			<?php
			if ( has_post_thumbnail( $pid ) ) {
				echo get_the_post_thumbnail( $pid, 'medium' );
			} else {
				?>
			<span class="br-home__news-media-placeholder" aria-hidden="true"></span>
				<?php
			}
			?>
		</div>
		<div class="br-home__news-body">
			<?php if ( $is_hero ) : ?>
				<span class="br-home__news-kicker">最新ニュース</span>
				<span class="br-home__news-item-title"><?php echo esc_html( $title ); ?></span>
				<time class="br-home__news-date" datetime="<?php echo esc_attr( $date_attr ); ?>"><?php echo esc_html( $date_display ); ?></time>
			<?php else : ?>
				<time class="br-home__news-date" datetime="<?php echo esc_attr( $date_attr ); ?>"><?php echo esc_html( $date_display ); ?></time>
				<span class="br-home__news-item-title"><?php echo esc_html( $title ); ?></span>
			<?php endif; ?>
		</div>
	</a>
</li>
