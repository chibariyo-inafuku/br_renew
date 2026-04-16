<?php
/**
 * About: underpage heading + breadcrumb.
 *
 * @package br
 */
?>
<section class="br-about__heading" aria-labelledby="br-about-title">
	<div class="br-container br-about__heading-inner">
		<div class="br-about__title-block">
			<p class="br-about__title-en" id="br-about-title">About</p>
			<p class="br-about__title-jp">/ <?php esc_html_e( '私たちについて', 'br' ); ?></p>
		</div>
		<nav class="br-about__breadcrumb" aria-label="<?php esc_attr_e( 'Breadcrumb', 'br' ); ?>">
			<ol class="br-about__breadcrumb-list">
				<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Top</a></li>
				<li class="br-about__breadcrumb-sep" aria-hidden="true">/</li>
				<li><span class="br-about__breadcrumb-current">About</span></li>
			</ol>
		</nav>
	</div>
</section>
