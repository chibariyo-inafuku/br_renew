<?php
/**
 * Default page template.
 *
 * @package br
 */

get_header();
?>
<main id="main" class="br-main">
	<?php
	while ( have_posts() ) :
		the_post();
		?>
		<article <?php post_class( 'br-page br-container' ); ?>>
			<header class="br-page__header">
				<h1 class="br-page__title"><?php the_title(); ?></h1>
			</header>
			<div class="br-page__content br-content">
				<?php the_content(); ?>
			</div>
		</article>
	<?php endwhile; ?>
</main>
<?php
get_footer();
