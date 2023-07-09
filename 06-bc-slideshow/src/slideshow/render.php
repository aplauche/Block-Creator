<div <?php echo get_block_wrapper_attributes(); ?>>

	<div 
		class="splide" 
		data-interval="<?php echo $attributes["interval"] ?>" 
		<?php /* Alternate approach:  data-splide='{"interval": <?php echo $attributes["interval"] * 1000 ?>}' */ ?>
	>
		<div class="splide__track">
			<ul class="splide__list">
				<?php echo $content; ?>
			</ul>
		</div>
	</div>

</div>
