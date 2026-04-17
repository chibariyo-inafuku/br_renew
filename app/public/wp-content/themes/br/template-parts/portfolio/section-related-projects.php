<?php
/**
 * Portfolio single: related Projects carousel (reads `$GLOBALS['br_section_related_projects_query']` from single-portfolio.php).
 *
 * @package br
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$query = null;
if ( isset( $GLOBALS['br_section_related_projects_query'] ) && $GLOBALS['br_section_related_projects_query'] instanceof WP_Query ) {
	$query = $GLOBALS['br_section_related_projects_query'];
}

if ( ! $query || $query->post_count < 1 ) {
	return;
}
?>
<section class="br-portfolio-related" data-br-subpage-reveal aria-labelledby="br-portfolio-related-projects-heading">
	<div class="br-container">
		<header class="br-portfolio-related__head br-portfolio-related__head--with-nav">
			<div class="br-portfolio-related__head-text br-home__works-heading br-home__section-head">
				<h2 class="br-home__works-title" id="br-portfolio-related-projects-heading">
					<span class="screen-reader-text">Other Projects / 他のプロジェクト</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 1200 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Other Projects</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__works-title-jp br-svg-heading__sub">/ 他のプロジェクト</span>
						</div>
					</div>
				</h2>
			</div>
			<div class="br-portfolio-related__head-right">
				<div class="br-portfolio-related__rail-nav" role="group" aria-label="関連プロジェクトのスライド">
					<button type="button" class="br-home__rail-btn swiper-button-prev br-portfolio-related__rail-btn">
						<span class="screen-reader-text">前へ</span>
						<span aria-hidden="true">&#8592;</span>
					</button>
					<button type="button" class="br-home__rail-btn swiper-button-next br-portfolio-related__rail-btn">
						<span class="screen-reader-text">次へ</span>
						<span aria-hidden="true">&#8594;</span>
					</button>
				</div>
			</div>
		</header>
		<div class="swiper br-portfolio-related__swiper">
			<div class="swiper-wrapper">
				<?php
				while ( $query->have_posts() ) :
					$query->the_post();
					$card_id = get_the_ID();
					$badge   = br_get_portfolio_card_category_label( $card_id );
					?>
				<article class="swiper-slide br-portfolio-related__slide">
					<a class="br-portfolio-related__card" href="<?php the_permalink(); ?>">
						<div class="br-portfolio-related__media">
							<?php if ( has_post_thumbnail( $card_id ) ) : ?>
								<div class="br-portfolio-related__image">
									<?php echo get_the_post_thumbnail( $card_id, 'medium_large' ); ?>
								</div>
							<?php else : ?>
								<div class="br-portfolio-related__image br-portfolio-related__image--placeholder" aria-hidden="true"></div>
							<?php endif; ?>
						</div>
						<div class="br-portfolio-related__body">
							<?php if ( $badge !== '' ) : ?>
								<span class="br-portfolio-related__tag"><?php echo esc_html( $badge ); ?></span>
							<?php endif; ?>
							<h3 class="br-portfolio-related__card-title"><?php the_title(); ?></h3>
						</div>
					</a>
				</article>
					<?php
				endwhile;
				wp_reset_postdata();
				?>
			</div>
		</div>
	</div>
</section>
