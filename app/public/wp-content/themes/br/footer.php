<?php
/**
 * Footer template — static sitemap-style columns (Figma-style).
 *
 * @package br
 */

$about_url = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'about' ) : '';
$ceo_href  = ( $about_url !== '' ) ? esc_url( $about_url . '#ceo' ) : esc_url( '#' );
?>
<footer class="br-footer" role="contentinfo">
	<div class="br-container br-footer__grid">
		<div class="br-footer__col br-footer__col--brand">
			<?php if ( has_custom_logo() ) : ?>
				<div class="br-footer__logo"><?php the_custom_logo(); ?></div>
			<?php else : ?>
				<a class="br-footer__title" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
			<?php endif; ?>
			<ul class="br-footer__social" aria-label="<?php esc_attr_e( 'Social links', 'br' ); ?>">
				<li><a href="<?php echo esc_url( '#' ); ?>"><?php esc_html_e( 'X', 'br' ); ?></a></li>
				<li><a href="<?php echo esc_url( '#' ); ?>"><?php esc_html_e( 'Facebook', 'br' ); ?></a></li>
				<li><a href="<?php echo esc_url( '#' ); ?>"><?php esc_html_e( 'Instagram', 'br' ); ?></a></li>
				<li><a href="<?php echo esc_url( '#' ); ?>"><?php esc_html_e( 'YouTube', 'br' ); ?></a></li>
				<li><a href="<?php echo esc_url( '#' ); ?>"><?php esc_html_e( 'AI CREATIVE BASE', 'br' ); ?></a></li>
			</ul>
		</div>
		<nav class="br-footer__nav-cols" aria-label="<?php esc_attr_e( 'Footer navigation', 'br' ); ?>">
			<div class="br-footer__nav-col">
				<p class="br-footer__nav-heading"><?php esc_html_e( '/About', 'br' ); ?></p>
				<ul class="br-footer__nav-list" role="list">
					<li><a href="<?php echo br_page_href( 'about' ); ?>"><?php esc_html_e( 'About', 'br' ); ?></a></li>
					<li><a href="<?php echo $ceo_href; ?>"><?php esc_html_e( 'CEO', 'br' ); ?></a></li>
					<li><a href="<?php echo br_page_href( 'faq' ); ?>"><?php esc_html_e( 'FAQ', 'br' ); ?></a></li>
				</ul>
			</div>
			<div class="br-footer__nav-col">
				<p class="br-footer__nav-heading"><?php esc_html_e( '/Works', 'br' ); ?></p>
				<ul class="br-footer__nav-list" role="list">
					<li><a href="<?php echo br_page_href( 'works' ); ?>"><?php esc_html_e( 'Works', 'br' ); ?></a></li>
					<li><a href="<?php echo br_page_href( 'project' ); ?>"><?php esc_html_e( 'Project', 'br' ); ?></a></li>
					<li><a href="<?php echo br_page_href( 'service' ); ?>"><?php esc_html_e( 'Service', 'br' ); ?></a></li>
				</ul>
			</div>
			<div class="br-footer__nav-col">
				<p class="br-footer__nav-heading"><?php esc_html_e( '/Blog', 'br' ); ?></p>
				<ul class="br-footer__nav-list" role="list">
					<li><a href="<?php echo br_page_href( 'blog' ); ?>"><?php esc_html_e( 'Blog', 'br' ); ?></a></li>
					<li><a href="<?php echo br_page_href( 'news' ); ?>"><?php esc_html_e( 'News', 'br' ); ?></a></li>
					<li><a href="<?php echo br_page_href( 'recruit' ); ?>"><?php esc_html_e( 'Recruit', 'br' ); ?></a></li>
					<li><a href="<?php echo br_page_href( 'contact' ); ?>"><?php esc_html_e( 'Contact', 'br' ); ?></a></li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="br-container br-footer__bottom">
		<p class="br-footer__copy">&copy; <?php echo esc_html( (string) gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?></p>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
