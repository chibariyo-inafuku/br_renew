<?php
/**
 * Home: AI Creative Studio — linked banner image (centered).
 *
 * @package br
 */

/* 遷移先は運用に合わせて変更（外部URLの場合は https://… に差し替え） */
$banner_href = '/ai-creative-studio/';
$banner_src  = '/wp-content/themes/br/assets/images/home/ai-creative-studio-banner.png';
$banner_alt  = 'AI Creative Studio。AIと、あたらしい表現の入口へ。';
?>
<section
	class="br-home__section br-home__ai-creative-banner"
	aria-label="AI Creative Studio"
>
	<div class="br-container br-home__ai-creative-banner-inner">
		<a
			class="br-home__ai-creative-banner-link"
			href="<?php echo esc_url( $banner_href ); ?>"
		>
			<img
				class="br-home__ai-creative-banner-img"
				src="<?php echo esc_url( $banner_src ); ?>"
				alt="<?php echo esc_attr( $banner_alt ); ?>"
				width="1024"
				height="246"
				decoding="async"
				loading="lazy"
			>
		</a>
	</div>
</section>
