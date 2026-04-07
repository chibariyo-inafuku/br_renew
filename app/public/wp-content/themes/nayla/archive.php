<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Nayla
 */

get_header();
?>

<main id="primary" class="site-main" <?php naylaBarbaAttributes() ?>>

    <div class="section archive-section">

        <div class="wrapper">

            <?php if ( have_posts() ) : ?>

            <header class="page-header c-col-12">
                <?php
				the_archive_title( '<h1 class="page-title text-h3">', '</h1>' );
				the_archive_description( '<div class="archive-description">', '</div>' );
				?>
            </header><!-- .page-header -->


            <div class="c-col-8">

                <div class="nayla-posts-wrap">


                    <?php
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

            <div class="c-col-4">


                <?php get_sidebar() ?>


            </div>


        </div>

    </div>

</main><!-- #main -->

<?php

get_footer();
