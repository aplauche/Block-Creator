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

import {PanelBody, RangeControl } from '@wordpress/components'

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

	const ALLOWED_BLOCKS = [ 'create-block/slide' ];

	const TEMPLATE = [
    [ 'create-block/slide', {} ],
    [ 'create-block/slide', {} ]
	];

	return (
		<>

			<div { ...useBlockProps() }>
				<p>Slideshow:</p>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} orientation="horizontal" />
			</div>
			<InspectorControls>
				<PanelBody title="Slideshow Settings">
					<RangeControl
						label="Slide Interval (secs)"
						help="Select how long each slide of the carousel is shown in seconds"
						max={12}
						min={1}
						step={1}
						value={attributes.interval}
						onChange={(val) => { setAttributes({interval: val})}}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
