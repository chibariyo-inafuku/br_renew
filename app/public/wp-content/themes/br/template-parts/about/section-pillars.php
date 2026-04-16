<?php
/**
 * About: Philosophy / Mission / Vision / Values.
 *
 * @package br
 */

$theme_uri = get_template_directory_uri();
$bg_url = $theme_uri . '/assets/images/about/about-pillars-bg.jpg';
$ph_img = $theme_uri . '/assets/images/about/philosophy-visual.jpg';
?>
<div class="br-about__pillars-wrap">
	<div class="br-about__pillars-bg" style="--br-about-pillars-bg: url(<?php echo esc_url( $bg_url ); ?>);"></div>
	<section class="br-about__pillars" id="philosophy" aria-labelledby="br-about-philosophy-heading">
		<div class="br-container">
			<header class="br-about__block-head">
				<h2 class="br-about__heading-tertiary" id="br-about-philosophy-heading">Philosophy</h2>
			</header>
			<div class="br-about__philosophy-layout">
				<div class="br-about__philosophy-visual">
					<img
						src="<?php echo esc_url( $ph_img ); ?>"
						alt=""
						width="560"
						height="360"
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="br-about__philosophy-copy">
					<div class="br-about__statement">
						<p class="br-about__statement-text"><?php esc_html_e( '創造は、奪われない。進化する。', 'br' ); ?></p>
					</div>
					<div class="br-about__statement">
						<p class="br-about__statement-text"><?php esc_html_e( '仕事は、奪われる。最適化される。', 'br' ); ?></p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="br-about__pillar-block" id="mission" aria-labelledby="br-about-mission-heading">
		<div class="br-container">
			<header class="br-about__block-head">
				<h2 class="br-about__heading-tertiary" id="br-about-mission-heading">Mission</h2>
			</header>
			<div class="br-about__pillar-columns">
				<div class="br-about__pillar-col">
					<p class="br-about__body">
						<?php esc_html_e( 'クライアントの事業課題に対し、AIと人の強みを組み合わせた実装で成果を届ける。再現性のあるプロセスと透明性のあるコミュニケーションを両立します。', 'br' ); ?>
					</p>
				</div>
				<div class="br-about__pillar-col">
					<p class="br-about__body">
						<?php esc_html_e( '技術の導入だけで終わらせず、組織の学習と継続的な改善まで伴走し、中長期の競争力につなげます。', 'br' ); ?>
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="br-about__pillar-block" id="vision" aria-labelledby="br-about-vision-heading">
		<div class="br-container">
			<header class="br-about__block-head">
				<h2 class="br-about__heading-tertiary" id="br-about-vision-heading">Vision</h2>
			</header>
			<div class="br-about__pillar-columns">
				<div class="br-about__pillar-col">
					<p class="br-about__body">
						<?php esc_html_e( 'AIが当たり前の時代において、倫理と設計思想を備えたプロダクトとサービスを生み出す企業として認識される。', 'br' ); ?>
					</p>
				</div>
				<div class="br-about__pillar-col">
					<p class="br-about__body">
						<?php esc_html_e( 'パートナー企業とともに、持続可能な成長と働く人の尊厳を支えるデジタル基盤を広げていきます。', 'br' ); ?>
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="br-about__pillar-block br-about__pillar-block--values" id="values" aria-labelledby="br-about-values-heading">
		<div class="br-container">
			<header class="br-about__block-head">
				<h2 class="br-about__heading-tertiary" id="br-about-values-heading">Values</h2>
			</header>
			<div class="br-about__values-grid">
				<article class="br-about__value-card">
					<div class="br-about__value-line" aria-hidden="true"></div>
					<div class="br-about__value-inner">
						<h3 class="br-about__value-title"><?php esc_html_e( '誠実さ', 'br' ); ?></h3>
						<p class="br-about__value-body"><?php esc_html_e( '約束を守り、説明責任を果たす。期待値を揃え、進捗とリスクを隠さず共有します。', 'br' ); ?></p>
					</div>
				</article>
				<article class="br-about__value-card">
					<div class="br-about__value-line" aria-hidden="true"></div>
					<div class="br-about__value-inner">
						<h3 class="br-about__value-title"><?php esc_html_e( '探求', 'br' ); ?></h3>
						<p class="br-about__value-body"><?php esc_html_e( '最新技術を追いかけるだけでなく、本質的な課題定義と検証を繰り返します。', 'br' ); ?></p>
					</div>
				</article>
				<article class="br-about__value-card">
					<div class="br-about__value-line" aria-hidden="true"></div>
					<div class="br-about__value-inner">
						<h3 class="br-about__value-title"><?php esc_html_e( '協働', 'br' ); ?></h3>
						<p class="br-about__value-body"><?php esc_html_e( 'クライアントチームと同じゴールに立ち、越境しながら成果を積み上げます。', 'br' ); ?></p>
					</div>
				</article>
				<article class="br-about__value-card">
					<div class="br-about__value-line" aria-hidden="true"></div>
					<div class="br-about__value-inner">
						<h3 class="br-about__value-title"><?php esc_html_e( '安全', 'br' ); ?></h3>
						<p class="br-about__value-body"><?php esc_html_e( 'セキュリティとプライバシーを設計の出発点に置き、運用まで見据えた対策を徹底します。', 'br' ); ?></p>
					</div>
				</article>
			</div>
		</div>
	</section>
</div>
