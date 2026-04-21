<?php
/**
 * Fixed page: /project/ (slug `project`). Lists `portfolio` with taxonomy `portfolio-list` term `project-s`.
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	$list_page_url     = get_permalink( get_the_ID() );
	$project_cat_param = '';
	if ( isset( $_GET['project_cat'] ) && is_string( $_GET['project_cat'] ) ) {
		$project_cat_param = sanitize_title( wp_unslash( $_GET['project_cat'] ) );
	}
	$project_cat = '';
	if ( $project_cat_param !== '' && taxonomy_exists( 'project-categories' ) ) {
		$project_cat_term = get_term_by( 'slug', $project_cat_param, 'project-categories' );
		if ( $project_cat_term instanceof WP_Term ) {
			$project_cat = $project_cat_param;
		}
	}
	$q                 = br_query_portfolio_for_list_term( 'project-s', 12, $project_cat_param );
	$project_cat_terms = br_get_project_list_project_category_terms();
	$paged_now         = br_get_query_paged();
	$pagination_add    = $project_cat !== '' ? array( 'project_cat' => $project_cat ) : array();
	$all_list_url      = br_get_project_page_list_url( $paged_now, '' );
	// Do not use $page here — it overwrites the global $page (content page number) and breaks the_content().
	$br_listing_page = get_post();
	$content         = $br_listing_page instanceof WP_Post ? $br_listing_page->post_content : '';
	$has_intro         = is_string( $content ) && trim( $content ) !== '';
	?>
<main id="main" class="br-main br-project">
	<section class="br-project__heading" aria-labelledby="br-project-title" data-br-subpage-reveal>
		<div class="br-container br-project__heading-inner">
			<header class="br-project__heading-title br-home__project-heading br-home__section-head">
				<h1 class="br-home__project-title" id="br-project-title">
					<span class="screen-reader-text">Project / プロジェクト紹介</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 720 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Project</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__project-title-jp br-svg-heading__sub">/ プロジェクト紹介</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-project__breadcrumb" aria-label="パンくず">
				<ol class="br-project__breadcrumb-list">
					<li><a href="/">Top</a></li>
					<li class="br-project__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-project__breadcrumb-current">Project</span></li>
				</ol>
			</nav>
		</div>
		<div class="br-container br-project__lead-wrap">
			<p class="br-project__lead">
			AIという未知の領域を、私たちは自ら探求し続けています。<br>社会課題の解決からエンターテインメントの革新まで、次世代のスタンダードをプロトタイピングする自社独自の取り組みを紹介します。
			</p>
		</div>
	</section>

	<?php if ( $has_intro ) : ?>
	<section class="br-project__intro" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-project__intro-inner br-content">
				<?php the_content(); ?>
			</div>
		</div>
	</section>
	<?php endif; ?>

	<section
		class="br-home__section br-home__section--project br-home__section--project-band br-home__project br-project__list-band"
		aria-labelledby="br-project-list-title"
	>
		<div class="br-container">
			<h2 id="br-project-list-title" class="screen-reader-text">プロジェクト一覧</h2>

			<nav class="br-project__cat-nav" aria-label="カテゴリーで絞り込み">
				<ul class="br-project__cat-list">
					<li class="br-project__cat-item">
						<?php
						$all_is_current = ( $project_cat === '' );
						?>
						<a
							class="br-project__cat-link<?php echo $all_is_current ? ' is-active' : ''; ?>"
							href="<?php echo esc_url( $all_list_url !== '' ? $all_list_url : get_permalink( get_the_ID() ) ); ?>"
							<?php echo $all_is_current ? ' aria-current="page"' : ''; ?>
						>ALL OF PROJECT</a>
					</li>
					<?php foreach ( $project_cat_terms as $cat_term ) : ?>
						<?php
						if ( ! $cat_term instanceof WP_Term ) {
							continue;
						}
						$term_url   = br_get_project_page_list_url( 1, $cat_term->slug );
						$is_current = ( $project_cat !== '' && $project_cat === $cat_term->slug );
						$href       = $term_url !== '' ? $term_url : '#';
						$term_label = $cat_term->name;
						?>
						<li class="br-project__cat-item">
							<a
								class="br-project__cat-link<?php echo $is_current ? ' is-active' : ''; ?>"
								href="<?php echo esc_url( $href ); ?>"
								<?php echo $is_current ? ' aria-current="page"' : ''; ?>
							><?php echo esc_html( $term_label ); ?></a>
						</li>
					<?php endforeach; ?>
				</ul>
			</nav>

			<?php if ( $q->have_posts() ) : ?>
				<ul class="br-home__project-grid">
					<?php
					while ( $q->have_posts() ) :
						$q->the_post();
						get_template_part(
							'template-parts/portfolio/project',
							'home-card',
							array( 'post_id' => (int) get_the_ID() )
						);
					endwhile;
					?>
				</ul>
				<div class="br-project__pagination-wrap">
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
				<p class="br-project__empty">該当するプロジェクトはまだありません。</p>
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
