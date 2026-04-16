<?php
/**
 * About: CEO + FAQ promo cards.
 *
 * @package br
 */

$theme_uri = get_template_directory_uri();
$img_ceo   = $theme_uri . '/assets/images/about/promo-ceo.jpg';
$img_faq   = $theme_uri . '/assets/images/about/promo-faq.jpg';
?>
<section class="br-about__promos" aria-label="<?php esc_attr_e( 'Related links', 'br' ); ?>">
	<div class="br-container br-about__promos-inner">
		<?php
		$contact_href = function_exists( 'br_page_href' ) ? br_page_href( 'contact' ) : '#';
		?>
		<article class="br-about__promo" id="ceo">
			<div class="br-about__promo-bg" style="--br-about-promo-bg: url(<?php echo esc_url( $img_ceo ); ?>);"></div>
			<div class="br-about__promo-scrim" aria-hidden="true"></div>
			<div class="br-about__promo-content">
				<header class="br-about__promo-head">
					<p class="br-about__promo-kicker"><?php esc_html_e( '/ 代表プロフィール', 'br' ); ?></p>
					<h2 class="br-about__promo-title">CEO PROFILE</h2>
				</header>
				<p class="br-about__promo-text">
					<?php esc_html_e( '代表取締役および顧問の経歴・専門分野についてご紹介します。', 'br' ); ?>
				</p>
				<p class="br-about__promo-cta">
					<a class="br-about__promo-btn" href="<?php echo esc_url( $contact_href ); ?>">
						<span class="br-about__promo-btn-icon" aria-hidden="true"></span>
						<?php esc_html_e( 'View More', 'br' ); ?>
					</a>
				</p>
			</div>
		</article>
		<article class="br-about__promo">
			<div class="br-about__promo-bg" style="--br-about-promo-bg: url(<?php echo esc_url( $img_faq ); ?>);"></div>
			<div class="br-about__promo-scrim" aria-hidden="true"></div>
			<div class="br-about__promo-content">
				<header class="br-about__promo-head">
					<p class="br-about__promo-kicker"><?php esc_html_e( '/ よくあるご質問', 'br' ); ?></p>
					<h2 class="br-about__promo-title">FAQ</h2>
				</header>
				<p class="br-about__promo-text">
					<?php esc_html_e( 'サービス内容、LLMO技術、契約やセキュリティに関するよくあるご質問にお答えします。', 'br' ); ?>
				</p>
				<p class="br-about__promo-cta">
					<a class="br-about__promo-btn" href="<?php echo esc_url( function_exists( 'br_page_href' ) ? br_page_href( 'faq' ) : '#' ); ?>">
						<span class="br-about__promo-btn-icon" aria-hidden="true"></span>
						<?php esc_html_e( 'View More', 'br' ); ?>
					</a>
				</p>
			</div>
		</article>
	</div>
</section>
