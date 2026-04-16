<?php
/**
 * Fixed page: /works/ (slug `works`). Lists `portfolio` with taxonomy `portfolio-list` term `works-s`.
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	$list_page_url = get_permalink( get_the_ID() );
	$works_cat_param = '';
	if ( isset( $_GET['works_cat'] ) && is_string( $_GET['works_cat'] ) ) {
		$works_cat_param = sanitize_title( wp_unslash( $_GET['works_cat'] ) );
	}
	$works_cat = '';
	if ( $works_cat_param !== '' && taxonomy_exists( 'project-categories' ) ) {
		$works_cat_term = get_term_by( 'slug', $works_cat_param, 'project-categories' );
		if ( $works_cat_term instanceof WP_Term ) {
			$works_cat = $works_cat_param;
		}
	}
	$q               = br_query_portfolio_for_list_term( 'works-s', 12, $works_cat_param );
	$works_cat_terms = br_get_works_list_project_category_terms();
	$paged_now       = br_get_query_paged();
	$pagination_add  = $works_cat !== '' ? array( 'works_cat' => $works_cat ) : array();
	$all_list_url    = br_get_works_page_list_url( $paged_now, '' );
	// Do not use $page here — it overwrites the global $page (content page number) and breaks the_content().
	$br_listing_page = get_post();
	$content         = $br_listing_page instanceof WP_Post ? $br_listing_page->post_content : '';
	$has_intro     = is_string( $content ) && trim( $content ) !== '';
	?>
<main id="main" class="br-main br-works">
	<section class="br-works__heading" aria-labelledby="br-works-title" data-br-subpage-reveal>
		<div class="br-container br-works__heading-inner">
			<header class="br-works__heading-title br-home__works-heading br-home__section-head">
				<h1 class="br-home__works-title" id="br-works-title">
					<span class="screen-reader-text">Works / 実績紹介</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 720 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Works</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__works-title-jp br-svg-heading__sub">/ 実績紹介</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-works__breadcrumb" aria-label="パンくず">
				<ol class="br-works__breadcrumb-list">
					<li><a href="/">Top</a></li>
					<li class="br-works__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-works__breadcrumb-current">Works</span></li>
				</ol>
			</nav>
		</div>
		<div class="br-container br-works__lead-wrap">
			<p class="br-works__lead">
				お客様と共に歩んできた道のりの一部を掲載しています。<br>最新のテクノロジーとノウハウを駆使し、常に一歩先を行く革新的なクリエイティブを提供します。
			</p>
			<p></p>
			<p class="br-works__lead">
			下記掲載の実績の他にも契約上一般に公開できない実績がございます。<br>非公開実績の閲覧をご希望の方は、お問い合わせフォームよりお問い合わせください。
			</p>
		</div>
	</section>

	<?php if ( $has_intro ) : ?>
	<section class="br-works__intro" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-works__intro-inner br-content">
				<?php the_content(); ?>
			</div>
		</div>
	</section>
	<?php endif; ?>

	<section
		class="br-home__section br-home__section--works br-home__section--works-band br-home__works br-works__list-band"
		aria-labelledby="br-works-list-title"
		data-br-subpage-reveal
	>
		<div class="br-container">
			

			<nav class="br-works__cat-nav" aria-label="カテゴリーで絞り込み">
				<ul class="br-works__cat-list">
					<li class="br-works__cat-item">
						<?php
						$all_is_current = ( $works_cat === '' );
						?>
						<a
							class="br-works__cat-link<?php echo $all_is_current ? ' is-active' : ''; ?>"
							href="<?php echo esc_url( $all_list_url !== '' ? $all_list_url : get_permalink( get_the_ID() ) ); ?>"
							<?php echo $all_is_current ? ' aria-current="page"' : ''; ?>
						>ALL OF WORKS</a>
					</li>
					<?php foreach ( $works_cat_terms as $cat_term ) : ?>
						<?php
						if ( ! $cat_term instanceof WP_Term ) {
							continue;
						}
						$term_url     = br_get_works_page_list_url( 1, $cat_term->slug );
						$is_current   = ( $works_cat !== '' && $works_cat === $cat_term->slug );
						$href         = $term_url !== '' ? $term_url : '#';
						$term_label   = $cat_term->name;
						?>
						<li class="br-works__cat-item">
							<a
								class="br-works__cat-link<?php echo $is_current ? ' is-active' : ''; ?>"
								href="<?php echo esc_url( $href ); ?>"
								<?php echo $is_current ? ' aria-current="page"' : ''; ?>
							><?php echo esc_html( $term_label ); ?></a>
						</li>
					<?php endforeach; ?>
				</ul>
			</nav>

			<?php if ( $q->have_posts() ) : ?>
				<ul class="br-home__works-grid">
					<?php
					while ( $q->have_posts() ) :
						$q->the_post();
						get_template_part(
							'template-parts/portfolio/works',
							'home-card',
							array( 'post_id' => (int) get_the_ID() )
						);
					endwhile;
					?>
				</ul>
				<div class="br-works__pagination-wrap">
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
				<p class="br-works__empty">該当する実績はまだありません。</p>
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
