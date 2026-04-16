<?php
/**
 * Single portfolio project.
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	$pid     = get_the_ID();
	$summary = br_get_portfolio_summary( $pid );
	$external_url = '';
	if ( function_exists( 'get_field' ) ) {
		$external_url = (string) get_field( 'br_external_url', $pid );
	}

	// Breadcrumb: list hub — Works 優先（両方付与時も site-structure 準拠の一覧導線）。
	$list_hub_url   = br_get_page_permalink_by_slug( 'works' );
	$list_hub_label = 'Works';
	if ( $list_hub_url === '' ) {
		$list_hub_url = '/works/';
	}
	if ( has_term( 'works-s', 'portfolio-list', $pid ) ) {
		$list_hub_url   = br_get_page_permalink_by_slug( 'works' );
		$list_hub_label = 'Works';
		if ( $list_hub_url === '' ) {
			$list_hub_url = '/works/';
		}
	} elseif ( has_term( 'project-s', 'portfolio-list', $pid ) ) {
		$list_hub_url   = br_get_page_permalink_by_slug( 'project' );
		$list_hub_label = 'Project';
		if ( $list_hub_url === '' ) {
			$list_hub_url = '/project/';
		}
	}

	$raw_title = get_the_title();
	$crumb_end = is_string( $raw_title ) && $raw_title !== '' ? $raw_title : 'Detail';
	if ( function_exists( 'mb_strlen' ) && function_exists( 'mb_substr' ) && mb_strlen( $crumb_end ) > 32 ) {
		$crumb_end = mb_substr( $crumb_end, 0, 32 ) . '…';
	} elseif ( strlen( $crumb_end ) > 40 ) {
		$crumb_end = substr( $crumb_end, 0, 40 ) . '…';
	}

	$in_works_list = has_term( 'works-s', 'portfolio-list', $pid );

	$related_works_q = null;
	if ( $in_works_list ) {
		$related_works_q = br_query_related_portfolio_works( $pid, 10 );
	}

	$project_terms = get_the_terms( $pid, 'project-categories' );
	if ( ! is_array( $project_terms ) || is_wp_error( $project_terms ) ) {
		$project_terms = array();
	} else {
		$project_terms = array_values(
			array_filter(
				$project_terms,
				static function ( $t ) {
					return $t instanceof WP_Term;
				}
			)
		);
	}
	?>
<main id="main" class="br-main br-portfolio">
	<article <?php post_class( 'br-portfolio__article' ); ?>>
		<section class="br-portfolio__heading" aria-labelledby="br-portfolio-title" data-br-subpage-reveal>
			<div class="br-container br-portfolio__heading-inner">
				<header class="br-portfolio__heading-title">
					<?php if ( $project_terms ) : ?>
						<p class="br-portfolio__kicker">
							<?php
							echo esc_html(
								implode(
									' ・ ',
									array_map(
										static function ( WP_Term $t ) {
											return $t->name;
										},
										$project_terms
									)
								)
							);
							?>
						</p>
					<?php endif; ?>
					<h1 class="br-portfolio__title" id="br-portfolio-title"><?php the_title(); ?></h1>
					<?php if ( $summary !== '' ) : ?>
						<p class="br-portfolio__summary"><?php echo esc_html( $summary ); ?></p>
					<?php endif; ?>
					<?php if ( $external_url !== '' && wp_http_validate_url( $external_url ) ) : ?>
						<p class="br-portfolio__external">
							<a
								class="br-portfolio__external-link"
								href="<?php echo esc_url( $external_url ); ?>"
								rel="noopener noreferrer"
								target="_blank"
							>関連サイトを見る</a>
						</p>
					<?php endif; ?>
				</header>
				<nav class="br-portfolio__breadcrumb" aria-label="パンくず">
					<ol class="br-portfolio__breadcrumb-list">
						<li><a href="/">Top</a></li>
						<li class="br-portfolio__breadcrumb-sep" aria-hidden="true">/</li>
						<li><a href="<?php echo esc_url( $list_hub_url ); ?>"><?php echo esc_html( $list_hub_label ); ?></a></li>
						<li class="br-portfolio__breadcrumb-sep" aria-hidden="true">/</li>
						<li><span class="br-portfolio__breadcrumb-current"><?php echo esc_html( $crumb_end ); ?></span></li>
					</ol>
				</nav>
			</div>
		</section>

		<?php if ( has_post_thumbnail() ) : ?>
			<section class="br-portfolio__hero" data-br-subpage-reveal>
				<div class="br-container">
					<div class="br-portfolio__hero-inner">
						<?php the_post_thumbnail( 'large' ); ?>
					</div>
				</div>
			</section>
		<?php endif; ?>

		<section class="br-portfolio__body" data-br-subpage-reveal>
			<div class="br-container">
				<div class="br-portfolio__content br-content">
					<?php the_content(); ?>
				</div>
			</div>
		</section>

		<?php if ( $project_terms ) : ?>
			<?php
			$works_base   = br_get_page_permalink_by_slug( 'works' );
			$project_base = br_get_page_permalink_by_slug( 'project' );
			?>
			<section class="br-portfolio__terms-wrap" data-br-subpage-reveal>
				<div class="br-container">
					<h2 class="br-portfolio__terms-heading">カテゴリー</h2>
					<ul class="br-portfolio__terms">
						<?php foreach ( $project_terms as $term ) : ?>
							<?php
							if ( ! $term instanceof WP_Term ) {
								continue;
							}
							$term_href = get_term_link( $term );
							if ( is_wp_error( $term_href ) ) {
								$term_href = '#';
							}
							if ( $in_works_list && $works_base !== '' && taxonomy_exists( 'project-categories' ) ) {
								$term_href = add_query_arg( 'works_cat', $term->slug, $works_base );
							} elseif ( has_term( 'project-s', 'portfolio-list', $pid ) && $project_base !== '' && taxonomy_exists( 'project-categories' ) ) {
								$term_href = add_query_arg( 'project_cat', $term->slug, $project_base );
							}
							?>
							<li class="br-portfolio__terms-item">
								<a class="br-portfolio__terms-link" href="<?php echo esc_url( $term_href ); ?>"><?php echo esc_html( $term->name ); ?></a>
							</li>
						<?php endforeach; ?>
					</ul>
				</div>
			</section>
		<?php endif; ?>
	</article>

	<?php
	if ( $in_works_list && $related_works_q instanceof WP_Query && $related_works_q->post_count > 0 ) {
		get_template_part( 'template-parts/portfolio/section', 'related-works', array( 'query' => $related_works_q ) );
	}
	?>

	<div class="br-home" data-br-subpage-reveal>
		<?php get_template_part( 'template-parts/home/section', 'cta' ); ?>
	</div>
</main>
	<?php
endwhile;

get_footer();
