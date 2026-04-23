<?php
/**
 * Fixed page: /about/ (slug `about`).
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	?>
<main id="main" class="br-main br-about">
	<section class="br-about__heading" aria-labelledby="br-about-title" data-br-subpage-reveal>
		<div class="br-container br-about__heading-inner">
			<header class="br-about__heading-title br-home__works-heading br-home__section-head">
				<h1 class="br-home__works-title" id="br-about-title">
					<span class="screen-reader-text">About / 私たちについて</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 720 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">About</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__works-title-jp br-svg-heading__sub">/ 私たちについて</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-about__breadcrumb" aria-label="パンくず">
				<ol class="br-about__breadcrumb-list">
					<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Top</a></li>
					<li class="br-about__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-about__breadcrumb-current">About</span></li>
				</ol>
			</nav>
		</div>
	</section>

	<nav class="br-about__anchors" aria-label="ページ内セクション" data-br-subpage-reveal>
		<div class="br-container br-about__anchors-inner">
			<ul class="br-about__anchors-list">
				<li><a class="br-about__anchor-link" href="#philosophy">Philosophy<span class="br-about__anchor-arrow" aria-hidden="true"><span class="br-about__anchor-arrow-inner">→</span></span></a></li>
				<li><a class="br-about__anchor-link" href="#mission">Mission<span class="br-about__anchor-arrow" aria-hidden="true"><span class="br-about__anchor-arrow-inner">→</span></span></a></li>
				<li><a class="br-about__anchor-link" href="#vision">Vision<span class="br-about__anchor-arrow" aria-hidden="true"><span class="br-about__anchor-arrow-inner">→</span></span></a></li>
				<li><a class="br-about__anchor-link" href="#values">Values<span class="br-about__anchor-arrow" aria-hidden="true"><span class="br-about__anchor-arrow-inner">→</span></span></a></li>
				<li><a class="br-about__anchor-link" href="#overview">Overview<span class="br-about__anchor-arrow" aria-hidden="true"><span class="br-about__anchor-arrow-inner">→</span></span></a></li>
				<li><a class="br-about__anchor-link" href="../ceo/">CEO<span class="br-about__anchor-arrow" aria-hidden="true"><span class="br-about__anchor-arrow-inner">→</span></span></a></li>
				<li><a class="br-about__anchor-link" href="../faq/">FAQ<span class="br-about__anchor-arrow" aria-hidden="true"><span class="br-about__anchor-arrow-inner">→</span></span></a></li>
			</ul>
		</div>
	</nav>

	<div class="br-about__pillars-wrap">
		<section class="br-about__pillars br-about__pillars--philosophy-figma" id="philosophy" aria-labelledby="br-about-philosophy-heading" data-br-subpage-reveal>
			<div class="br-container">
				<header class="br-about__pillar-heading-block">
					<h2 class="br-about__heading-philosophy" id="br-about-philosophy-heading">
						<span class="screen-reader-text">Philosophy</span>
						<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
							<svg
								class="br-svg-heading__svg"
								aria-hidden="true"
								viewBox="0 0 880 102"
								preserveAspectRatio="xMinYMin meet"
								focusable="false"
							>
								<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Philosophy</text>
							</svg>
						</div>
					</h2>
				</header>
				<div class="br-about__philosophy-stack">
					<div class="br-about__philosophy-top">
						<div class="br-about__philosophy-intro">
							<div class="br-about__philosophy-rail">
								<p class="br-about__philosophy-vertical-en">Creativity endures. Innovation evolves.</p>
								<span class="br-about__philosophy-rail-line"></span>
							</div>
							<div class="br-about__philosophy-maintext">
								<p class="br-about__philosophy-lead">創造は、奪われない。進化する。</p>
								<div class="br-about__philosophy-body">
									<p>AIは、すべてを変えた。<br />スピードも、クオリティも、常識も。</p>
									<p>そして今、「クリエイターは必要なのか」という問いが生まれた。<br />答えは、ひとつじゃない。<br />奪われるのか。それとも、進化するのか。</p>
									<p>選ぶのは、私たちだ。<br />AIと共に、創造は次のステージへ。<br />創造は、奪われない。進化する。</p>
								</div>
							</div>
						</div>
						<figure class="br-about__philosophy-feature">
							<img
								src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/about/philosophy-visual.png' ); ?>"
								alt=""
								width="560"
								height="560"
								loading="lazy"
								decoding="async"
							/>
						</figure>
					</div>
					<div class="br-about__philosophy-videos">
						<div class="br-about__philosophy-video-card">
							<div class="br-about__philosophy-video-frame">
								<div class="br-about__philosophy-video-wrap">
									<iframe
										class="br-about__philosophy-video-iframe"
										src="https://www.youtube-nocookie.com/embed/nSFu5FR31q8?autoplay=1&amp;mute=1&amp;playsinline=1&amp;loop=1&amp;playlist=nSFu5FR31q8&amp;rel=0"
										title="Philosophy 動画（1）"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowfullscreen
										loading="eager"
									></iframe>
									<div class="br-about__philosophy-video-mesh" aria-hidden="true"></div>
								</div>
							</div>
							<p class="br-about__philosophy-video-caption">創造は、奪われない。進化する。</p>
						</div>
						<div class="br-about__philosophy-video-card">
							<div class="br-about__philosophy-video-frame">
								<div class="br-about__philosophy-video-wrap">
									<iframe
										class="br-about__philosophy-video-iframe"
										src="https://www.youtube-nocookie.com/embed/EDw7iw6oCjc?autoplay=1&amp;mute=1&amp;playsinline=1&amp;loop=1&amp;playlist=EDw7iw6oCjc&amp;rel=0"
										title="Philosophy 動画（2）"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowfullscreen
										loading="eager"
									></iframe>
									<div class="br-about__philosophy-video-mesh" aria-hidden="true"></div>
								</div>
							</div>
							<p class="br-about__philosophy-video-caption">仕事は、奪われる。最適化される。</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="br-about__pillar-block br-about__pillar-block--mission-figma" id="mission" aria-labelledby="br-about-mission-heading" data-br-subpage-reveal>
			<div class="br-container">
				<header class="br-about__pillar-heading-block">
					<h2 class="br-about__heading-mission" id="br-about-mission-heading">
						<span class="screen-reader-text">Mission</span>
						<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
							<svg
								class="br-svg-heading__svg"
								aria-hidden="true"
								viewBox="0 0 720 102"
								preserveAspectRatio="xMinYMin meet"
								focusable="false"
							>
								<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Mission</text>
							</svg>
						</div>
					</h2>
				</header>
				<div class="br-about__mission-row">
					<div class="br-about__mission-rail">
						<p class="br-about__mission-vertical-en">Stay Creative. Stay Evolving.</p>
						<span class="br-about__mission-rail-line" aria-hidden="true"></span>
					</div>
					<div class="br-about__mission-main">
						<p class="br-about__mission-lead">創造を、進化させる側であり続ける。</p>
						<div class="br-about__mission-text">
							<p>アイデアとテクノロジーを掛け合わせ、<br />スピードも、クオリティも、その両方を引き上げる。</p>
							<p>私たちは、成果を生む表現だけをつくる。</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="br-about__pillar-block br-about__pillar-block--vision-figma" id="vision" aria-labelledby="br-about-vision-heading" data-br-subpage-reveal>
			<div class="br-container">
				<header class="br-about__pillar-heading-block">
					<h2 class="br-about__heading-vision" id="br-about-vision-heading">
						<span class="screen-reader-text">Vision</span>
						<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
							<svg
								class="br-svg-heading__svg"
								aria-hidden="true"
								viewBox="0 0 720 102"
								preserveAspectRatio="xMinYMin meet"
								focusable="false"
							>
								<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Vision</text>
							</svg>
						</div>
					</h2>
				</header>
				<div class="br-about__vision-row">
					<div class="br-about__vision-rail">
						<p class="br-about__vision-vertical-en">From Process to Purpose.</p>
						<span class="br-about__vision-rail-line" aria-hidden="true"></span>
					</div>
					<div class="br-about__vision-main">
						<p class="br-about__vision-lead">創造の主導権が、書き換わる時代へ。</p>
						<div class="br-about__vision-text">
							<p>つくる手段ではなく、<br />生み出す価値で選ばれる世界。</p>
							<p>その基準をつくる側であり続ける。</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="br-about__pillar-block br-about__pillar-block--values-figma" id="values" aria-labelledby="br-about-values-heading" data-br-subpage-reveal>
			<div class="br-container">
				<header class="br-about__pillar-heading-block">
					<h2 class="br-about__heading-values" id="br-about-values-heading">
						<span class="screen-reader-text">Values</span>
						<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
							<svg
								class="br-svg-heading__svg"
								aria-hidden="true"
								viewBox="0 0 720 102"
								preserveAspectRatio="xMinYMin meet"
								focusable="false"
							>
								<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Values</text>
							</svg>
						</div>
					</h2>
				</header>
				<div class="br-about__values-grid">
					<article class="br-about__values-card">
						<div class="br-about__values-card-rail">
							<div class="br-about__values-card-rail-inner">
								<span class="br-about__values-card-num" aria-hidden="true">01</span>
								<p class="br-about__values-card-label">Idea First</p>
							</div>
							<span class="br-about__values-card-rail-line" aria-hidden="true"></span>
						</div>
						<div class="br-about__values-card-body">
							<h3 class="br-about__values-card-heading">すべては、アイデアからはじまる。</h3>
							<div class="br-about__values-card-copy">
								<p>技術が進化しても、<br />人の心を動かす起点は変わらない。</p>
								<p>何を伝えるべきか。<br />なぜ、それを伝えるのか。</p>
								<p>その問いに向き合うことから、<br />すべての表現は立ち上がる。</p>
							</div>
						</div>
					</article>
					<article class="br-about__values-card">
						<div class="br-about__values-card-rail">
							<div class="br-about__values-card-rail-inner">
								<span class="br-about__values-card-num" aria-hidden="true">02</span>
								<p class="br-about__values-card-label">Expand Creation</p>
							</div>
							<span class="br-about__values-card-rail-line" aria-hidden="true"></span>
						</div>
						<div class="br-about__values-card-body">
							<h3 class="br-about__values-card-heading">創造を、拡張する。</h3>
							<div class="br-about__values-card-copy">
								<p>AIは、効率化のための手段ではない。<br />創造の可能性を広げる基盤である。</p>
								<p>テクノロジーを前提に発想することで、<br />表現はこれまでの制約を越えていく。</p>
							</div>
						</div>
					</article>
					<article class="br-about__values-card">
						<div class="br-about__values-card-rail">
							<div class="br-about__values-card-rail-inner">
								<span class="br-about__values-card-num" aria-hidden="true">03</span>
								<p class="br-about__values-card-label">Quality Responsibility</p>
							</div>
							<span class="br-about__values-card-rail-line" aria-hidden="true"></span>
						</div>
						<div class="br-about__values-card-body">
							<h3 class="br-about__values-card-heading">品質に、責任を持つ。</h3>
							<div class="br-about__values-card-copy">
								<p>細部にまで意志を宿す。</p>
								<p>仕上がりの精度は、<br />そのまま価値の信頼に直結する。</p>
								<p>一つひとつを磨き上げ、<br />完成度としての質を高める。</p>
							</div>
						</div>
					</article>
					<article class="br-about__values-card">
						<div class="br-about__values-card-rail">
							<div class="br-about__values-card-rail-inner">
								<span class="br-about__values-card-num" aria-hidden="true">04</span>
								<p class="br-about__values-card-label">Value Response</p>
							</div>
							<span class="br-about__values-card-rail-line" aria-hidden="true"></span>
						</div>
						<div class="br-about__values-card-body">
							<h3 class="br-about__values-card-heading">価値で応える。</h3>
							<div class="br-about__values-card-copy">
								<p>美しさや新しさにとどまらない。</p>
								<p>成果へと結びつく表現を設計し、<br />目的に対して最適なかたちで応える。</p>
								<p>マーケティングとクリエイティブを横断し、<br />価値として結実させる。</p>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	</div>

	<section class="br-about__overview" id="overview" aria-labelledby="br-about-overview-heading" data-br-subpage-reveal>
		<div class="br-container">
			<header class="br-about__overview-head">
				<h2 class="br-about__overview-heading" id="br-about-overview-heading">
					<span class="screen-reader-text">Overview 会社概要</span>
					<div class="br-home__works-title">
						<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
							<svg
								class="br-svg-heading__svg"
								aria-hidden="true"
								viewBox="0 0 800 102"
								preserveAspectRatio="xMinYMin meet"
								focusable="false"
							>
								<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Overview</text>
							</svg>
						</div>
					</div>
					<span class="br-about__overview-heading-pill">
						<span class="br-about__overview-heading-jp">会社概要</span>
					</span>
				</h2>
			</header>
			<div class="br-about__overview-panel">
				<dl class="br-about__overview-table">
					<div class="br-about__overview-row">
						<dt>社名</dt>
						<dd>ブルーアール株式会社</dd>
					</div>
					<div class="br-about__overview-row">
						<dt>代表取締役</dt>
						<dd>奥村 美徳　Okumura Yoshinori</dd>
					</div>
					<div class="br-about__overview-row">
						<dt>事業内容</dt>
						<dd>
						AIクリエイティブ制作（生成AI活用・広告制作・映像制作） / マーケティング戦略設計・プロモーション企画 / SNS運用・コンテンツ制作 / ブランド開発・コミュニケーション設計 / イベント・展示会プロデュース / AIを活用したシステム開発・アプリ開発
						/ プロダクト開発・量産化支援
						/ AIクリエイティブ制作専門コンサルティング / 新規事業開発・事業グロース支援 / スタートアップ支援・マーケティング統括
						</dd>
					</div>
					<div class="br-about__overview-row">
						<dt>適格請求書発行事業者登録番号</dt>
						<dd>T4180001160318</dd>
					</div>
					<div class="br-about__overview-row">
						<dt>提携会社</dt>
						<dd>taziku / 株式会社タジク</dd>
					</div>
					<div class="br-about__overview-row">
						<dt>東京オフィス</dt>
						<dd>
							〒150-0012<br />
							東京都渋谷区広尾1-2-1 ヒカリビル4F
						</dd>
					</div>
					<div class="br-about__overview-row">
						<dt>名古屋オフィス</dt>
						<dd>
							〒450-0002<br />
							愛知県名古屋市中村区名駅4-24-5 第2森ビル5F
						</dd>
					</div>
				</dl>
				<div class="br-about__overview-maps" aria-label="オフィス所在地の地図">
					<div class="br-about__overview-map">
						<iframe
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							title="東京都渋谷区広尾1-2-1 ヒカリビル4F"
							aria-label="東京都渋谷区広尾1-2-1 ヒカリビル4F"
							src="<?php echo esc_url( 'https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E5%BA%83%E5%B0%BE1%E4%B8%81%E7%9B%AE2%E7%95%AA%E5%9C%B01%E5%8F%B7%20%E3%83%92%E3%82%AB%E3%83%AA%E3%83%93%E3%83%AB4%E9%9A%8E&t=m&z=16&output=embed&iwloc=near' ); ?>"
						></iframe>
					</div>
					<div class="br-about__overview-map">
						<iframe
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							title="愛知県名古屋市中村区名駅4-24-5 第2森ビル5F"
							aria-label="愛知県名古屋市中村区名駅4-24-5 第2森ビル5F"
							src="<?php echo esc_url( 'https://maps.google.com/maps?q=%E6%84%9B%E7%9F%A5%E7%9C%8C%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E6%9D%91%E5%8C%BA%E5%90%8D%E9%A7%854-24-5%20%E7%AC%AC2%E6%A3%AE%E3%83%93%E3%83%AB5F&t=m&z=17&output=embed&iwloc=near' ); ?>"
						></iframe>
					</div>
				</div>
			</div>
			<?php
			global $post;
			$content = $post instanceof WP_Post ? $post->post_content : '';
			if ( is_string( $content ) && trim( $content ) !== '' ) :
				?>
			<div class="br-about__wp-content br-content">
				<?php the_content(); ?>
			</div>
			<?php endif; ?>
		</div>
	</section>

	<section class="br-about__promos" aria-label="関連リンク">
		<div class="br-container br-about__promos-inner">
			<article class="br-about__promo" id="ceo" data-br-subpage-reveal>
				<div class="br-about__promo-bg" style="--br-about-promo-bg: url('<?php echo esc_url( get_template_directory_uri() . '/assets/images/about/promo-ceo.jpg' ); ?>');"></div>
				<div class="br-about__promo-mesh" aria-hidden="true"></div>
				<div class="br-about__promo-scrim" aria-hidden="true"></div>
				<div class="br-about__promo-content">
					<header class="br-about__promo-head">
						<p class="br-about__promo-kicker">/ 代表プロフィール</p>
						<h2 class="br-about__promo-title">CEO PROFILE</h2>
					</header>
					<p class="br-about__promo-text">
						代表取締役 奥村美徳および顧問の経歴・専門分野<br />
						についてご紹介します。
					</p>
					<p class="br-about__promo-cta">
						<a
							class="br-hop-btn br-hop-btn--inverted"
							href="<?php echo esc_url( home_url( '/ceo/' ) ); ?>"
							data-text="View More"
							aria-label="View More"
						>
							<span class="br-hop-btn__dot-mover" aria-hidden="true"><span class="br-hop-btn__dot"></span></span>
						</a>
					</p>
				</div>
			</article>
			<article class="br-about__promo" data-br-subpage-reveal>
				<div class="br-about__promo-bg" style="--br-about-promo-bg: url('<?php echo esc_url( get_template_directory_uri() . '/assets/images/about/promo-faq.jpg' ); ?>');"></div>
				<div class="br-about__promo-mesh" aria-hidden="true"></div>
				<div class="br-about__promo-scrim" aria-hidden="true"></div>
				<div class="br-about__promo-content">
					<header class="br-about__promo-head">
						<p class="br-about__promo-kicker">/ よくあるご質問</p>
						<h2 class="br-about__promo-title">FAQ</h2>
					</header>
					<p class="br-about__promo-text">
						サービス内容、LLMの技術、契約やセキュリティに関する<br />
						よくあるご質問にお答えします。
					</p>
					<p class="br-about__promo-cta">
						<a
							class="br-hop-btn br-hop-btn--inverted"
							href="<?php echo esc_url( home_url( '/faq/' ) ); ?>"
							data-text="View More"
							aria-label="View More"
						>
							<span class="br-hop-btn__dot-mover" aria-hidden="true"><span class="br-hop-btn__dot"></span></span>
						</a>
					</p>
				</div>
			</article>
		</div>
	</section>

	<div class="br-home" data-br-subpage-reveal>
		<?php get_template_part( 'template-parts/home/section', 'cta' ); ?>
	</div>
</main>
	<?php
endwhile;

get_footer();
