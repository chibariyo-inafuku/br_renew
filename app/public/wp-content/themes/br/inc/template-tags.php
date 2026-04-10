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
 * Collect image attachment IDs from block editor inner blocks (recursive).
 *
 * @param array[] $blocks Parsed blocks.
 * @return int[]
 */
function br_collect_image_ids_from_blocks( $blocks ) {
	$ids = array();
	if ( ! is_array( $blocks ) ) {
		return $ids;
	}
	foreach ( $blocks as $block ) {
		if ( ! is_array( $block ) ) {
			continue;
		}
		$name  = isset( $block['blockName'] ) ? (string) $block['blockName'] : '';
		$attrs = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array();

		if ( 'core/image' === $name && ! empty( $attrs['id'] ) ) {
			$ids[] = (int) $attrs['id'];
		} elseif ( 'core/gallery' === $name && ! empty( $attrs['ids'] ) && is_array( $attrs['ids'] ) ) {
			foreach ( $attrs['ids'] as $gid ) {
				$ids[] = (int) $gid;
			}
		} elseif ( 'core/cover' === $name && ! empty( $attrs['id'] ) ) {
			$ids[] = (int) $attrs['id'];
		}

		if ( ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
			$ids = array_merge( $ids, br_collect_image_ids_from_blocks( $block['innerBlocks'] ) );
		}
	}
	return $ids;
}

/**
 * Image attachment IDs embedded in post content (blocks + classic wp-image class), in discovery order.
 *
 * @param int $post_id Post ID.
 * @return int[] Valid image attachment IDs.
 */
function br_get_portfolio_content_image_ids( $post_id ) {
	$post_id = (int) $post_id;
	if ( $post_id <= 0 ) {
		return array();
	}

	$content = get_post_field( 'post_content', $post_id );
	if ( ! is_string( $content ) || $content === '' ) {
		return array();
	}

	$from_blocks = br_collect_image_ids_from_blocks( parse_blocks( $content ) );

	if ( preg_match_all( '/\bwp-image-(\d+)\b/', $content, $m ) ) {
		$from_regex = array_map( 'intval', $m[1] );
	} else {
		$from_regex = array();
	}

	$seen   = array();
	$merged = array();
	foreach ( array_merge( $from_blocks, $from_regex ) as $id ) {
		$id = (int) $id;
		if ( $id <= 0 || isset( $seen[ $id ] ) ) {
			continue;
		}
		$seen[ $id ] = true;
		if ( wp_attachment_is_image( $id ) ) {
			$merged[] = $id;
		}
	}

	return $merged;
}

/**
 * Print stacked images for hover cycling when there are enough frames (featured + content, or 2+ content-only).
 * When a featured image exists, it is the default visible layer; body images follow without duplicating the thumb.
 *
 * @param int    $post_id         Post ID.
 * @param string $wrapper_classes Classes for the wrapper (br-hover-cycle is appended).
 * @return bool True if markup was printed.
 */
