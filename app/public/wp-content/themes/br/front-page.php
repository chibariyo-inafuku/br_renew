<?php
/**
 * Front page template (TOP /).
 *
 * @package br
 */

get_header();
get_template_part( 'template-parts/home/loading', 'overlay' );

while ( have_posts() ) :
	the_post();
	?>
<main id="main" class="br-main br-home">
	<?php
	get_template_part( 'template-parts/home/section', 'hero' );
	//get_template_part( 'template-parts/home/section', 'concept' );
	get_template_part( 'template-parts/home/section', 'works' );
	get_template_part( 'template-parts/home/section', 'project' );
	get_template_part( 'template-parts/home/section', 'parallax' );
	get_template_part( 'template-parts/home/section', 'news' );
	get_template_part( 'template-parts/home/section', 'blog' );
	get_template_part( 'template-parts/home/section', 'service' );
	get_template_part( 'template-parts/home/section', 'palarax' );
	get_template_part( 'template-parts/home/section', 'cta' );

	$content = get_post()->post_content;
	if ( is_string( $content ) && trim( $content ) !== '' ) :
		?>
	<div class="br-home__section br-home__section--page-content">
		<div class="br-container br-home__page-content br-content">
			<?php the_content(); ?>
		</div>
	</div>
	<?php endif; ?>
</main>
	<?php
endwhile;

get_footer();
