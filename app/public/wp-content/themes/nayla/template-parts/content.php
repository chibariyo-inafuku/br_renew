<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Nayla
 */



$classes = [];
$date = true;
$category = true;
$excerpt = true;
$thumb = true;
$read = 'Read Article';
$style = 'classic';

$classes[] = 'single-blog-post';

    if (has_post_thumbnail()) {
        $classes[] = 'has-thumbnail' ;
    } else {
        
         $classes[] = 'no-thumbnail' ;
    };

if (class_exists('Redux')) {
    $option = get_option('pe-redux');
    $date = $option['show_post_date'];
    $category = $option['show_post_cat'];
    $excerpt = $option['show_post_excerpt'];
    $thumb = $option['show_post_thumbnail'];
    $read = $option['read_more_text'];
    
    if ($option['post_background'] == false) {
        
         $classes[] = 'no-background' ;
    }
    
    $style = $option['single_post_style'];
    $classes[] = $style;
    
    
     
};


?>

<article id="post-<?php the_ID(); ?>" <?php post_class($classes); ?>>

    <!-- Single Post--><?php if (is_singular()) { ?>

    <div class="section single-post-page">

        <div class="wrapper single-post-header">

            <div class="post-title-wrap c-col-12 sm-12 no-margin">

                <h1 class="post-title text-h2"><?php the_title() ?></h1>
								<div class="post-date fix">
									<?php
// 更新日を表示する特定のカテゴリースラッグ
$target_categories = array('blogs');

// 除外するカテゴリースラッグ（日時のみ非表示）
$exclude_categories = array('services');

// 「services」カテゴリの場合は日時を表示しない
if (!has_category($exclude_categories)) {
    // 「blogs」カテゴリの場合は更新日を表示
    if (has_category($target_categories)) {
        echo '<span class="post-meta-title">最終アップデート ' . esc_html(get_the_modified_date(get_option('date_format'))) . '</span>';
    } else {
        // それ以外のカテゴリは投稿日を表示
        echo '<span class="post-meta-title">投稿日 ' . esc_html(get_the_date(get_option('date_format'))) . '</span>';
    }
}
?>
                	<!--<span class="post-met-title"><?php echo esc_html('POSTED ON' , 'nayla') ?></span>
                	<?php nayla_posted_on(); ?>-->
									
            		</div>
							<?php
// 特定のカテゴリのスラッグを指定
$target_category = 'blogs'; // 表示させたいカテゴリのスラッグ

if (has_category($target_category) && !empty($option['single-post-thumbnail'])) { ?>
    <div class="post-featured-image wid100">
        <?php nayla_post_thumbnail(); ?>
    </div>
<?php } ?>
            </div>
						

            <?php if ($style === 'classic') { ?>

            <div class="post-meta c-col-12">

                <div class="post-date"><?php nayla_posted_on(); ?></div>

                <div class="post-categories"><?php 		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', 'nayla' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="cat-links">' . esc_html__( '%1$s', 'nayla' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}

		} ?></div>

            </div>

            <?php nayla_post_thumbnail();    } ?>

        </div>

        <div class="wrapper">
            <?php if ($style === 'split') { ?>

            <div class="c-col-6 sm-12 entry-meta" style="display: none;">

                <div class="entry-meta-wrap">
							<!--<h5 class="post-title-sub"><?php the_title() ?></h5>-->


                    <?php if ($option['single-post-thumbnail']) { ?>

                    <div class="post-featured-image">

                        <?php nayla_post_thumbnail(); ?>
                    </div>

                    <?php } ?>

                    <div class="post-meta">

                        <?php if ($option['single-post-author']) { ?>

                        <div class="post-author">

                            <span class="post-met-title"><?php echo esc_html('POSTED BY' , 'nayla') ?></span>

                            <span class="author-name"><?php nayla_posted_by() ?></span>

                        </div>
                        <?php } ?>

                        <?php if ($option['single-post-cat']) { ?>

                        <div class="post-categories">

                            <span class="post-met-title"><?php echo esc_html('POSTED AT' , 'nayla') ?></span>

                            <?php 		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', 'nayla' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="cat-links">' . esc_html__( '%1$s', 'nayla' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}

		} ?>
                        </div>
                        <?php } ?>

                        <?php if ($option['single-post-date']) { ?>

                        <div class="post-date">
                            <span class="post-met-title"><?php echo esc_html('POSTED ON' , 'nayla') ?></span>
                            <?php nayla_posted_on(); ?>
                        </div>
                        <?php } ?>

                    </div>

                </div>

            </div>

            <div class="c-col-12 entry-content aaacont <?php
