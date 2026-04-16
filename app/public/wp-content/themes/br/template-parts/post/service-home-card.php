<?php
/**
 * Service listing card (same markup as home section-service card, grid item).
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

$permalink = br_get_service_card_permalink( $pid );
$open_blank = br_service_card_link_opens_new_tab( $pid );
$title      = get_the_title( $pid );
if ( $permalink === '' ) {
	return;
}

$excerpt = get_post_field( 'post_excerpt', $pid );
$text    = ( is_string( $excerpt ) && trim( $excerpt ) !== '' )
	? $excerpt
	: wp_strip_all_tags( (string) get_post_field( 'post_content', $pid ) );
?>
<li class="br-home__service-item">
	<article class="br-home__service-card">
		<a
			class="br-home__service-card-link"
			href="<?php echo esc_url( $permalink ); ?>"
			<?php echo $open_blank ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>
		>
			<div class="br-home__service-card-media">
				<?php
				if ( has_post_thumbnail( $pid ) ) {
					echo get_the_post_thumbnail( $pid, 'medium_large' );
				}
				?>
			</div>
			<div class="br-home__service-card-body">
				<h3 class="br-home__service-card-title"><?php echo esc_html( $title ); ?></h3>
				<p class="br-home__service-card-text"><?php echo esc_html( $text ); ?></p>
			</div>
		</a>
	</article>
</li>
