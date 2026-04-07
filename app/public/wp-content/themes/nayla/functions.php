<?php
/**
 * Nayla functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Nayla
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function nayla_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on Nayla, use a find and replace
		* to change 'nayla' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'nayla', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'main-menu' => esc_html__( 'Main Menu', 'nayla' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
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

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'nayla_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'nayla_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function nayla_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'nayla_content_width', 640 );
}
add_action( 'after_setup_theme', 'nayla_content_width', 0 );

    
// if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
//        
//   $purchaseCode = $_POST['purchase_code'];
//        
//  $url = "http://localhost/pca/index.php?purchase_code=" . $purchaseCode;
//    
//  $response = wp_remote_get($url);
//        
//          // Yanıtı kontrol etme ve işleme
//  if (is_wp_error($response)) {
//    echo "Hata oluştu: " . $response->get_error_message();
//  } else {
//    $body = wp_remote_retrieve_body($response);
//    $envatoCheck = json_decode($body);
//
//    if ($envatoCheck) {
//
//      $username = isset($envatoCheck->buyer) ? $envatoCheck->buyer : false;
//      $purchaseDate = isset($envatoCheck->sold_at) ? $envatoCheck->sold_at : false;
//      $supportDate = isset($envatoCheck->supported_until) ? $envatoCheck->supported_until : false;
//        $activeURL = site_url();
//      
//      if ($username) {
//          
//        echo "Buyer: " . $username;
//        echo "Sold: " . $purchaseDate;
//
//          
//          $conn =  "http://localhost/pca/connect.php?purchase_code=" . $purchaseCode . '&username=' . $username . '&purchase_date='. $purchaseDate . '&supported_until=' . $supportDate . '&url=' . $activeURL ;
//          
//           wp_remote_get($conn);
//          
//           $mes = wp_remote_retrieve_body($conn);
//    $mess = json_decode($mes);
//          
//          
//           $messag = isset($mess->message) ? $mess->message : false;
//          
//          echo $mess['message'];
//          
//      } else {
//          
//        echo "Buyer değişkeni bulunamadı.";
//      }
//    } else {
//        
//      echo "API yanıtı işlenirken bir hata oluştu.";
//    }
//  }
//    
//    }
//   
//}



function nayla_add_custom_js_file_to_admin( $hook ) {
  wp_enqueue_script ( 'custom-script', get_template_directory_uri() . '/js/custom-script.js' );
}
add_action('admin_enqueue_scripts', 'nayla_add_custom_js_file_to_admin');


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Register Widgets
 */
require get_template_directory() . '/inc/widgets.php';

/**
 * Scripts and Styles
 */
require get_template_directory() . '/inc/static.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * ACF Fields
 */
require get_template_directory() . '/inc/acf.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Woocommerce Support
 */
require get_template_directory() . '/inc/woocommerce.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Register Demos
 */
require get_template_directory() . '/inc/demo-import.php';

/**
 * TGM Plugin activation
 */
require get_template_directory() . '/inc/class-tgm-plugin-activation.php';
require get_template_directory() . '/inc/nayla-add-plugins.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * short code
 */
function display_elementor_template($atts) {
    $atts = shortcode_atts(
        array(
            'id' => '', // テンプレート ID
        ),
        $atts
    );

    if (!class_exists('Elementor\Plugin')) {
        return '<p>Elementor プラグインが有効化されていません。</p>';
    }

    if (!empty($atts['id'])) {
        return Elementor\Plugin::$instance->frontend->get_builder_content_for_display($atts['id']);
    }

    return '<p>テンプレート ID が指定されていません。</p>';
}
add_shortcode('elementor_template', 'display_elementor_template');
