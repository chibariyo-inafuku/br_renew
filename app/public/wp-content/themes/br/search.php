<?php
/**
 * Search results.
 *
 * @package br
 */

get_header();
?>
<main id="main" class="br-main br-container">
	<header class="br-archive-header">
		<h1 class="br-archive-header__title">
			<?php
			printf(
				/* translators: %s: search query */
				esc_html__( 'Search results for "%s"', 'br' ),
				esc_html( get_search_query() )
			);
			?>
		</h1>
	</header>

	<?php if ( have_posts() ) : ?>
		<ul class="br-post-list">
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<li class="br-post-list__item">
					<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
					<?php
					$ptype = get_post_type_object( get_post_type() );
					$plab  = $ptype ? $ptype->labels->singular_name : '';
					?>
					<span class="br-post-list__meta"><?php echo esc_html( $plab ); ?></span>
				</li>
			<?php endwhile; ?>
		</ul>
		<?php br_the_pagination(); ?>
	<?php else : ?>
		<p><?php esc_html_e( 'Nothing matched your search.', 'br' ); ?></p>
	<?php endif; ?>
</main>
<?php
get_footer();
