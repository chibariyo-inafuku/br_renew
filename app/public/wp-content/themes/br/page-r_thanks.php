<?php
/**
 * Fixed page: /recruit/r_thanks/ (slug `r_thanks` or `r-thanks`).
 *
 * @package br
 */

get_header();

while ( have_posts() ) :
	the_post();

	$br_thanks_args = array(
		'h1_text'    => 'ご応募を受け付けました！',
		'body_lines' => array(
			'ご応募いただいた内容は無事に送信されました。',
			'採用担当より順次ご連絡いたしますので、しばらくお待ちください。',
		),
		'note'       => '※ご返信までにお時間をいただくことがございます。',
		'h1_id'      => 'br-r-thanks-title',
	);
	require get_template_directory() . '/template-parts/page/thanks-success.php';
endwhile;

get_footer();
