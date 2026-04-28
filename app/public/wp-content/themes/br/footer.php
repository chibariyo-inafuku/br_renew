<?php
/**
 * Footer template — multi-column grid (brand + WORKS/SERVICE/ABOUT/BLOG/RECRUIT + contact / sub bar).
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

$about_base = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'about' ) : '';
$about_overview_href = ( $about_base !== '' ) ? esc_url( $about_base . '#overview' ) : br_page_href( 'about' );
$about_philosophy_href = ( $about_base !== '' ) ? esc_url( $about_base . '#philosophy' ) : br_page_href( 'about' );

$works_all_raw = function_exists( 'br_get_works_page_list_url' ) ? br_get_works_page_list_url( 1, '' ) : '';
$works_all_href = ( $works_all_raw !== '' ) ? esc_url( $works_all_raw ) : br_page_href( 'works' );

$works_terms = function_exists( 'br_get_works_list_project_category_terms' ) ? br_get_works_list_project_category_terms() : array();

$footer_service_q = null;
if ( function_exists( 'br_query_posts_for_service_page' ) ) {
	$footer_service_q = br_query_posts_for_service_page( -1, '' );
}

$recruit_base = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'recruit' ) : '';
$recruit_top_href = ( $recruit_base !== '' ) ? esc_url( $recruit_base ) : br_page_href( 'recruit' );
$recruit_env_href = ( $recruit_base !== '' ) ? esc_url( $recruit_base . '#recruit-values' ) : br_page_href( 'recruit' );
$recruit_jobs_href = ( $recruit_base !== '' ) ? esc_url( $recruit_base . '#br-recruit-spec-heading' ) : br_page_href( 'recruit' );

$tokushoho_raw = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'tokushoho' ) : '';
$tokushoho_href  = ( $tokushoho_raw !== '' ) ? esc_url( $tokushoho_raw ) : br_page_href( 'tokushoho' );

$sitemap_raw = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'sitemap' ) : '';
$sitemap_href = ( $sitemap_raw !== '' ) ? esc_url( $sitemap_raw ) : br_page_href( 'sitemap' );

$footer_mail = sanitize_email( (string) get_bloginfo( 'admin_email' ) );
?>
<footer class="br-footer" role="contentinfo">
	<div class="br-container">
		<div class="br-footer__grid">
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
				<p class="br-footer__studio-line">
					<span class="br-footer__studio-name"><?php echo esc_html( strtoupper( get_bloginfo( 'name' ) ) ); ?></span>
					<span class="br-footer__studio-sub">CREATIVE STUDIO</span>
				</p>
				<div class="br-footer__desc">
					<p>遊び心で、未来を動かす。</p>
					<p>AIと共に、創造は次のステージへ。</p>
					<p>選ぶのは、私たちだ。</p>
				</div>
				<ul class="br-footer__social" role="list" aria-label="SNS">
					<li>
						<a
							class="br-footer__social-link"
							href="<?php echo esc_url( 'https://x.com/BlueR_CEO' ); ?>"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="screen-reader-text">X</span>
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
							<span class="screen-reader-text">YouTube</span>
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
							<span class="screen-reader-text">Instagram</span>
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
							<span class="screen-reader-text">TikTok</span>
							<svg class="br-footer__social-icon br-footer__social-icon--lg" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
								<path fill="currentColor" d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"/>
							</svg>
						</a>
					</li>
				</ul>
			</div>

			<nav class="br-footer__nav-col br-footer__nav-col--works" aria-label="実績">
				<p class="br-footer__nav-heading">
					<a href="<?php echo br_page_href( 'works' ); ?>">WORKS</a>
				</p>
				<ul class="br-footer__nav-list" role="list">
					<li><a href="<?php echo esc_url( $works_all_href ); ?>">すべての実績</a></li>
					<?php foreach ( $works_terms as $t ) : ?>
						<?php
						if ( ! $t instanceof WP_Term ) {
							continue;
						}
						$w_url = br_get_works_page_list_url( 1, $t->slug );
						if ( $w_url === '' ) {
							continue;
						}
						?>
						<li><a href="<?php echo esc_url( $w_url ); ?>"><?php echo esc_html( $t->name ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</nav>

			<nav class="br-footer__nav-col br-footer__nav-col--service" aria-label="サービス">
				<p class="br-footer__nav-heading">
					<a href="<?php echo br_page_href( 'service' ); ?>">SERVICE</a>
				</p>
				<ul class="br-footer__nav-list" role="list">
					<?php if ( $footer_service_q instanceof WP_Query && $footer_service_q->have_posts() ) : ?>
						<?php foreach ( $footer_service_q->posts as $footer_service_post ) : ?>
							<?php
							if ( ! $footer_service_post instanceof WP_Post ) {
								continue;
							}
							?>
							<li>
								<a href="<?php echo esc_url( get_permalink( $footer_service_post ) ); ?>">
									<?php echo esc_html( get_the_title( $footer_service_post ) ); ?>
								</a>
							</li>
						<?php endforeach; ?>
					<?php endif; ?>
				</ul>
			</nav>

			<nav class="br-footer__nav-col br-footer__nav-col--about" aria-label="会社情報">
				<p class="br-footer__nav-heading">
					<a href="<?php echo br_page_href( 'about' ); ?>">ABOUT</a>
				</p>
				<ul class="br-footer__nav-list" role="list">
					<li><a href="<?php echo esc_url( $about_overview_href ); ?>">会社概要</a></li>
					<li><a href="<?php echo esc_url( $about_philosophy_href ); ?>">私たちの想い</a></li>
					<li><a href="<?php echo br_page_href( 'ceo' ); ?>">メンバー</a></li>
					<li><a href="<?php echo esc_url( $about_overview_href ); ?>">アクセス</a></li>
				</ul>
			</nav>

			<nav class="br-footer__nav-col br-footer__nav-col--blog" aria-label="ブログ">
				<p class="br-footer__nav-heading">
					<a href="<?php echo br_page_href( 'blog' ); ?>">BLOG</a>
				</p>
				<ul class="br-footer__nav-list" role="list">
					<li><a href="<?php echo br_page_href( 'blog' ); ?>">すべての記事</a></li>
				</ul>
			</nav>

			<nav class="br-footer__nav-col br-footer__nav-col--recruit" aria-label="採用">
				<p class="br-footer__nav-heading">
					<a href="<?php echo esc_url( $recruit_top_href ); ?>">RECRUIT</a>
				</p>
				<ul class="br-footer__nav-list" role="list">
					<li><a href="<?php echo esc_url( $recruit_top_href ); ?>">採用情報</a></li>
					<li><a href="<?php echo esc_url( $recruit_env_href ); ?>">働く環境</a></li>
					<li><a href="<?php echo esc_url( $recruit_jobs_href ); ?>">募集職種</a></li>
				</ul>
			</nav>

			<div class="br-footer__aside">
				<a class="br-footer__contact-btn" href="<?php echo br_page_href( 'contact' ); ?>">
					<span class="br-footer__contact-btn-label">CONTACT</span>
					<span class="br-footer__contact-btn-arrow" aria-hidden="true"><span class="br-footer__contact-btn-arrow-inner">→</span></span>
				</a>
				<address class="br-footer__address">
					<p class="br-footer__address-line">〒150-0012</p>
					<p class="br-footer__address-line">東京都渋谷区広尾1-2-1 ヒカリビル4F</p>
					<p class="br-footer__address-line">
						<span class="br-footer__address-k">TEL</span>
						<a class="br-footer__address-tel" href="tel:+81524858626">052-485-8626</a>
					</p>
					
				</address>
			</div>
		</div>

		<div class="br-footer__subbar">
			<p class="br-footer__copy">Copyright © BlueR CO LTD. All Rights Reserved.</p>
			<div class="br-footer__legal">
				<?php if ( $privacy_href !== '' ) : ?>
					<a class="br-footer__legal-link" href="<?php echo $privacy_href; ?>">プライバシーポリシー</a>
				<?php endif; ?>
				
			</div>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
