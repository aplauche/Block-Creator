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
$link = $attributes["link"];

$layout_variant = $attributes["layout_variant"];

?>


<div <?php echo get_block_wrapper_attributes(["class" => 'variant-' . $layout_variant]); ?>>
	<div class="cta-image-container">
		<?php echo wp_get_attachment_image( $image_id, "full" ); ?>
	</div>
	<div class="cta-text-container">
		<h2><?php echo $heading ?></h2>
		<p><?php echo $body ?></p>
		<a target="<?php echo $link["opensInNewTab"] ? '_blank' : '_self' ?>" href="<?php echo $link["url"] ?>" class="wp-element-button">
			<?php echo $link["title"] ?>
		</a>
	</div>
</div>
