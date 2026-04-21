<?php
/**
 * Fixed page: /news/ (slug `news`). Lists `post` in category `news-s` with optional child `news_cat`.
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	$list_page_url   = get_permalink( get_the_ID() );
	$news_cat_param  = '';
	if ( isset( $_GET['news_cat'] ) && is_string( $_GET['news_cat'] ) ) {
		$news_cat_param = sanitize_title( wp_unslash( $_GET['news_cat'] ) );
	}
	$news_cat = '';
	if ( $news_cat_param !== '' ) {
		$news_root_term = get_term_by( 'slug', 'news-s', 'category' );
		$filter_term    = get_term_by( 'slug', $news_cat_param, 'category' );
		if ( $news_root_term instanceof WP_Term && $filter_term instanceof WP_Term ) {
			if ( (int) $filter_term->term_id === (int) $news_root_term->term_id ) {
				$news_cat = '';
			} elseif ( term_is_ancestor_of( (int) $news_root_term->term_id, (int) $filter_term->term_id, 'category' ) ) {
				$news_cat = $news_cat_param;
			}
		}
	}
	$q               = br_query_posts_for_news_page( 12, $news_cat_param );
	$news_cat_terms  = br_get_news_list_nav_category_terms();
	$paged_now       = br_get_query_paged();
	$pagination_add  = $news_cat !== '' ? array( 'news_cat' => $news_cat ) : array();
	$all_list_url    = br_get_news_page_list_url( $paged_now, '' );
	$br_listing_page = get_post();
	$content         = $br_listing_page instanceof WP_Post ? $br_listing_page->post_content : '';
	$has_intro       = is_string( $content ) && trim( $content ) !== '';
	?>
<main id="main" class="br-main br-news">
	<section class="br-news__heading" aria-labelledby="br-news-title" data-br-subpage-reveal>
		<div class="br-container br-news__heading-inner">
			<header class="br-news__heading-title br-home__news-heading br-home__section-head">
				<h1 class="br-home__news-title" id="br-news-title">
					<span class="screen-reader-text">News / 事業紹介</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 720 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">News</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__news-title-jp br-svg-heading__sub">/ 事業紹介</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-news__breadcrumb" aria-label="パンくず">
				<ol class="br-news__breadcrumb-list">
					<li><a href="/">Top</a></li>
					<li class="br-news__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-news__breadcrumb-current">News</span></li>
				</ol>
			</nav>
		</div>
		<div class="br-container br-news__lead-wrap">
			<p class="br-news__lead">
			ブルーアール株式会社のプレスリリース、イベント登壇情報、<br>
			メディア掲載などの最新情報をお届けします。
			</p>
		</div>
	</section>

	<?php if ( $has_intro ) : ?>
	<section class="br-news__intro" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-news__intro-inner br-content">
				<?php the_content(); ?>
			</div>
		</div>
	</section>
	<?php endif; ?>

	<section
		class="br-home__section br-home__section--news br-home__news br-news__list-band"
		aria-labelledby="br-news-list-title"
	>
		<div class="br-container">
			<h2 id="br-news-list-title" class="screen-reader-text">ニュース一覧</h2>

			<nav class="br-news__cat-nav" aria-label="カテゴリーで絞り込み">
				<ul class="br-news__cat-list">
					<li class="br-news__cat-item">
						<?php
						$all_is_current = ( $news_cat === '' );
						?>
						<a
							class="br-news__cat-link<?php echo $all_is_current ? ' is-active' : ''; ?>"
							href="<?php echo esc_url( $all_list_url !== '' ? $all_list_url : get_permalink( get_the_ID() ) ); ?>"
							<?php echo $all_is_current ? ' aria-current="page"' : ''; ?>
						>ALL OF NEWS</a>
					</li>
					<?php foreach ( $news_cat_terms as $cat_term ) : ?>
						<?php
						if ( ! $cat_term instanceof WP_Term ) {
							continue;
						}
						$term_url   = br_get_news_page_list_url( 1, $cat_term->slug );
						$is_current = ( $news_cat !== '' && $news_cat === $cat_term->slug );
						$href       = $term_url !== '' ? $term_url : '#';
						$term_label = $cat_term->name;
						?>
						<li class="br-news__cat-item">
							<a
								class="br-news__cat-link<?php echo $is_current ? ' is-active' : ''; ?>"
								href="<?php echo esc_url( $href ); ?>"
								<?php echo $is_current ? ' aria-current="page"' : ''; ?>
							><?php echo esc_html( $term_label ); ?></a>
						</li>
					<?php endforeach; ?>
				</ul>
			</nav>

			<?php if ( $q->have_posts() ) : ?>
				<ul class="br-home__news-list">
					<?php
					while ( $q->have_posts() ) :
						$q->the_post();
						get_template_part(
							'template-parts/post/news',
							'home-card',
							array( 'post_id' => (int) get_the_ID() )
						);
					endwhile;
					?>
				</ul>
				<div class="br-news__pagination-wrap">
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
				<p class="br-news__empty">該当する記事はまだありません。</p>
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
