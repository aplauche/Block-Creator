<?php
/**
 * ACF Call to action Block template.
 *
 * @param array $block The block settings and attributes.
 * @param string $content Inner blocks content if jsx is enabled
 * @param boolean $is_preview True during preview render
 * @param array $context any context variables from parent blocks if applicable
 */


// Load values and assign defaults.

$layout_variant = get_field("layout_variant");
$image = get_field("image");
// $heading = get_field("heading");
// $body = get_field("body");
// $link = get_field("link");


$allowedBlocks = [ 'core/buttons', 'core/paragraph', 'core/heading', 'core/list' ];

$template = [
    ['core/heading', ["placeholder"=> "This is the heading"]],
    ['core/paragraph', ["placeholder" =>  "Lorem Ipsum..."]],
    ['core/buttons', [],
        [
            ['core/button', ["placeholder" => "Add Button text..."]],
            ['core/button', ["placeholder" => "Another Button..."]],
        ]
    ],
];

?>

<div <?php echo get_block_wrapper_attributes(["class" => 'acf-cta-block variant-' . $layout_variant]); ?>>
	<div class="cta-image-container">
		<?php echo wp_get_attachment_image( $image, "full" ); ?>
	</div>
	<div class="cta-text-container">
        <InnerBlocks 

        />
	</div>
</div>

<?php 

/*

		<h2><?php echo esc_html($heading) ?></h2>
		<p><?php echo esc_html($body) ?></p>
    <?php if(!empty($link)): ?>
		<a target="<?php echo esc_attr($link["target"]) ?>" href="<?php echo esc_attr($link["url"]) ?>" class="wp-element-button">
			<?php echo esc_html($link["title"]) ?>
		</a>
    <?php endif; ?>
*/

?>