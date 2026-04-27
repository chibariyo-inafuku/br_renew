<?php
/**
 * Home: contact CTA — centered promo banner + link to /contact/ (shared on subpages).
 *
 * @package br
 */

$contact_url = br_get_page_permalink_by_slug( 'contact' );
if ( $contact_url === '' ) {
	return;
}
?>
<section class="br-home__section br-home__section--cta br-home__cta br-home__cta--banner" aria-labelledby="br-home-cta-banner-heading">
	<div class="br-container">
		<div class="br-home__cta-banner">
			<div class="br-home__cta-banner__decor" aria-hidden="true">
				<div class="br-home__cta-banner__blob"></div>
				<svg class="br-home__cta-banner__wave" viewBox="0 0 220 100" preserveAspectRatio="xMinYMid meet" focusable="false">
					<path
						class="br-home__cta-banner__wave-path"
						d="M 4,82 C 26,82 34,26 52,16 C 70,6 84,36 98,56 C 106,68 114,74 124,64 C 142,40 158,14 176,8 C 200,2 214,28 218,44"
						fill="none"
						stroke="currentColor"
						stroke-width="1.25"
						stroke-linecap="round"
						stroke-linejoin="round"
						vector-effect="non-scaling-stroke"
					/>
				</svg>
			</div>
			<div class="br-home__cta-banner__content">
				<h2 class="br-home__cta-banner__heading" id="br-home-cta-banner-heading">
					<span class="br-home__cta-banner__title-line">
						<span class="br-home__cta-banner__title">LET’S PLAY &amp; CREATE TOGETHER<span class="br-home__cta-banner__title-dot" aria-hidden="true"></span></span>
						<span class="br-home__cta-banner__accents" aria-hidden="true">
							<span class="br-home__cta-banner__tri"></span>
							<svg class="br-home__cta-banner__squiggle" viewBox="0 0 341 174" preserveAspectRatio="xMidYMid meet" focusable="false">
								<path
									class="br-home__cta-banner__squiggle-path"
									d="
										M 55,27
										C 40,49 24,88 24,116
										C 24,131 31,138 44,135
										C 61,131 78,116 96,101
										C 106,93 116,95 120,104
										C 126,117 119,145 127,153
										C 135,161 146,148 156,131
										C 169,109 181,87 194,82
										C 203,78 207,86 207,100
										C 207,111 207,119 212,119
										C 218,119 230,101 242,84
										C 258,61 270,38 280,39
										C 287,40 285,60 284,74
										C 283,83 286,85 292,76
										C 300,63 308,46 319,45
										C 327,44 332,49 336,55
									"
									fill="none"
									stroke="currentColor"
									stroke-width="3.2"
									stroke-linecap="round"
									stroke-linejoin="round"
									vector-effect="non-scaling-stroke"
								/>
							</svg>
						</span>
					</span>
					<span class="br-home__cta-banner__sub">一緒に、ワクワクする未来をつくりましょう。</span>
				</h2>
				<p class="br-home__cta-banner__actions">
					<a class="br-home__cta-banner__btn" href="<?php echo esc_url( $contact_url ); ?>">
						<span class="br-home__cta-banner__btn-label">CONTACT US</span>
						<span class="br-home__cta-banner__btn-arrow" aria-hidden="true">→</span>
					</a>
				</p>
			</div>
		</div>
	</div>
</section>
