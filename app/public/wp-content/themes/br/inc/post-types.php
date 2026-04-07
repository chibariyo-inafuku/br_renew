<?php
/**
 * Portfolio CPT and taxonomies (matches Pe Core defaults; slug fixed to `portfolio`).
 *
 * @package br
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register portfolio custom post type.
 */
function br_register_portfolio_post_type() {
	if ( post_type_exists( 'portfolio' ) ) {
		return;
	}

	$labels = array(
		'name'               => _x( 'Portfolio', 'Post Type General Name', 'br' ),
		'singular_name'      => _x( 'Project', 'Post Type Singular Name', 'br' ),
		'menu_name'          => __( 'Portfolio', 'br' ),
		'parent_item_colon'  => __( 'Parent Portfolio', 'br' ),
		'all_items'          => __( 'All Projects', 'br' ),
		'view_item'          => __( 'View Project', 'br' ),
		'add_new_item'       => __( 'Add New Project', 'br' ),
		'add_new'            => __( 'Add New', 'br' ),
		'edit_item'          => __( 'Edit Project', 'br' ),
		'update_item'        => __( 'Update Project', 'br' ),
		'search_items'       => __( 'Search Project', 'br' ),
		'not_found'          => __( 'Not Found', 'br' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'br' ),
	);

	$args = array(
		'label'               => __( 'portfolio', 'br' ),
		'description'         => __( 'Portfolio projects', 'br' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'thumbnail', 'revisions', 'custom-fields' ),
		'taxonomies'          => array( 'project-categories' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-portfolio',
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest'        => true,
		'rewrite'             => array( 'slug' => 'portfolio' ),
	);

	register_post_type( 'portfolio', $args );
}
add_action( 'init', 'br_register_portfolio_post_type', 0 );

/**
 * Register project categories taxonomy.
 */
function br_register_project_categories() {
	if ( taxonomy_exists( 'project-categories' ) ) {
		return;
	}

	$labels = array(
		'name'              => _x( 'Categories', 'taxonomy general name', 'br' ),
		'singular_name'     => _x( 'Category', 'taxonomy singular name', 'br' ),
		'search_items'      => __( 'Search Categories', 'br' ),
		'all_items'         => __( 'All Categories', 'br' ),
		'parent_item'       => __( 'Parent Category', 'br' ),
		'parent_item_colon' => __( 'Parent Category:', 'br' ),
		'edit_item'         => __( 'Edit Category', 'br' ),
		'update_item'       => __( 'Update Category', 'br' ),
		'add_new_item'      => __( 'Add New Category', 'br' ),
		'new_item_name'     => __( 'New Category Name', 'br' ),
		'menu_name'         => __( 'Categories', 'br' ),
	);

	register_taxonomy(
		'project-categories',
		array( 'portfolio' ),
		array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_rest'      => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'category' ),
		)
	);
}
add_action( 'init', 'br_register_project_categories', 0 );
