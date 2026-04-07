<?php
/**
 * Single post template.
 *
 * @package br
 */

get_header();
?>
<main id="main" class="br-main br-container">
	<?php
	while ( have_posts() ) :
		the_post();
		?>
		<article <?php post_class( 'br-article' ); ?>>
			<header class="br-article__header">
				<h1 class="br-article__title"><?php the_title(); ?></h1>
				<p class="br-article__meta">
					<time datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time>
				</p>
			</header>
			<?php if ( has_post_thumbnail() ) : ?>
				<div class="br-article__thumb">
					<?php the_post_thumbnail( 'large' ); ?>
				</div>
			<?php endif; ?>
			<div class="br-article__content br-content">
				<?php the_content(); ?>
			</div>
		</article>
	<?php endwhile; ?>
</main>
<?php
get_footer();
