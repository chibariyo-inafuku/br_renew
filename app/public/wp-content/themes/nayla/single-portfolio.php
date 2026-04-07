<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Nayla
 */

get_header();

$option = get_option('pe-redux');

  global $wp_query;
  $id = $wp_query->post->ID;

$templateName = naylaProjectTemplates($id , 'name');
$getTemplate = naylaProjectTemplates($id , 'get');
$page_layout = 'dark';

$projectHeaderClasses =  naylaProjectLayouts($id , 'header' , $templateName);
$projectContentClasses = naylaProjectLayouts($id , 'content' , $templateName);

 if (get_field('project_page_layout' , $id) === 'default') {
            
    $page_layout = $option['site_layout'];
     
} else {
            
    $page_layout = get_field('project_page_layout' , $id);
     
}

if ($page_layout === 'light') {
    
    $mainStyles = '--bg: ' . get_field('main_background' , $id) .';--cl: '. get_field('main_color' , $id) .'';
    
} else if ($page_layout === 'dark') {
    
    $mainStyles = '--bg: ' . get_field('main_light_background' , $id) .';--cl: '. get_field('main_light_color' , $id) .'';
}

?>

<main id="primary" class="site-main section" <?php naylaBarbaAttributes() ?> style="<?php echo esc_attr($mainStyles) ?>">

    <!-- Single Project -->
    <div class="project-page fixed-page">

        <?php if ($templateName !== 'no-header') { ?>

        <!-- Project Header -->
        <div class="project-page-header <?php echo esc_attr($projectHeaderClasses); ?>">

            <?php if ( !in_array($templateName, ['creative' , 'no-image','image-gallery-horizontal' , 'image-gallery-vertical' , 'boxed-image' , 'video'], true ) ) { 
    
            if ($templateName !== 'custom-template') { naylaProjectImage($id, $templateName); }

            } ?>
            <?php 
            
            if ( in_array($templateName, ['image-gallery-horizontal' , 'image-gallery-vertical' ], true ) ) { echo '<div class="wrapper"><div class="project-hero">'; };
            
            $args = array(
                'post_type' => 'elementor_library',
                'name' => $getTemplate
            );
            $my_three_posts = new WP_Query( $args );

            while ($my_three_posts -> have_posts()) : $my_three_posts -> the_post();

            the_content();

            endwhile;   
            
            wp_reset_postdata();
            
             if ( in_array($templateName, ['image-gallery-horizontal' , 'image-gallery-vertical' ], true ) ) { echo '</div>'; };
          
            ?>


            <?php if ($templateName === 'creative') { naylaProjectImage($id , $templateName); } ?>

            <?php  if ( in_array($templateName, ['image-gallery-horizontal' , 'image-gallery-vertical' ], true ) ) { ?>

            <div class="project-images cursor-text" data-cursor-text="SCROLL" data-speed="7">

                <!-- Project Images Slider -->
                <div class="project-images-slider">

                    <?php
                
                naylaProjectImage($id , $templateName);
                
                //Get the images ids from the post_metadata
                $images = acf_photo_gallery('image_gallery', $id);
                //Check if return array has anything in it
                
            if( count($images) ):
            //Cool, we got some data so now let's loop over it
                
           foreach($images as $key => $image):
                
            $id = $image['id']; // The attachment id of the media
            $title = $image['title']; //The title
            $caption= $image['caption']; //The caption
            $url= $image['url']; //Goto any link when clicked
            $alt = get_field('photo_gallery_alt', $id); //Get the alt which is a extra field (See below how to add extra fields)
            $class = get_field('photo_gallery_class', $id); //Get the class which is a extra field (See below how to add extra fields)
                
                $anim = '';
                
                if ( in_array($templateName, ['image-gallery-vertical' ], true ) ) {
                    
                 if ($key == 0) {
                     
                     $anim = 'has-anim-image slideDown imgScale';
                     
                 }
                }
                    ?>

                    <div class="project-image <?php echo esc_attr($anim); ?>" data-duration=1.5>
                        <?php if( !empty($url) ){ ?><a href="<?php echo esc_url($url); ?>"><?php } ?>
                            <img src="<?php echo  esc_url($image['full_image_url']); ?>" alt="<?php echo esc_html($title); ?>" title="<?php echo esc_html($title); ?>">
                            <?php if( !empty($url) ){ ?></a><?php } ?>
                    </div>


                    <?php endforeach; endif; ?>
                </div>
                <!--/Project Image Slider -->

            </div>
            <!--/Project Images -->
               
               <?php }; ?>
        </div>

     <?php }; ?>


    <!-- Page Content -->
    <div id="content" class="page-content project-page-content">
        
                
    <?php
		while ( have_posts() ) :
    
            function is_first() {
            global $post;
            $loop = get_posts( 'numberposts=1&order=ASC' );
            $first = $loop[0]->ID; 
            return ( $post->ID == $first ) ? true : false;
            }
    
			the_post();

    ?>


        <?php
		  the_content( sprintf(
			wp_kses(
				/* translators: %s: Name of current post. Only visible to screen readers */
				__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'nayla' ),
				array(
					'span' => array(
						'class' => array(),
					),
				)
			),
			get_the_title()
		) ); ?>


    </div>

    <?php if ($option['show_next_project']) { naylaNextProject(); }?>

    </div>
    <!--/ Single Project -->



    <?php
		endwhile; // End of the loop.
		?>
<?php
use Elementor\Plugin;

// テンプレートIDのリストを配列として指定
$template_ids = [15168, 15422];

// Elementorプラグインが有効か確認
if (class_exists('Elementor\Plugin')) {
    foreach ($template_ids as $template_id) {
        // テンプレートのコンテンツを表示
        echo Plugin::$instance->frontend->get_builder_content_for_display($template_id);
    }
} else {
    // プラグインが有効でない場合のメッセージを表示
    echo '<p>Elementor プラグインが有効化されていません。</p>';
}
?>
</main><!-- #main -->

<?php get_footer(); ?>