$category = get_the_category();
if (!empty($category)) {
    echo esc_html($category[0]->slug);
}
?>">
							<?php if ( in_category('blogs') ) : ?>
							<script>

document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.querySelector('.aaacont');
    if (!contentArea) return;

    let heads = Array.from(contentArea.querySelectorAll('h2, h3, h4'));
    const firstH2 = contentArea.querySelector('h2');
    if (!heads.length || !firstH2) return;

    // 最後の h3 を削除
    let lastH3Index = -1;
    for (let i = heads.length - 1; i >= 0; i--) {
        if (heads[i].tagName.toLowerCase() === 'h3') {
            lastH3Index = i;
            break;
        }
    }
    if (lastH3Index !== -1) {
        heads.splice(lastH3Index, 1);
    }

    const tocContainer = document.createElement('div');
    tocContainer.id = 'toc_container';
    tocContainer.innerHTML = '<h2>目次</h2>';

    let currentLevel = 2;
    let currentList = document.createElement('ol');
    tocContainer.appendChild(currentList);

    let counters = [0, 0, 0, 0, 0]; // h2～h6 のカウンター

    heads.forEach((head) => {
        head.classList.add('elementor-element');
        
        const level = parseInt(head.tagName.slice(1));
        const levelIndex = level - 2; // h2 = 0, h3 = 1, ..., h6 = 4

        // カウンターをリセットしながら増加
        counters[levelIndex]++;
        for (let i = levelIndex + 1; i < counters.length; i++) {
            counters[i] = 0;
        }

        // 目次の番号を作成
        const numbering = counters.slice(0, levelIndex + 1).filter(n => n > 0).join('-');
        head.id = `i-${numbering}`;
        
        const li = document.createElement('li');

        // 番号部分をspanで包む
        const numberSpan = document.createElement('span');
        numberSpan.textContent = numbering + '. ';
        numberSpan.style.marginRight = '5px'; // 余白を作る

        // 見出しテキストのリンク
        const a = document.createElement('a');
        a.href = `#${head.id}`;
        a.textContent = head.textContent;

        li.appendChild(numberSpan);
        li.appendChild(a);

        if (level > currentLevel) {
            const newList = document.createElement('ol');
            currentList.lastElementChild?.appendChild(newList);
            currentList = newList;
        } else if (level < currentLevel) {
            while (currentLevel > level) {
                currentList = currentList.parentNode.closest('ol');
                currentLevel--;
            }
        }
        
        currentLevel = level;
        currentList.appendChild(li);
    });

    contentArea.insertBefore(tocContainer, firstH2);
});

