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
import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';

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
export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className='cta-image-container'>
				{attributes.image_url && attributes.image_id ? (
							<img src={attributes.image_url} />
							<button onClick={() => setAttributes({image_url: "", image_id: null})}>Remove</button>
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
				<RichText 
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
				/>
				<RichText 
					tagName='div'
					className='wp-element-button'
					allowedFormats={[]}
					value={attributes.button_text}
					onChange={(button_text) => setAttributes({button_text})}
					placeholder='Button'
				/>
			</div>
		</div>
	);
}
