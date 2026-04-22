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

	$in_works_list   = has_term( 'works-s', 'portfolio-list', $pid );
	$in_project_list = has_term( 'project-s', 'portfolio-list', $pid );

	$related_works_q    = null;
	$related_projects_q = null;
	if ( $in_works_list ) {
		$related_works_q = br_query_related_portfolio_works( $pid, 10 );
	}
	if ( $in_project_list ) {
		$related_projects_q = br_query_related_portfolio_projects( $pid, 10 );
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

	$project_excerpt       = '';
	$project_custom_meta_2 = '';
	if ( function_exists( 'get_field' ) ) {
		$pe_raw = get_field( 'project_excerpt', $pid );
		$project_excerpt      = is_string( $pe_raw ) ? trim( $pe_raw ) : '';
		$cm_raw = get_field( 'project_custom_meta_2', $pid );
		$project_custom_meta_2 = is_string( $cm_raw ) ? trim( $cm_raw ) : '';
	}

	$has_meta_lead_col = ( $project_terms !== array() );
	$show_meta_strip   = ( $project_excerpt !== '' || $project_custom_meta_2 !== '' || $has_meta_lead_col );
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
						<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Top</a></li>
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
				<?php if ( $show_meta_strip ) : ?>
					<section class="br-portfolio__meta-strip" aria-label="プロジェクト情報">
						<div class="br-portfolio__meta-strip-grid<?php echo $has_meta_lead_col ? '' : ' br-portfolio__meta-strip-grid--no-lead'; ?>">
							<?php if ( $has_meta_lead_col ) : ?>
								<div class="br-portfolio__meta-strip-col br-portfolio__meta-strip-col--lead">
									<?php if ( $project_terms ) : ?>
										<ul class="br-portfolio__meta-strip-project-terms">
											<?php foreach ( $project_terms as $pc_term ) : ?>
												<?php
												if ( ! $pc_term instanceof WP_Term ) {
													continue;
												}
												?>
												<li class="br-portfolio__meta-strip-project-terms-item">
													<span class="br-portfolio__meta-strip-project-terms-label"><?php echo esc_html( $pc_term->name ); ?></span>
												</li>
											<?php endforeach; ?>
										</ul>
									<?php endif; ?>
								</div>
							<?php endif; ?>
							<?php if ( $project_excerpt !== '' ) : ?>
								<div class="br-portfolio__meta-strip-col br-portfolio__meta-strip-col--excerpt">
									<div class="br-portfolio__meta-strip-text">
										<?php
										echo wp_kses(
											$project_excerpt,
											array(
												'br'     => array(),
												'a'      => array(
													'href'   => true,
													'target' => true,
													'rel'    => true,
													'title'  => true,
													'class'  => true,
												),
												'strong' => array(),
												'em'     => array(),
												'span'   => array(
													'class' => true,
												),
											)
										);
										?>
									</div>
								</div>
							<?php else : ?>
								<div class="br-portfolio__meta-strip-col br-portfolio__meta-strip-col--excerpt br-portfolio__meta-strip-col--empty" aria-hidden="true"></div>
							<?php endif; ?>
							<?php if ( $project_custom_meta_2 !== '' ) : ?>
								<div class="br-portfolio__meta-strip-col br-portfolio__meta-strip-col--meta2">
									<div class="br-portfolio__meta-strip-text br-portfolio__meta-strip-text--rich br-content"><?php echo wp_kses_post( $project_custom_meta_2 ); ?></div>
								</div>
							<?php else : ?>
								<div class="br-portfolio__meta-strip-col br-portfolio__meta-strip-col--meta2 br-portfolio__meta-strip-col--empty" aria-hidden="true"></div>
							<?php endif; ?>
						</div>
					</section>
				<?php endif; ?>
				<div class="br-portfolio__content br-content">
					<?php the_content(); ?>
				</div>
			</div>
		</section>

		<?php
		if ( $in_works_list && $related_works_q instanceof WP_Query && $related_works_q->post_count > 0 ) {
			// Pass query via $GLOBALS: get_template_part $args use extract( EXTR_SKIP ); `$query` may not be set if it already exists in scope.
			$GLOBALS['br_section_related_works_query'] = $related_works_q;
			get_template_part( 'template-parts/portfolio/section', 'related-works' );
			unset( $GLOBALS['br_section_related_works_query'] );
		} elseif ( $in_project_list && $related_projects_q instanceof WP_Query && $related_projects_q->post_count > 0 ) {
			$GLOBALS['br_section_related_projects_query'] = $related_projects_q;
			get_template_part( 'template-parts/portfolio/section', 'related-projects' );
			unset( $GLOBALS['br_section_related_projects_query'] );
		}
		?>
	</article>

	<div class="br-home" data-br-subpage-reveal>
		<?php get_template_part( 'template-parts/home/section', 'cta' ); ?>
	</div>
</main>
	<?php
endwhile;

get_footer();
