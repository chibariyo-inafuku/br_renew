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

	<section class="br-ceo__profile" aria-label="プロフィール概要" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-ceo__profile-grid">
				<div class="br-ceo__photo-wrap">
					<figure class="br-ceo__photo">
						<picture>
							<source
								srcset="<?php echo esc_url( get_theme_file_uri( 'assets/images/ceo/ceo-portrait.webp' ) ); ?>"
								type="image/webp"
							/>
							<img
								src="<?php echo esc_url( get_theme_file_uri( 'assets/images/ceo/ceo-portrait.png' ) ); ?>"
								alt="代表取締役 奥村 美徳"
								width="424"
								height="503"
								loading="lazy"
								decoding="async"
							/>
						</picture>
					</figure>
				</div>
				<div class="br-ceo__intro">
					<p class="br-ceo__role">Founder &amp; CEO</p>
					<div class="br-ceo__name-row">
						<span class="br-ceo__name-ja">奥村 美徳</span>
						<span class="br-ceo__name-en">Okumura Yoshinori</span>
					</div>
					<p class="br-ceo__tagline">
						広告・クリエイティブ業界においてキャリアをスタートし、デザイナーとして企業の広告制作に従事。その後、アートディレクターとして多数の企業プロモーションを手がけ、ブランド価値の向上やコミュニケーション設計に深く関わる。<br>
						さらに、企画営業として大手企業を中心に、課題抽出から企画立案、制作・実行までを一貫してプロデュース。新規事業提案やマーケティング戦略の構築を強みとし、多くの企業との新規取引を創出してきた。<br>
						イベント領域では、展示会やプライベートショーにおける空間演出・装飾設営の分野で実績を重ね、企画・デザイン・現場運営まで統合的にディレクション。全国規模での展開プロジェクトにも多数携わる。<br>
						また、プロダクト開発領域においては、コンセプト設計から量産化までのプロセス構築を推進。企業キャラクターやVTuberの開発・運用、YouTube番組の企画・制作・プロデュースなど、デジタルコンテンツ領域にも活動を拡張している。<br>
						新規事業開発では、オンライン展示会の立ち上げを主導し、短期間で大手企業から多数の問い合わせを獲得。事業成長を加速させるマーケティング戦略とクリエイティブの融合に強みを持つ。<br>
						その後、放送業界において新規事業のマーケティング戦略に参画し、複数プロジェクトの立ち上げ・推進を担当。<br>
						現在は、AIクリエイティブ制作会社「ブルーアール株式会社」を設立し、代表取締役として活動。AIを活用した広告・映像・ビジュアル制作を軸に、大手企業のマーケティングプロモーションを支援している。
					</p>
					<div class="br-ceo__sns-block">
						<ul class="br-ceo__sns-cards" role="list">
							<li>
								<a class="br-ceo__sns-card br-ceo__sns-card--x" href="<?php echo esc_url( 'https://x.com/BlueR_CEO' ); ?>" rel="noopener noreferrer" target="_blank">
									<span class="br-ceo__sns-card-row">
										<span class="br-ceo__sns-icon br-ceo__sns-icon--x" aria-hidden="true">
											<img
												src="<?php echo esc_url( get_theme_file_uri( 'assets/images/icon-x.svg' ) ); ?>"
												alt=""
												width="30"
												height="27"
												loading="lazy"
												decoding="async"
											/>
										</span>
										<span class="br-ceo__sns-card-copy">
											<span class="br-ceo__sns-platform">X</span>
											<span class="br-ceo__sns-handle">@BlueR_CEO</span>
										</span>
									</span>
									<span class="br-ceo__sns-cta">
										<span class="br-about__anchor-link br-ceo__sns-cta-link">Follow<span class="br-about__anchor-arrow" aria-hidden="true"><span class="br-about__anchor-arrow-inner">→</span></span></span>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="br-ceo__detail" aria-label="詳細プロフィール" data-br-subpage-reveal>
		<div class="br-container">
			<div class="br-ceo__block">
				<header class="br-ceo__block-head">
					<h2 class="br-about__overview-heading" id="br-ceo-career-heading">
						<span class="screen-reader-text">Career 経歴</span>
						<div class="br-home__works-title">
							<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
								<svg
									class="br-svg-heading__svg"
									aria-hidden="true"
									viewBox="0 0 800 102"
									preserveAspectRatio="xMinYMin meet"
									focusable="false"
								>
									<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Career</text>
								</svg>
							</div>
						</div>
						<span class="br-about__overview-heading-pill">
							<span class="br-about__overview-heading-jp">経歴</span>
						</span>
					</h2>
				</header>
				<div class="br-ceo__timeline">
					<div class="br-ceo__timeline-line" aria-hidden="true"></div>
					<ol class="br-ceo__timeline-list">
						<li class="br-ceo__timeline-item">
							<span class="br-ceo__timeline-dot" aria-hidden="true"></span>
							<span class="br-ceo__timeline-year">2002</span>
							<h3 class="br-ceo__timeline-title">広告会社でのキャリアスタート</h3>
							<p class="br-ceo__timeline-body">
								デザイナーからアートディレクター、企画営業、新規事業開発など幅広く経験。クリエイティブの現場からビジネスモデルの構築までを深く理解。
							</p>
						</li>
						<li class="br-ceo__timeline-item">
							<span class="br-ceo__timeline-dot" aria-hidden="true"></span>
							<span class="br-ceo__timeline-year">2022</span>
							<h3 class="br-ceo__timeline-title">放送局でのマーケティング戦略立案</h3>
							<p class="br-ceo__timeline-body">
								テレビアセットを活用した、デジタルネイティブな新規事業のマーケティングおよびプロモーション戦略を統括。
							</p>
						</li>
						<li class="br-ceo__timeline-item">
							<span class="br-ceo__timeline-dot" aria-hidden="true"></span>
							<span class="br-ceo__timeline-year">2023</span>
							<h3 class="br-ceo__timeline-title">ブルーアール株式会社 設立</h3>
							<p class="br-ceo__timeline-body">
								生成AIがもたらす革新的な生産性をいち早くビジネスに導入。テクノロジーとクリエイティブを最高純度で融合させたサービスを展開。
							</p>
						</li>
					</ol>
				</div>
			</div>

			<div class="br-ceo__block">
				<header class="br-ceo__block-head">
					<h2 class="br-about__overview-heading" id="br-ceo-expertise-heading">
						<span class="screen-reader-text">Expertise 専門分野</span>
						<div class="br-home__works-title">
							<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
								<svg
									class="br-svg-heading__svg"
									aria-hidden="true"
									viewBox="0 0 800 102"
									preserveAspectRatio="xMinYMin meet"
									focusable="false"
								>
									<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Expertise</text>
								</svg>
							</div>
						</div>
						<span class="br-about__overview-heading-pill">
							<span class="br-about__overview-heading-jp">専門分野</span>
						</span>
					</h2>
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
					<h2 class="br-about__overview-heading" id="br-ceo-activities-heading">
						<span class="screen-reader-text">Activities 現在の活動</span>
						<div class="br-home__works-title">
							<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
								<svg
									class="br-svg-heading__svg"
									aria-hidden="true"
									viewBox="0 0 800 102"
									preserveAspectRatio="xMinYMin meet"
									focusable="false"
								>
									<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Activities</text>
								</svg>
							</div>
						</div>
						<span class="br-about__overview-heading-pill">
							<span class="br-about__overview-heading-jp">現在の活動</span>
						</span>
					</h2>
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
					<h2 class="br-about__overview-heading" id="br-ceo-media-heading">
						<span class="screen-reader-text">Speaking and Media 登壇・メディア掲載</span>
						<div class="br-home__works-title">
							<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
								<svg
									class="br-svg-heading__svg"
									aria-hidden="true"
									viewBox="0 0 800 102"
									preserveAspectRatio="xMinYMin meet"
									focusable="false"
								>
									<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Speaking &amp; Media</text>
								</svg>
							</div>
						</div>
						<span class="br-about__overview-heading-pill">
							<span class="br-about__overview-heading-jp">登壇・メディア掲載</span>
						</span>
					</h2>
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
			<h2 class="br-about__overview-heading br-ceo__message-heading" id="br-ceo-message-heading">
				<span class="screen-reader-text">Message CEOメッセージ</span>
				<div class="br-home__works-title">
					<div class="br-svg-heading" data-br-svg-heading>
						<svg
							class="br-svg-heading__svg"
							aria-hidden="true"
							viewBox="0 0 800 102"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Message</text>
						</svg>
					</div>
				</div>
				<span class="br-about__overview-heading-pill">
					<span class="br-about__overview-heading-jp">CEOメッセージ</span>
				</span>
			</h2>
			<p class="br-ceo__message-title">闘い方が変わる。その中心に「多軸」を。</p>
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
			<header class="br-ceo__advisor-head">
				<h2 class="br-about__overview-heading" id="br-ceo-advisor-heading">
					<span class="screen-reader-text">Advisor 顧問紹介</span>
					<div class="br-home__works-title">
						<div class="br-svg-heading br-svg-heading--on-light" data-br-svg-heading>
							<svg
								class="br-svg-heading__svg"
								aria-hidden="true"
								viewBox="0 0 800 102"
								preserveAspectRatio="xMinYMin meet"
								focusable="false"
							>
								<text class="br-svg-heading__text" x="0" y="86" font-weight="700">Advisor</text>
							</svg>
						</div>
					</div>
					<span class="br-about__overview-heading-pill">
						<span class="br-about__overview-heading-jp">顧問紹介</span>
					</span>
				</h2>
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
					<div class="br-ceo__sns-block br-ceo__advisor-links">
						<ul class="br-ceo__sns-cards" role="list">
							<li>
								<a class="br-ceo__sns-card br-ceo__sns-card--x" href="<?php echo esc_url( 'https://x.com/taziku_co' ); ?>" rel="noopener noreferrer" target="_blank">
									<span class="br-ceo__sns-card-row">
										<span class="br-ceo__sns-icon br-ceo__sns-icon--x" aria-hidden="true">
											<img
												src="<?php echo esc_url( get_theme_file_uri( 'assets/images/icon-x.svg' ) ); ?>"
												alt=""
												width="30"
												height="27"
												loading="lazy"
												decoding="async"
											/>
										</span>
										<span class="br-ceo__sns-card-copy">
											<span class="br-ceo__sns-platform">X</span>
											<span class="br-ceo__sns-handle">@taziku_co</span>
										</span>
									</span>
									<span class="br-ceo__sns-cta">
										<span class="br-about__anchor-link br-ceo__sns-cta-link">Follow<span class="br-about__anchor-arrow" aria-hidden="true"><span class="br-about__anchor-arrow-inner">→</span></span></span>
									</span>
								</a>
							</li>
							<li>
								<a class="br-ceo__sns-card br-ceo__sns-card--web" href="<?php echo esc_url( 'https://taziku.co.jp/' ); ?>" rel="noopener noreferrer" target="_blank">
									<span class="br-ceo__sns-card-row">
										<span class="br-ceo__sns-icon br-ceo__sns-icon--web" aria-hidden="true">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false">
												<circle cx="12" cy="12" r="10" />
												<path d="M2 12h20" />
												<ellipse cx="12" cy="12" rx="4" ry="10" />
											</svg>
										</span>
										<span class="br-ceo__sns-card-copy">
											<span class="br-ceo__sns-platform">Web</span>
											<span class="br-ceo__sns-handle">taziku.co.jp</span>
										</span>
									</span>
									<span class="br-ceo__sns-cta">
										<span class="br-about__anchor-link br-ceo__sns-cta-link">Visit<span class="br-about__anchor-arrow" aria-hidden="true"><span class="br-about__anchor-arrow-inner">→</span></span></span>
									</span>
								</a>
							</li>
						</ul>
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
