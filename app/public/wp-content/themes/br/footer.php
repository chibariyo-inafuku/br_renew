<?php
/**
 * Footer template — Figma footer layout (two-row: brand + nav / privacy + copyright).
 *
 * @package br
 */

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
				<ul class="br-footer__social" role="list" aria-label="<?php echo esc_attr__( 'Social links', 'br' ); ?>">
					<li>
						<a
							class="br-footer__social-link"
							href="<?php echo esc_url( 'https://x.com/BlueR_CEO' ); ?>"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="screen-reader-text"><?php echo esc_html__( 'X', 'br' ); ?></span>
							<img
								class="br-footer__social-icon br-footer__social-icon--x"
								src="<?php echo esc_url( get_theme_file_uri( 'assets/images/icon-x.svg' ) ); ?>"
								alt=""
								width="30"
								height="27"
								decoding="async"
								aria-hidden="true"
							/>
						</a>
					</li>
					<li>
						<a
							class="br-footer__social-link"
							href="<?php echo esc_url( 'https://www.youtube.com/@BlueR0222' ); ?>"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="screen-reader-text"><?php echo esc_html__( 'YouTube', 'br' ); ?></span>
							<svg class="br-footer__social-icon br-footer__social-icon--lg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
								<rect x="2" y="5" width="20" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="1.75"/>
								<path d="M10 9.5L10 14.5L15.5 12L10 9.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
							</svg>
						</a>
					</li>
					<li>
						<a
							class="br-footer__social-link"
							href="<?php echo esc_url( 'https://www.instagram.com/bluer_inc/' ); ?>"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="screen-reader-text"><?php echo esc_html__( 'Instagram', 'br' ); ?></span>
							<svg class="br-footer__social-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
								<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.75"/>
								<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.75"/>
								<circle cx="17" cy="7" r="1.25" fill="currentColor"/>
							</svg>
						</a>
					</li>
					<li>
						<a
							class="br-footer__social-link"
							href="<?php echo esc_url( 'https://www.tiktok.com/@bluer_inc' ); ?>"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="screen-reader-text"><?php echo esc_html__( 'TikTok', 'br' ); ?></span>
							<svg class="br-footer__social-icon br-footer__social-icon--lg" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
								<path fill="currentColor" d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"/>
							</svg>
						</a>
					</li>
				</ul>
			</div>
			<nav class="br-footer__nav-cols" aria-label="Footer navigation">
				<div class="br-footer__nav-col">
					<a class="br-footer__nav-heading" href="<?php echo br_page_href( 'about' ); ?>">About</a>
					<ul class="br-footer__nav-list" role="list">
						<li>
							<a href="<?php echo br_page_href( 'ceo' ); ?>">
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
