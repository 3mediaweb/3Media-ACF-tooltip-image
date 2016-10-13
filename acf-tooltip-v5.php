<?php
global $pagenow;

if ( isset($_GET['post']) && $pagenow == "post.php" || $pagenow == "post-new.php" ) {
	$post_obj = get_post( $_GET['post'] );
	if ( $post_obj->post_type != 'acf-field-group' ) {
		add_action( 'acf/input/admin_enqueue_scripts', 'enqueue_acf_tooltip' );
	}
}

function enqueue_acf_tooltip() {

    wp_enqueue_script( 'acf_tooltip_script', plugin_dir_url( __FILE__ ) . '/js/acf-tooltip-v5.js', array('jquery-qtip') );
    wp_enqueue_style( 'acf_tooltip_css', plugin_dir_url( __FILE__ ) . '/css/acf-tooltip.css' );
    wp_enqueue_script( 'jquery-qtip', plugin_dir_url( __FILE__ ) . '/js/jquery.qtip.min.js' );
	wp_enqueue_style( 'jquery-qtip.js', plugin_dir_url( __FILE__ ) . '/css/jquery.qtip.min.css' );
	wp_enqueue_style( 'dashicons' );
	
}

?>