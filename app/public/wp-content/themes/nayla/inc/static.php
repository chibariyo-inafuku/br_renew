<?php 

/*
Register Google Fonts
*/

function add_google_fonts() {

wp_enqueue_style( ' add_google_fonts ', 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap', false );}



add_action( 'wp_enqueue_scripts', 'add_google_fonts' );

function add_material_icons() {

wp_enqueue_style( ' add_google_fonts ', 'https://fonts.googleapis.com/icon?family=Material+Icons', false );}



add_action( 'wp_enqueue_scripts', 'add_material_icons' );


/**
 * Enqueue scripts and styles.
 */
function nayla_scripts() {
    

    wp_enqueue_style( 'nayla-plugins' , get_template_directory_uri() . '/css/plugins.css');
    
	wp_enqueue_style( 'nayla-style', get_stylesheet_uri(), array() );
    
	wp_style_add_data( 'nayla-style', 'rtl', 'replace' );
    
    wp_enqueue_script( 'gsap', get_template_directory_uri() . '/js/gsap.js', array('jquery') ,'',true);
    
    wp_enqueue_script( 'barba', get_template_directory_uri() . '/js/barba.min.js', array('jquery'),'',true);

     wp_enqueue_script( 'nayla-plugins', get_template_directory_uri() . '/js/plugins.js', array('jquery'),'',true);
    
	wp_enqueue_script( 'nayla-scripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'),'',true);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

}
add_action( 'wp_enqueue_scripts', 'nayla_scripts');



?>
