<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Nayla
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function nayla_body_classes( $classes ) {
    
        $option = get_option('pe-redux');
    

          global $wp_query;
  $id = $wp_query->post->ID;
    
    $postType = get_post_type($id);
        
  
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}
    
    if (class_exists('Redux')) { 
    
    if (get_field('smooth_scroll' , $id) === 'true' || $option['smooth_scroll_active']) {
        	$classes[] = 'smooth-scroll';
    }
    
    if ($option['page_transitions_active']) {
        	$classes[] = 'ajax-enabled';
    }
    
        
        if ($postType === 'portfolio') {
            
      if (get_field('project_page_layout' , $id)) {
        
        
        if (get_field('project_page_layout' , $id) === 'default') {
            
              $pageLayout = $option['site_layout'];
        } else {
            
            $pageLayout = get_field('project_page_layout' , $id);
        }
    
    } else if ($option['site_layout']) {
        
         $pageLayout = $option['site_layout'];
        
    } else {
          
      $pageLayout = 'dark';
        
      }
            
            
        } else {
            
                if (get_field('page_layout' , $id)) {
        
        
        if (get_field('page_layout' , $id) === 'default') {
            
              $pageLayout = $option['site_layout'];
        } else {
            
            $pageLayout = get_field('page_layout' , $id);
        }
    
    } else if ($option['site_layout']) {
        
         $pageLayout = $option['site_layout'];
        
    } else {
          
      $pageLayout = 'dark';
        
      }
            
        }
    

    
    $footerVisibility = '';
    
    if (get_field('footer_visibility' , $id) !== null &&  get_field('footer_visibility' , $id) !== true) {
        
        $footerVisibility = 'hide-footer';
         $classes[] =  $footerVisibility;
    }
    $classes[] = $pageLayout;
    
}
    
	return $classes;
}
add_filter( 'body_class', 'nayla_body_classes' );

function nayla_header_classes() {
    
   
        if (class_exists('Redux')) {

     $option = get_option('pe-redux');  
    
    $headerType = '';
    $headerLayout = '';
            
            if (get_field('sticky_header_color_set') !== 'default') {
                
                    $stickyHeaderLayout = get_field('sticky_header_color_set');
                
            } else {
                
                    $stickyHeaderLayout = $option['sticky_header_color_set'];
            }

    
    if (get_field('header_type') === 'default' || !get_field('header_type')) {
            
         $headerType = $option['header_type'];
        
    } else {
        
       
          $headerType = get_field('header_type');
    }
    
    if (get_field('header_layout') === 'default' || !get_field('header_layout')) {
        
         $headerLayout = $option['header_color_set'];
        
    } else {
          $headerLayout = get_field('header_layout');
    }
    
 $headerClasses = $headerType . ' ' . $headerLayout .' '. $stickyHeaderLayout;
            
          echo esc_attr($headerClasses);
    
      } else {
        
        return;
    
        }
}


