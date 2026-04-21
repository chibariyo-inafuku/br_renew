<?php
/**
 * Fixed page: /blog/ (slug `blog`). Lists `post` in category `blogs` with optional child `blog_cat`.
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	$list_page_url    = get_permalink( get_the_ID() );
	$blog_cat_param   = '';
	if ( isset( $_GET['blog_cat'] ) && is_string( $_GET['blog_cat'] ) ) {
		$blog_cat_param = sanitize_title( wp_unslash( $_GET['blog_cat'] ) );
	}
	$blog_cat = '';
	if ( $blog_cat_param !== '' ) {
		$blogs_term = get_term_by( 'slug', 'blogs', 'category' );
		$filter_term = get_term_by( 'slug', $blog_cat_param, 'category' );
		if ( $blogs_term instanceof WP_Term && $filter_term instanceof WP_Term ) {
			if ( (int) $filter_term->term_id === (int) $blogs_term->term_id ) {
				$blog_cat = '';
			} elseif ( term_is_ancestor_of( (int) $blogs_term->term_id, (int) $filter_term->term_id, 'category' ) ) {
				$blog_cat = $blog_cat_param;
			}
		}
	}
	$q                = br_query_posts_for_blog_page( 12, $blog_cat_param );
	$blog_cat_terms   = br_get_blog_list_nav_category_terms();
	$paged_now        = br_get_query_paged();
	$pagination_add   = $blog_cat !== '' ? array( 'blog_cat' => $blog_cat ) : array();
	$all_list_url     = br_get_blog_page_list_url( $paged_now, '' );
	// Do not use $page here — it overwrites the global $page (content page number) and breaks the_content().
	$br_listing_page = get_post();
	$content         = $br_listing_page instanceof WP_Post ? $br_listing_page->post_content : '';
	$has_intro        = is_string( $content ) && trim( $content ) !== '';
	?>
<main id="main" class="br-main br-blog">
	<section class="br-blog__heading" aria-labelledby="br-blog-title" data-br-subpage-reveal>
		<div class="br-container br-blog__heading-inner">
			<header class="br-blog__heading-title br-home__blog-heading br-home__section-head">
				<h1 class="br-home__blog-title" id="br-blog-title">
					<span class="screen-reader-text">Blog / ブログ</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 720 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Blog</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__blog-title-jp br-svg-heading__sub">/ ブログ</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-blog__breadcrumb" aria-label="パンくず">
				<ol class="br-blog__breadcrumb-list">
					<li><a href="/">Top</a></li>
					<li class="br-blog__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-blog__breadcrumb-current">Blog</span></li>
				</ol>
			</nav>
		</div>
		<div class="br-container br-blog__lead-wrap">
			<p class="br-blog__lead">
			生成AIが切り拓くマーケティングの未来、最新技術の解説、<br>
			そして私たちの制作現場からのリアルなインサイトをお届けします。
			</p>
		</div>
	</section>

	<?php if ( $has_intro ) : ?>
	<section class="br-blog__intro" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-blog__intro-inner br-content">
				<?php the_content(); ?>
			</div>
		</div>
	</section>
	<?php endif; ?>

	<section
		class="br-home__section br-home__section--blog br-home__section--blog-band br-home__blog br-blog__list-band"
		aria-labelledby="br-blog-list-title"
	>
		<div class="br-container">
			<h2 id="br-blog-list-title" class="screen-reader-text">ブログ一覧</h2>

			<nav class="br-blog__cat-nav" aria-label="カテゴリーで絞り込み">
				<ul class="br-blog__cat-list">
					<li class="br-blog__cat-item">
						<?php
						$all_is_current = ( $blog_cat === '' );
						?>
						<a
							class="br-blog__cat-link<?php echo $all_is_current ? ' is-active' : ''; ?>"
							href="<?php echo esc_url( $all_list_url !== '' ? $all_list_url : get_permalink( get_the_ID() ) ); ?>"
							<?php echo $all_is_current ? ' aria-current="page"' : ''; ?>
						>ALL OF BLOG</a>
					</li>
					<?php foreach ( $blog_cat_terms as $cat_term ) : ?>
						<?php
						if ( ! $cat_term instanceof WP_Term ) {
							continue;
						}
						$term_url   = br_get_blog_page_list_url( 1, $cat_term->slug );
						$is_current = ( $blog_cat !== '' && $blog_cat === $cat_term->slug );
						$href       = $term_url !== '' ? $term_url : '#';
						$term_label = $cat_term->name;
						?>
						<li class="br-blog__cat-item">
							<a
								class="br-blog__cat-link<?php echo $is_current ? ' is-active' : ''; ?>"
								href="<?php echo esc_url( $href ); ?>"
								<?php echo $is_current ? ' aria-current="page"' : ''; ?>
							><?php echo esc_html( $term_label ); ?></a>
						</li>
					<?php endforeach; ?>
				</ul>
			</nav>

			<?php if ( $q->have_posts() ) : ?>
				<ul class="br-home__blog-grid">
					<?php
					while ( $q->have_posts() ) :
						$q->the_post();
						get_template_part(
							'template-parts/post/blog',
							'home-card',
							array( 'post_id' => (int) get_the_ID() )
						);
					endwhile;
					?>
				</ul>
				<div class="br-blog__pagination-wrap">
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
				<p class="br-blog__empty">該当する記事はまだありません。</p>
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
