<?php
/**
 * Example block.
 *
 * @param array  $block The block settings and attributes.
 * @param string $content The block inner HTML (empty).
 * @param bool   $is_preview True during backend preview render.
 * @param int    $post_id The post ID the block is rendering content against.
 *                     This is either the post ID currently being displayed inside a query loop,
 *                     or the post ID of the post hosting this block.
 * @param array $context The context provided to the block by the post or it's parent block.
 */




$block_content = get_field( 'block_content' );

?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>

	<div>
		<?php echo esc_html( $block_content ); ?>
	</div>

</div>
