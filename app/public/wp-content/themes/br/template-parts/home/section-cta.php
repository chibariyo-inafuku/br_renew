<?php
/**
 * Home: contact CTA — two columns (copy + urgent TEL / CF7 card). Figma CTA Section-sp.
 *
 * @package br
 */

if ( br_get_page_permalink_by_slug( 'contact' ) === '' ) {
	return;
}

$cf7_shortcode = br_get_contact_page_cf7_shortcode();
?>
<section class="br-home__section br-home__section--cta br-home__cta">
	<div class="br-container">
		<div class="br-home__cta-inner">
			<div class="br-home__cta-col br-home__cta-col--copy">
				<!-- br-svg-heading: JP line uses .br-svg-heading--sub-from-left (slide from left). -->
				<header class="br-home__cta-heading">
					<h2 class="br-home__cta-title">
						<span class="screen-reader-text">Contact / お問い合わせ</span>
						<div class="br-svg-heading br-svg-heading--sub-from-left" data-br-svg-heading>
							<div class="br-svg-heading__sub-wrap">
								<span class="br-home__cta-label-slash br-svg-heading__sub">/ お問い合わせ</span>
							</div>
							<svg
								class="br-svg-heading__svg"
								aria-hidden="true"
								viewBox="0 0 720 102"
								preserveAspectRatio="xMinYMin meet"
								focusable="false"
							>
								<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Contact</text>
							</svg>
						</div>
					</h2>
				</header>
				<p class="br-home__cta-body">サービスに関するご相談、お見積りのご依頼など、お気軽にお問い合わせください。AIのプロフェッショナルが最適な提案をさせていただきます。</p>
				<div class="br-home__cta-urgent" role="group" aria-label="お急ぎの方はこちら">
					<p class="br-home__cta-urgent-label">お急ぎの方はこちら</p>
					<p class="br-home__cta-tel">
						<a class="br-home__cta-tel-link" href="tel:+81524858626">TEL 052-485-8626</a>
					</p>
				</div>
			</div>
			<div class="br-home__cta-col br-home__cta-col--form">
				<div class="br-home__cta-form-card">
					<?php if ( $cf7_shortcode !== '' ) : ?>
						<?php echo do_shortcode( $cf7_shortcode ); ?>
					<?php elseif ( is_user_logged_in() ) : ?>
						<p class="br-home__cta-form-missing">Contact ページの本文に Contact Form 7 のショートコードを追加してください。</p>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</section>
