<?php
/**
 * Header template.
 *
 * @package br
 */
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
<header class="br-header" role="banner">
	<div class="br-container br-header__inner">
		<?php if ( has_custom_logo() ) : ?>
			<div class="br-header__logo"><?php the_custom_logo(); ?></div>
		<?php else : ?>
			<a class="br-header__title" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
		<?php endif; ?>
		<nav class="br-nav" aria-label="<?php esc_attr_e( 'Primary', 'br' ); ?>">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'menu_class'     => 'br-nav__list',
					'container'      => false,
					'fallback_cb'    => false,
				)
			);
			?>
		</nav>
	</div>
</header>
