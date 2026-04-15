<?php
/**
 * Footer template — Figma footer layout (two-row: brand + nav / privacy + copyright).
 *
 * @package br
 */

$about_url = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'about' ) : '';
$ceo_href  = ( $about_url !== '' ) ? esc_url( $about_url . '#ceo' ) : esc_url( '#' );

$br_footer_logo = get_template_directory_uri() . '/assets/images/br-footer-logo.png';

// Privacy: WP 設定のプライバシーポリシーページ優先。未設定なら固定ページスラッグ privacy。
$privacy_url = '';
if ( function_exists( 'wp_get_privacy_policy_url' ) ) {
	$privacy_url = (string) wp_get_privacy_policy_url();
}
if ( $privacy_url === '' && function_exists( 'br_get_page_permalink_by_slug' ) ) {
	$privacy_url = br_get_page_permalink_by_slug( 'privacy' );
}
$privacy_href = ( $privacy_url !== '' ) ? esc_url( $privacy_url ) : '';
?>
<footer class="br-footer" role="contentinfo">
	<div class="br-container">
		<div class="br-footer__top">
			<div class="br-footer__brand">
				<a class="br-footer__logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<img
						class="br-footer__logo-img"
						src="<?php echo esc_url( $br_footer_logo ); ?>"
						alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"
						loading="lazy"
						decoding="async"
					/>
				</a>
				<ul class="br-footer__social" aria-label="Social links">
					<li><a href="<?php echo esc_url( '#' ); ?>">X</a></li>
					<li><a href="<?php echo esc_url( '#' ); ?>">Facebook</a></li>
					<li><a href="<?php echo esc_url( '#' ); ?>">Instagram</a></li>
					<li><a href="<?php echo esc_url( '#' ); ?>">YouTube</a></li>
					<li><a href="<?php echo esc_url( '#' ); ?>">AI CREATIVE BASE</a></li>
				</ul>
			</div>
			<nav class="br-footer__nav-cols" aria-label="Footer navigation">
				<div class="br-footer__nav-col">
					<a class="br-footer__nav-heading" href="<?php echo br_page_href( 'about' ); ?>">About</a>
					<ul class="br-footer__nav-list" role="list">
						<li>
							<a href="<?php echo $ceo_href; ?>">
								<span class="br-footer__nav-prefix" aria-hidden="true">- </span>CEO
							</a>
						</li>
						<li>
							<a href="<?php echo br_page_href( 'faq' ); ?>">
								<span class="br-footer__nav-prefix" aria-hidden="true">- </span>FAQ
							</a>
						</li>
					</ul>
				</div>
				<div class="br-footer__nav-col">
					<a class="br-footer__nav-heading" href="<?php echo br_page_href( 'works' ); ?>">Works</a>
					<ul class="br-footer__nav-list" role="list">
						<li><a href="<?php echo br_page_href( 'project' ); ?>">Project</a></li>
						<li><a href="<?php echo br_page_href( 'service' ); ?>">Service</a></li>
					</ul>
				</div>
				<div class="br-footer__nav-col">
					<a class="br-footer__nav-heading" href="<?php echo br_page_href( 'blog' ); ?>">Blog</a>
					<ul class="br-footer__nav-list" role="list">
						<li><a href="<?php echo br_page_href( 'news' ); ?>">News</a></li>
						<li><a href="<?php echo br_page_href( 'contact' ); ?>">Contact</a></li>
					</ul>
				</div>
			</nav>
		</div>
		<div class="br-footer__bottom">
			<div class="br-footer__bottom-left">
				<?php if ( $privacy_href !== '' ) : ?>
					<a class="br-footer__privacy" href="<?php echo $privacy_href; ?>">Privacy Policy</a>
				<?php endif; ?>
			</div>
			<p class="br-footer__copy">Copyright © BlueR CO LTD. All Rights Reserved.</p>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
