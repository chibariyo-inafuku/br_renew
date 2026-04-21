<?php
/**
 * Theme setup and assets.
 *
 * @package br
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Sets up theme defaults and registers support for WordPress features.
 */
function br_setup() {
	load_theme_textdomain( 'br', get_template_directory() . '/languages' );

	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 120,
			'width'       => 400,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'br' ),
			'footer'  => __( 'Footer Menu', 'br' ),
		)
	);
}
add_action( 'after_setup_theme', 'br_setup' );

/**
 * Inner listing templates that share GSAP scroll-card effects (br-card grids). Not used on /works/, /project/, /blog/, /service/, or /news/ (home-style cards + CTA .br-home).
 *
 * @return bool
 */
function br_loads_inner_scroll_card_assets() {
	if ( is_front_page() ) {
		return false;
	}
	return is_post_type_archive( 'portfolio' )
		|| is_tax( 'project-categories' );
}

/**
 * Whether GSAP + ScrollTrigger (and Lenis sync) are loaded.
 *
 * @return bool
 */
function br_loads_gsap_bundle() {
	return is_front_page() || br_loads_inner_scroll_card_assets();
}

/**
 * Enqueue scripts and styles.
 */
function br_enqueue_assets() {
	$theme_uri = get_template_directory_uri();

	wp_enqueue_style(
		'br-google-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=MuseoModerno:wght@400;700&family=Noto+Sans+JP:wght@400;500;700&family=Zen+Kurenaido&display=swap',
		array(),
		null
	);

	wp_enqueue_style(
		'br-style',
		get_stylesheet_uri(),
		array( 'br-google-fonts' ),
		BR_VERSION
	);
	wp_enqueue_style(
		'br-main',
		$theme_uri . '/assets/css/main.css',
		array( 'br-style' ),
		BR_VERSION
	);

	wp_enqueue_style(
		'br-hop-btn',
		$theme_uri . '/assets/css/hop-btn.css',
		array( 'br-main' ),
		BR_VERSION
	);
	wp_enqueue_script(
		'br-home-hop-button',
		$theme_uri . '/assets/js/home-hop-button.js',
		array(),
		BR_VERSION,
		true
	);

	wp_enqueue_style(
		'br-lenis',
		'https://cdn.jsdelivr.net/npm/lenis@1.2.3/dist/lenis.css',
		array( 'br-main' ),
		'1.2.3'
	);
	wp_enqueue_script(
		'br-lenis',
		'https://cdn.jsdelivr.net/npm/lenis@1.2.3/dist/lenis.min.js',
		array(),
		'1.2.3',
		true
	);

	wp_enqueue_script(
		'br-svg-heading-inview',
		$theme_uri . '/assets/js/svg-heading-inview.js',
		array(),
		BR_VERSION,
		true
	);

	$load_br_cf7 = false;
	if ( class_exists( 'WPCF7' ) ) {
		$load_br_cf7 = is_front_page()
			|| is_page( array( 'recruit', 'contact', 'about', 'ceo', 'faq', 'works', 'project', 'blog', 'service', 'news' ) )
			|| is_singular( 'portfolio' )
			|| is_singular( 'post' );
		if ( ! $load_br_cf7 ) {
			global $post;
			$load_br_cf7 = $post && has_shortcode( (string) $post->post_content, 'contact-form-7' );
		}
		if ( $load_br_cf7 ) {
			wp_enqueue_style(
				'br-cf7',
				$theme_uri . '/assets/css/cf7.css',
				array( 'br-main' ),
				BR_VERSION
			);
		}
	}

	if ( is_front_page() || is_page( array( 'works', 'project', 'blog' ) ) ) {
		wp_enqueue_script(
			'br-portfolio-card-hover-cycle',
			$theme_uri . '/assets/js/portfolio-card-hover-cycle.js',
			array(),
			BR_VERSION,
			true
		);
	}

	if ( is_front_page() ) {
		wp_enqueue_style(
			'br-swiper',
			'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
			array(),
			null
		);
		$home_style_deps = array( 'br-main', 'br-hop-btn', 'br-swiper' );
		if ( $load_br_cf7 ) {
			$home_style_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$home_style_deps,
			BR_VERSION
		);
		wp_enqueue_script(
			'br-swiper',
			'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
			array(),
			null,
			true
		);
		wp_enqueue_script(
			'br-home-rail',
			$theme_uri . '/assets/js/home-rail.js',
			array( 'br-swiper' ),
			BR_VERSION,
			true
		);
	}

	if ( is_page( 'about' ) ) {
		$about_home_deps = array( 'br-main', 'br-hop-btn' );
		if ( $load_br_cf7 ) {
			$about_home_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$about_home_deps,
			BR_VERSION
		);
		wp_enqueue_style(
			'br-about',
			$theme_uri . '/assets/css/about.css',
			array( 'br-home' ),
			BR_VERSION
		);
	}

	if ( is_page( 'ceo' ) ) {
		$ceo_home_deps = array( 'br-main', 'br-hop-btn' );
		if ( $load_br_cf7 ) {
			$ceo_home_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$ceo_home_deps,
			BR_VERSION
		);
		wp_enqueue_style(
			'br-ceo',
			$theme_uri . '/assets/css/ceo.css',
			array( 'br-home' ),
			BR_VERSION
		);
	}

	if ( is_page( 'faq' ) ) {
		$faq_home_deps = array( 'br-main', 'br-hop-btn' );
		if ( $load_br_cf7 ) {
			$faq_home_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$faq_home_deps,
			BR_VERSION
		);
		wp_enqueue_style(
			'br-faq',
			$theme_uri . '/assets/css/faq.css',
			array( 'br-home' ),
			BR_VERSION
		);
	}

	if ( is_page( 'works' ) ) {
		$works_home_deps = array( 'br-main', 'br-hop-btn' );
		if ( $load_br_cf7 ) {
			$works_home_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$works_home_deps,
			BR_VERSION
		);
		wp_enqueue_style(
			'br-works',
			$theme_uri . '/assets/css/works.css',
			array( 'br-home' ),
			BR_VERSION
		);
	}

	if ( is_page( 'project' ) ) {
		$project_home_deps = array( 'br-main', 'br-hop-btn' );
		if ( $load_br_cf7 ) {
			$project_home_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$project_home_deps,
			BR_VERSION
		);
		wp_enqueue_style(
			'br-project',
			$theme_uri . '/assets/css/project.css',
			array( 'br-home' ),
			BR_VERSION
		);
	}

	if ( is_page( 'blog' ) ) {
		$blog_home_deps = array( 'br-main', 'br-hop-btn' );
		if ( $load_br_cf7 ) {
			$blog_home_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$blog_home_deps,
			BR_VERSION
		);
		wp_enqueue_style(
			'br-blog',
			$theme_uri . '/assets/css/blog.css',
			array( 'br-home' ),
			BR_VERSION
		);
	}

	if ( is_page( 'news' ) ) {
		$news_home_deps = array( 'br-main', 'br-hop-btn' );
		if ( $load_br_cf7 ) {
			$news_home_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$news_home_deps,
			BR_VERSION
		);
		wp_enqueue_style(
			'br-news',
			$theme_uri . '/assets/css/news.css',
			array( 'br-home' ),
			BR_VERSION
		);
	}

	if ( is_page( 'service' ) ) {
		$service_home_deps = array( 'br-main', 'br-hop-btn' );
		if ( $load_br_cf7 ) {
			$service_home_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$service_home_deps,
			BR_VERSION
		);
		wp_enqueue_style(
			'br-service',
			$theme_uri . '/assets/css/service.css',
			array( 'br-home' ),
			BR_VERSION
		);
	}

	if ( is_singular( 'post' ) ) {
		global $post;

		$post_single_home_deps = array( 'br-main', 'br-hop-btn' );
		if ( $load_br_cf7 ) {
			$post_single_home_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$post_single_home_deps,
			BR_VERSION
		);

		$post_id = $post instanceof WP_Post ? (int) $post->ID : 0;
		if ( $post_id > 0 && function_exists( 'br_post_in_blog_category_tree' ) && br_post_in_blog_category_tree( $post_id ) ) {
			wp_enqueue_style(
				'br-post-single',
				$theme_uri . '/assets/css/post-single.css',
				array( 'br-home' ),
				BR_VERSION
			);
		} elseif ( $post_id > 0 && function_exists( 'br_post_in_service_category_tree' ) && br_post_in_service_category_tree( $post_id ) ) {
			wp_enqueue_style(
				'br-service-single',
				$theme_uri . '/assets/css/service-single.css',
				array( 'br-home' ),
				BR_VERSION
			);
		} elseif ( $post_id > 0 && function_exists( 'br_post_in_news_category_tree' ) && br_post_in_news_category_tree( $post_id ) ) {
			wp_enqueue_style(
				'br-news-single',
				$theme_uri . '/assets/css/news-single.css',
				array( 'br-home' ),
				BR_VERSION
			);
		}
	}

	if ( is_singular( 'portfolio' ) ) {
		wp_enqueue_style(
			'br-swiper',
			'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
			array(),
			null
		);
		$portfolio_br_home_deps = array( 'br-main', 'br-hop-btn' );
		if ( $load_br_cf7 ) {
			$portfolio_br_home_deps[] = 'br-cf7';
		}
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			$portfolio_br_home_deps,
			BR_VERSION
		);
		wp_enqueue_style(
			'br-portfolio-single',
			$theme_uri . '/assets/css/portfolio-single.css',
			array( 'br-home', 'br-swiper' ),
			BR_VERSION
		);
		wp_enqueue_script(
			'br-swiper',
			'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
			array(),
			null,
			true
		);
		wp_enqueue_script(
			'br-portfolio-related-rail',
			$theme_uri . '/assets/js/portfolio-related-rail.js',
			array( 'br-swiper' ),
			BR_VERSION,
			true
		);
	}

	if ( br_loads_gsap_bundle() ) {
		wp_enqueue_script(
			'br-gsap',
			'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js',
			array(),
			'3.12.5',
			true
		);
		wp_enqueue_script(
			'br-gsap-scrolltrigger',
			'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js',
			array( 'br-gsap' ),
			'3.12.5',
			true
		);
	}

	if ( is_front_page() ) {
		wp_enqueue_script(
			'br-scroll-cards-gsap',
			$theme_uri . '/assets/js/scroll-cards-gsap.js',
			array( 'br-gsap-scrolltrigger', 'br-lenis-init' ),
			BR_VERSION,
			true
		);
		wp_enqueue_script(
			'br-home-gsap',
			$theme_uri . '/assets/js/home-gsap.js',
			array( 'br-scroll-cards-gsap', 'br-home-rail' ),
			BR_VERSION,
			true
		);
	} elseif ( br_loads_inner_scroll_card_assets() ) {
		wp_enqueue_script(
			'br-scroll-cards-gsap',
			$theme_uri . '/assets/js/scroll-cards-gsap.js',
			array( 'br-gsap-scrolltrigger', 'br-lenis-init' ),
			BR_VERSION,
			true
		);
	}

	$lenis_init_deps = array( 'br-lenis' );
	if ( br_loads_gsap_bundle() ) {
		$lenis_init_deps[] = 'br-gsap-scrolltrigger';
	}
	wp_enqueue_script(
		'br-lenis-init',
		$theme_uri . '/assets/js/lenis-init.js',
		$lenis_init_deps,
		BR_VERSION,
		true
	);

	if ( ! is_front_page() ) {
		wp_enqueue_script(
			'br-subpage-reveal-inview',
			$theme_uri . '/assets/js/subpage-reveal-inview.js',
			array( 'br-lenis-init' ),
			BR_VERSION,
			true
		);
	}

	wp_enqueue_script(
		'br-header-nav',
		$theme_uri . '/assets/js/header-nav.js',
		array( 'br-lenis-init' ),
		BR_VERSION,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'br_enqueue_assets' );

/**
 * Early marker for home GSAP hero prep (avoids flash of unstyled hero text when motion is allowed).
 */
function br_home_gsap_html_class() {
	if ( is_front_page() ) {
		echo '<script>document.documentElement.classList.add("br-home-js");</script>' . "\n";
	}
}
add_action( 'wp_head', 'br_home_gsap_html_class', 2 );

/**
 * Early paint state for inner listing scroll cards (matches home GSAP prep).
 */
function br_scroll_cards_html_class() {
	if ( br_loads_inner_scroll_card_assets() ) {
		echo '<script>document.documentElement.classList.add("br-scroll-cards-js");</script>' . "\n";
	}
}
add_action( 'wp_head', 'br_scroll_cards_html_class', 2 );

/**
 * Content width for embeds and images.
 */
function br_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'br_content_width', 960 );
}
add_action( 'after_setup_theme', 'br_content_width', 0 );
