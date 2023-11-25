<?php 


function fsdacf_register_all_blocks() {
	$block_directories = glob(PLUGIN_DIR . "/blocks/*", GLOB_ONLYDIR);

	foreach ($block_directories as $block) {
		register_block_type( $block );
	}
}
add_action( 'init', 'fsdacf_register_all_blocks' );