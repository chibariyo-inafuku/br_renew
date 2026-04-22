<?php
/**
 * Fixed page: /faq/ (slug `faq`).
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	?>
<main id="main" class="br-main br-faq">
	<section class="br-faq__heading" aria-labelledby="br-faq-title" data-br-subpage-reveal>
		<div class="br-container br-faq__heading-inner">
			<header class="br-faq__heading-title br-home__works-heading br-home__section-head">
				<h1 class="br-home__works-title" id="br-faq-title">
					<span class="screen-reader-text">FAQ / よくあるご質問</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 920 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">FAQ</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__works-title-jp br-svg-heading__sub">/ よくあるご質問</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-faq__breadcrumb" aria-label="パンくず">
				<ol class="br-faq__breadcrumb-list">
					<li><a href="/">Top</a></li>
					<li class="br-faq__breadcrumb-sep" aria-hidden="true">/</li>
					<li><a href="/about/">About</a></li>
					<li class="br-faq__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-faq__breadcrumb-current">FAQ</span></li>
				</ol>
			</nav>
		</div>
		<div class="br-container br-faq__lead-wrap">
			<p class="br-faq__lead">
				よくあるご質問をまとめました。<br />
				会社概要やサービス内容、AI活用、ご依頼の流れなどにお答えします。
			</p>
		</div>
	</section>

	<section class="br-faq__body" aria-label="よくあるご質問一覧" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-faq__list">
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">ブルーアールはどのような会社ですか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>ブルーアール株式会社は、AIを活用したマーケティングプロモーションおよびクリエイティブ制作を行う会社です。企画・戦略設計から制作・運用まで、AIを活用して一貫した支援を提供しています。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">どのようなサービスを提供していますか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>主に以下の領域でサービスを提供しています。</p>
						<ul class="br-faq__answer-list">
							<li>AIを活用したクリエイティブ制作（動画・ビジュアル・WEBなど）</li>
							<li>マーケティング戦略設計・プロモーション支援</li>
							<li>SNS運用・コンテンツ制作</li>
							<li>ブランディング・PR支援</li>
							<li>イベント・展示会の企画・運営</li>
							<li>AIを活用したシステム・アプリ開発</li>
						</ul>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">AIを活用したクリエイティブとは何ですか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>AIを活用したクリエイティブとは、画像生成・動画生成・テキスト生成などの技術を活用し、従来よりも高速かつ高品質に制作を行う手法です。人間のクリエイティブとAIを組み合わせることで、表現の幅を大きく拡張します。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">AIを導入すると何が変わりますか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>制作スピードの向上、コスト最適化、表現の多様化が実現します。また、これまで実現が難しかった表現やアイデアの具現化も可能になります。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">AIを使うとクオリティは下がりませんか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>ブルーアールではAIを単なる自動化ツールとしてではなく、クリエイターの能力を拡張する手段として活用しています。そのため、クオリティを維持・向上させながら制作を行うことが可能です。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">どのような企業からの依頼が多いですか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>大手企業のマーケティング担当者様や、新規事業・DX推進部門からのご相談が多く、プロモーションやブランディングの高度化を目的とした案件が中心です。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">小規模なプロジェクトでも依頼できますか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>はい、可能です。単発のクリエイティブ制作から中長期のプロジェクトまで、目的や規模に応じて柔軟に対応しています。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">企画段階から相談することはできますか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>可能です。課題整理やコンセプト設計、AI活用の可能性検討など、上流工程からご支援いたします。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">AI活用の知識がなくても大丈夫ですか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>問題ありません。専門的な知識がなくても理解しやすい形でご説明し、最適な活用方法をご提案いたします。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">どのような制作フローになりますか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>一般的には以下の流れで進行します。</p>
						<ul class="br-faq__answer-list">
							<li>ヒアリング・課題整理</li>
							<li>企画・戦略設計</li>
							<li>AI活用設計</li>
							<li>クリエイティブ制作</li>
							<li>運用・改善</li>
						</ul>
						<p>プロジェクトに応じて柔軟に設計します。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">納期はどのくらいですか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>内容によって異なりますが、AIを活用することで従来よりも短期間での制作が可能です。具体的なスケジュールはご相談内容に応じてご提案いたします。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">費用感について教えてください</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>プロジェクトの内容や規模によって異なります。目的やご予算に応じて最適なプランをご提案いたしますので、お気軽にご相談ください。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">AIを活用した新規事業開発も相談できますか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>はい、可能です。AIを活用したサービス開発や体験設計など、新規事業領域の支援も行っています。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">内製化支援や研修は行っていますか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>AI活用に関する研修やワークショップの実施も可能です。企業内での活用促進やスキル向上をサポートします。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">どのような強みがありますか？</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>ブルーアールの強みは、AI技術とクリエイティブの両方を理解したチームによる一貫支援です。戦略から制作・運用までを統合し、ビジネス成果に直結するアウトプットを提供します。</p>
					</div>
					</div>
				</details>
				<details class="br-faq__item">
					<summary class="br-faq__summary">
						<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
						<span class="br-faq__question">問い合わせ方法を教えてください</span>
					</summary>
					<div class="br-faq__answer-panel">
					<div class="br-faq__answer">
						<p>WEBサイトのお問い合わせフォームよりご連絡ください。内容を確認後、担当者よりご連絡いたします。</p>
					</div>
					</div>
				</details>
			</div>
		</div>
	</section>

	<section class="br-faq__promo" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-faq__promo-inner">
				<h2 class="br-faq__promo-title">解決しない疑問はありますか？</h2>
				<p class="br-faq__promo-text">
					具体的なプロジェクトのご相談や、資料請求など<br />
					お気軽にお問い合わせフォームよりご連絡ください。
				</p>
				<p class="br-faq__promo-cta">
					<a
						class="br-hop-btn br-hop-btn--inverted"
						href="/contact/"
						data-text="Contact Us"
						aria-label="Contact Us"
					>
						<span class="br-hop-btn__dot-mover" aria-hidden="true"><span class="br-hop-btn__dot"></span></span>
					</a>
				</p>
			</div>
		</div>
	</section>

	<div class="br-home" data-br-subpage-reveal>
		<?php get_template_part( 'template-parts/home/section', 'cta' ); ?>
	</div>
</main>
	<?php
endwhile;

get_footer();