function nayla_body_styles() {
    
    
      
        global $wp_query;
  $id = $wp_query->post->ID;


    if (class_exists('Redux')) {
    

    
      $option = get_option('pe-redux');
    
    
    $mainColor ='';
    $mainBackground = '';
    $secondaryBackground = '';
    $mainLightColor = '';
    $mainLightBackground = '';
    $secondaryLightBackground = '';
        $headerBg = '';
         $stickyHeaderBg = '';
         $cursorColor = '';
         $cursorTextColor = '';
         $cursorIconColor = '';
        $overlayBg = '';
        $transOvBg = '';
        $transCaptColor = '';
        $captColor = '';
        
    if (get_field('main_color' , $id)) {
        
        $mainColor = ' body.light{ --mainColor:' . get_field('main_color') . '!important;}';
        
    } else if ($option['body_main_color_light']) {
        
         $mainColor = ' body.light{ --mainColor:' . $option['body_main_color_light'] . '!important;}';
    }
        
    if (get_field('main_background' , $id)) {
        
        $mainBackground = ' body.light{ --mainBackground:' . get_field('main_background') . '!important;}';
        
    } else if ($option['body_main_background_light']) {
        
         $mainBackground = ' body.light{ --mainBackground:' . $option['body_main_background_light'] . '!important;}';
    }
        
    if (get_field('secondary_background' , $id)) {
        
        $secondaryBackground = ' body.light{ --secondaryBackground:' . get_field('secondary_background') . '!important;}';
        
    } else if ($option['body_secondary_background_light']) {
        
         $secondaryBackground = ' body.light{ --secondaryBackground:' . $option['body_secondary_background_light'] . '!important;}';
    }
        
            
    if (get_field('main_light_color' , $id)) {
        
        $mainLightColor = ' body.dark, .light:not(body) { --mainColor:' . get_field('main_light_color') . '!important;}';
        
    } else if ($option['body_main_color_dark']) {
        
         $mainLightColor = ' body.dark, .light:not(body) { --mainColor:' . $option['body_main_color_dark'] . '!important;}';
    }
        
    if (get_field('main_light_background' , $id)) {
        
        $mainLightBackground = ' body.dark, .light:not(body) { --mainBackground:' . get_field('main_light_background') . '!important;}';
        
    } else if ($option['body_main_background_dark']) {
        
         $mainLightBackground = ' body.dark, .light:not(body) { --mainBackground:' . $option['body_main_background_dark'] . '!important;}';
    }
        
    if (get_field('secondary_light_background' , $id)) {
        
        $secondaryLightBackground = ' body.dark, .light:not(body) { --secondaryBackground:' . get_field('secondary_light_background') . '!important;}';
        
    } else if ($option['body_secondary_background_dark']) {
        
         $secondaryLightBackground = ' body.dark, .light:not(body) { --secondaryBackground:' . $option['body_secondary_background_dark'] . '!important;}';
    }
        
    if (get_field('header_background_color')) {
        
        $headerBg = '.site-header { background-color: ' . get_field('header_background_color') . '}';
        
    } else {

     $headerBg = '.site-header { background-color: ' . $option['header_background'] . '}';
    }
        
    if (get_field('sticky_header_background_color')) {
        
        $stickyHeaderBg = '.site-header.sticked { background-color: ' . get_field('sticky_header_background_color') . '}';
        
    } else {

     $stickyHeaderBg = '.site-header.sticked { background-color: ' . $option['sticky_header_background'] . '}';
    }
        
     if (get_field('cursor_color')) {
         
         $cursorColor = 'div#mouseCursor.dot .main-circle { fill: ' . get_field('cursor_color') . '} 
         div#mouseCursor.circle .main-circle { stroke: ' . get_field('cursor_color') . '}';
     } else {
         
         if (isset($option['cursor_color'])) {
             
                  $cursorColor = 'div#mouseCursor.dot .main-circle { fill: ' . $option['cursor_color']. '} 
         div#mouseCursor.circle .main-circle { stroke: ' . $option['cursor_color'] . '}';
             
         }
     
         
     }
        
        if (get_field('cursor_text_color')) {
            
            $cursorTextColor = '.mouse-cursor-text { color: ' .  get_field('cursor_text_color') . '}';
            
        } else if (isset($option['cursor_text_color'])) {
            
            $cursorTextColor = '.mouse-cursor-text { color: ' . $option['cursor_text_color'] . '}';
        }
        
        if (get_field('cursor_icon_color')) {
            
            $cursorIconColor = '.mouse-cursor-icon { color: ' .  get_field('cursor_icon_color') . '}';
            
        } else if (isset($option['cursor_icon_color'])) {
            
            $cursorIconColor = '.mouse-cursor-icon { color: ' . $option['cursor_icon_color'] . '}';
        }
        
        
        if(get_field('overlay_background')) {
            
            $overlayBg = '.page-loader {--bg: ' . get_field('overlay_background') . '}';
            
        }
        
        if(get_field('trans_overlay_color')) {
            
            $transOvBg = '.nayla-page-transition {--backG: ' . get_field('trans_overlay_color') . '}';
            
        } else if ($option['transition_background']){
            
             $transOvBg = '.nayla-page-transition {--backG: ' . $option['transition_background'] . '}';
        } else {
            
             $transOvBg = '.nayla-page-transition {--backG: var(--secondaryBackground) }';
        }
        
        if (get_field('trans_caption_color')) {
            
          $transCaptColor = '.nayla-page-transition .page-transition-caption {color: ' . get_field('trans_caption_color') . '}';
            
        }
        
        if(get_field('caption_color')) {
            
          $captColor = '.page-loader-caption {color: ' . get_field('caption_color') . '}';
            
        }
        
    
     echo "<style id='nayla-body-styles'>".
        
        $mainColor .
        $mainBackground .
        $secondaryBackground . 
        $mainLightColor .
        $mainLightBackground . 
        $secondaryLightBackground . 
         $headerBg .
         $stickyHeaderBg .
         $cursorColor .
         $cursorTextColor .
         $cursorIconColor .
         $overlayBg .
         $transOvBg .
         $captColor .
         $transCaptColor .
         
         "</style>";
        
        } else {
        
        return;
    };

}

