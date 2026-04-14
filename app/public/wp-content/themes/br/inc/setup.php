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
 * Enqueue scripts and styles.
 */
function br_enqueue_assets() {
	$theme_uri = get_template_directory_uri();

	wp_enqueue_style(
		'br-google-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=MuseoModerno:wght@700&family=Noto+Sans+JP:wght@400;500;700&display=swap',
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

	if ( is_front_page() || is_page( 'works' ) ) {
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
		wp_enqueue_style(
			'br-home',
			$theme_uri . '/assets/css/home.css',
			array( 'br-main', 'br-swiper' ),
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
		wp_enqueue_script(
			'br-home-gsap',
			$theme_uri . '/assets/js/home-gsap.js',
			array( 'br-gsap-scrolltrigger', 'br-home-rail' ),
			BR_VERSION,
			true
		);
	}

	if ( ! class_exists( 'WPCF7' ) ) {
		return;
	}

	$load_cf7 = is_page( array( 'recruit', 'contact' ) );
	if ( ! $load_cf7 ) {
		global $post;
		$load_cf7 = $post && has_shortcode( (string) $post->post_content, 'contact-form-7' );
	}

	if ( $load_cf7 ) {
		wp_enqueue_style(
			'br-cf7',
			$theme_uri . '/assets/css/cf7.css',
			array( 'br-main' ),
			BR_VERSION
		);
	}
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
 * Content width for embeds and images.
 */
function br_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'br_content_width', 960 );
}
add_action( 'after_setup_theme', 'br_content_width', 0 );
