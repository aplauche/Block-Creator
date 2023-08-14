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
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import {  TextControl } from '@wordpress/components'

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
export default function Edit({attributes, setAttributes, context}) {



	
	return (
		<>
			<div { ...useBlockProps() }>
					{context['menu/menu_style'] === 'card' && (
						<div className='dish-image-container'>
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
												labels = { { title: 'Dish Image' } }
											>
										</MediaPlaceholder>
								)	
							}
						</div>
					)}
					<div className='dish-text-container'>
							<TextControl
								label="Name"
								value={ attributes.name }
								onChange={ ( value ) => setAttributes({name: value}) }
						/>
							<TextControl
								label="Price"
								type='number'
								value={ attributes.price }
								onChange={ ( value ) => setAttributes({price: value}) }
						/>
					</div>
			</div>
		</>
	
	);
}