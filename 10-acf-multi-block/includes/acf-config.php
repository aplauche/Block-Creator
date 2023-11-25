<?php
/**
 * ACF Set custom load and save JSON points.
 */

add_filter( 'acf/json/load_paths', 'fsdacf_json_load_paths' );
add_filter( 'acf/settings/save_json/type=acf-field-group', 'fsdacf_json_save_path_field_groups' );
add_filter( 'acf/settings/save_json/type=acf-ui-options-page', 'fsdacf_json_save_path_option_pages' );
add_filter( 'acf/settings/save_json/type=acf-post-type', 'fsdacf_json_save_path_post_types' );
add_filter( 'acf/settings/save_json/type=acf-taxonomy', 'fsdacf_json_save_path_taxonomies' );
add_filter( 'acf/json/save_file_name', 'fsdacf_json_filename', 10, 3 );


/**
 * Set a custom ACF JSON load path.
 *
 * @link https://www.advancedcustomfields.com/resources/local-json/#loading-explained
 *
 * @param array $paths Existing, incoming paths.
 * @return array $paths New, outgoing paths.
 *
 * @since 0.1.1
 */
function fsdacf_json_load_paths( $paths ) {

	$paths[] = PLUGIN_DIR . '/acf-json/field-groups';
	$paths[] = PLUGIN_DIR . '/acf-json/options-pages';
	$paths[] = PLUGIN_DIR . '/acf-json/post-types';
	$paths[] = PLUGIN_DIR . '/acf-json/taxonomies';

	return $paths;
}

/**
 * Set custom ACF JSON save point for
 * ACF generated post types, field groups, taxonomies, and options pages.
 *
 * @link https://www.advancedcustomfields.com/resources/local-json/#saving-explained
 *
 * @return string $path New, outgoing path.
 *
 * @since 0.1.1
 */
function fsdacf_json_save_path_post_types() {
	return PLUGIN_DIR . '/acf-json/post-types';
}

function fsdacf_json_save_path_field_groups() {
	return PLUGIN_DIR . '/acf-json/field-groups';
}

function fsdacf_json_save_path_taxonomies() {
	return PLUGIN_DIR . '/acf-json/taxonomies';
}

function fsdacf_json_save_path_option_pages() {
	return PLUGIN_DIR . '/acf-json/options-pages';
}

/**
 * Customize the file names for each file.
 *
 * @link https://www.advancedcustomfields.com/resources/local-json/#saving-explained
 *
 * @param string $filename  The default filename.
 * @param array  $post      The main post array for the item being saved.
 *
 * @return string $filename
 *
 * @since  0.1.1
 */
function fsdacf_json_filename( $filename, $post ) {
	$filename = str_replace(
		array(
			' ',
			'_',
		),
		array(
			'-',
			'-',
		),
		$post['title']
	);

	$filename = strtolower( $filename ) . '.json';

	return $filename;
}