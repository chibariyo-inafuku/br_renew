<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Nayla
 */



$barba = '';
$header_template = '';
$template = '';

if (class_exists('Redux')) {
    
    $option = get_option('pe-redux');
    
    $header_template = $option['header_template'];
    
    if ($header_template !== 'default') {
        
        if(get_field('header_template')) {
                
         $template = get_field('header_template');
         
    } else {
            
    if (is_woocommerce_activated() ) {
            
if(is_woocommerce() || is_woocommerce_page()) {
    
    $template = $option['select-shop-header-template'];
} else {
    
     $template = $option['select-header-template'];
}
} else {
        
       $template = $option['select-header-template']; 
    }
    }        
    }
    
    if ($option['page_transitions_active']) {
        
        $barba = 'wrapper';
    }
    
};


?>


<!doctype html>
<html <?php language_attributes(); ?>>

<head>

    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body data-barba="<?php echo esc_attr($barba) ?>" <?php body_class();?>>
    <?php naylaSmoothScroll() ?>

    <?php wp_body_open(); ?>

    <div id="page" class="site">

        <?php 
        if (class_exists('Redux')) {

        naylaMouseCursor(); 
            
                    if (is_woocommerce_activated() )  {
                    
        if (!is_woocommerce_page()) {
            
             naylaPageLoader(); 
        }
                
                } else {

                     naylaPageLoader(); 
                }

            
            naylaPageTransitions(); 
        
        }; ?>


        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'nayla' ); ?></a>


        <div class="menu-overlay"></div>

        <header id="masthead" class="site-header <?php nayla_header_classes() ?> " style="padding-top: 0">

            <?php if ($header_template !== 'custom') { ?>

            <div class="header-wrapper wrapper">

                <div class="c-col-3">

                    <div class="site-branding">
                        <?php
                        
                            if (has_custom_logo()) {
                                                        
			                     the_custom_logo();
                                
                            } else { ?>

                        <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>

                        <?php
                                	$nayla_description = get_bloginfo( 'description', 'display' );
			if ( $nayla_description || is_customize_preview() ) :
				?>
                        <p class="site-description"><?php echo esc_html($nayla_description); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
                        <?php endif; 
                                
                            } ?>

                    </div><!-- .site-branding -->


                </div>

                <div class="c-col-9">


                    <nav id="site-navigation" class="main-navigation default">

                        <?php
			wp_nav_menu(
				array(
					'theme_location' => 'main-menu',
					'menu_id'        => 'main-menu',
				)
			);
			?>
                    </nav><!-- #site-navigation -->

                </div>

            </div>

            <?php } else { 
    
    ?>



            <?php     

$args = array(
    'post_type' => 'elementor_library',
    'post__in' => array($template)
);
$my_three_posts = new WP_Query( $args );

while ($my_three_posts -> have_posts()) : $my_three_posts -> the_post();

the_content();

endwhile;
    
    ?>


            <?php

           } ?>

        </header><!-- #masthead -->
				<!-- Google tag (gtag.js) -->
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-SZ0KDGXT6F"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					
					gtag('config', 'G-SZ0KDGXT6F');
				</script>