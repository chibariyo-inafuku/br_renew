<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Nayla
 */

get_header();
?>

<main id="primary" class="site-main" <?php naylaBarbaAttributes() ?>>

    <div class="section search-res-section">

        <div class="wrapper">


    <?php if ( have_posts() ) : ?>

    <header class="page-header">
        <h1 class="page-title text-h3 c-col-12">
            <?php
					/* translators: %s: search query. */
					printf( esc_html__( 'Search Results for: %s', 'nayla' ), '<span>' . get_search_query() . '</span>' );
					?>
        </h1>
    </header><!-- .page-header -->

    <div class="c-col-8">

        <div class="nayla-posts-wrap">

            <?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
				get_template_part( 'template-parts/content', 'search' );

			endwhile;

		?>

        </div>

        <div class="nayla-posts-nav">

            <?php nayla_posts_nav();  ?>


        </div>

    </div>

    <div class="c-col-4">


        <?php get_sidebar() ?>


    </div>
            
            <?php 
		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>


        </div>

    </div>

</main><!-- #main -->

<?php
get_footer();
