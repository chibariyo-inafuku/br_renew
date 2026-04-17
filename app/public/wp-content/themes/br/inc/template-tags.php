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
 * @param WP_Query|null        $query           Query object. Defaults to main query.
 * @param string               $page_permalink Optional. Permalink of the static page when using a custom query (fixes /page/N/ on pages).
 * @param array<string,mixed>  $add_args       Optional. Query args merged into each page link (e.g. array( 'works_cat' => 'ai-avatar' )).
 * @param array<string,string> $labels         Optional. `prev_text` / `next_text` overrides (e.g. arrow glyphs for Works Figma pagination).
 */
function br_the_pagination( $query = null, $page_permalink = '', $add_args = array(), $labels = array() ) {
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

	$prev_text = __( 'Previous', 'br' );
	$next_text = __( 'Next', 'br' );
	if ( is_array( $labels ) ) {
		if ( isset( $labels['prev_text'] ) && is_string( $labels['prev_text'] ) && $labels['prev_text'] !== '' ) {
			$prev_text = $labels['prev_text'];
		}
		if ( isset( $labels['next_text'] ) && is_string( $labels['next_text'] ) && $labels['next_text'] !== '' ) {
			$next_text = $labels['next_text'];
		}
	}

	$args = array(
		'total'     => $total,
		'current'   => $current,
		'mid_size'  => 2,
		'prev_text' => $prev_text,
		'next_text' => $next_text,
		'type'      => 'list',
	);

	if ( $page_permalink !== '' ) {
		$args['base']   = trailingslashit( $page_permalink ) . 'page/%#%/';
		$args['format'] = '';
	}

	$add_args = is_array( $add_args ) ? $add_args : array();
	$add_args = array_filter(
		$add_args,
		static function ( $v ) {
			return $v !== null && $v !== '';
		}
	);
	if ( $add_args !== array() ) {
		$args['add_args'] = $add_args;
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
 * Optional slug order for Works category nav (child theme: filter `br_works_category_nav_slug_order`).
 *
 * @return string[]
 */
function br_works_category_nav_slug_order() {
	$order = apply_filters( 'br_works_category_nav_slug_order', array() );
	return is_array( $order ) ? array_values( array_filter( array_map( 'sanitize_title', $order ) ) ) : array();
}

/**
 * `project-categories` terms that appear on at least one published portfolio in the works-s list.
 *
 * @return WP_Term[]
 */
function br_get_works_list_project_category_terms() {
	if ( ! taxonomy_exists( 'project-categories' ) || ! taxonomy_exists( 'portfolio-list' ) ) {
		return array();
	}

	$list_q = new WP_Query(
		array(
			'post_type'              => 'portfolio',
			'post_status'            => 'publish',
			'posts_per_page'         => -1,
			'fields'                 => 'ids',
			'no_found_rows'          => true,
			'update_post_meta_cache' => false,
			'update_post_term_cache' => true,
			'tax_query'              => array(
				array(
					'taxonomy' => 'portfolio-list',
					'field'    => 'slug',
					'terms'    => 'works-s',
				),
			),
		)
	);
	$post_ids = $list_q->posts;
	if ( ! is_array( $post_ids ) || $post_ids === array() ) {
		return array();
	}

	$terms = wp_get_object_terms(
		$post_ids,
		'project-categories',
		array(
			'orderby' => 'name',
			'order'   => 'ASC',
		)
	);
	if ( is_wp_error( $terms ) || ! is_array( $terms ) ) {
		return array();
	}

	$by_id = array();
	foreach ( $terms as $t ) {
		if ( $t instanceof WP_Term ) {
			$by_id[ (int) $t->term_id ] = $t;
		}
	}
	$terms = array_values( $by_id );

	$order_slugs = br_works_category_nav_slug_order();
	if ( $order_slugs === array() ) {
		usort(
			$terms,
			static function ( $a, $b ) {
				return strcasecmp( $a->name, $b->name );
			}
		);
		return $terms;
	}

	$pos = array_flip( $order_slugs );
	usort(
		$terms,
		static function ( $a, $b ) use ( $pos ) {
			$pa = isset( $pos[ $a->slug ] ) ? (int) $pos[ $a->slug ] : 9999;
			$pb = isset( $pos[ $b->slug ] ) ? (int) $pos[ $b->slug ] : 9999;
			if ( $pa !== $pb ) {
				return $pa <=> $pb;
			}
			return strcasecmp( $a->name, $b->name );
		}
	);

	return $terms;
}

/**
 * Permalink for the Works page with optional pagination and category query arg.
 *
 * @param int    $paged            Page number (1 = no /page/N/ segment).
 * @param string $works_cat_slug Optional. `project-categories` slug; empty = all.
 * @return string Empty if the Works page is missing.
 */
function br_get_works_page_list_url( $paged = 1, $works_cat_slug = '' ) {
	$base = br_get_page_permalink_by_slug( 'works' );
	if ( $base === '' ) {
		return '';
	}
	$paged = (int) $paged;
	$url   = $paged > 1 ? trailingslashit( $base ) . 'page/' . $paged . '/' : $base;
	$slug  = sanitize_title( (string) $works_cat_slug );
	if ( $slug !== '' ) {
		$url = add_query_arg( 'works_cat', $slug, $url );
	}
	return $url;
}

/**
 * Optional slug order for Project category nav (child theme: filter `br_project_category_nav_slug_order`).
 *
 * @return string[]
 */
function br_project_category_nav_slug_order() {
	$order = apply_filters( 'br_project_category_nav_slug_order', array() );
	return is_array( $order ) ? array_values( array_filter( array_map( 'sanitize_title', $order ) ) ) : array();
}

/**
 * `project-categories` terms that appear on at least one published portfolio in the project-s list.
 *
 * @return WP_Term[]
 */
function br_get_project_list_project_category_terms() {
	if ( ! taxonomy_exists( 'project-categories' ) || ! taxonomy_exists( 'portfolio-list' ) ) {
		return array();
	}

	$list_q = new WP_Query(
		array(
			'post_type'              => 'portfolio',
			'post_status'            => 'publish',
			'posts_per_page'         => -1,
			'fields'                 => 'ids',
			'no_found_rows'          => true,
			'update_post_meta_cache' => false,
			'update_post_term_cache' => true,
			'tax_query'              => array(
				array(
					'taxonomy' => 'portfolio-list',
					'field'    => 'slug',
					'terms'    => 'project-s',
				),
			),
		)
	);
	$post_ids = $list_q->posts;
	if ( ! is_array( $post_ids ) || $post_ids === array() ) {
		return array();
	}

	$terms = wp_get_object_terms(
		$post_ids,
		'project-categories',
		array(
			'orderby' => 'name',
			'order'   => 'ASC',
		)
	);
	if ( is_wp_error( $terms ) || ! is_array( $terms ) ) {
		return array();
	}

	$by_id = array();
	foreach ( $terms as $t ) {
		if ( $t instanceof WP_Term ) {
			$by_id[ (int) $t->term_id ] = $t;
		}
	}
	$terms = array_values( $by_id );

	$order_slugs = br_project_category_nav_slug_order();
	if ( $order_slugs === array() ) {
		usort(
			$terms,
			static function ( $a, $b ) {
				return strcasecmp( $a->name, $b->name );
			}
		);
		return $terms;
	}

	$pos = array_flip( $order_slugs );
	usort(
		$terms,
		static function ( $a, $b ) use ( $pos ) {
			$pa = isset( $pos[ $a->slug ] ) ? (int) $pos[ $a->slug ] : 9999;
			$pb = isset( $pos[ $b->slug ] ) ? (int) $pos[ $b->slug ] : 9999;
			if ( $pa !== $pb ) {
				return $pa <=> $pb;
			}
			return strcasecmp( $a->name, $b->name );
		}
	);

	return $terms;
}

/**
 * Permalink for the Project page with optional pagination and category query arg.
 *
 * @param int    $paged               Page number (1 = no /page/N/ segment).
 * @param string $project_cat_slug Optional. `project-categories` slug; empty = all.
 * @return string Empty if the Project page is missing.
 */
function br_get_project_page_list_url( $paged = 1, $project_cat_slug = '' ) {
	$base = br_get_page_permalink_by_slug( 'project' );
	if ( $base === '' ) {
		return '';
	}
	$paged = (int) $paged;
	$url   = $paged > 1 ? trailingslashit( $base ) . 'page/' . $paged . '/' : $base;
	$slug  = sanitize_title( (string) $project_cat_slug );
	if ( $slug !== '' ) {
		$url = add_query_arg( 'project_cat', $slug, $url );
	}
	return $url;
}

/**
 * Optional slug order for Blog category nav under `blogs` (child theme: filter `br_blog_category_nav_slug_order`).
 *
 * @return string[]
 */
function br_blog_category_nav_slug_order() {
	$order = apply_filters( 'br_blog_category_nav_slug_order', array() );
	return is_array( $order ) ? array_values( array_filter( array_map( 'sanitize_title', $order ) ) ) : array();
}

/**
 * Direct child categories of `blogs` that have at least one published post.
 *
 * @return WP_Term[]
 */
function br_get_blog_list_nav_category_terms() {
	$blogs = get_term_by( 'slug', 'blogs', 'category' );
	if ( ! $blogs instanceof WP_Term ) {
		return array();
	}

	$children = get_terms(
		array(
			'taxonomy'   => 'category',
			'parent'     => (int) $blogs->term_id,
			'hide_empty' => true,
			'orderby'    => 'name',
			'order'      => 'ASC',
		)
	);
	if ( is_wp_error( $children ) || ! is_array( $children ) ) {
		return array();
	}

	$terms = array_values(
		array_filter(
			$children,
			static function ( $t ) {
				return $t instanceof WP_Term;
			}
		)
	);

	$order_slugs = br_blog_category_nav_slug_order();
	if ( $order_slugs === array() ) {
		return $terms;
	}

	$pos = array_flip( $order_slugs );
	usort(
		$terms,
		static function ( $a, $b ) use ( $pos ) {
			$pa = isset( $pos[ $a->slug ] ) ? (int) $pos[ $a->slug ] : 9999;
			$pb = isset( $pos[ $b->slug ] ) ? (int) $pos[ $b->slug ] : 9999;
			if ( $pa !== $pb ) {
				return $pa <=> $pb;
			}
			return strcasecmp( $a->name, $b->name );
		}
	);

	return $terms;
}

/**
 * Permalink for the Blog page with optional pagination and category query arg.
 *
 * @param int    $paged            Page number (1 = no /page/N/ segment).
 * @param string $blog_cat_slug Optional. Child `category` slug under `blogs`; empty = all in `blogs`.
 * @return string Empty if the Blog page is missing.
 */
function br_get_blog_page_list_url( $paged = 1, $blog_cat_slug = '' ) {
	$base = br_get_page_permalink_by_slug( 'blog' );
	if ( $base === '' ) {
		return '';
	}
	$paged = (int) $paged;
	$url   = $paged > 1 ? trailingslashit( $base ) . 'page/' . $paged . '/' : $base;
	$slug  = sanitize_title( (string) $blog_cat_slug );
	if ( $slug !== '' && $slug !== 'blogs' ) {
		$url = add_query_arg( 'blog_cat', $slug, $url );
	}
	return $url;
}

/**
 * WP_Query for the Blog fixed page: posts in category `blogs`, optional filter by descendant category slug.
 *
 * @param int    $per_page          Posts per page.
 * @param string $blog_cat_param Optional. Sanitized category slug; must be `blogs` or a descendant of `blogs`.
 * @return WP_Query
 */
function br_query_posts_for_blog_page( $per_page = 12, $blog_cat_param = '' ) {
	$per_page = max( 1, (int) $per_page );

	$empty = static function () use ( $per_page ) {
		return new WP_Query(
			array(
				'post_type'           => 'post',
				'post__in'            => array( 0 ),
				'posts_per_page'      => $per_page,
				'post_status'         => 'publish',
				'no_found_rows'       => true,
				'ignore_sticky_posts' => true,
			)
		);
	};

	$blogs = get_term_by( 'slug', 'blogs', 'category' );
	if ( ! $blogs instanceof WP_Term ) {
		return $empty();
	}

	$base = array(
		'post_type'           => 'post',
		'posts_per_page'      => $per_page,
		'paged'               => br_get_query_paged(),
		'post_status'         => 'publish',
		'ignore_sticky_posts' => true,
	);

	$slug = sanitize_title( (string) $blog_cat_param );

	if ( $slug === '' || $slug === 'blogs' ) {
		$base['cat'] = (int) $blogs->term_id;
		return new WP_Query( $base );
	}

	$sub = get_term_by( 'slug', $slug, 'category' );
	if ( ! $sub instanceof WP_Term ) {
		return $empty();
	}
	if ( (int) $sub->term_id === (int) $blogs->term_id ) {
		$base['cat'] = (int) $blogs->term_id;
		return new WP_Query( $base );
	}
	if ( ! term_is_ancestor_of( (int) $blogs->term_id, (int) $sub->term_id, 'category' ) ) {
		return $empty();
	}

	$base['tax_query'] = array(
		array(
			'taxonomy' => 'category',
			'field'    => 'slug',
			'terms'    => $sub->slug,
		),
	);

	return new WP_Query( $base );
}

/**
 * Optional slug order for News category nav under `news-s` (child theme: filter `br_news_category_nav_slug_order`).
 *
 * @return string[]
 */
function br_news_category_nav_slug_order() {
	$order = apply_filters( 'br_news_category_nav_slug_order', array() );
	return is_array( $order ) ? array_values( array_filter( array_map( 'sanitize_title', $order ) ) ) : array();
}

/**
 * Direct child categories of `news-s` that have at least one published post.
 *
 * @return WP_Term[]
 */
function br_get_news_list_nav_category_terms() {
	$news_root = get_term_by( 'slug', 'news-s', 'category' );
	if ( ! $news_root instanceof WP_Term ) {
		return array();
	}

	$children = get_terms(
		array(
			'taxonomy'   => 'category',
			'parent'     => (int) $news_root->term_id,
			'hide_empty' => true,
			'orderby'    => 'name',
			'order'      => 'ASC',
		)
	);
	if ( is_wp_error( $children ) || ! is_array( $children ) ) {
		return array();
	}

	$terms = array_values(
		array_filter(
			$children,
			static function ( $t ) {
				return $t instanceof WP_Term;
			}
		)
	);

	$order_slugs = br_news_category_nav_slug_order();
	if ( $order_slugs === array() ) {
		return $terms;
	}

	$pos = array_flip( $order_slugs );
	usort(
		$terms,
		static function ( $a, $b ) use ( $pos ) {
			$pa = isset( $pos[ $a->slug ] ) ? (int) $pos[ $a->slug ] : 9999;
			$pb = isset( $pos[ $b->slug ] ) ? (int) $pos[ $b->slug ] : 9999;
			if ( $pa !== $pb ) {
				return $pa <=> $pb;
			}
			return strcasecmp( $a->name, $b->name );
		}
	);

	return $terms;
}

/**
 * Permalink for the News page with optional pagination and category query arg.
 *
 * @param int    $paged           Page number (1 = no /page/N/ segment).
 * @param string $news_cat_slug Optional. Child `category` slug under `news-s`; empty = all in `news-s`.
 * @return string Empty if the News page is missing.
 */
function br_get_news_page_list_url( $paged = 1, $news_cat_slug = '' ) {
	$base = br_get_page_permalink_by_slug( 'news' );
	if ( $base === '' ) {
		return '';
	}
	$paged = (int) $paged;
	$url   = $paged > 1 ? trailingslashit( $base ) . 'page/' . $paged . '/' : $base;
	$slug  = sanitize_title( (string) $news_cat_slug );
	if ( $slug !== '' && $slug !== 'news-s' ) {
		$url = add_query_arg( 'news_cat', $slug, $url );
	}
	return $url;
}

/**
 * WP_Query for the News fixed page: posts in category `news-s`, optional filter by descendant category slug.
 *
 * @param int    $per_page         Posts per page.
 * @param string $news_cat_param Optional. Sanitized category slug; must be `news-s` or a descendant of `news-s`.
 * @return WP_Query
 */
function br_query_posts_for_news_page( $per_page = 12, $news_cat_param = '' ) {
	$per_page = max( 1, (int) $per_page );

	$empty = static function () use ( $per_page ) {
		return new WP_Query(
			array(
				'post_type'           => 'post',
				'post__in'            => array( 0 ),
				'posts_per_page'      => $per_page,
				'post_status'         => 'publish',
				'no_found_rows'       => true,
				'ignore_sticky_posts' => true,
			)
		);
	};

	$news_root = get_term_by( 'slug', 'news-s', 'category' );
	if ( ! $news_root instanceof WP_Term ) {
		return $empty();
	}

	$base = array(
		'post_type'           => 'post',
		'posts_per_page'      => $per_page,
		'paged'               => br_get_query_paged(),
		'post_status'         => 'publish',
		'ignore_sticky_posts' => true,
	);

	$slug = sanitize_title( (string) $news_cat_param );

	if ( $slug === '' || $slug === 'news-s' ) {
		$base['cat'] = (int) $news_root->term_id;
		return new WP_Query( $base );
	}

	$sub = get_term_by( 'slug', $slug, 'category' );
	if ( ! $sub instanceof WP_Term ) {
		return $empty();
	}
	if ( (int) $sub->term_id === (int) $news_root->term_id ) {
		$base['cat'] = (int) $news_root->term_id;
		return new WP_Query( $base );
	}
	if ( ! term_is_ancestor_of( (int) $news_root->term_id, (int) $sub->term_id, 'category' ) ) {
		return $empty();
	}

	$base['tax_query'] = array(
		array(
			'taxonomy' => 'category',
			'field'    => 'slug',
			'terms'    => $sub->slug,
		),
	);

	return new WP_Query( $base );
}

/**
 * Optional slug order for Service category nav under `services` (child theme: filter `br_service_category_nav_slug_order`).
 *
 * @return string[]
 */
function br_service_category_nav_slug_order() {
	$order = apply_filters( 'br_service_category_nav_slug_order', array() );
	return is_array( $order ) ? array_values( array_filter( array_map( 'sanitize_title', $order ) ) ) : array();
}

/**
 * Direct child categories of `services` that have at least one published post.
 *
 * @return WP_Term[]
 */
function br_get_service_list_nav_category_terms() {
	$services = get_term_by( 'slug', 'services', 'category' );
	if ( ! $services instanceof WP_Term ) {
		return array();
	}

	$children = get_terms(
		array(
			'taxonomy'   => 'category',
			'parent'     => (int) $services->term_id,
			'hide_empty' => true,
			'orderby'    => 'name',
			'order'      => 'ASC',
		)
	);
	if ( is_wp_error( $children ) || ! is_array( $children ) ) {
		return array();
	}

	$terms = array_values(
		array_filter(
			$children,
			static function ( $t ) {
				return $t instanceof WP_Term;
			}
		)
	);

	$order_slugs = br_service_category_nav_slug_order();
	if ( $order_slugs === array() ) {
		return $terms;
	}

	$pos = array_flip( $order_slugs );
	usort(
		$terms,
		static function ( $a, $b ) use ( $pos ) {
			$pa = isset( $pos[ $a->slug ] ) ? (int) $pos[ $a->slug ] : 9999;
			$pb = isset( $pos[ $b->slug ] ) ? (int) $pos[ $b->slug ] : 9999;
			if ( $pa !== $pb ) {
				return $pa <=> $pb;
			}
			return strcasecmp( $a->name, $b->name );
		}
	);

	return $terms;
}

/**
 * Permalink for the Service page with optional pagination and category query arg.
 *
 * @param int    $paged               Page number (1 = no /page/N/ segment).
 * @param string $service_cat_slug Optional. Child `category` slug under `services`; empty = all in `services`.
 * @return string Empty if the Service page is missing.
 */
function br_get_service_page_list_url( $paged = 1, $service_cat_slug = '' ) {
	$base = br_get_page_permalink_by_slug( 'service' );
	if ( $base === '' ) {
		return '';
	}
	$paged = (int) $paged;
	$url   = $paged > 1 ? trailingslashit( $base ) . 'page/' . $paged . '/' : $base;
	$slug  = sanitize_title( (string) $service_cat_slug );
	if ( $slug !== '' && $slug !== 'services' ) {
		$url = add_query_arg( 'service_cat', $slug, $url );
	}
	return $url;
}

/**
 * WP_Query for the Service fixed page: posts in category `services`, optional filter by descendant category slug.
 *
 * @param int    $per_page             Posts per page.
 * @param string $service_cat_param Optional. Sanitized category slug; must be `services` or a descendant of `services`.
 * @return WP_Query
 */
function br_query_posts_for_service_page( $per_page = 12, $service_cat_param = '' ) {
	$per_page = max( 1, (int) $per_page );

	$empty = static function () use ( $per_page ) {
		return new WP_Query(
			array(
				'post_type'           => 'post',
				'post__in'            => array( 0 ),
				'posts_per_page'      => $per_page,
				'post_status'         => 'publish',
				'no_found_rows'       => true,
				'ignore_sticky_posts' => true,
			)
		);
	};

	$services = get_term_by( 'slug', 'services', 'category' );
	if ( ! $services instanceof WP_Term ) {
		return $empty();
	}

	$base = array(
		'post_type'           => 'post',
		'posts_per_page'      => $per_page,
		'paged'               => br_get_query_paged(),
		'post_status'         => 'publish',
		'ignore_sticky_posts' => true,
		'orderby'             => 'date',
		'order'               => 'ASC',
	);

	$slug = sanitize_title( (string) $service_cat_param );

	if ( $slug === '' || $slug === 'services' ) {
		$base['cat'] = (int) $services->term_id;
		return new WP_Query( $base );
	}

	$sub = get_term_by( 'slug', $slug, 'category' );
	if ( ! $sub instanceof WP_Term ) {
		return $empty();
	}
	if ( (int) $sub->term_id === (int) $services->term_id ) {
		$base['cat'] = (int) $services->term_id;
		return new WP_Query( $base );
	}
	if ( ! term_is_ancestor_of( (int) $services->term_id, (int) $sub->term_id, 'category' ) ) {
		return $empty();
	}

	$base['tax_query'] = array(
		array(
			'taxonomy' => 'category',
			'field'    => 'slug',
			'terms'    => $sub->slug,
		),
	);

	return new WP_Query( $base );
}

/**
 * Whether the post is in the `blogs` category or a descendant category.
 *
 * @param int $post_id Post ID.
 * @return bool
 */
function br_post_in_blog_category_tree( $post_id ) {
	$post_id = (int) $post_id;
	if ( $post_id <= 0 ) {
		return false;
	}

	$blogs = get_term_by( 'slug', 'blogs', 'category' );
	if ( ! $blogs instanceof WP_Term ) {
		return false;
	}

	$terms = get_the_terms( $post_id, 'category' );
	if ( ! is_array( $terms ) || is_wp_error( $terms ) ) {
		return false;
	}

	foreach ( $terms as $t ) {
		if ( ! $t instanceof WP_Term ) {
			continue;
		}
		if ( $t->slug === 'blogs' || (int) $t->term_id === (int) $blogs->term_id ) {
			return true;
		}
		if ( term_is_ancestor_of( (int) $blogs->term_id, (int) $t->term_id, 'category' ) ) {
			return true;
		}
	}

	return false;
}

/**
 * Whether the post is in the `services` category or a descendant category.
 *
 * @param int $post_id Post ID.
 * @return bool
 */
function br_post_in_service_category_tree( $post_id ) {
	$post_id = (int) $post_id;
	if ( $post_id <= 0 ) {
		return false;
	}

	$services = get_term_by( 'slug', 'services', 'category' );
	if ( ! $services instanceof WP_Term ) {
		return false;
	}

	$terms = get_the_terms( $post_id, 'category' );
	if ( ! is_array( $terms ) || is_wp_error( $terms ) ) {
		return false;
	}

	foreach ( $terms as $t ) {
		if ( ! $t instanceof WP_Term ) {
			continue;
		}
		if ( $t->slug === 'services' || (int) $t->term_id === (int) $services->term_id ) {
			return true;
		}
		if ( term_is_ancestor_of( (int) $services->term_id, (int) $t->term_id, 'category' ) ) {
			return true;
		}
	}

	return false;
}

/**
 * Whether the post is in the `news-s` category or a descendant category.
 *
 * @param int $post_id Post ID.
 * @return bool
 */
function br_post_in_news_category_tree( $post_id ) {
	$post_id = (int) $post_id;
	if ( $post_id <= 0 ) {
		return false;
	}

	$news_root = get_term_by( 'slug', 'news-s', 'category' );
	if ( ! $news_root instanceof WP_Term ) {
		return false;
	}

	$terms = get_the_terms( $post_id, 'category' );
	if ( ! is_array( $terms ) || is_wp_error( $terms ) ) {
		return false;
	}

	foreach ( $terms as $t ) {
		if ( ! $t instanceof WP_Term ) {
			continue;
		}
		if ( $t->slug === 'news-s' || (int) $t->term_id === (int) $news_root->term_id ) {
			return true;
		}
		if ( term_is_ancestor_of( (int) $news_root->term_id, (int) $t->term_id, 'category' ) ) {
			return true;
		}
	}

	return false;
}

/**
 * 提案AIシリーズ LP（Service カードの service12 差し替え先）.
 *
 * @return string
 */
function br_get_service_teian_ai_landing_url() {
	return 'https://blue-r.co.jp/teian-ai/';
}

/**
 * Service カードが外部 LP を指すとき（新規タブで開く）.
 *
 * @param int $post_id Post ID.
 * @return bool
 */
function br_service_card_link_opens_new_tab( $post_id ) {
	$post_id = (int) $post_id;
	if ( $post_id <= 0 ) {
		return false;
	}
	$slug = get_post_field( 'post_name', $post_id );
	return is_string( $slug ) && strtolower( $slug ) === 'service12';
}

/**
 * Permalink for Service cards (TOP rail + /service/ grid). Slug `service12` → 提案AIシリーズ LP.
 *
 * @param int $post_id Post ID.
 * @return string
 */
function br_get_service_card_permalink( $post_id ) {
	$post_id = (int) $post_id;
	if ( $post_id <= 0 ) {
		return '';
	}

	if ( br_service_card_link_opens_new_tab( $post_id ) ) {
		return br_get_service_teian_ai_landing_url();
	}

	$url = get_permalink( $post_id );
	return $url !== false ? $url : '';
}

/**
 * WP_Query for portfolio items on WORKS / PROJECT pages (taxonomy portfolio-list).
 *
 * @param string $term_slug               Term slug (e.g. works-s, project-s).
 * @param int    $per_page                Posts per page.
 * @param string $project_category_slug Optional. `project-categories` term slug (AND with list term). Unknown slug yields empty results.
 * @return WP_Query
 */
function br_query_portfolio_for_list_term( $term_slug, $per_page = 12, $project_category_slug = '' ) {
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

	$list_clause = array(
		'taxonomy' => 'portfolio-list',
		'field'    => 'slug',
		'terms'    => $term_slug,
	);

	$project_category_slug = sanitize_title( (string) $project_category_slug );

	if ( $project_category_slug !== '' && taxonomy_exists( 'project-categories' ) ) {
		$pc_term = get_term_by( 'slug', $project_category_slug, 'project-categories' );
		if ( ! $pc_term instanceof WP_Term ) {
			$base['post__in'] = array( 0 );
			return new WP_Query( $base );
		}
		$base['tax_query'] = array(
			'relation' => 'AND',
			$list_clause,
			array(
				'taxonomy' => 'project-categories',
				'field'    => 'slug',
				'terms'    => $project_category_slug,
			),
		);
	} else {
		$base['tax_query'] = array( $list_clause );
	}

	return new WP_Query( $base );
}

/**
 * Related Works (`portfolio-list` works-s) for a single portfolio post: same `project-categories` first, else other Works by date.
 *
 * @param int $post_id Current portfolio post ID.
 * @param int $limit   Max posts (excluding current).
 * @return WP_Query Empty when the post is not in the Works list.
 */
function br_query_related_portfolio_works( $post_id, $limit = 10 ) {
	$post_id = (int) $post_id;
	$limit   = max( 1, (int) $limit );

	$empty_query = static function () use ( $limit ) {
		return new WP_Query(
			array(
				'post_type'           => 'portfolio',
				'post__in'            => array( 0 ),
				'posts_per_page'      => $limit,
				'post_status'         => 'publish',
				'no_found_rows'       => true,
				'ignore_sticky_posts' => true,
			)
		);
	};

	if ( $post_id <= 0 || ! taxonomy_exists( 'portfolio-list' ) ) {
		return $empty_query();
	}
	if ( ! has_term( 'works-s', 'portfolio-list', $post_id ) ) {
		return $empty_query();
	}

	$base = array(
		'post_type'              => 'portfolio',
		'posts_per_page'         => $limit,
		'post_status'            => 'publish',
		'post__not_in'           => array( $post_id ),
		'orderby'                => 'date',
		'order'                  => 'DESC',
		'no_found_rows'          => true,
		'ignore_sticky_posts'    => true,
		'update_post_meta_cache' => false,
		'update_post_term_cache' => true,
	);

	$list_clause = array(
		'taxonomy' => 'portfolio-list',
		'field'    => 'slug',
		'terms'    => 'works-s',
	);

	$pc_ids = array();
	if ( taxonomy_exists( 'project-categories' ) ) {
		$pc_terms = get_the_terms( $post_id, 'project-categories' );
		if ( is_array( $pc_terms ) && ! is_wp_error( $pc_terms ) ) {
			foreach ( $pc_terms as $t ) {
				if ( $t instanceof WP_Term ) {
					$pc_ids[] = (int) $t->term_id;
				}
			}
		}
	}

	if ( $pc_ids !== array() ) {
		$args            = $base;
		$args['tax_query'] = array(
			'relation' => 'AND',
			$list_clause,
			array(
				'taxonomy' => 'project-categories',
				'field'    => 'term_id',
				'terms'    => $pc_ids,
				'operator' => 'IN',
			),
		);
		$related = new WP_Query( $args );
		if ( $related->have_posts() ) {
			return $related;
		}
	}

	$args            = $base;
	$args['tax_query'] = array( $list_clause );
	return new WP_Query( $args );
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
 * First Contact Form 7 shortcode string from the published Contact page content, or empty.
 *
 * @return string
 */
function br_get_contact_page_cf7_shortcode() {
	$page = get_page_by_path( 'contact', OBJECT, 'page' );
	if ( ! $page instanceof WP_Post || $page->post_status !== 'publish' ) {
		return '';
	}
	$content = (string) $page->post_content;
	if ( preg_match( '/\[contact-form-7[^\]]*\]/i', $content, $m ) ) {
		return $m[0];
	}
	return '';
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
 * @param string $order         Sort direction for `orderby` date: 'DESC' (newest first, default) or 'ASC' (oldest first).
 * @return WP_Query
 */
function br_query_posts_for_category_slug_limited( $category_slug, $limit = 4, $order = 'DESC' ) {
	$category_slug = sanitize_title( (string) $category_slug );
	$limit         = (int) apply_filters( 'br_home_category_limit_' . $category_slug, $limit );
	$limit         = max( 1, $limit );

	$order = strtoupper( (string) $order );
	if ( $order !== 'ASC' && $order !== 'DESC' ) {
		$order = 'DESC';
	}

	$cat = get_term_by( 'slug', $category_slug, 'category' );
	$args = array(
		'post_type'              => 'post',
		'posts_per_page'         => $limit,
		'paged'                  => 1,
		'post_status'            => 'publish',
		'orderby'                => 'date',
		'order'                  => $order,
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
 * Default / filterable copy for the home template (hero, concept).
 *
 * @return array<string, string>
 */
function br_home_get_copy() {
	$defaults = array(
		'hero_line_1'       => __( 'マーケティングプロモーションに、', 'br' ),
		'hero_line_2'       => __( 'AIという武器を。', 'br' ),
		'hero_lead'         => __( '期待を超えるクオリティとスピードで価値を創る、AIクリエイティブスタジオ。', 'br' ),
		'hero_cta'          => __( 'お問い合わせはこちら', 'br' ),
		'concept_tagline_en' => __( 'Creativity endures. Innovation evolves.', 'br' ),
		'concept_heading'   => __( '創造は、奪われない。進化する。', 'br' ),
		'concept_body'      => __( "AIは、すべてを変えた。\nスピードも、クオリティも、常識も。\n\nそして今、「クリエイターは必要なのか」という問いが生まれた。\n\n答えは、ひとつじゃない。\n奪われるのか。\nそれとも、進化するのか。\n\n選ぶのは、私たちだ。\nAIと共に、創造は次のステージへ。", 'br' ),
	);
	$filtered = apply_filters( 'br_home_copy', $defaults );
	return is_array( $filtered ) ? array_merge( $defaults, $filtered ) : $defaults;
}
