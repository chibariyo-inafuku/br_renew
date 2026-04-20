<?php
/**
 * Thanks / recruit-thanks: force theme templates when WP falls back to page.php
 * (e.g. slug hyphen vs underscore, or missing hierarchy file on deploy).
 *
 * @package br
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @param string $template Absolute path to the resolved template.
 * @return string
 */
function br_template_include_thanks_pages( $template ) {
	if ( ! is_singular( 'page' ) ) {
		return $template;
	}

	$post = get_queried_object();
	if ( ! ( $post instanceof WP_Post ) || $post->post_type !== 'page' ) {
		return $template;
	}

	$slug   = (string) $post->post_name;
	$dir    = get_template_directory();
	$target = '';

	if ( $slug === 'thanks' ) {
		$target = $dir . '/page-thanks.php';
	} elseif ( $slug === 'r_thanks' || $slug === 'r-thanks' ) {
		$target = $dir . '/page-r_thanks.php';
	}

	if ( $target !== '' && is_readable( $target ) ) {
		return $target;
	}

	return $template;
}
add_filter( 'template_include', 'br_template_include_thanks_pages', 20 );
