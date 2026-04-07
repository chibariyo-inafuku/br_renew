<?php

/**
 * Register widget areas.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function nayla_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Blog Sidebar', 'nayla' ),
			'id'            => 'blog-sidebar',
			'description'   => esc_html__( 'Add widgets here.', 'nayla' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h5 class="widget-title">',
			'after_title'   => '</h5>',
		)
	);
    
            register_sidebar(
		array(
			'name'          => esc_html__( 'Shop Sidebar', 'nayla' ),
			'id'            => 'shop-sidebar',
			'description'   => esc_html__( 'Add widgets here.', 'nayla' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<div class="caption">',
			'after_title'   => '</div>',
		)
	);
  

   
}
add_action( 'widgets_init', 'nayla_widgets_init' );
