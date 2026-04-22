<?php
/**
 * Single post template (blog, services, news-s tree, or legacy).
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	$pid = get_the_ID();

	if ( br_post_in_blog_category_tree( $pid ) ) :
		$blog_hub_url = br_get_page_permalink_by_slug( 'blog' );
		if ( $blog_hub_url === '' ) {
			$blog_hub_url = '/blog/';
		}

		$raw_title = get_the_title();
		$crumb_end = is_string( $raw_title ) && $raw_title !== '' ? $raw_title : 'Post';

		$blogs_term = get_term_by( 'slug', 'blogs', 'category' );
		$cat_labels = array();
		$cats       = get_the_terms( $pid, 'category' );
		if ( is_array( $cats ) && ! is_wp_error( $cats ) ) {
			foreach ( $cats as $t ) {
				if ( ! $t instanceof WP_Term ) {
					continue;
				}
				if ( $blogs_term instanceof WP_Term && ( (int) $t->term_id === (int) $blogs_term->term_id || $t->slug === 'blogs' ) ) {
					continue;
				}
				$cat_labels[] = $t->name;
			}
		}
		$cat_line   = $cat_labels !== array() ? implode( ' ・ ', $cat_labels ) : '';
		$pub_date   = get_the_date( 'Y.m.d', $pid );
		$mod_date   = get_the_modified_date( 'Y.m.d', $pid );
		$pub_w3c    = get_the_date( DATE_W3C, $pid );
		$mod_w3c    = get_the_modified_date( DATE_W3C, $pid );
		$related_posts_q = function_exists( 'br_query_related_blog_posts' ) ? br_query_related_blog_posts( $pid, 10 ) : null;
		?>
<main id="main" class="br-main br-post-single">
	<article <?php post_class( 'br-post-single__article' ); ?>>
		<section class="br-post-single__heading" aria-labelledby="br-post-single-title" data-br-subpage-reveal>
			<div class="br-container br-post-single__heading-inner">
				<header class="br-post-single__heading-title">
					<?php if ( $cat_line !== '' ) : ?>
						<p class="br-post-single__kicker">
							<span class="br-post-single__kicker-cats"><?php echo esc_html( $cat_line ); ?></span>
						</p>
					<?php endif; ?>
					<h1 class="br-post-single__title" id="br-post-single-title"><?php the_title(); ?></h1>
				</header>
				<nav class="br-post-single__breadcrumb" aria-label="パンくず">
					<ol class="br-post-single__breadcrumb-list">
						<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Top</a></li>
						<li class="br-post-single__breadcrumb-sep" aria-hidden="true">/</li>
						<li><a href="<?php echo esc_url( $blog_hub_url ); ?>">Blog</a></li>
						<li class="br-post-single__breadcrumb-sep" aria-hidden="true">/</li>
						<li><span class="br-post-single__breadcrumb-current"><?php echo esc_html( $crumb_end ); ?></span></li>
					</ol>
				</nav>
				<p class="br-post-single__meta-dates" role="group" aria-label="公開日・更新日">
					<span class="br-post-single__meta-date">
						<span class="br-post-single__meta-date-label">公開日:</span>
						<time class="br-post-single__meta-date-value" datetime="<?php echo esc_attr( $pub_w3c ); ?>"><?php echo esc_html( $pub_date ); ?></time>
					</span>
					<span class="br-post-single__meta-date">
						<span class="br-post-single__meta-date-label">更新日:</span>
						<time class="br-post-single__meta-date-value" datetime="<?php echo esc_attr( $mod_w3c ); ?>"><?php echo esc_html( $mod_date ); ?></time>
					</span>
				</p>
			</div>
		</section>

		<?php if ( has_post_thumbnail() ) : ?>
			<section class="br-post-single__hero" data-br-subpage-reveal>
				<div class="br-container">
					<div class="br-post-single__hero-inner">
						<?php the_post_thumbnail( 'large' ); ?>
					</div>
				</div>
			</section>
		<?php endif; ?>

		<section class="br-post-single__body">
			<div class="br-container">
				<div class="br-post-single__content br-content">
					<?php the_content(); ?>
				</div>
				<?php get_template_part( 'template-parts/post/content', 'legal-notice' ); ?>
			</div>
		</section>

		<?php
		if ( $related_posts_q instanceof WP_Query && $related_posts_q->post_count > 0 ) {
			$GLOBALS['br_section_related_posts_query'] = $related_posts_q;
			get_template_part( 'template-parts/post/section', 'related-posts' );
			unset( $GLOBALS['br_section_related_posts_query'] );
		}
		?>
	</article>

	<div class="br-home" data-br-subpage-reveal>
		<?php get_template_part( 'template-parts/home/section', 'cta' ); ?>
	</div>
</main>
		<?php
	elseif ( br_post_in_service_category_tree( $pid ) ) :
		$service_hub_url = br_get_page_permalink_by_slug( 'service' );
		if ( $service_hub_url === '' ) {
			$service_hub_url = '/service/';
		}

		$raw_title = get_the_title();
		$crumb_end = is_string( $raw_title ) && $raw_title !== '' ? $raw_title : 'Post';

		$services_term = get_term_by( 'slug', 'services', 'category' );
		$cat_labels    = array();
		$cats          = get_the_terms( $pid, 'category' );
		if ( is_array( $cats ) && ! is_wp_error( $cats ) ) {
			foreach ( $cats as $t ) {
				if ( ! $t instanceof WP_Term ) {
					continue;
				}
				if ( $services_term instanceof WP_Term && ( (int) $t->term_id === (int) $services_term->term_id || $t->slug === 'services' ) ) {
					continue;
				}
				$cat_labels[] = $t->name;
			}
		}
		$cat_line         = $cat_labels !== array() ? implode( ' ・ ', $cat_labels ) : '';
		$related_service_q = function_exists( 'br_query_related_service_posts' ) ? br_query_related_service_posts( $pid, 10 ) : null;
		?>
<main id="main" class="br-main br-service-single">
	<article <?php post_class( 'br-service-single__article' ); ?>>
		<section class="br-service-single__heading" aria-labelledby="br-service-single-title" data-br-subpage-reveal>
			<div class="br-container br-service-single__heading-inner">
				<header class="br-service-single__heading-title">
					<?php if ( $cat_line !== '' ) : ?>
						<p class="br-service-single__kicker">
							<span class="br-service-single__kicker-cats"><?php echo esc_html( $cat_line ); ?></span>
						</p>
					<?php endif; ?>
					<h1 class="br-service-single__title" id="br-service-single-title"><?php the_title(); ?></h1>
				</header>
				<nav class="br-service-single__breadcrumb" aria-label="パンくず">
					<ol class="br-service-single__breadcrumb-list">
						<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Top</a></li>
						<li class="br-service-single__breadcrumb-sep" aria-hidden="true">/</li>
						<li><a href="<?php echo esc_url( $service_hub_url ); ?>">Service</a></li>
						<li class="br-service-single__breadcrumb-sep" aria-hidden="true">/</li>
						<li><span class="br-service-single__breadcrumb-current"><?php echo esc_html( $crumb_end ); ?></span></li>
					</ol>
				</nav>
			</div>
		</section>

		<?php if ( has_post_thumbnail() ) : ?>
			<section class="br-service-single__hero" data-br-subpage-reveal>
				<div class="br-container">
					<div class="br-service-single__hero-inner">
						<?php the_post_thumbnail( 'large' ); ?>
					</div>
				</div>
			</section>
		<?php endif; ?>

		<section class="br-service-single__body">
			<div class="br-container">
				<div class="br-service-single__content br-content">
					<?php the_content(); ?>
				</div>
				<?php get_template_part( 'template-parts/post/content', 'legal-notice' ); ?>
			</div>
		</section>

		<?php
		if ( $related_service_q instanceof WP_Query && $related_service_q->post_count > 0 ) {
			$GLOBALS['br_section_related_service_query'] = $related_service_q;
			get_template_part( 'template-parts/post/section', 'related-service' );
			unset( $GLOBALS['br_section_related_service_query'] );
		}
		?>
	</article>

	<div class="br-home" data-br-subpage-reveal>
		<?php get_template_part( 'template-parts/home/section', 'cta' ); ?>
	</div>
</main>
		<?php
	elseif ( br_post_in_news_category_tree( $pid ) ) :
		$news_hub_url = br_get_page_permalink_by_slug( 'news' );
		if ( $news_hub_url === '' ) {
			$news_hub_url = '/news/';
		}

		$raw_title = get_the_title();
		$crumb_end = is_string( $raw_title ) && $raw_title !== '' ? $raw_title : 'Post';

		$news_root_term = get_term_by( 'slug', 'news-s', 'category' );
		$cat_labels     = array();
		$cats           = get_the_terms( $pid, 'category' );
		if ( is_array( $cats ) && ! is_wp_error( $cats ) ) {
			foreach ( $cats as $t ) {
				if ( ! $t instanceof WP_Term ) {
					continue;
				}
				if ( $news_root_term instanceof WP_Term && ( (int) $t->term_id === (int) $news_root_term->term_id || $t->slug === 'news-s' ) ) {
					continue;
				}
				$cat_labels[] = $t->name;
			}
		}
		$cat_line  = $cat_labels !== array() ? implode( ' ・ ', $cat_labels ) : '';
		$pub_date  = get_the_date( 'Y.m.d', $pid );
		$pub_w3c   = get_the_date( DATE_W3C, $pid );
		$related_news_q = function_exists( 'br_query_related_news_posts' ) ? br_query_related_news_posts( $pid, 10 ) : null;
		?>
<main id="main" class="br-main br-news-single">
	<article <?php post_class( 'br-news-single__article' ); ?>>
		<section class="br-news-single__heading" aria-labelledby="br-news-single-title" data-br-subpage-reveal>
			<div class="br-container br-news-single__heading-inner">
				<header class="br-news-single__heading-title">
					<?php if ( $cat_line !== '' ) : ?>
						<p class="br-news-single__kicker">
							<span class="br-news-single__kicker-cats"><?php echo esc_html( $cat_line ); ?></span>
						</p>
					<?php endif; ?>
					<h1 class="br-news-single__title" id="br-news-single-title"><?php the_title(); ?></h1>
				</header>
				<nav class="br-news-single__breadcrumb" aria-label="パンくず">
					<ol class="br-news-single__breadcrumb-list">
						<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Top</a></li>
						<li class="br-news-single__breadcrumb-sep" aria-hidden="true">/</li>
						<li><a href="<?php echo esc_url( $news_hub_url ); ?>">News</a></li>
						<li class="br-news-single__breadcrumb-sep" aria-hidden="true">/</li>
						<li><span class="br-news-single__breadcrumb-current"><?php echo esc_html( $crumb_end ); ?></span></li>
					</ol>
				</nav>
				<p class="br-news-single__meta-pub" role="group" aria-label="公開日">
					<span class="br-news-single__meta-pub-label">公開日:</span>
					<time class="br-news-single__meta-pub-value" datetime="<?php echo esc_attr( $pub_w3c ); ?>"><?php echo esc_html( $pub_date ); ?></time>
				</p>
			</div>
		</section>

		<?php if ( has_post_thumbnail() ) : ?>
			<section class="br-news-single__hero" data-br-subpage-reveal>
				<div class="br-container">
					<div class="br-news-single__hero-inner">
						<?php the_post_thumbnail( 'large' ); ?>
					</div>
				</div>
			</section>
		<?php endif; ?>

		<section class="br-news-single__body">
			<div class="br-container">
				<div class="br-news-single__content br-content">
					<?php the_content(); ?>
				</div>
				<?php get_template_part( 'template-parts/post/content', 'legal-notice' ); ?>
			</div>
		</section>

		<?php
		if ( $related_news_q instanceof WP_Query && $related_news_q->post_count > 0 ) {
			$GLOBALS['br_section_related_news_query'] = $related_news_q;
			get_template_part( 'template-parts/post/section', 'related-news' );
			unset( $GLOBALS['br_section_related_news_query'] );
		}
		?>
	</article>

	<div class="br-home" data-br-subpage-reveal>
		<?php get_template_part( 'template-parts/home/section', 'cta' ); ?>
	</div>
</main>
		<?php
	else :
		?>
<main id="main" class="br-main br-container">
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
</main>
		<?php
	endif;
endwhile;

get_footer();
