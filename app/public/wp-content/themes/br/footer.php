<?php
/**
 * Footer template.
 *
 * @package br
 */
?>
<footer class="br-footer" role="contentinfo">
	<div class="br-container">
		<?php if ( has_nav_menu( 'footer' ) ) : ?>
			<nav class="br-footer-nav" aria-label="<?php esc_attr_e( 'Footer', 'br' ); ?>">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'footer',
						'menu_class'     => 'br-footer-nav__list',
						'container'      => false,
						'depth'          => 1,
					)
				);
				?>
			</nav>
		<?php endif; ?>
		<p class="br-footer__copy">&copy; <?php echo esc_html( (string) gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?></p>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
