<?php
/**
 * Shared markup for thanks / recruit application success pages.
 *
 * @package br
 *
 * Expected from parent template: `$br_thanks_args` (array) with keys:
 * h1_text, body_lines, note, h1_id.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! isset( $br_thanks_args ) || ! is_array( $br_thanks_args ) ) {
	return;
}

$h1_text    = isset( $br_thanks_args['h1_text'] ) ? (string) $br_thanks_args['h1_text'] : '';
$body_lines = isset( $br_thanks_args['body_lines'] ) && is_array( $br_thanks_args['body_lines'] ) ? $br_thanks_args['body_lines'] : array();
$note       = isset( $br_thanks_args['note'] ) ? (string) $br_thanks_args['note'] : '';
$h1_id      = isset( $br_thanks_args['h1_id'] ) && $br_thanks_args['h1_id'] !== '' ? (string) $br_thanks_args['h1_id'] : 'br-thanks-title';

?>
<main id="main" class="br-main br-thanks" aria-labelledby="<?php echo esc_attr( $h1_id ); ?>">
	<section class="br-thanks__section" data-br-subpage-reveal>
		<div class="br-container br-thanks__inner">
			<div class="br-thanks__illustration">
				<img
					class="br-thanks__illustration-img"
					src="/wp-content/themes/br/assets/images/thanks/thanks-illust.png"
					width="1024"
					height="1024"
					alt="握手を交わすビジネスパーソンのイラスト"
					decoding="async"
					loading="eager"
				/>
			</div>

			<h1 class="br-thanks__title" id="<?php echo esc_attr( $h1_id ); ?>"><?php echo esc_html( $h1_text ); ?></h1>

			<div class="br-thanks__body">
				<?php foreach ( $body_lines as $line ) : ?>
					<p class="br-thanks__line"><?php echo esc_html( (string) $line ); ?></p>
				<?php endforeach; ?>
			</div>

			<?php if ( $note !== '' ) : ?>
				<p class="br-thanks__note"><?php echo esc_html( $note ); ?></p>
			<?php endif; ?>

			<p class="br-thanks__cta-wrap">
				<a class="br-thanks__cta" href="/">TOPページへ戻る</a>
			</p>
		</div>
	</section>
</main>
