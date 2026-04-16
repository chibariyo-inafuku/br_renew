<?php
/**
 * About: company overview + optional page content.
 *
 * @package br
 */
?>
<section class="br-about__overview" id="overview" aria-labelledby="br-about-overview-heading">
	<div class="br-container">
		<header class="br-about__overview-head">
			<h2 class="br-about__heading-secondary" id="br-about-overview-heading">Overview</h2>
			<p class="br-about__heading-sub"><?php esc_html_e( '会社概要', 'br' ); ?></p>
		</header>
		<div class="br-about__overview-panel">
			<dl class="br-about__overview-table">
				<div class="br-about__overview-row">
					<dt><?php esc_html_e( '会社名', 'br' ); ?></dt>
					<dd><?php bloginfo( 'name' ); ?></dd>
				</div>
				<div class="br-about__overview-row">
					<dt><?php esc_html_e( '所在地', 'br' ); ?></dt>
					<dd><?php esc_html_e( '（編集時にご記載ください）', 'br' ); ?></dd>
				</div>
				<div class="br-about__overview-row">
					<dt><?php esc_html_e( '代表者', 'br' ); ?></dt>
					<dd><?php esc_html_e( '（編集時にご記載ください）', 'br' ); ?></dd>
				</div>
				<div class="br-about__overview-row">
					<dt><?php esc_html_e( '事業内容', 'br' ); ?></dt>
					<dd><?php esc_html_e( 'AI を活用したシステム開発、コンサルティング、運用支援 等', 'br' ); ?></dd>
				</div>
			</dl>
		</div>
		<?php
		global $post;
		$content = $post instanceof WP_Post ? $post->post_content : '';
		if ( is_string( $content ) && trim( $content ) !== '' ) :
			?>
		<div class="br-about__wp-content br-content">
			<?php the_content(); ?>
		</div>
		<?php endif; ?>
	</div>
</section>
