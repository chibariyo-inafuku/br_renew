<?php
/**
 * About: in-page anchor links.
 *
 * @package br
 */
$faq_href = function_exists( 'br_page_href' ) ? br_page_href( 'faq' ) : '#';
?>
<nav class="br-about__anchors" aria-label="<?php esc_attr_e( 'About page sections', 'br' ); ?>">
	<div class="br-container br-about__anchors-inner">
		<ul class="br-about__anchors-list">
			<li><a class="br-about__anchor-link" href="#philosophy">Philosophy<span class="br-about__anchor-arrow" aria-hidden="true">←</span></a></li>
			<li><a class="br-about__anchor-link" href="#mission">Mission<span class="br-about__anchor-arrow" aria-hidden="true">←</span></a></li>
			<li><a class="br-about__anchor-link" href="#vision">Vision<span class="br-about__anchor-arrow" aria-hidden="true">←</span></a></li>
			<li><a class="br-about__anchor-link" href="#values">Values<span class="br-about__anchor-arrow" aria-hidden="true">←</span></a></li>
			<li><a class="br-about__anchor-link" href="#overview">Overview<span class="br-about__anchor-arrow" aria-hidden="true">←</span></a></li>
			<li><a class="br-about__anchor-link" href="#ceo">CEO<span class="br-about__anchor-arrow" aria-hidden="true">←</span></a></li>
			<li><a class="br-about__anchor-link" href="<?php echo esc_url( $faq_href ); ?>">FAQ<span class="br-about__anchor-arrow" aria-hidden="true">←</span></a></li>
		</ul>
	</div>
</nav>
