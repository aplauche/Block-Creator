/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const ALLOWED_BLOCKS = [ 'fsd/dish' ];

	const TEMPLATE = [
    [ 'fsd/dish', {} ],
    [ 'fsd/dish', {} ]
	];

	
	return (
		<>
		<div { ...useBlockProps() }>
			<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} orientation="horizontal" />
		</div>

			{/* Begin Sidebar Inspector Zone */}
			<InspectorControls>
			<PanelBody title="Settings">
				<SelectControl 
					label="Menu Style:"
					onChange={(val) => setAttributes({menu_style: val})}
					value={attributes.menu_style}
					options={
						[
							{
								label: "Card",
								value: "card"
							},
							{
								label: "Minimal",
								value: "minimal"
							}
						]
					}
				/>
			</PanelBody>
		</InspectorControls>
		{/* End Sidebar Inspector Zone */}

		</>
	)
}
