<?php
/**
 * Header template — static sidebar nav (Figma 準拠).
 *
 * @package br
 */

$br_contact_url  = function_exists( 'br_get_page_permalink_by_slug' ) ? br_get_page_permalink_by_slug( 'contact' ) : '';
$br_contact_href = ( $br_contact_url !== '' ) ? esc_url( $br_contact_url ) : esc_url( '#' );
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
		<div class="br-header__row br-header__row--top">
			<?php if ( has_custom_logo() ) : ?>
				<div class="br-header__logo"><?php the_custom_logo(); ?></div>
			<?php else : ?>
				<a class="br-header__title" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
			<?php endif; ?>
		</div>
		<div class="br-header__bottom">
			<nav class="br-nav" aria-label="<?php esc_attr_e( 'Primary', 'br' ); ?>">
				<ul class="br-nav__list" role="list">
					<li><a class="br-nav__link" href="<?php echo br_page_href( 'about' ); ?>"><?php esc_html_e( '/About', 'br' ); ?></a></li>
					<li><a class="br-nav__link" href="<?php echo br_page_href( 'works' ); ?>"><?php esc_html_e( '/Works', 'br' ); ?></a></li>
					<li><a class="br-nav__link" href="<?php echo br_page_href( 'service' ); ?>"><?php esc_html_e( '/Service', 'br' ); ?></a></li>
					<li><a class="br-nav__link" href="<?php echo br_page_href( 'project' ); ?>"><?php esc_html_e( '/Project', 'br' ); ?></a></li>
					<li><a class="br-nav__link" href="<?php echo br_page_href( 'blog' ); ?>"><?php esc_html_e( '/Blog', 'br' ); ?></a></li>
					<li><a class="br-nav__link" href="<?php echo br_page_href( 'recruit' ); ?>"><?php esc_html_e( '/Recruit', 'br' ); ?></a></li>
				</ul>
			</nav>
			<a class="br-header__cta" href="<?php echo $br_contact_href; ?>">
				<span><?php esc_html_e( 'Contact', 'br' ); ?></span>
				<span class="br-header__cta-dot" aria-hidden="true"></span>
			</a>
		</div>
	</div>
</header>
