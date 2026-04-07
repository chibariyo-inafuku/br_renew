<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Nayla
 */

get_header();
$sidebar = 'right-sidebar';
$grid_col = 'c-col-8';
$cols = '';
$title = true;

$option = get_option('pe-redux');

if (class_exists('Redux')) {
    
    $title = $option['show_archive_title'];
    $titleText = $option['archive_title'];
    
    $sidebar = $option['archive_sidebar'];
    
if ((!is_active_sidebar('blog-sidebar')) || ($sidebar === 'no-sidebar')) {
    
$grid_col = 'c-col-12';
}
    $cols = $option['archive_cols'];
};


?>

<main id="primary" class="site-main section" <?php naylaBarbaAttributes() ?> style="padding-top: 0">

    <div class="wrapper">

        <?php if (is_active_sidebar('blog-sidebar') && $sidebar === 'left-sidebar') { ?>
        <div class="c-col-4">

            <?php get_sidebar(); ?>

        </div>
        <?php } ?>

        <div class="np-grid <?php echo esc_attr($grid_col) ?>">

            <?php if ($title) { ?>
            <div class="page-title archive-title">
                
                <h1><?php echo esc_html($titleText) ?></h1>
                
            </div>
            <?php  } ?>

            <div class="nayla-posts-wrap <?php echo esc_attr($cols) ?>">

                <?php
		if ( have_posts() ) :

			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_type() );

			endwhile;

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>


            </div>



            <div class="nayla-posts-nav">

                <?php nayla_posts_nav();  ?>


            </div>

        </div>

        <?php if (is_active_sidebar('blog-sidebar') && $sidebar === 'right-sidebar') { ?>
        <div class="c-col-4">

            <?php get_sidebar(); ?>

        </div>
        <?php } ?>

    </div>
</main><!-- #main -->

<?php

get_footer();
