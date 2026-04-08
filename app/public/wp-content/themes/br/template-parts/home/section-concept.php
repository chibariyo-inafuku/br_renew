<?php
/**
 * Home: concept band — Figma 準拠 (2-column: text left + images right).
 *
 * @package br
 */

$copy = br_home_get_copy();
$img  = get_template_directory_uri() . '/assets/images/home';
?>
<section class="br-home__section br-home__section--concept br-home__concept">
	<div class="br-container br-home__concept-row">
		<div class="br-home__concept-text">
			<p class="br-home__concept-tagline-en"><?php echo esc_html( $copy['concept_tagline_en'] ); ?></p>
			<h2 class="br-home__concept-heading"><?php echo esc_html( $copy['concept_heading'] ); ?></h2>
			<div class="br-home__concept-body">
				<?php echo wp_kses_post( wpautop( $copy['concept_body'] ) ); ?>
			</div>
		</div>
		<div class="br-home__concept-images">
			<figure class="br-home__concept-img">
				<img src="<?php echo esc_url( $img . '/concept-1.png' ); ?>" alt="" loading="lazy">
			</figure>
			<figure class="br-home__concept-img">
				<img src="<?php echo esc_url( $img . '/concept-2.png' ); ?>" alt="" loading="lazy">
			</figure>
			<figure class="br-home__concept-img">
				<img src="<?php echo esc_url( $img . '/concept-3.png' ); ?>" alt="" loading="lazy">
			</figure>
		</div>
	</div>
</section>
