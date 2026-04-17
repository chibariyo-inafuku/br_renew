<?php
/**
 * Fixed page: /ceo/ (slug `ceo`).
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();
	?>
<main id="main" class="br-main br-ceo">
	<section class="br-ceo__heading" aria-labelledby="br-ceo-title" data-br-subpage-reveal>
		<div class="br-container br-ceo__heading-inner">
			<header class="br-ceo__heading-title br-home__works-heading br-home__section-head">
				<p class="br-ceo__hero-kicker" aria-hidden="true">Profiles</p>
				<h1 class="br-home__works-title" id="br-ceo-title">
					<span class="screen-reader-text">CEO Profile / CEOプロフィール</span>
					<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 920 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">CEO PROFILE</text>
						</svg>
						<div class="br-svg-heading__sub-wrap">
							<span class="br-home__works-title-jp br-svg-heading__sub">/ CEOプロフィール</span>
						</div>
					</div>
				</h1>
			</header>
			<nav class="br-ceo__breadcrumb" aria-label="パンくず">
				<ol class="br-ceo__breadcrumb-list">
					<li><a href="/">Top</a></li>
					<li class="br-ceo__breadcrumb-sep" aria-hidden="true">/</li>
					<li><a href="/about/">About</a></li>
					<li class="br-ceo__breadcrumb-sep" aria-hidden="true">/</li>
					<li><span class="br-ceo__breadcrumb-current">CEO Profile</span></li>
				</ol>
			</nav>
		</div>
		<div class="br-container br-ceo__lead-wrap">
			<p class="br-ceo__lead">
				ブルーアールを牽引するリーダーシップチームをご紹介します。<br />
				広告業界での豊富な知見と、最新のAI技術を融合させ、次世代のスタンダードを創造します。
			</p>
		</div>
	</section>

	<section class="br-ceo__profile" aria-labelledby="br-ceo-profile-heading" data-br-subpage-reveal>
		<div class="br-container">
			<h2 id="br-ceo-profile-heading" class="screen-reader-text">プロフィール概要</h2>
			<div class="br-ceo__profile-grid">
				<div class="br-ceo__photo-wrap">
					<figure class="br-ceo__photo">
						<img
							src="/wp-content/themes/br/assets/images/ceo/ceo-portrait.png"
							alt="代表取締役 奥村 美徳"
							width="560"
							height="700"
							loading="lazy"
							decoding="async"
						/>
					</figure>
				</div>
				<div class="br-ceo__intro">
					<p class="br-ceo__role">Founder &amp; CEO</p>
					<div class="br-ceo__name-row">
						<span class="br-ceo__name-ja">奥村 美徳</span>
						<span class="br-ceo__name-en">Okumura Yoshinori</span>
					</div>
					<p class="br-ceo__tagline">
						広告業界での豊富な経験と生成AIを融合し、すべてのビジネスに新たな一歩をデザインする。
					</p>
					<div class="br-ceo__sns-block">
						<p class="br-ceo__sns-kicker">Follow SNS</p>
						<p class="br-ceo__sns-title">SNSで繋がる</p>
						<ul class="br-ceo__sns-cards" role="list">
							<li>
								<a class="br-ceo__sns-card" href="<?php echo esc_url( 'https://x.com/BlueR_CEO' ); ?>" rel="noopener noreferrer" target="_blank">
									<span class="br-ceo__sns-card-top">
										<span class="br-ceo__sns-platform">X</span>
										<span class="br-ceo__sns-handle">@BlueR_CEO</span>
									</span>
									<span class="br-ceo__sns-cta">Follow</span>
								</a>
							</li>
							<li>
								<a class="br-ceo__sns-card" href="<?php echo esc_url( 'https://note.com/bluer_ceo' ); ?>" rel="noopener noreferrer" target="_blank">
									<span class="br-ceo__sns-card-top">
										<span class="br-ceo__sns-platform">note</span>
										<span class="br-ceo__sns-handle">Insight</span>
									</span>
									<span class="br-ceo__sns-cta">Read</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="br-ceo__detail" aria-labelledby="br-ceo-detail-heading" data-br-subpage-reveal>
		<div class="br-container">
			<h2 id="br-ceo-detail-heading" class="screen-reader-text">詳細プロフィール</h2>

			<div class="br-ceo__block">
				<header class="br-ceo__block-head">
					<p class="br-ceo__block-kicker">Career</p>
					<h3 class="br-ceo__block-title">経歴</h3>
				</header>
				<div class="br-ceo__timeline">
					<div class="br-ceo__timeline-line" aria-hidden="true"></div>
					<ol class="br-ceo__timeline-list">
						<li class="br-ceo__timeline-item">
							<span class="br-ceo__timeline-dot" aria-hidden="true"></span>
							<span class="br-ceo__timeline-year">2002</span>
							<h4 class="br-ceo__timeline-title">広告会社でのキャリアスタート</h4>
							<p class="br-ceo__timeline-body">
								デザイナーからアートディレクター、企画営業、新規事業開発など幅広く経験。クリエイティブの現場からビジネスモデルの構築までを深く理解。
							</p>
						</li>
						<li class="br-ceo__timeline-item">
							<span class="br-ceo__timeline-dot" aria-hidden="true"></span>
							<span class="br-ceo__timeline-year">2022</span>
							<h4 class="br-ceo__timeline-title">放送局でのマーケティング戦略立案</h4>
							<p class="br-ceo__timeline-body">
								テレビアセットを活用した、デジタルネイティブな新規事業のマーケティングおよびプロモーション戦略を統括。
							</p>
						</li>
						<li class="br-ceo__timeline-item">
							<span class="br-ceo__timeline-dot" aria-hidden="true"></span>
							<span class="br-ceo__timeline-year">2023</span>
							<h4 class="br-ceo__timeline-title">ブルーアール株式会社 設立</h4>
							<p class="br-ceo__timeline-body">
								生成AIがもたらす革新的な生産性をいち早くビジネスに導入。テクノロジーとクリエイティブを最高純度で融合させたサービスを展開。
							</p>
						</li>
					</ol>
				</div>
			</div>

			<div class="br-ceo__block">
				<header class="br-ceo__block-head">
					<p class="br-ceo__block-kicker">Expertise</p>
					<h3 class="br-ceo__block-title">専門分野</h3>
				</header>
				<ul class="br-ceo__pills" role="list">
					<li><span class="br-ceo__pill">AI / 生成AI / LLM</span></li>
					<li><span class="br-ceo__pill">クリエイティブディレクション</span></li>
					<li><span class="br-ceo__pill">マーケティング戦略</span></li>
					<li><span class="br-ceo__pill">新規事業開発支援</span></li>
				</ul>
			</div>

			<div class="br-ceo__block">
				<header class="br-ceo__block-head">
					<p class="br-ceo__block-kicker">Activities</p>
					<h3 class="br-ceo__block-title">現在の活動</h3>
				</header>
				<ul class="br-ceo__activities" role="list">
					<li class="br-ceo__activity">
						<p class="br-ceo__activity-label">兼任</p>
						<p class="br-ceo__activity-body">株式会社日テレHR総合研究所 CAIO</p>
					</li>
					<li class="br-ceo__activity">
						<p class="br-ceo__activity-label">顧問</p>
						<p class="br-ceo__activity-body">株式会社Creator's X AI顧問</p>
					</li>
					<li class="br-ceo__activity">
						<p class="br-ceo__activity-label">共同事業</p>
						<p class="br-ceo__activity-body">ICI総合センター GUZOU 開発</p>
					</li>
					<li class="br-ceo__activity">
						<p class="br-ceo__activity-label">出版</p>
						<p class="br-ceo__activity-body">生成AI入門書 執筆・監修</p>
					</li>
				</ul>
			</div>

			<div class="br-ceo__block">
				<header class="br-ceo__block-head">
					<p class="br-ceo__block-kicker">Speaking &amp; Media</p>
					<h3 class="br-ceo__block-title">登壇・メディア掲載</h3>
				</header>
				<ul class="br-ceo__media" role="list">
					<li class="br-ceo__media-row">
						<span class="br-ceo__media-title">九州メディア総合展2025 メインセッション</span>
						<span class="br-ceo__media-date">Jul 2025</span>
					</li>
					<li class="br-ceo__media-row">
						<span class="br-ceo__media-title">MAG2NEWS インタビュー掲載</span>
						<span class="br-ceo__media-date">Nov 2025</span>
					</li>
					<li class="br-ceo__media-row">
						<span class="br-ceo__media-title">COMPLEX MEETS 「AI×アニメ」登壇</span>
						<span class="br-ceo__media-date">Mar 2025</span>
					</li>
					<li class="br-ceo__media-row">
						<span class="br-ceo__media-title">週刊アスキー 生成AI特集 寄稿</span>
						<span class="br-ceo__media-date">Aug 2024</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="br-ceo__message" aria-labelledby="br-ceo-message-heading" data-br-subpage-reveal>
		<div class="br-container br-ceo__message-inner">
			<p class="br-ceo__message-kicker">Message from CEO</p>
			<h2 class="br-ceo__message-title" id="br-ceo-message-heading">闘い方が変わる。その中心に「多軸」を。</h2>
			<div class="br-ceo__message-body">
				<p>「人も、金も、時間も。大量に投入した者が勝つ」。そんな、規模の論理が支配した時代は、もうすぐ変わろうとしています。</p>
				<p>AIですべてがフラットになっていく世界で、私たちはどう立ち向かうべきか。Blue R という名に込めたのは、その問いへの答えです。</p>
				<p>技術、表現、ビジネス。独立していた複数の軸を同期させ、一点へと収束させる。この「密度」こそが、巨大な組織を凌駕し、小さなチームが世界を突破する鍵となると信じています。</p>
				<p><em class="br-ceo__message-en">Smallest Core, Fundamental Mass.</em> 最小の核が、世界を変える質量になる。私たちは、AI時代の新しいスタンダードを実装していきます。</p>
			</div>
			<p class="br-ceo__message-sign">代表取締役 奥村 美徳</p>
		</div>
	</section>

	<section class="br-ceo__advisor" aria-labelledby="br-ceo-advisor-heading" data-br-subpage-reveal>
		<div class="br-container">
			<header class="br-ceo__block-head br-ceo__advisor-head">
				<p class="br-ceo__block-kicker">Corporate Advisor</p>
				<h2 class="br-ceo__block-title" id="br-ceo-advisor-heading">顧問紹介</h2>
			</header>
			<div class="br-ceo__advisor-card">
				<div class="br-ceo__advisor-photo-wrap">
					<img
						class="br-ceo__advisor-photo"
						src="/wp-content/themes/br/assets/images/ceo/advisor-tanaka.png"
						alt="顧問 田中 義弘"
						width="192"
						height="192"
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="br-ceo__advisor-body">
					<div class="br-ceo__advisor-name-row">
						<span class="br-ceo__advisor-name-ja">田中 義弘</span>
						<span class="br-ceo__advisor-name-en">Tanaka Yoshihiro</span>
					</div>
					<p class="br-ceo__advisor-lead">
						Exit経験を持つ連続起業家。AI×クリエイティブで、次代のスタンダードを実装する。
					</p>
					<div class="br-ceo__advisor-actions">
						<a class="br-ceo__advisor-btn" href="<?php echo esc_url( 'https://x.com/taziku_co' ); ?>" rel="noopener noreferrer" target="_blank">Follow X</a>
						<a class="br-ceo__advisor-btn" href="<?php echo esc_url( 'https://taziku.co.jp/' ); ?>" rel="noopener noreferrer" target="_blank">Visit taziku</a>
					</div>
				</div>
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
