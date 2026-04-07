<?php 

function ocdi_import_files() {
  return array(
    array(
      'import_file_name'           => 'Nayla',
      'import_file_url'            => 'https://themes.pethemes.com/nayla/demos/nayla-demo-no-img.xml',
      'import_customizer_file_url' => 'https://themes.pethemes.com/nayla/demos/nayla-customizer.dat',
        
              'import_redux'               => array(
        array(
     'file_url'    => 'https://themes.pethemes.com/nayla/demos/nayla-redux.json',
          'option_name' => 'pe-redux',
        ),
      ),

      'import_preview_image_url'   => 'https://themes.pethemes.com/nayla/demos/envato_head.jpg',
      'preview_url'                => 'https://naylawp.pethemes.com/',
    ),
  );
}
add_filter( 'pt-ocdi/import_files', 'ocdi_import_files' );

function ocdi_after_import_setup() {
    // Assign menus to their locations.
    $main_menu = get_term_by( 'name', 'Main Menu – Agency', 'nav_menu' );

    set_theme_mod( 'nav_menu_locations', array(
            'main-menu' => $main_menu->term_id, // replace 'main-menu' here with the menu location identifier from register_nav_menu() function
        )
    );

    // Assign front page and posts page (blog page).
    $front_page_id = get_page_by_title( 'Home – Landing' );
//    $blog_page_id  = get_page_by_title( 'Journal' );

    update_option( 'show_on_front', 'page' );
    update_option( 'page_on_front', $front_page_id->ID );
//    update_option( 'page_for_posts', $blog_page_id->ID );

}
add_action( 'pt-ocdi/after_import', 'ocdi_after_import_setup' );


add_filter( 'pt-ocdi/disable_pt_branding', '__return_true' );

function ocdi_plugin_intro_text( $default_text ) {
    
    $isActivated = get_option('is_activated');
    
    if (!$isActivated) {
        
     $default_text .= '<div class="nayla-settings-disabled"></div>
<div class="nsd-warn"><h4>You need to activate the theme with your purchase code to gain access to one click demo importer.</h4></div>';
 
    return $default_text;
    }

}

add_filter( 'ocdi/plugin_intro_text', 'ocdi_plugin_intro_text' );