add_action('wp_head', 'nayla_body_styles', 100);


/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function nayla_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'nayla_pingback_header' );



function nayla_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'nayla_excerpt_length', 999 );

/**
 * Comments
 */



// Remove url field from comment form

function nayla_unset_url_field($fields){
    if(isset($fields['url']))
       unset($fields['url']);
       unset($fields['cookies']);
       return $fields;
}

add_filter('comment_form_default_fields', 'nayla_unset_url_field');


                
function nayla_comment_field( $comment_field ) {


  $comment_field =
    '<div class="message-wrap comment-wrap">
            <textarea placeholder="Your Comment" required id="comment" name="comment"  cols="45" rows="3" aria-required="true"></textarea>'. '</div>';

  return $comment_field;
}
add_filter( 'comment_form_field_comment', 'nayla_comment_field' );


function nayla_comment_author( $comment_author ) {
    
     $commenter = wp_get_current_commenter();
	$req       = get_option( 'require_name_email' );
	$label     = $req ? '*' : ' ' . __( '(optional)', 'nayla' );
	$aria_req  = $req ? "aria-required='true'" : '';
    
  $comment_author =
  '<div class="field-wrap half-field name-field">' . '<input placeholder="Name*" id="author" name="author" type="text" value="' .
                esc_attr( $commenter['comment_author'] ) . '" size="30"' . $aria_req . ' />'.' </div>';

  return $comment_author;
}
add_filter( 'comment_form_field_author', 'nayla_comment_author' );

function nayla_comment_email( $comment_email ) {
    
     $commenter = wp_get_current_commenter();
	$req       = get_option( 'require_name_email' );
	$label     = $req ? '*' : ' ' . __( '(optional)', 'nayla' );
	$aria_req  = $req ? "aria-required='true'" : '';
    
  $comment_email =
 '<div class="field-wrap half-field mail-field">' . '<input placeholder="E-mail*" id="email"  name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) .
                '" size="30"' . $aria_req . ' />'.'</div>';

  return $comment_email;
}
add_filter( 'comment_form_field_email', 'nayla_comment_email' );

