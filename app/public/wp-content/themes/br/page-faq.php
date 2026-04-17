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
				<p class="br-faq__hero-kicker" aria-hidden="true">QUESTIONS</p>
				<h1 class="br-home__works-title" id="br-faq-title">
					<span class="screen-reader-text">FAQ / よくあるご質問</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 480 102"
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
				サービス導入に関するよくあるご質問をまとめました。<br />
				AI技術の活用やセキュリティ、制作フローについてお答えします。
			</p>
		</div>
	</section>

	<section class="br-faq__body" aria-label="よくあるご質問一覧" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-faq__cat">
				<input type="radio" name="br-faq-cat" id="br-faq-cat-service" class="br-faq__cat-input" checked>
				<label class="br-faq__tab br-faq__tab--service" for="br-faq-cat-service">サービス・品質</label>
				<input type="radio" name="br-faq-cat" id="br-faq-cat-llmo" class="br-faq__cat-input">
				<label class="br-faq__tab br-faq__tab--llmo" for="br-faq-cat-llmo">LLMO・AI技術</label>
				<input type="radio" name="br-faq-cat" id="br-faq-cat-contract" class="br-faq__cat-input">
				<label class="br-faq__tab br-faq__tab--contract" for="br-faq-cat-contract">契約・セキュリティ</label>

				<div class="br-faq__panel br-faq__panel--service" role="tabpanel">
					<details class="br-faq__item">
						<summary class="br-faq__summary">
							<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
							<span class="br-faq__question">従来の制作フローとAI活用の最大の違いは何ですか？</span>
						</summary>
						<div class="br-faq__answer">
							<p>「試行回数の圧倒的な多さ」です。AI活用により数百のバリエーションから最適な一点を磨き上げることが可能になります。また、制作期間を従来の約1/3まで短縮できるケースが多く、スピードと質の双方を担保できます。</p>
						</div>
					</details>
					<details class="br-faq__item">
						<summary class="br-faq__summary">
							<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
							<span class="br-faq__question">小規模なバナー制作なども依頼できますか？</span>
						</summary>
						<div class="br-faq__answer">
							<p>はい、数点のバナー制作からお受けしております。AIを用いることで低コストかつスピーディーに展開可能ですので、まずは試験的な導入（PoC）としてもご活用いただけます。</p>
						</div>
					</details>
					<details class="br-faq__item">
						<summary class="br-faq__summary">
							<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
							<span class="br-faq__question">社内にデザイナーがいなくても大丈夫ですか？</span>
						</summary>
						<div class="br-faq__answer">
							<p>全く問題ありません。弊社のAIディレクターが貴社のアイディアを形にする段階から伴走いたします。抽象的なイメージから具体的なビジュアル提案まで一貫してお任せください。</p>
						</div>
					</details>
					<details class="br-faq__item">
						<summary class="br-faq__summary">
							<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
							<span class="br-faq__question">動画制作も対応可能ですか？</span>
						</summary>
						<div class="br-faq__answer">
							<p>可能です。ショート動画から、AIによる実写合成、モーション動画まで幅広く対応しております。特に、静止画から一貫した世界観で動画へ展開するワークフローを得意としています。</p>
						</div>
					</details>
				</div>

				<div class="br-faq__panel br-faq__panel--llmo" role="tabpanel">
					<details class="br-faq__item">
						<summary class="br-faq__summary">
							<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
							<span class="br-faq__question">LLMO（Large Language Model Optimization）とは何ですか？</span>
						</summary>
						<div class="br-faq__answer">
							<p>生成AIの回答やコンテンツを、検索エンジンや社内ナレッジと整合する形に最適化し、利用者にとって信頼できる推奨情報として届けるための設計・運用の総称です。BlueRでは、業務要件に合わせたプロンプト設計、評価指標、更新サイクルまで一気通貫で支援します。</p>
						</div>
					</details>
					<details class="br-faq__item">
						<summary class="br-faq__summary">
							<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
							<span class="br-faq__question">社内データや機密情報は学習に利用されますか？</span>
						</summary>
						<div class="br-faq__answer">
							<p>ご契約および環境構成に応じて取り扱いを明確にします。パブリックモデル利用時は入力ポリシーを定め、オンプレミス／VPC／エンタープライズAPIなど必要な隔離を選択いただけます。機密区分ごとのアクセス制御も設計段階からご提案します。</p>
						</div>
					</details>
					<details class="br-faq__item">
						<summary class="br-faq__summary">
							<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
							<span class="br-faq__question">生成物の正確性や著作権・ライセンスはどう扱いますか？</span>
						</summary>
						<div class="br-faq__answer">
							<p>用途に応じた検証（ファクトチェック、権利クリアランス、トレーサビリティ）をワークフローに組み込みます。生成物の権利帰属や利用範囲は契約書で定義し、第三者素材の利用条件も制作ガイドラインとして共有します。</p>
						</div>
					</details>
				</div>

				<div class="br-faq__panel br-faq__panel--contract" role="tabpanel">
					<details class="br-faq__item">
						<summary class="br-faq__summary">
							<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
							<span class="br-faq__question">秘密保持（NDA）は締結できますか？</span>
						</summary>
						<div class="br-faq__answer">
							<p>はい、双方または一方提出のNDAに基づき、要件定義から制作・納品まで進行できます。既存フォーマットへの署名や、プロジェクト専用の別紙合意にも対応します。</p>
						</div>
					</details>
					<details class="br-faq__item">
						<summary class="br-faq__summary">
							<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
							<span class="br-faq__question">情報セキュリティや個人情報の取り扱いはどうなっていますか？</span>
						</summary>
						<div class="br-faq__answer">
							<p>アクセス権限、データ保管場所、保持期間、破棄手順をプロジェクト計画に盛り込みます。個人情報を取り扱う場合は目的限定・最小化の原則に沿って設計し、必要に応じて委託先管理やログ監査の要件をすり合わせます。</p>
						</div>
					</details>
					<details class="br-faq__item">
						<summary class="br-faq__summary">
							<span class="br-faq__q-mark" aria-hidden="true">Q.</span>
							<span class="br-faq__question">契約形態やお支払いのイメージを教えてください。</span>
						</summary>
						<div class="br-faq__answer">
							<p>スコープに応じて準委任・請負・ライセンスなどを組み合わせてご提案します。マイルストーン請求や月額運用、成果物納品時の一括など、プロジェクトのリズムに合わせたお支払い条件を設定できます。</p>
						</div>
					</details>
				</div>
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
