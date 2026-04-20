<?php
/**
 * Default page template.
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();

	$br_page_title     = get_the_title();
	$br_page_title_len = function_exists( 'mb_strlen' ) ? mb_strlen( $br_page_title ) : strlen( $br_page_title );
	$br_page_svg_vb    = (int) max( 480, min( 2200, ( $br_page_title_len * 52 ) + 160 ) );
	?>
<main id="main" class="br-main br-page-default">
	<section class="br-page-default__heading" aria-labelledby="br-page-default-title" data-br-subpage-reveal>
		<div class="br-container br-page-default__heading-inner">
			<header class="br-page-default__heading-title br-home__works-heading br-home__section-head">
				<h1 class="br-home__works-title" id="br-page-default-title">
					<span class="screen-reader-text"><?php echo esc_html( $br_page_title ); ?></span>
					<div
						class="br-svg-heading br-svg-heading--on-light"
						data-br-svg-heading
						aria-hidden="true"
						style="<?php echo esc_attr( '--br-page-svg-vb: ' . (string) $br_page_svg_vb . ';' ); ?>"
					>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="<?php echo esc_attr( '0 0 ' . $br_page_svg_vb . ' 102' ); ?>"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700"><?php echo esc_html( $br_page_title ); ?></text>
						</svg>
					</div>
				</h1>
			</header>
			<nav class="br-page-default__breadcrumb" aria-label="パンくず">
				<ol class="br-page-default__breadcrumb-list">
					<li><a href="/">Top</a></li>
					<li class="br-page-default__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-page-default__breadcrumb-current"><?php echo esc_html( $br_page_title ); ?></span></li>
				</ol>
			</nav>
		</div>
	</section>
	<article <?php post_class( 'br-page-default__article' ); ?> aria-labelledby="br-page-default-title" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-page-default__content br-content">
				<?php the_content(); ?>
			</div>
		</div>
	</article>
</main>
<?php
endwhile;

get_footer();
