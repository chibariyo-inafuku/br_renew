<?php
/**
 * Fixed page: /privacy/ (slug `privacy`).
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	?>
<main id="main" class="br-main br-page-default br-page-default--privacy">
	<section class="br-page-default__heading" aria-labelledby="br-page-default-title" data-br-subpage-reveal>
		<div class="br-container br-page-default__heading-inner">
			<header class="br-page-default__heading-title br-home__works-heading br-home__section-head">
				<h1 class="br-home__works-title" id="br-page-default-title">
					<span class="screen-reader-text">Privacy Policy / プライバシーポリシー</span>
					<div
						class="br-svg-heading br-svg-heading--on-light"
						data-br-svg-heading
						style="<?php echo esc_attr( '--br-page-svg-vb: 1280;' ); ?>"
					>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 1280 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Privacy Policy</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__works-title-jp br-svg-heading__sub">/ プライバシーポリシー</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-page-default__breadcrumb" aria-label="パンくず">
				<ol class="br-page-default__breadcrumb-list">
					<li><a href="/">Top</a></li>
					<li class="br-page-default__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-page-default__breadcrumb-current">Privacy Policy</span></li>
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
