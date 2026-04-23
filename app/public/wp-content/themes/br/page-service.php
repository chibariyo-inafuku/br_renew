<?php
/**
 * Fixed page: /service/ (slug `service`). Lists `post` in category `services` with optional child `service_cat`.
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	$list_page_url      = get_permalink( get_the_ID() );
	$service_cat_param  = '';
	if ( isset( $_GET['service_cat'] ) && is_string( $_GET['service_cat'] ) ) {
		$service_cat_param = sanitize_title( wp_unslash( $_GET['service_cat'] ) );
	}
	$service_cat = '';
	if ( $service_cat_param !== '' ) {
		$services_term = get_term_by( 'slug', 'services', 'category' );
		$filter_term   = get_term_by( 'slug', $service_cat_param, 'category' );
		if ( $services_term instanceof WP_Term && $filter_term instanceof WP_Term ) {
			if ( (int) $filter_term->term_id === (int) $services_term->term_id ) {
				$service_cat = '';
			} elseif ( term_is_ancestor_of( (int) $services_term->term_id, (int) $filter_term->term_id, 'category' ) ) {
				$service_cat = $service_cat_param;
			}
		}
	}
	$q                 = br_query_posts_for_service_page( 12, $service_cat_param );
	$service_cat_terms = br_get_service_list_nav_category_terms();
	$paged_now         = br_get_query_paged();
	$pagination_add    = $service_cat !== '' ? array( 'service_cat' => $service_cat ) : array();
	$all_list_url      = br_get_service_page_list_url( $paged_now, '' );
	// Do not use $page here — it overwrites the global $page (content page number) and breaks the_content().
	$br_listing_page = get_post();
	$content         = $br_listing_page instanceof WP_Post ? $br_listing_page->post_content : '';
	$has_intro         = is_string( $content ) && trim( $content ) !== '';
	?>
<main id="main" class="br-main br-service">
	<section class="br-service__heading" aria-labelledby="br-service-title" data-br-subpage-reveal>
		<div class="br-container br-service__heading-inner">
			<header class="br-service__heading-title br-home__service-heading br-home__section-head">
				<h1 class="br-home__service-title" id="br-service-title">
					<span class="screen-reader-text">Service / サービス</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 720 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Service</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__service-title-jp br-svg-heading__sub">/ サービス</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-service__breadcrumb" aria-label="パンくず">
				<ol class="br-service__breadcrumb-list">
					<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Top</a></li>
					<li class="br-service__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-service__breadcrumb-current">Service</span></li>
				</ol>
			</nav>
		</div>
		<div class="br-container br-service__lead-wrap">
			<p class="br-service__lead">
			生成AIという革新的な技術を掛け合わせることで、従来では実現できなかった表現クオリティとスピードを両立。<br>ターゲットに刺さるクリエイティブを高速で実装します。
			</p>
		</div>
	</section>

	<?php if ( $has_intro ) : ?>
	<section class="br-service__intro" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-service__intro-inner br-content">
				<?php the_content(); ?>
			</div>
		</div>
	</section>
	<?php endif; ?>

	<section
		class="br-home__section br-home__section--service br-home__section--service-band br-home__service br-service__list-band"
		aria-labelledby="br-service-list-title"
	>
		<div class="br-container">
			<h2 id="br-service-list-title" class="screen-reader-text">サービス一覧</h2>

			<nav class="br-service__cat-nav" aria-label="カテゴリーで絞り込み">
				<ul class="br-service__cat-list">
					<li class="br-service__cat-item">
						<?php
						$all_is_current = ( $service_cat === '' );
						?>
						<a
							class="br-service__cat-link<?php echo $all_is_current ? ' is-active' : ''; ?>"
							href="<?php echo esc_url( $all_list_url !== '' ? $all_list_url : get_permalink( get_the_ID() ) ); ?>"
							<?php echo $all_is_current ? ' aria-current="page"' : ''; ?>
						>ALL OF SERVICE</a>
					</li>
					<?php foreach ( $service_cat_terms as $cat_term ) : ?>
						<?php
						if ( ! $cat_term instanceof WP_Term ) {
							continue;
						}
						$term_url   = br_get_service_page_list_url( 1, $cat_term->slug );
						$is_current = ( $service_cat !== '' && $service_cat === $cat_term->slug );
						$href       = $term_url !== '' ? $term_url : '#';
						$term_label = $cat_term->name;
						?>
						<li class="br-service__cat-item">
							<a
								class="br-service__cat-link<?php echo $is_current ? ' is-active' : ''; ?>"
								href="<?php echo esc_url( $href ); ?>"
								<?php echo $is_current ? ' aria-current="page"' : ''; ?>
							><?php echo esc_html( $term_label ); ?></a>
						</li>
					<?php endforeach; ?>
				</ul>
			</nav>

			<?php if ( $q->have_posts() ) : ?>
				<ul class="br-home__service-grid">
					<?php
					while ( $q->have_posts() ) :
						$q->the_post();
						get_template_part(
							'template-parts/post/service',
							'home-card',
							array( 'post_id' => (int) get_the_ID() )
						);
					endwhile;
					?>
				</ul>
				<div class="br-service__pagination-wrap">
					<?php
					br_the_pagination(
						$q,
						$list_page_url,
						$pagination_add,
						array(
							'prev_text' => '←',
							'next_text' => '→',
						)
					);
					?>
				</div>
				<?php wp_reset_postdata(); ?>
			<?php else : ?>
				<p class="br-service__empty">該当する記事はまだありません。</p>
			<?php endif; ?>
		</div>
	</section>

	<div class="br-home" data-br-subpage-reveal>
		<?php get_template_part( 'template-parts/home/section', 'cta' ); ?>
	</div>
</main>
	<?php
endwhile;

get_footer();
