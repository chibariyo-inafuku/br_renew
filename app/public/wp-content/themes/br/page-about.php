<?php
/**
 * Fixed page: /about/ (slug `about`).
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	?>
<main id="main" class="br-main br-about">
	<?php
	get_template_part( 'template-parts/about/section', 'heading' );
	get_template_part( 'template-parts/about/section', 'anchors' );
	get_template_part( 'template-parts/about/section', 'pillars' );
	get_template_part( 'template-parts/about/section', 'overview' );
	get_template_part( 'template-parts/about/section', 'promos' );
	?>
	<div class="br-home">
		<?php get_template_part( 'template-parts/home/section', 'cta' ); ?>
	</div>
</main>
	<?php
endwhile;

get_footer();
