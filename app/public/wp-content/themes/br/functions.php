<?php
/**
 * BR theme bootstrap.
 *
 * @package br
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'BR_VERSION', '1.0.0' );

require get_template_directory() . '/inc/post-types.php';
require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/inc/gallery-migration.php';
require get_template_directory() . '/inc/setup.php';
