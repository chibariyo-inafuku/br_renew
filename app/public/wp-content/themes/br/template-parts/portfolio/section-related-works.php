<?php
/**
 * Portfolio single: related Works carousel (expects extracted `$query` from get_template_part args).
 *
 * @package br
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! isset( $query ) || ! $query instanceof WP_Query || $query->post_count < 1 ) {
	return;
}
?>
<section class="br-portfolio-related" data-br-subpage-reveal aria-labelledby="br-portfolio-related-heading">
	<div class="br-container">
		<header class="br-portfolio-related__head br-portfolio-related__head--with-nav">
			<div class="br-portfolio-related__head-text">
				<p class="br-portfolio-related__kicker">他の実績を見る</p>
				<h2 class="br-portfolio-related__title" id="br-portfolio-related-heading">OTHER WORKS</h2>
			</div>
			<div class="br-portfolio-related__head-right">
				<div class="br-portfolio-related__rail-nav" role="group" aria-label="関連実績のスライド">
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
								<p class="br-portfolio-related__tag"><?php echo esc_html( $badge ); ?></p>
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
