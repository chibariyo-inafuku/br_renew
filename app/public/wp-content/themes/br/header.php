<?php
/**
 * Header template — static sidebar nav (Figma 準拠).
 *
 * @package br
 */

$br_contact_url  = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'contact' ) : '';
$br_contact_href = ( $br_contact_url !== '' ) ? esc_url( $br_contact_url ) : esc_url( '#' );
$br_fallback_logo = get_template_directory_uri() . '/assets/images/br-header-logo.png';
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="br-skip-link" href="#main"><?php esc_html_e( 'Skip to content', 'br' ); ?></a>
<header class="br-header br-header--sidebar" role="banner">
	<div class="br-header__sidebar-inner">
		<div class="br-header__wrap">
			<div class="br-header__head">
				<div class="br-header__logo">
					<?php if ( has_custom_logo() ) : ?>
						<?php the_custom_logo(); ?>
					<?php else : ?>
						<a class="custom-logo-link" href="<?php echo esc_url( home_url( '/' ) ); ?>">
							<img
								class="custom-logo br-header__logo-img"
								src="<?php echo esc_url( $br_fallback_logo ); ?>"
								alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"
								loading="eager"
								decoding="async"
							/>
						</a>
					<?php endif; ?>
				</div>
			</div>
			<div class="br-header__bottom">
				<nav class="br-nav" aria-label="<?php esc_attr_e( 'Primary', 'br' ); ?>">
					<ul class="br-nav__list br-header__menu" role="list">
						<li><a class="br-nav__link" href="<?php echo br_page_href( 'about' ); ?>"><?php esc_html_e( 'About', 'br' ); ?></a></li>
						<li><a class="br-nav__link" href="<?php echo br_page_href( 'works' ); ?>"><?php esc_html_e( 'Works', 'br' ); ?></a></li>
						<li><a class="br-nav__link" href="<?php echo br_page_href( 'service' ); ?>"><?php esc_html_e( 'Service', 'br' ); ?></a></li>
						<li><a class="br-nav__link" href="<?php echo br_page_href( 'project' ); ?>"><?php esc_html_e( 'Project', 'br' ); ?></a></li>
						<li><a class="br-nav__link" href="<?php echo br_page_href( 'blog' ); ?>"><?php esc_html_e( 'Blog', 'br' ); ?></a></li>
						<li><a class="br-nav__link" href="<?php echo br_page_href( 'recruit' ); ?>"><?php esc_html_e( 'Recruit', 'br' ); ?></a></li>
					</ul>
				</nav>
				<div class="br-header__contact">
					<a class="br-header__cta" href="<?php echo $br_contact_href; ?>">
						<span class="br-header__cta-label"><?php esc_html_e( 'Contact', 'br' ); ?></span>
						<span class="br-header__cta-dot" aria-hidden="true"></span>
					</a>
					<p class="br-header__tel">
						<a class="br-header__tel-link" href="tel:+81524858626"><?php echo esc_html__( '052-485-8626', 'br' ); ?></a>
					</p>
				</div>
			</div>
		</div>
	</div>
</header>
