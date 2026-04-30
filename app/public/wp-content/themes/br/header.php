<?php
/**
 * Header template — top bar (logo / nav / CTA).
 *
 * @package br
 */

$br_contact_url  = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'contact' ) : '';
$br_contact_href = ( $br_contact_url !== '' ) ? esc_url( $br_contact_url ) : esc_url( '#' );
$br_fallback_logo    = get_template_directory_uri() . '/assets/images/br-header-logo.png';
$br_fallback_logo_sp = get_template_directory_uri() . '/assets/images/br-header-logo-sp.png';
$br_drawer_logo_src    = $br_fallback_logo;
if ( function_exists( 'has_custom_logo' ) && has_custom_logo() ) {
	$br_custom_logo_id = (int) get_theme_mod( 'custom_logo' );
	if ( $br_custom_logo_id ) {
		$br_custom_logo_url = wp_get_attachment_image_url( $br_custom_logo_id, 'full' );
		if ( is_string( $br_custom_logo_url ) && $br_custom_logo_url !== '' ) {
			$br_drawer_logo_src = $br_custom_logo_url;
		}
	}
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Google tag (gtag.js) -->
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-SZ0KDGXT6F"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-SZ0KDGXT6F');
				</script>
	<?php wp_head(); ?>
	<noscript>
		<style>
			main.br-main:not(.br-home) [data-br-subpage-reveal-stagger] {
				opacity: 1 !important;
				transform: none !important;
			}
		</style>
	</noscript>
</head>
<body <?php body_class(); ?>>
<script>
document.documentElement.classList.add('br-header-js');
</script>
<?php wp_body_open(); ?>
<a class="br-skip-link" href="#main"><?php esc_html_e( 'Skip to content', 'br' ); ?></a>
<header class="br-header br-header--top" role="banner">
	<div class="br-header__sidebar-inner">
		<div class="br-header__inner br-container">
			<div class="br-header__row">
				<div class="br-header__head">
					<div class="br-header__logo">
						<span class="br-header__logo-desktop">
							<a class="custom-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>">
								<img
									class="custom-logo br-header__logo-img"
									src="<?php echo esc_url( $br_fallback_logo_sp ); ?>"
									alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"
									loading="eager"
									decoding="async"
								/>
							</a>
						</span>
						<a
							class="custom-logo-link br-header__logo-mobile"
							href="<?php echo esc_url( home_url( '/' ) ); ?>"
						>
							<img
								class="custom-logo br-header__logo-img br-header__logo-img--sp"
								src="<?php echo esc_url( $br_fallback_logo_sp ); ?>"
								alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"
								loading="eager"
								decoding="async"
							/>
						</a>
					</div>
				</div>
				<div class="br-header__panel" id="br-header-panel" data-br-header-panel>
					<div class="br-header__backdrop" data-br-nav-close tabindex="-1" aria-hidden="true"></div>
					<div class="br-header__bottom">
						<div class="br-header__drawer-brand">
							<a class="custom-logo-link br-header__drawer-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>">
								<img
									class="custom-logo br-header__drawer-logo-img"
									src="<?php echo esc_url( $br_drawer_logo_src ); ?>"
									alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"
									loading="lazy"
									decoding="async"
								/>
							</a>
						</div>
						<nav class="br-nav" aria-label="<?php esc_attr_e( 'Primary', 'br' ); ?>">
							<ul class="br-nav__list br-header__menu" role="list">
								<li><a class="br-nav__link" href="<?php echo br_page_href( 'about' ); ?>"><?php esc_html_e( 'About', 'br' ); ?></a></li>
								<li><a class="br-nav__link" href="<?php echo br_page_href( 'works' ); ?>"><?php esc_html_e( 'Works', 'br' ); ?></a></li>
								<li><a class="br-nav__link" href="<?php echo br_page_href( 'news' ); ?>"><?php esc_html_e( 'News', 'br' ); ?></a></li>
								<li><a class="br-nav__link" href="<?php echo br_page_href( 'project' ); ?>"><?php esc_html_e( 'project', 'br' ); ?></a></li>
								<li><a class="br-nav__link" href="<?php echo br_page_href( 'service' ); ?>"><?php esc_html_e( 'Service', 'br' ); ?></a></li>
								
								<li><a class="br-nav__link" href="<?php echo br_page_href( 'blog' ); ?>"><?php esc_html_e( 'Blog', 'br' ); ?></a></li>
								<li><a class="br-nav__link" href="<?php echo br_page_href( 'recruit' ); ?>"><?php esc_html_e( 'Recruit', 'br' ); ?></a></li>
							</ul>
						</nav>
						<div class="br-header__contact">
							<a
								class="br-header__cta br-header__cta--pill"
								href="<?php echo $br_contact_href; ?>"
								aria-label="<?php esc_attr_e( 'Contact', 'br' ); ?>"
							>
								<span class="br-header__cta-text"><?php esc_html_e( 'Contact', 'br' ); ?></span>
								<span class="br-header__cta-arrow" aria-hidden="true">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
										<path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</span>
							</a>
							<p class="br-header__tel">
								<a class="br-header__tel-link" href="tel:+81524858626"><?php echo esc_html__( '052-485-8626', 'br' ); ?></a>
							</p>
						</div>
					</div>
				</div>
				<button
					type="button"
					class="br-header__menu-toggle"
					id="br-header-menu-toggle"
					aria-expanded="false"
					aria-controls="br-header-panel"
				>
					<span class="screen-reader-text"><?php esc_html_e( 'Menu', 'br' ); ?></span>
					<span class="br-header__menu-bars" aria-hidden="true">
						<span class="br-header__menu-bar"></span>
						<span class="br-header__menu-bar"></span>
						<span class="br-header__menu-bar"></span>
					</span>
					<span class="br-header__menu-x" aria-hidden="true">
						<span class="br-header__menu-x-line"></span>
						<span class="br-header__menu-x-line"></span>
					</span>
				</button>
			</div>
		</div>
	</div>
</header>
