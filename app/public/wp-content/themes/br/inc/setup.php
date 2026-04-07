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
		'br-style',
		get_stylesheet_uri(),
		array(),
		BR_VERSION
	);
	wp_enqueue_style(
		'br-main',
		$theme_uri . '/assets/css/main.css',
		array( 'br-style' ),
		BR_VERSION
	);

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
 * Content width for embeds and images.
 */
function br_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'br_content_width', 960 );
}
add_action( 'after_setup_theme', 'br_content_width', 0 );
