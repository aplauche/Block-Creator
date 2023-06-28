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
import { __experimentalLinkControl as LinkControl, useBlockProps, RichText, MediaPlaceholder, BlockControls, InspectorControls, InnerBlocks } from '@wordpress/block-editor';

import { ToolbarGroup, PanelBody, SelectControl, ToolbarButton, Popover } from '@wordpress/components'

import { useState } from '@wordpress/element';

import { link } from '@wordpress/icons';

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

	// const [ showLinkPopover, setShowLinkPopover ] = useState( false );
	// const toggleLinkPopover = () => {
	// 		setShowLinkPopover( ( state ) => ! state );
	// };

	const ALLOWED_BLOCKS = [ 'core/buttons', 'core/paragraph', 'core/heading', 'core/list' ];

	const MY_TEMPLATE = [
		['core/heading', {placeholder: "This is the heading"}],
		['core/paragraph', {placeholder: "Lorem Ipsum..."}],
		['core/buttons', {},
			[
				['core/button', {placeholder: "Add Button text..."}],
				['core/button', {placeholder: "Add Button text..."}],
			]
		],
	];



	return (
		<>

			{/* Begin Toolbar Zone */}
			{/* <BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={ link }
						label="Link"
						onClick={toggleLinkPopover}
						isPressed={showLinkPopover}
					/>
				</ToolbarGroup>
				{showLinkPopover && (
					<Popover>
						<LinkControl
							searchInputPlaceholder="Search here..."
							value={ attributes.link }
							onChange={ ( newLink ) => {
								console.log(newLink)
								setAttributes( { link: {...newLink, title: attributes.link.title || ""} } ) }
							}
						>
						</LinkControl>
					</Popover>
				)}
			</BlockControls> */}
			{/* End Toolbar Zone */}

			{/* Begin Sidebar Inspector Zone */}
			<InspectorControls>
				<PanelBody title="Settings">
					<SelectControl 
						label="Layout Variant:"
						onChange={(val) => setAttributes({layout_variant: val})}
						value={attributes.layout_variant}
						options={
							[
								{
									label: "Text Right",
									value: "text-right"
								},
								{
									label: "Text Left",
									value: "text-left"
								}
							]
						}
					/>
				</PanelBody>
			</InspectorControls>
			{/* End Sidebar Inspector Zone */}



			{/* Begin Main Block Zone */}
			<div { ...useBlockProps({className: `variant-${attributes.layout_variant}`}) }>
				<div className='cta-image-container'>
					{attributes.image_url && attributes.image_id ? (
							<>
								<img src={attributes.image_url} />
								<button className="button-remove" onClick={() => setAttributes({image_url: "", image_id: null})}>Remove</button>
							</>
						) : (
								<MediaPlaceholder
										onSelect = {
											( image ) => {
												setAttributes( { image_url: image.url, image_id: image.id } );
											}
										}
										allowedTypes = { [ 'image' ] }
										multiple = { false }
										labels = { { title: 'CTA Image' } }
									>
								</MediaPlaceholder>
						)	
					}
				</div>
				<div className='cta-text-container'>
					{/* <RichText 
						tagName='h2'
						allowedFormats={[]}
						value={attributes.heading}
						onChange={(heading) => setAttributes({heading})}
						placeholder='This is the headline'
					/>
					<RichText 
						tagName='p'
						allowedFormats={[]}
						value={attributes.body}
						onChange={(body) => setAttributes({body})}
						placeholder='This is the body copy'
					/> */}
					<InnerBlocks 
						allowedBlocks={ ALLOWED_BLOCKS } 
						template={MY_TEMPLATE} 
					/>
				</div>
			</div>
			{/* End Main Block Zone */}

		</>
	);
}
