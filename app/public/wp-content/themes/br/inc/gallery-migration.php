<?php
/**
 * One-time migration: legacy `image_gallery` (ACF Photo Gallery) → `br_gallery_attachment_ids`.
 *
 * @package br
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Add tools submenu for administrators.
 */
function br_gallery_migration_admin_menu() {
	add_management_page(
		__( 'BR gallery migration', 'br' ),
		__( 'BR gallery migration', 'br' ),
		'manage_options',
		'br-gallery-migration',
		'br_gallery_migration_render_page'
	);
}
add_action( 'admin_menu', 'br_gallery_migration_admin_menu' );

/**
 * Run migration for all portfolio posts.
 *
 * @return array{updated:int,skipped:int}
 */
function br_run_gallery_migration() {
	$updated = 0;
	$skipped = 0;

	$q = new WP_Query(
		array(
			'post_type'              => 'portfolio',
			'post_status'            => 'any',
			'posts_per_page'         => -1,
			'fields'                 => 'ids',
			'no_found_rows'          => true,
			'update_post_meta_cache' => false,
			'update_post_term_cache' => false,
		)
	);

	foreach ( $q->posts as $post_id ) {
		$existing = get_post_meta( $post_id, 'br_gallery_attachment_ids', true );
		if ( is_array( $existing ) && $existing !== array() ) {
			++$skipped;
			continue;
		}

		$legacy = get_post_meta( $post_id, 'image_gallery', true );
		if ( ! is_string( $legacy ) || $legacy === '' ) {
			++$skipped;
			continue;
		}

		$ids = array_map( 'intval', array_filter( explode( ',', $legacy ) ) );
		if ( $ids === array() ) {
			++$skipped;
			continue;
		}

		update_post_meta( $post_id, 'br_gallery_attachment_ids', $ids );
		++$updated;
	}

	return array(
		'updated' => $updated,
		'skipped' => $skipped,
	);
}

/**
 * Admin page callback.
 */
function br_gallery_migration_render_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( esc_html__( 'Sorry, you are not allowed to access this page.', 'br' ) );
	}

	$notice = '';

	if ( isset( $_POST['br_gallery_migrate_nonce'] ) && wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['br_gallery_migrate_nonce'] ) ), 'br_gallery_migrate' ) ) {
		$result = br_run_gallery_migration();
		$notice = sprintf(
			/* translators: 1: number updated, 2: number skipped */
			__( 'Migration finished. Updated: %1$d. Skipped (already migrated or empty): %2$d.', 'br' ),
			(int) $result['updated'],
			(int) $result['skipped']
		);
	}

	?>
	<div class="wrap">
		<h1><?php echo esc_html( __( 'BR gallery migration', 'br' ) ); ?></h1>
		<p><?php echo esc_html( __( 'Copies comma-separated attachment IDs from legacy meta key `image_gallery` to `br_gallery_attachment_ids`. Safe to run multiple times.', 'br' ) ); ?></p>
		<?php if ( $notice ) : ?>
			<div class="notice notice-success is-dismissible"><p><?php echo esc_html( $notice ); ?></p></div>
		<?php endif; ?>
		<form method="post">
			<?php wp_nonce_field( 'br_gallery_migrate', 'br_gallery_migrate_nonce' ); ?>
			<p>
				<button type="submit" class="button button-primary"><?php echo esc_html( __( 'Run migration', 'br' ) ); ?></button>
			</p>
		</form>
	</div>
	<?php
}