function br_the_portfolio_hover_cycle_stack( $post_id, $wrapper_classes ) {
	$post_id     = (int) $post_id;
	$content_ids = br_get_portfolio_content_image_ids( $post_id );
	$thumb_id    = (int) get_post_thumbnail_id( $post_id );

	if ( $thumb_id > 0 ) {
		$rest = array_values(
			array_filter(
				$content_ids,
				static function ( $id ) use ( $thumb_id ) {
					return (int) $id !== $thumb_id;
				}
			)
		);
		if ( $rest === array() ) {
			return false;
		}
		$ids = array_merge( array( $thumb_id ), $rest );
	} else {
		if ( count( $content_ids ) < 2 ) {
			return false;
		}
		$ids = $content_ids;
	}

	printf(
		'<div class="%s">',
		esc_attr( trim( $wrapper_classes . ' br-hover-cycle' ) )
	);
	foreach ( $ids as $i => $att_id ) {
		$class = 'br-hover-cycle__img' . ( 0 === $i ? ' is-active' : '' );
		$attr  = array(
			'class'   => $class,
			'loading' => 0 === $i ? 'eager' : 'lazy',
		);
		if ( $i > 0 ) {
			$attr['alt']           = '';
			$attr['aria-hidden'] = 'true';
		}
		echo wp_get_attachment_image( $att_id, 'medium_large', false, $attr ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
	echo '</div>';
	return true;
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

/**
 * Permalink for a published page by path slug, or empty string.
 *
 * @param string $slug Page slug (e.g. works, contact).
 * @return string
 */
function br_get_page_permalink_by_slug( $slug ) {
	$slug = sanitize_title( (string) $slug );
	if ( $slug === '' ) {
		return '';
	}
	$page = get_page_by_path( $slug, OBJECT, 'page' );
	if ( ! $page instanceof WP_Post || $page->post_status !== 'publish' ) {
		return '';
	}
	return get_permalink( $page );
}

/**
 * Escaped permalink for a page slug, or "#" if the page is missing (static nav markup).
 *
 * @param string $slug Page slug.
 * @return string
 */
function br_page_href( $slug ) {
	$url = br_get_page_permalink_by_slug( $slug );
	return esc_url( $url !== '' ? $url : '#' );
}

/**
 * WP_Query for a fixed number of posts by category slug (front page teasers; no pagination).
 *
 * @param string $category_slug Category slug (e.g. news-s, blogs, services).
 * @param int    $limit         Max posts.
 * @return WP_Query
 */
function br_query_posts_for_category_slug_limited( $category_slug, $limit = 4 ) {
	$category_slug = sanitize_title( (string) $category_slug );
	$limit         = (int) apply_filters( 'br_home_category_limit_' . $category_slug, $limit );
	$limit         = max( 1, $limit );

	$cat = get_term_by( 'slug', $category_slug, 'category' );
	$args = array(
		'post_type'              => 'post',
		'posts_per_page'         => $limit,
		'paged'                  => 1,
		'post_status'            => 'publish',
		'no_found_rows'          => true,
		'update_post_meta_cache' => false,
		'update_post_term_cache' => true,
	);
	if ( $cat instanceof WP_Term ) {
		$args['cat'] = (int) $cat->term_id;
	} else {
		$args['post__in'] = array( 0 );
	}
	return new WP_Query( $args );
}

/**
 * WP_Query for portfolio teasers (front page; no pagination).
 *
 * @param string $term_slug Term slug (works-s, project-s).
 * @param int    $limit     Max posts.
 * @return WP_Query
 */
function br_query_portfolio_for_list_term_limited( $term_slug, $limit = 8 ) {
	$term_slug = sanitize_title( (string) $term_slug );
	$limit     = (int) apply_filters( 'br_home_portfolio_limit_' . $term_slug, $limit );
	$limit     = max( 1, $limit );

	$base = array(
		'post_type'              => 'portfolio',
		'posts_per_page'         => $limit,
		'paged'                  => 1,
		'post_status'            => 'publish',
		'no_found_rows'          => true,
		'update_post_meta_cache' => false,
		'update_post_term_cache' => true,
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

/**
 * First project-categories term name for portfolio cards (badge), or empty.
 *
 * @param int $post_id Post ID.
 * @return string
 */
function br_get_portfolio_card_category_label( $post_id ) {
	$post_id = (int) $post_id;
	if ( $post_id <= 0 ) {
		return '';
	}
	$terms = get_the_terms( $post_id, 'project-categories' );
	if ( ! $terms || is_wp_error( $terms ) ) {
		return '';
	}
	$term = array_shift( $terms );
	return $term instanceof WP_Term ? $term->name : '';
}

/**
 * Default / filterable copy for the home template (hero, concept, CTA).
 *
 * @return array<string, string>
 */
function br_home_get_copy() {
	$defaults = array(
		'hero_line_1'       => __( 'マーケティングプロモーションに、', 'br' ),
		'hero_line_2'       => __( 'AIという武器を。', 'br' ),
		'hero_lead'         => __( '期待を超えるクオリティとスピードで、マーケティングの常識を塗り替える。', 'br' ),
		'hero_cta'          => __( 'お問い合わせはこちら', 'br' ),
		'concept_tagline_en' => __( 'Creativity endures. Innovation evolves.', 'br' ),
		'concept_heading'   => __( '創造は、奪われない。進化する。', 'br' ),
		'concept_body'      => __( "AIは、すべてを変えた。\nスピードも、クオリティも、常識も。\n\nそして今、「クリエイターは必要なのか」という問いが生まれた。\n\n答えは、ひとつじゃない。\n奪われるのか。\nそれとも、進化するのか。\n\n選ぶのは、私たちだ。\nAIと共に、創造は次のステージへ。", 'br' ),
		'cta_title_jp'      => __( 'お問い合わせ', 'br' ),
		'cta_title_en'      => __( 'CONTACT', 'br' ),
		'cta_lead'          => __( 'ビジネスの成果を加速させる、AIという武器を共に。', 'br' ),
		'cta_button'        => __( 'お問い合わせはこちら', 'br' ),
	);
	return apply_filters( 'br_home_copy', $defaults );
}
