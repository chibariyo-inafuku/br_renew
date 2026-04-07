<?php
/**
 * Main fallback template.
 *
 * @package br
 */

get_header();
?>
<main id="main" class="br-main br-container">
	<?php if ( have_posts() ) : ?>
		<ul class="br-post-list">
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<li class="br-post-list__item">
					<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
					<span class="br-post-list__meta"><?php echo esc_html( get_the_date() ); ?></span>
				</li>
			<?php endwhile; ?>
		</ul>
		<?php br_the_pagination(); ?>
	<?php else : ?>
		<p><?php esc_html_e( 'Nothing found.', 'br' ); ?></p>
	<?php endif; ?>
</main>
<?php
get_footer();
