<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Nayla
 */


$footer_template = '';
$template = '';

if (class_exists('Redux')) {
    
    $option = get_option('pe-redux');
    
     $footer_template = $option['footer_template'];

    if($footer_template === 'custom') {

if (get_field('footer_template')) {
    
    $template = get_field('footer_template');

    
} else {
    
    if(is_woocommerce_activated()) {

    if(is_woocommerce() || is_woocommerce_page()) {
    
    $template = $option['select-shop-footer-template'];
        
} else {
        
    
     $template = $option['select-footer-template'];
}
        
    } else {
        
         $template = $option['select-footer-template'];
    }
    
}
    
   } 
};

?>

<footer id="footer" class="site-footer section">

    <?php 
if ($footer_template !== 'default') { 
    
$args = array(
    'post_type' => 'elementor_library',
    'post__in' => array($template)
);
$my_three_posts = new WP_Query( $args );

while ($my_three_posts -> have_posts()) : $my_three_posts -> the_post();

the_content();

endwhile;

 } else { ?>

    <div class="wrapper">

        <div class="c-col-12">

            <div class="site-info">
                <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'nayla' ) ); ?>">
                    <?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'nayla' ), 'WordPress' );
				?>
                </a>
                <span class="sep"> | </span>
                <?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'nayla' ), 'nayla', '<a href="http://underscores.me/">Underscores.me</a>' );
				?>
            </div><!-- .site-info -->

        </div>

    </div>
<?php } ?>

</footer><!-- #footer -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>
