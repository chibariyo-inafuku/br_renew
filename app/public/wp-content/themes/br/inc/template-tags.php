<?php
/**
 * Template tags and helpers.
 *
 * @package br
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Attachment IDs for portfolio gallery: prefers migrated meta, then legacy ACF Photo Gallery (`image_gallery`).
 *
 * @param int $post_id Post ID.
 * @return int[] Attachment IDs in order.
 */
function br_get_portfolio_gallery_ids( $post_id ) {
	$post_id = (int) $post_id;
	if ( $post_id <= 0 ) {
		return array();
	}

	$migrated = get_post_meta( $post_id, 'br_gallery_attachment_ids', true );
	if ( is_array( $migrated ) && $migrated !== array() ) {
		return array_map( 'intval', array_filter( $migrated ) );
	}
	if ( is_string( $migrated ) && $migrated !== '' ) {
		$ids = array_map( 'intval', array_filter( explode( ',', $migrated ) ) );
		if ( $ids ) {
			return $ids;
		}
	}

	$legacy = get_post_meta( $post_id, 'image_gallery', true );
	if ( is_string( $legacy ) && $legacy !== '' ) {
		return array_map( 'intval', array_filter( explode( ',', $legacy ) ) );
	}

	return array();
}

/**
 * Optional short summary for portfolio (ACF or legacy meta keys).
 *
 * @param int $post_id Post ID.
 * @return string
 */
function br_get_portfolio_summary( $post_id ) {
	$post_id = (int) $post_id;
	if ( function_exists( 'get_field' ) ) {
		$v = get_field( 'br_summary', $post_id );
		if ( is_string( $v ) && $v !== '' ) {
			return $v;
		}
	}
	$excerpt = get_post_field( 'post_excerpt', $post_id );
	return is_string( $excerpt ) ? $excerpt : '';
}

/**
 * Print pagination for main or custom WP_Query loops.
 *
 * @param WP_Query|null $query      Query object. Defaults to main query.
 * @param string        $page_permalink Optional. Permalink of the static page when using a custom query (fixes /page/N/ on pages).
 */
function br_the_pagination( $query = null, $page_permalink = '' ) {
	if ( ! $query instanceof WP_Query ) {
		global $wp_query;
		$query = $wp_query;
	}

	$total = (int) $query->max_num_pages;
	if ( $total <= 1 ) {
		return;
	}

	$current = (int) get_query_var( 'paged' );
	if ( $current < 1 ) {
		$current = (int) get_query_var( 'page' );
	}
	if ( $current < 1 ) {
		$current = 1;
	}

	$args = array(
		'total'     => $total,
		'current'   => $current,
		'mid_size'  => 2,
		'prev_text' => __( 'Previous', 'br' ),
		'next_text' => __( 'Next', 'br' ),
		'type'      => 'list',
	);

	if ( $page_permalink !== '' ) {
		$args['base']   = trailingslashit( $page_permalink ) . 'page/%#%/';
		$args['format'] = '';
	}

	$links = paginate_links( $args );

	if ( $links ) {
		echo '<nav class="br-pagination" aria-label="' . esc_attr__( 'Pagination', 'br' ) . '">' . $links . '</nav>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}

/**
 * Current paged number for page templates (custom loops on static pages).
 *
 * @return int
 */
function br_get_query_paged() {
	$p = (int) get_query_var( 'paged' );
	if ( $p > 0 ) {
		return $p;
	}
	$p = (int) get_query_var( 'page' );
	return max( 1, $p );
}

/**
 * WP_Query for posts filtered by standard category slug (NEWS/BLOG/SERVICE fixed pages).
 *
 * @param string $category_slug Category slug (e.g. news-s, blogs, services).
 * @param int    $per_page      Posts per page.
 * @return WP_Query
 */
function br_query_posts_for_category_slug( $category_slug, $per_page = 10 ) {
	$cat = get_term_by( 'slug', sanitize_title( $category_slug ), 'category' );
	$args = array(
		'post_type'      => 'post',
		'posts_per_page' => (int) $per_page,
		'paged'          => br_get_query_paged(),
		'post_status'    => 'publish',
	);
	if ( $cat instanceof WP_Term ) {
		$args['cat'] = (int) $cat->term_id;
	} else {
		$args['post__in'] = array( 0 );
	}
	return new WP_Query( $args );
}

/**
 * WP_Query for portfolio items on WORKS / PROJECT pages (taxonomy portfolio-list).
 *
 * @param string $term_slug Term slug (e.g. works-s, project-s).
 * @param int    $per_page  Posts per page.
 * @return WP_Query
 */
function br_query_portfolio_for_list_term( $term_slug, $per_page = 12 ) {
	$term_slug = sanitize_title( $term_slug );
	$base      = array(
		'post_type'      => 'portfolio',
		'posts_per_page' => (int) $per_page,
		'paged'          => br_get_query_paged(),
		'post_status'    => 'publish',
	);

	if ( $term_slug === '' || ! taxonomy_exists( 'portfolio-list' ) ) {
		$base['post__in'] = array( 0 );
		return new WP_Query( $base );
	}

	$base['tax_query'] = array(
		array(
			'taxonomy' => 'portfolio-list',
			'field'    => 'slug',
			'terms'    => $term_slug,
		),
	);

	return new WP_Query( $base );
}
