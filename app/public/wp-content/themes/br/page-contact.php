<?php
/**
 * Fixed page: /contact/ (slug `contact`).
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();

	$contact_cf7 = function_exists( 'br_get_contact_page_cf7_shortcode' ) ? br_get_contact_page_cf7_shortcode() : '';
	?>
<main id="main" class="br-main br-contact">
	<section class="br-contact__heading" aria-labelledby="br-contact-title" data-br-subpage-reveal>
		<div class="br-container br-contact__heading-inner">
			<p class="br-contact__hero-watermark" aria-hidden="true">MESSAGE</p>
			<header class="br-contact__heading-title br-home__works-heading br-home__section-head">
				<h1 class="br-home__works-title" id="br-contact-title">
					<span class="screen-reader-text">Contact Us / お問い合わせ</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 920 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Contact Us</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__works-title-jp br-svg-heading__sub">/ お問い合わせ</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-contact__breadcrumb" aria-label="パンくず">
				<ol class="br-contact__breadcrumb-list">
					<li><a href="/">Top</a></li>
					<li class="br-contact__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-contact__breadcrumb-current">Contact</span></li>
				</ol>
			</nav>
		</div>
		<div class="br-container br-contact__lead-wrap">
			<p class="br-contact__lead">
				サービスに関するご相談、お見積りのご依頼など、お気軽にお問い合わせください。<br />
				AIのプロフェッショナルが最適な提案をさせていただきます。
			</p>
			<div class="br-contact__urgent" role="group" aria-label="お急ぎの方はこちら">
				<p class="br-contact__urgent-label">お急ぎの方はこちら</p>
				<p class="br-contact__urgent-tel">
					<a class="br-contact__urgent-tel-link" href="tel:+81524858626">TEL 052-485-8626</a>
				</p>
			</div>
		</div>
	</section>

	<section class="br-contact__form-section br-home__section br-home__section--cta br-subpage-cta-form-band" aria-label="お問い合わせフォーム" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-home__cta-inner br-home__cta-inner--form-only">
				<div class="br-home__cta-col br-home__cta-col--form">
					<div class="br-home__cta-form-card">
						<?php if ( $contact_cf7 !== '' ) : ?>
							<?php echo do_shortcode( $contact_cf7 ); ?>
						<?php elseif ( is_user_logged_in() ) : ?>
							<p class="br-home__cta-form-missing">Contact ページの本文に Contact Form 7 のショートコードを追加してください。</p>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
<?php
endwhile;

get_footer();
