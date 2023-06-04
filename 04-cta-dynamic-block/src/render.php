<?php
/**
* Dynamic Block Template.
*	@param   array $attributes - A clean associative array of block attributes.
* @param   array $block - All the block settings and attributes.
* @param   string $content - The block inner HTML (usually empty unless using inner blocks).
*/


$heading = $attributes["heading"];
$body = $attributes["body"];
$image_id = $attributes["image_id"];
$url = $attributes["url"];
$text = $attributes["text"];

?>


<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="dcta-image-container">
		<?php echo wp_get_attachment_image( $image_id, "full" ); ?>
	</div>
	<div class="dcta-text-container">
		<h2><?php echo $heading ?></h2>
		<p><?php echo $body ?></p>
		<a href="<?php echo $url ?>" class="wp-element-button">
			<?php echo $text ?>
		</a>
	</div>
</div>
