<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Nayla
 */
get_header();


?>

	<main id="primary" class="site-main" <?php naylaBarbaAttributes() ?>>

		<section class="error-404 not-found">
            
            <div class="marquee-404" data-duration=10 data-seperator=' '>
                
                <span><?php echo esc_html('404' , 'nayla') ?></span>
                
            </div>
            
            <div class="wrapper">
                
                <div class="c-col-9 col-center">
                    
                    			<header class="page-header">
				<h5 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'nayla' ); ?></h5>
			</header><!-- .page-header -->

			<div class="page-content">
				<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe move forward with a search?', 'nayla' ); ?></p>

					<?php
					get_search_form();
					?>

			</div><!-- .page-content -->
                
                </div>
            
            
            </div>

		</section><!-- .error-404 -->

	</main><!-- #main -->

<?php
get_footer();
