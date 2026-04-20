<?php
/**
 * Fixed page: /contact/thanks/ (slug `thanks`).
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();

	$br_thanks_args = array(
		'h1_text'    => 'お問い合わせを受け付けました！',
		'body_lines' => array(
			'ご記入いただいた内容は無事に送信されました。',
			'担当より順次ご連絡しますのでお待ちください。',
		),
		'note'       => '※お返事には数日お時間をいただくことがございます。',
		'h1_id'      => 'br-thanks-title',
	);
	require get_template_directory() . '/template-parts/page/thanks-success.php';
endwhile;

get_footer();