</script>
<?php endif; ?>

                <?php } else { ?>

                <div class="c-col-12 entry-content">

                    <?php }
		the_content(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'nayla' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			)
		);

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'nayla' ),
				'after'  => '</div>',
			)
		);
		?>
						<div class="caption_entry">
						※当サイトに掲載されている商標、一部画像、スクリ－ンショット、文章は著作権侵害を目的に利用しておらず、第三十二条で定められる引用の範囲で使用しています。万が一問題があれば、当社にご連絡ください。即刻削除いたします。<?php if ( in_category('blogs') ) : ?>また、本ブログは業務の研究開発のためのものとなり、一部、弊社に関連性が無いものも掲載しております。<?php else : ?><?php endif; ?>

						</div>
                </div>

                <?php  $next_post = get_next_post();
                                                 
                    if ($next_post) { ?>

                <div class="c-col-12 next-post-wrap" style="margin-bottom: 0;">
									
                    <!-- Single Blog Post -->
                    <?php
$category = get_category_by_slug('services'); // 'services' のカテゴリIDを取得
$category_id = $category ? $category->term_id : 0;

// 特定のカテゴリ（services）のみを対象にする
$next_post = get_adjacent_post(true, '', false, 'category'); 

if ($next_post && has_category($category_id, $next_post)) { ?>
    <div class="single-blog-post post_horizontal">
        <?php if (has_post_thumbnail($next_post->ID)) { ?>
            <a class="cursor-text" href="<?php echo get_the_permalink($next_post->ID); ?>">
                <!-- Blog Post Image -->
                <div class="single-post-image">
                    <img src="<?php echo esc_url(get_the_post_thumbnail_url($next_post->ID)) ?>" >
                </div>
                <!--/ Blog Post Image -->
            </a>
        <?php } ?>

        <!-- Post Details -->
        <div class="post-details">
            <!-- Meta -->
            <div class="post-meta">
                <div class="post-date"><?php nayla_posted_on($next_post->ID); ?></div>
            </div>
            <!--/ Meta -->

            <!-- Title -->
            <div class="post-title text-h3"><?php echo get_the_title($next_post->ID) ?></div>
            <!--/ Title -->

            <!-- Button -->
            <div class="post-button text-h6">
                <a href="<?php echo get_the_permalink($next_post->ID); ?>">
                    <?php echo esc_html('Read Next Post' , 'nayla') ?>
                </a>
            </div>
            <!--/ Button -->
        </div>
        <!--/ Post Details -->
    </div>
<?php } ?>

                    <!--/ Single Blog Post -->

                </div>

                <?php } 
			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) : ?>

                <div class="c-col-12 nayla-post-comments">

                    <?php comments_template(); ?>

                </div>

                <?php endif; ?>


            </div>

        </div>



        <!-- Archive Post--><?php } else { ?>

        <?php if($thumb) { nayla_post_thumbnail(); }?>


        <!-- Post Details -->
        <div class="post-details">
            
            
             <?php if ($date || $category) { ?>
            
            <!-- Meta -->
            <div class="post-meta">


                <?php if ($date) { ?>
                <div class="post-date"><?php nayla_posted_on(); ?></div>

                <?php } ?>


                <?php if ($category) { ?>
                <div class="post-categories"><?php 		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', 'nayla' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="cat-links">' . esc_html__( '%1$s', 'nayla' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}

		} ?></div>

                <?php } ?>

            </div>
            <!--/ Meta -->
            
            <?php } ?>
            
            <!-- Title -->
            <a href="<?php echo esc_url( get_permalink() ) ?>">
                <div class="post-title text-h4 entry-title"><?php the_title() ?></div>
            </a>
            <!--/ Title -->

            <?php if ($excerpt) { ?>
            <div class="post-excerpt">
                <?php the_excerpt() ?>
            </div>
            <?php } ?>

            <!-- Button -->
            <div class="post-button text-h6">

                <a href="<?php echo esc_url( get_permalink() ) ?>"><?php echo esc_html($read) ?></a>

            </div>
            <!--/ Button -->

        </div>
        <!--/ Post Details -->

        <?php  }  ?>



</article><!-- #post-<?php the_ID(); ?> -->
	
<?php
use Elementor\Plugin;

// カテゴリごとにテンプレートIDを設定
if (has_category('blogs')) {
    $template_ids = [15422]; // blogカテゴリなら 15422 のみ
} else {
    $template_ids = [15168, 15422]; // blog以外なら 15168 と 15422 の両方
}

// Elementorプラグインが有効か確認
if (class_exists('Elementor\Plugin')) {
    foreach ($template_ids as $template_id) {
        // テンプレートのコンテンツを取得
        $content = Plugin::$instance->frontend->get_builder_content_for_display($template_id);
        echo wp_kses_post($content); // XSS対策
    }
} else {
    echo '<p>Elementor プラグインが有効化されていません。</p>';
}
?>

