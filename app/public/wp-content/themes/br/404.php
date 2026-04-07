<?php
/**
 * 404 template.
 *
 * @package br
 */

get_header();
?>
<main id="main" class="br-main br-container">
	<h1><?php esc_html_e( 'Page not found', 'br' ); ?></h1>
	<p><?php esc_html_e( 'The page you requested could not be found.', 'br' ); ?></p>
	<p><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Back to home', 'br' ); ?></a></p>
</main>
<?php
get_footer();
