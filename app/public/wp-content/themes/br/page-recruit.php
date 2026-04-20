<?php
/**
 * Fixed page: /recruit/ (slug `recruit`).
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();

	$recruit_cf7 = function_exists( 'br_get_recruit_page_cf7_shortcode' ) ? br_get_recruit_page_cf7_shortcode() : '';
	?>
<main id="main" class="br-main br-recruit">
	<section class="br-recruit__heading" aria-labelledby="br-recruit-title" data-br-subpage-reveal>
		<div class="br-container br-recruit__heading-inner">
			<p class="br-recruit__hero-watermark" aria-hidden="true">RECRUIT</p>
			<header class="br-recruit__heading-title br-home__works-heading br-home__section-head">
				<h1 class="br-home__works-title" id="br-recruit-title">
					<span class="screen-reader-text">Recruit / 採用情報</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 720 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Recruit</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__works-title-jp br-svg-heading__sub">/ 採用情報</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-recruit__breadcrumb" aria-label="パンくず">
				<ol class="br-recruit__breadcrumb-list">
					<li><a href="/">Top</a></li>
					<li class="br-recruit__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-recruit__breadcrumb-current">Recruit</span></li>
				</ol>
			</nav>
		</div>
		<div class="br-container br-recruit__lead-wrap">
			<p class="br-recruit__lead">未来のクリエイティブを、共に創造しよう。</p>
		</div>
	</section>

	<section class="br-recruit__message" aria-labelledby="br-recruit-message-heading" data-br-subpage-reveal>
		<div class="br-container">
			<h2 class="br-recruit__h2" id="br-recruit-message-heading">未知の領域を、デザインする。</h2>
			<div class="br-recruit__message-body">
				<p>生成AIという新たな創造の力を操り、従来の制作の枠を超えていく。私たちは、そんな挑戦に共感できるアートディレクター、デザイナーを求めています。</p>
				<p>グラフィック、WEB、動画、ブランディング ー あなたの経験とAIを掛け合わせることで、きっと素晴らしいものが生まれるはず。新しいクリエイティブの地平を、共に切り拓きませんか。</p>
			</div>
		</div>
	</section>

	<section class="br-recruit__values" aria-label="私たちの価値観" data-br-subpage-reveal>
		<div class="br-container">
			<ul class="br-recruit__values-list">
				<li class="br-recruit__value-card">
					<p class="br-recruit__value-label">Core Identity</p>
					<h3 class="br-recruit__value-title">AI×人間による<br />最高の純度</h3>
					<p class="br-recruit__value-text">AIは代替ツールではなく、思考を拡張するパートナー。人間の感性とAIの処理能力を最高純度で融合させます。</p>
					<span class="br-recruit__value-num" aria-hidden="true">01</span>
				</li>
				<li class="br-recruit__value-card">
					<p class="br-recruit__value-label">Mindset</p>
					<h3 class="br-recruit__value-title">既存の枠を<br />疑う勇気</h3>
					<p class="br-recruit__value-text">「これまでのやり方」に執着せず、常に新しい技術がもたらす可能性を歓迎し、制作プロセスの革新を楽しみます。</p>
					<span class="br-recruit__value-num" aria-hidden="true">02</span>
				</li>
				<li class="br-recruit__value-card">
					<p class="br-recruit__value-label">Vision</p>
					<h3 class="br-recruit__value-title">変化を楽しむ<br />インテリジェンス</h3>
					<p class="br-recruit__value-text">急速に進化するAI技術を素早くキャッチアップし、それをインテリジェンス（知性）に変えて社会に実装します。</p>
					<span class="br-recruit__value-num" aria-hidden="true">03</span>
				</li>
			</ul>
		</div>
	</section>

	<section class="br-recruit__visual" aria-label="キービジュアル" data-br-subpage-reveal>
		<div class="br-container">
			<figure class="br-recruit__visual-frame">
				<img
					class="br-recruit__visual-img"
					src="/wp-content/themes/br/assets/images/recruit/recruit-key-visual.png"
					alt=""
					width="1200"
					height="675"
					loading="lazy"
					decoding="async"
				/>
			</figure>
		</div>
	</section>

	<section class="br-recruit__spec" aria-labelledby="br-recruit-spec-heading" data-br-subpage-reveal>
		<div class="br-container">
			<h2 class="br-recruit__h2" id="br-recruit-spec-heading">募集要項</h2>
			<div class="br-recruit__spec-panel">
				<dl class="br-recruit__spec-table">
					<div class="br-recruit__spec-row">
						<dt>職種</dt>
						<dd>
							<p class="br-recruit__spec-strong">AIクリエイター</p>
							<p class="br-recruit__spec-note">（デザイナー未経験者／アートディレクター経験者）</p>
						</dd>
					</div>
					<div class="br-recruit__spec-row">
						<dt>雇用形態</dt>
						<dd>
							<p class="br-recruit__spec-strong">正社員（試用期間2ヶ月）／アルバイト</p>
							<p class="br-recruit__spec-muted">※経験・スキルによってはアルバイトからのスタート</p>
						</dd>
					</div>
					<div class="br-recruit__spec-row">
						<dt>業務内容</dt>
						<dd>
							<p class="br-recruit__spec-strong">〈メイン業務〉</p>
							<ul class="br-recruit__spec-ul">
								<li>生成AIツールを活用したデザイン制作</li>
								<li>各種媒体（動画、印刷物等）向けのビジュアル制作</li>
								<li>SNS運用、ブログ記事運用業務</li>
								<li>クライアントのデジタル戦略に対する提案</li>
								<li>案件やプロジェクトの設計・進行管理</li>
							</ul>
							<p class="br-recruit__spec-strong br-recruit__spec-strong--spaced">〈研究開発業務〉</p>
							<ul class="br-recruit__spec-ul">
								<li>AIを活用した新しいデザイン手法の開発</li>
								<li>ユーザビリティテスト・改善提案</li>
								<li>デザインシステムの構築・運用</li>
							</ul>
						</dd>
					</div>
					<div class="br-recruit__spec-row">
						<dt>求める経験・スキル</dt>
						<dd>
							<p class="br-recruit__spec-strong">〈必須要件〉</p>
							<ul class="br-recruit__spec-ul">
								<li>基本的なPCスキル（メール、チャット、オンライン会議ツール、Excel、Word）</li>
							</ul>
						</dd>
					</div>
					<div class="br-recruit__spec-row">
						<dt>歓迎条件</dt>
						<dd>
							<ul class="br-recruit__spec-ul">
								<li>広告デザインの実務経験</li>
								<li>アートディレクション経験</li>
								<li>PowerPoint操作スキル</li>
								<li>企画提案・プレゼンテーション経験</li>
								<li>フロントエンド・プログラミングの基礎知識</li>
							</ul>
						</dd>
					</div>
					<div class="br-recruit__spec-row">
						<dt>勤務地</dt>
						<dd>
							<p class="br-recruit__spec-strong">名古屋市中村区名駅4-24-5 第2森ビル5F</p>
						</dd>
					</div>
					<div class="br-recruit__spec-row">
						<dt>勤務時間</dt>
						<dd>
							<p class="br-recruit__spec-strong">フレックス制（コアタイム11:00-16:00）</p>
							<p class="br-recruit__spec-muted">※経験・能力を考慮し、面接時に個別相談</p>
						</dd>
					</div>
					<div class="br-recruit__spec-row">
						<dt>AI使用について</dt>
						<dd>
							<p class="br-recruit__spec-accent">生成AIツールの経験は必須ではありません。</p>
							<p class="br-recruit__spec-note">入社後にAI技術についてはプロフェッショナルが丁寧にお教えいたします。大切なのは新しい技術を学び続ける意欲です。</p>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</section>

	<section class="br-recruit__entry br-home__section br-home__section--cta br-subpage-cta-form-band" aria-labelledby="br-recruit-entry-heading" data-br-subpage-reveal>
		<div class="br-container">
			<header class="br-recruit__entry-head">
				<p class="br-recruit__entry-kicker">エントリー</p>
				<h2 class="br-recruit__entry-title" id="br-recruit-entry-heading">Entry Form</h2>
				<p class="br-recruit__entry-lead">未来を共に創る仲間をお待ちしております。</p>
			</header>
			<div class="br-home__cta-inner br-home__cta-inner--form-only">
				<div class="br-home__cta-col br-home__cta-col--form">
					<div class="br-home__cta-form-card">
						<?php if ( $recruit_cf7 !== '' ) : ?>
							<?php echo do_shortcode( $recruit_cf7 ); ?>
						<?php elseif ( is_user_logged_in() ) : ?>
							<p class="br-home__cta-form-missing">Recruit ページの本文に Contact Form 7 のショートコードを追加してください。</p>
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
