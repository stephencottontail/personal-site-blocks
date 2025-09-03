<?php
/**
 * Plugin Name: Personal Site Blocks
 * Author: Stephen Dickinson <stephencottontail@me.com>
 * Description: A collection of blocks for my personal site
 * Version: 1.0.0
 *
 * @package personal-site-blocks
 */

if ( ! defined( 'PSB_PLUGIN_DIR' ) ) {
	define( 'PSB_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'PSB_PLUGIN_URL' ) ) {
	define( 'PSB_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'PSB_VERSION' ) ) {
	define( 'PSB_VERSION', '1.0.0' );
}

add_action( 'init', function() {
	register_block_type( PSB_PLUGIN_DIR . '/build/links' );
	register_block_type( PSB_PLUGIN_DIR . '/build/links-content' );
} );