if (!function_exists('nayla_comments')) {
    
function nayla_comments($comment, $args, $depth) {
	$GLOBALS['comment'] = $comment;
    $is_pingback_comment = $comment->comment_type == 'pingback';
    $comment_class = 'comment';
    if ( $is_pingback_comment ) {
        $comment_class .= ' pingback-comment';
    }
	?>

<li>
    <div class="<?php echo esc_attr($comment_class); ?>">
        <div class="comment-meta">
            <?php if ( ! $is_pingback_comment ) { ?>
            <div class="image"> <?php echo get_avatar($comment, 75); ?> </div>
            <?php } ?>

            <div class="comment-usr">

                <h6 class="name"><?php if ( $is_pingback_comment ) { esc_html_e( 'Pingback:', 'nayla' ); } ?><?php echo get_comment_author_link(); ?></h6>
                <span class="comment_date"><?php comment_date(); ?></span>

            </div>

        </div>

        <div class="text_holder" id="comment-<?php echo comment_ID(); ?>">
            <?php comment_text(); ?>
        </div>

        <?php comment_reply_link( array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']) ) ); ?>

    </div>

    <?php if ($comment->comment_approved == '0') : ?>
    <p><em><?php esc_html_e('Your comment is awaiting moderation.', 'nayla'); ?></em></p>
    <?php endif; ?>
    <?php 
}
}


// Modify comments header text in comments
add_filter( 'nayla_title_comments', 'child_title_comments');

function nayla_child_title_comments() {
    return esc_html__e(comments_number( '<h3>No Responses</h3>', '<h3>1 Response</h3>', '<h3>% Responses...</h3>' ), 'nayla');
}

/**
 * Posts Navigation
 */

if ( ! function_exists( 'nayla_posts_nav' ) ) :

function nayla_posts_nav() {
 
    if( is_singular() )
        return;
 
    global $wp_query;
 
    /** Stop execution if there's only 1 page */
    if( $wp_query->max_num_pages <= 1 )
        return;
 
    $paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;
    $max   = intval( $wp_query->max_num_pages );
 
    /** Add current page to the array */
    if ( $paged >= 1 )
        $links[] = $paged;
 
    /** Add the pages around the current page to the array */
    if ( $paged >= 3 ) {
        $links[] = $paged - 1;
        $links[] = $paged - 2;
    }
 
    if ( ( $paged + 2 ) <= $max ) {
        $links[] = $paged + 2;
        $links[] = $paged + 1;
    }
 
    echo '<div class="posts-navigation"><ul>' . "\n";
 
    /** Previous Post Link */
    if ( get_previous_posts_link() )
        printf( '<li>%s</li>' . "\n", get_previous_posts_link() );
 

 
    /** Link to current page, plus 2 pages in either direction if necessary */
    sort( $links );
    foreach ( (array) $links as $link ) {
        $class = $paged == $link ? ' class="active"' : '';
        printf( '<li%s><a href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $link ) ), $link );
    }

 
    /** Next Post Link */
    if ( get_next_posts_link() )
        printf( '<li>%s</li>' . "\n", get_next_posts_link() );
 
    echo '</ul></div>' . "\n";
 
}
endif;


/**
 * Change the Tag Cloud's Font Sizes.
 */

function nayla_tag_cloud_font_sizes( array $args ) {
    $args['smallest'] = '1';
    $args['largest'] = '1';
    $args['unit'] = 'em';

    return $args;
};

add_filter( 'widget_tag_cloud_args', 'nayla_tag_cloud_font_sizes');


function nayla_search_form( $form ) {
    $form = '<form role="search" method="get" id="searchform" class="searchform" action="' . home_url( '/' ) . '" > <input id="al-search" class="search-input" placeholder="'. esc_attr('Search..' , 'nayla') .'" type="search" value="' . get_search_query() . '" name="s" id="s" />
    <button type="submit" class="search-submit"/><span class="material-symbols-outlined">
search
</span></button>

    </form>';

    return $form;
}

add_filter( 'get_search_form', 'nayla_search_form', 100 );


function get_custom_logo_url()
{
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
    return $image[0];
}


add_action( 'admin_enqueue_scripts', 'load_admin_style' );
function load_admin_style() {
    wp_register_style( 'admin_css', get_template_directory_uri() . '/css/admin-style.css', false, '1.0.0' );
    //OR
    wp_enqueue_style( 'admin_css', get_template_directory_uri() . '/css/admin-style.css', false, '1.0.0' );
}


function add_admin_js( $hook ) {
  wp_enqueue_script ( 'admin_js', get_template_directory_uri() . '/js/admin.js' );

}
add_action('admin_enqueue_scripts', 'add_admin_js');

add_action('admin_enqueue_scripts', 'nayla_enqueue_custom_ajax_script');

function nayla_enqueue_custom_ajax_script() {
    wp_enqueue_script('nayla-custom-ajax', get_template_directory_uri() . '/js/nayla-ajax.js', array('jquery'), null, true);

    // Değişkeni doğru şekilde tanımla
    wp_localize_script('nayla-custom-ajax', 'nayla_ajax', array('ajax_url' => admin_url('admin-ajax.php')));
}

function naylaProjectImage($id , $type) {
  
    $option = get_option('pe-redux');
    $template_type = '';
    $imageClasses = '';
    $animation = '';
    $animationAttributes = '';
    
          global $wp_query;
  $postid = $wp_query->post->ID;
    
    
    if(get_post_type($postid) === 'portfolio') {
        
            if (get_field('video_provider' , $id) == 'vimeo' || get_field('video_provider' , $id) == 'youtube') {
        
        $animation = 'has-anim maskUp';
        $imageClasses = $animation;
        $animationAttributes = 'data-duration=1 data-delay=0';
    }
        
    }
    

    ?>
    <!-- Project Image -->
    <div class="project-image featured <?php echo esc_attr($imageClasses); ?>" <?php echo esc_attr($animationAttributes); ?>>

        <?php if (get_field('featured_image_type' , $id) == 'image') { 
                    
                   echo get_the_post_thumbnail($id);
                
             } else if ((get_field('featured_image_type' , $id) == 'video')) { ?>

        <?php if (get_field('video_provider' , $id) == 'self') {  ?>

        <!-- Nayla Video -->
        <div class="nayla-video no-interactions n-self" data-controls="false">

            <video autoplay muted playsinline loop class="n-video">
                <source src="<?php echo esc_url(get_field('self_video' , $id)); ?>">
            </video>

        </div>
        <!--/Nayla Video -->

        <?php } else if (get_field('video_provider' , $id) == 'vimeo') { ?>

        <div class="nayla-video n-vimeo no-interactions" data-controls="false" data-autoplay=true data-muted=true data-loop=true>

            <div class="n-video" data-plyr-provider="vimeo" data-plyr-embed-id="<?php echo esc_attr(get_field('video_id' , $id)) ?>"></div>

        </div>


        <?php } else if (get_field('video_provider' , $id) == 'youtube') {  ?>

        <div class="nayla-video no-interactions n-youtube" data-controls="false" data-autoplay=true data-muted=true data-loop=true>

            <div class="n-video" data-plyr-provider="youtube" data-plyr-embed-id="<?php echo esc_attr(get_field('video_id' , $id)) ?>"></div>

        </div>

        <?php }} ?>

    </div>
    <!--/Project Image -->

    <?php
    
    }


function naylaProjectTemplates($id, $type) {
    $option = get_option('pe-redux');
    
    if (get_field('project-header-style' , $id) === 'default') {
    
       $headerType = $option['project_header_type'];
    
    if ($headerType === 'custom-template') {
        
        $templateName =  $headerType;
		 $getTemplate = get_post_field( 'post_name', $option['select_project_header_template'] );
       
        
    } else {
        
           $templateName = $headerType;
           $getTemplate = $templateName . '-project-header';
    }
    
} else {
    
    $headerType = get_field('project-header-style' , $id);
    
      if ($headerType === 'custom-template') {
        
        $templateName = get_field('custom_template' , $id);
          $getTemplate = $templateName;
          $templateName = 'custom-template';
        
    } else {
        
           $templateName = $headerType;
          $getTemplate = $templateName . '-project-header';
    }
}
    
    
    if ($type === 'name') {
          return $templateName;
    } else if ($type === 'get') {
         return $getTemplate;
    }
    
    
}

function naylaProjectLayouts($id , $type , $template) {
    $option = get_option('pe-redux');
    
if (get_field('project_header_layout', $id) !== 'default') {
    
    $projectHeaderLayout = get_field('project_header_layout', $id);
} else {
    
    $projectHeaderLayout = $option['project_header_layout'];
}
    
    if (get_field('project_page_layout', $id) !== 'default') {
    
    $projectContentClasses = get_field('project_page_layout', $id);
} else {
    
    $projectContentClasses = $option['project_content_layout'];
}

    
    if ($type === 'header') {
        
        return $template . ' ' . $projectHeaderLayout;
        
    } else if ($type === 'content') {
        
          return $projectContentClasses;
    }
    
    
}


function naylaNextProject() {
    global $wp_query;
    $option = get_option('pe-redux');
    
    $next_post = get_next_post();
    
    // Check if there's no next post, get the first post of the "portfolio" post type
    if ( !$next_post ) {
        $first_portfolio_post = get_posts( array(
            'post_type' => 'portfolio',
            'posts_per_page' => 1,
            'order' => 'ASC',
        ) );

        if ( $first_portfolio_post ) {
            $next_post = $first_portfolio_post[0];
        }
    }

    if ( $next_post )  : 
       $terms = get_the_terms( $next_post->ID, 'project-categories' ); 
    
    $page_layout = 'dark';
    
    if (get_field('project_page_layout' , $next_post->ID) === 'default') {
        $page_layout = $option['site_layout'];
    } else {
        $page_layout = get_field('project_page_layout' , $next_post->ID);  
    }

    if ($page_layout === 'light') {
        $mainColor = get_field('main_color' , $next_post->ID);
        $mainBackgroundColor = get_field('main_background' , $next_post->ID);
    } else if ($page_layout === 'dark') {
        $mainColor = get_field('main_light_color' , $next_post->ID);
        $mainBackgroundColor = get_field('main_light_background' , $next_post->ID);
    }
    ?>

    <!-- Nayla Next Project -->
    <div class="nayla-next-project section" style="<?php echo esc_attr('--mainBackground: ' .$mainBackgroundColor) ?>;<?php echo esc_attr('--mainColor: ' . $mainColor) ?>">

        <a class="next-project-link" href="<?php echo get_the_permalink($next_post->ID) ?>">

            <!-- Next Project Caption -->
            <div class="next-project-caption">
                <?php echo esc_html($option['next-project-caption']); ?>
            </div>
            <!--/Next Project Caption -->

            <!-- Next Project Image -->
            <div class="next-project-image">

                <?php naylaProjectImage($next_post->ID , false) ?>

            </div>
            <!--/Next Project Image -->

            <!-- Next Project Title -->
            <div class="next-project-title">

                <!-- Nayla Marquee -->
                <div class="nayla-marquee right-to-left" data-duration="15">

                    <p class="md-title"><?php echo get_the_title( $next_post->ID ) ?></p>
                    <div class="seperator md-title">

                        <i aria-hidden="true" class="material-icons md-arrow_forward" data-md-icon="arrow_forward"></i>

                    </div>

                </div>
                <!--/Nayla Marquee -->

            </div>
            <!--/ Next Project Title -->

            <div class="next-project-metas">

                <div class="next-projet-meta"><?php echo get_field('project_date' , $next_post->ID ) ?></div>
                <div class="next-projet-meta"><?php echo get_field('project_client' , $next_post->ID ) ?></div>
                <div class="next-projet-meta">
                    <?php 
                    if ($terms) { 
                        foreach($terms as $term) {
                            echo '<span>' . esc_html($term->name) . '</span>';
                        } 
                    } 
                    ?>
                </div>

            </div>

        </a>

    </div>
    <!--/Nayla Next Project -->

    <?php endif;
}



/**
 * Check if the current post/page
 * is built using Elementor
 *
 * @param string $post_id
 * @return bool
 */
function is_built_with_elementor( $post_id = null ) {

	if ( ! class_exists( '\Elementor\Plugin' ) ) {
		return false;
	}

	if ( $post_id == null ) {
		$post_id = get_the_ID();
	}

	if ( is_singular() && \Elementor\Plugin::$instance->documents->get( $post_id )->is_built_with_elementor() ) {
		return true;
	}

	return false;
}

function naylaMouseCursor() {
    $option = get_option('pe-redux');
    
  if ($option['mouse_cursor'] !== 'none') { 
    
      $cursorLoading = '';
      
    if ($option['cursor_loading'] == true) {
        
         $cursorLoading = 'cursor-loading';
    }  
      
    if (get_field('cursor_style') && get_field('cursor_style') !== 'default') {
        
        $cursor = get_field('cursor_style');
        
    }  else {
         $cursor = $option['mouse_cursor'];
        
    }
      
      if (get_field('cursor_layout')) {
          
          $layout = get_field('cursor_layout');
          
      }  else {
           $layout =  $option['mouse_cursor_layout'];
          
          
      }

    $cursorClasses = $cursor .' '. $layout .' '. $cursorLoading;
?>

    <!-- Mouse Cursor -->
    <div id="mouseCursor" class="<?php echo esc_attr($cursorClasses) ?>"></div>
    <!--/ Mouse Cursor -->

    <?php }

    }


function naylaPageLoader() {
      $option = get_option('pe-redux');
    

      global $wp_query;
  $id = $wp_query->post->ID;
    
    
       if ($option['page_loader_active'] == true) { 
        
           $progress = '';
           $caption ='';
           $logo = '';
           $ovBg = '';
           
           
           if (get_field('overlay_type') && get_field('overlay_type') !== 'default') {
               
                $style = get_field('overlay_type');
               

           } else {
                $style = $option['loader_style'];
           }
           
           if (get_field('progress_type') && get_field('progress_type') !== 'default') {
               
                $progress = get_field('progress_type');
           } else {
                $progress = $option['loader_type'];
           }
           
           if (get_field('caption_text')) {
               
               $caption = get_field('caption_text');
           } else {
               $caption = $option['loader_caption'];
           }
           
           if (get_field('loader_logo')) {
               
               $logo = get_field('loader_logo');
           } else {
                $logo = $option['loader_logo'];
           }
           
           
    
    ?>

    <!-- Page Loader -->
    <div class="page-loader">

        <div class="page-loader-overlays <?php echo esc_attr($style); ?>">

            <?php 
                                           
              $x = 0;
        
            if ($style === 'columns') {
                
             for ($x = 0; $x <= 4; $x++) {
           
                 echo '<span class="loader-col"></span>';
                 
             }
                
            } else if ($style === 'overlay') {
                
                if ($option['image_bg'] && $option['ov-bg']) {
                    
                    echo '<span style="background-image: url(' . $option['ov-bg']['url'] . ')" class="loader-overlay image-ov"></span>';
                    
                } else {
                    
                       echo '<span class="loader-overlay"></span>';
                }
                
              
                
            } else if ($style === 'blocks') {
                
                for ($x = 0; $x <= 9; $x++) {
           
                 echo '<span class="loader-block"><span></span></span>';
                 
             }
                
            }
                
            ?>

        </div>


        <?php if ($progress === 'percentage') { ?>
        <div class="page-loader-percentage"></div>
        <?php } ?>

        <?php if ($progress === 'logo') { ?>
        <div style="width:<?php echo esc_attr($option['loader_logo_dimensions']['width']) ?>" class="page-loader-logo">

            <img alt=" Site Logo (Dark)" src="  <?php echo esc_url($logo['url']) ?>">

        </div>
        <?php } ?>

        <?php if ($progress === 'caption') { ?>

        <div class="page-loader-caption">
            <?php echo esc_html($caption) ?>
        </div>
        <?php } ?>


    </div>
    <!--/ Page Loader -->

    <?php } else { return; }; 
    
}

function naylaSmoothScroll() {
    

            if (class_exists('Redux')) { 

    $option = get_option('pe-redux');
    
    if (get_field('smooth_scroll') === 'true' || $option['smooth_scroll_active']) {
        
        $smoothTouchStrength ='';
        
        if (get_field('smooth_strength')) {
            
             $strength = get_field('smooth_strength');
            
        } else {
            
            $strength = $option['smooth_strength'];
        }
        
        if (get_field('normalize_scroll') && get_field('normalize_scroll') !== 'default') {
            
             $normalize = get_field('normalize_scroll');
            
        } else {
            
             $normalize = $option['normalize_scroll'];
        }
        
        if (get_field('speed')) {
            
             $speed = get_field('speed');
            
        } else {
            
             $speed = $option['smooth_speed'];
        }
        
        if (get_field('smooth_touch') && get_field('smooth_touch') !== 'default') {
            
            $smoothTouch = get_field('smooth_touch');
            
        } else {
            
            $smoothTouch = $option['smooth_touch'];
        }
        
         if (get_field('smooth_touch_strength')) {
            
             $touchStrength = get_field('smooth_touch_strength');
            
        } else {
            
             $touchStrength = $option['smooth_touch_strength'];
        }
    
    ?>

    <div hidden class="smooth-scroll-options" data-smooth="<?php echo esc_attr($strength) ?>" data-normalize="<?php echo esc_attr($normalize) ?>" data-speed="<?php echo esc_attr($speed) ?>" data-touch="<?php echo esc_attr($smoothTouch) ?>" data-touch-strength="<?php echo esc_attr($touchStrength) ?>"></div>

    <?php    } 
        }
}



function naylaBarbaAttributes() {
    
       $option = get_option('pe-redux');
    

      global $wp_query;
  $id = $wp_query->post->ID;

    if ($option['page_transitions_active']) {
        
        echo 'data-barba="container"';
        
        if ($wp_query->post->post_type === 'portfolio') {
            $headerStyle = get_field('project-header-style' , $id);
            
            echo 'data-barba-namespace="project-' . $headerStyle . '"';
        }
        
    } else {
        
        return;
    }
    
    
}


function naylaPageTransitions() { 
     $option = get_option('pe-redux');
    
   global $wp_query;
  $id = $wp_query->post->ID;
    
    $postType = get_post_type($id);
    
            if ($postType === 'portfolio') {
            
      if (get_field('project_page_layout' , $id)) {
        
        
        if (get_field('project_page_layout' , $id) === 'default') {
            
              $pageLayout = $option['site_layout'];
        } else {
            
            $pageLayout = get_field('project_page_layout' , $id);
        }
    
    } else if ($option['site_layout']) {
        
         $pageLayout = $option['site_layout'];
        
    } else {
          
      $pageLayout = 'dark';
        
      }
            
            
        } else {
            
                if (get_field('page_layout' , $id)) {
        
        
        if (get_field('page_layout' , $id) === 'default') {
            
              $pageLayout = $option['site_layout'];
        } else {
            
            $pageLayout = get_field('page_layout' , $id);
        }
    
    } else if ($option['site_layout']) {
        
         $pageLayout = $option['site_layout'];
        
    } else {
          
      $pageLayout = 'dark';
        
      }
            
        }
    
    
    if (get_field('transition_type') && get_field('transition_type') !== 'default') {
        
        $type = get_field('transition_type');
    } else {
        
         $type = $option['transition_type'];
    }
    
    if (get_field('transition_direction') && get_field('transition_direction') !== 'default') {
        
        $direction = get_field('transition_direction');
    } else {
        
         $direction = $option['transition_direction'];
    }
    
    if (get_field('caption_position') && get_field('caption_position') !== 'default') {
        
        $position = get_field('caption_position');
    } else {
        
         $position = $option['capt_position'];
    }
    
    if (get_field('caption_animation_type') && get_field('caption_animation_type') !== 'defaults') {
        
        $captType = get_field('caption_animation_type');
    } else {
        
          $captType = $option['capt_type'];
    }
    
    if (get_field('transition_caption')) {
        
        $caption = get_field('transition_caption');
    } else {
        
         $caption = $option['transition_caption'];
    }
    
    $classes = $type .' '. $direction .' '. $position .' '. $captType;
    $dataBg = '';
    
    
         if(get_field('trans_overlay_color')) {
            
             $dataBg = 'data-bg="' . get_field('trans_overlay_color') . '"'; 
             
        } else if ($option['transition_background']){

             
               $dataBg = 'data-bg="' . $option['transition_background'] . '"'; 
        } else {
            
            if ($pageLayout === 'dark') {
                
                    if (get_field('secondary_light_background' , $id)) {
                        
                         $dataBg = 'data-bg="' . get_field('secondary_light_background') . '"'; 
        
            } else if ($option['body_secondary_background_dark']) {

                        
                         $dataBg = 'data-bg="' . $option['body_secondary_background_dark'] . '"'; 
        }

                
            } else if ($pageLayout === 'light') {
                
                        
    if (get_field('secondary_background' , $id)) {
        
        $dataBg = 'data-bg="' .  get_field('secondary_background') . '"'; 
        
    } else if ($option['body_secondary_background_light']) {
        
            
        
              $dataBg = 'data-bg="' . $option['body_secondary_background_light'] . '"'; 
    }
             
            }
          
        }
    
    
        if ($option['page_transitions_active']) { ?>

    <div class="nayla-page-transition <?php echo esc_attr($classes); ?>" <?php echo $dataBg ; ?>>


        <?php  $x = 0;
        
            if ($type === 'columns') {
                
             for ($x = 0; $x <= 4; $x++) {
           
                 echo '<span class="trans-col"></span>';
                 
             }
                
            }  else if ($type === 'block') {
                
                  for ($x = 0; $x <= 10; $x++) {
                      
                      echo '<span class="transition-block"><span></span></span>';
                
                  };
                
            } else if ( $type === 'overlay') {
                
                
                 echo '<span class="transition-overlay"></span>';
            }
        
        ?>

        <!-- Caption -->
        <div class="page-transition-caption">

            <?php echo esc_html($caption); ?>

        </div>
        <!--/ Caption -->

    </div>

    <?php  } else {
        
        return;
    }

    
}

add_action( 'woocommerce_after_single_product', 'nayla_output_related_products', 25);

function nayla_output_related_products(){
    
	$args = array( 
        'posts_per_page' => 4,  
        'orderby' => 'rand' 
 ); 
   	woocommerce_related_products( apply_filters( 'nayla_output_related_products_args', $args ) ); 
}

add_filter( 'post_thumbnail_html', 'remove_thumbnail_dimensions', 10, 3 );

function remove_thumbnail_dimensions( $html, $post_id, $post_image_id ) {
    $html = preg_replace( '/(width|height)=\"\d*\"\s/', "", $html );
    return $html;
}

/**
 * Check if WooCommerce is activated
 */
if ( ! function_exists( 'is_woocommerce_activated' ) ) {
	function is_woocommerce_activated() {
		if ( class_exists( 'woocommerce' ) ) { return true; } else { return false; }
	}
}


add_filter('wp_nav_menu_objects', 'my_wp_nav_menu_objects', 10, 2);

function my_wp_nav_menu_objects( $items, $args ) {
    
    // loop
    foreach( $items as $key => $item ) {

        $hasChildren = get_field('add_sub' , $item);
       
        if ($hasChildren) {
            
             $template = get_field('select_template' , $item);
             $id = $template->ID;
            
            $items[$key]->classes[] = 'nayla-has-children';
            $items[$key]->classes[] = 'sub_id_' . $id;
            
            
            
             echo '<div class="nayla-sub-menu-wrap sub_' . $id . '">' . \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($id) . '</div>';   
        }   
    }
    // return
    return $items;
    
}
