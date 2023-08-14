<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php echo $block->context['menu/menu_style'] ?>

<?php switch ($block->context['menu/menu_style']) {
	case 'minimal': ?>

		<div <?php echo get_block_wrapper_attributes(["class" => "menu-item--minimal"]); ?>>
			<h5><?php echo $attributes['name'] ?></h5>
			<p>- <?php echo round($attributes['price']) ?> - </p>
		</div>

	<?php break;

	default: ?>

		<div <?php echo get_block_wrapper_attributes(["class" => "menu-item--card"]); ?>>
			<div class="menu-item__image-container">
				<img src="<?php echo $attributes["image_url"] ?>" alt="">
			</div>
			<div class="menu-item__text-container">
				<h5><?php echo $attributes['name'] ?></h5>
				<p>$<?php echo $attributes['price'] ?></p>
			</div>
		</div>

	<?php break;
}


?>
