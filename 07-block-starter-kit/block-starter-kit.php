<?php
/**
 * Plugin Name:       07 - Block Starter Kit
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-starter-kit
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_block_starter_kit_block_init() {
	$block_directories = glob(__DIR__ . "/build/*", GLOB_ONLYDIR);

	foreach ($block_directories as $block) {
		register_block_type( $block );
	}

	// register_block_type( __DIR__ . '/build/simple-block-example' );
	// register_block_type( __DIR__ . '/build/demo-slideshow' );
}
add_action( 'init', 'create_block_block_starter_kit_block_init' );


// ADD BLOCK CATEGORIES TO TOP OF INSERTER
function custom_block_category( $categories, $post ) {
	return array_merge(
			array(
					array(
							'slug' => 'fsd-custom-blocks',
							'title' => 'FSD Custom Blocks',
					),
			),
			$categories
	);
}
add_filter( 'block_categories_all', 'custom_block_category', 10, 2);