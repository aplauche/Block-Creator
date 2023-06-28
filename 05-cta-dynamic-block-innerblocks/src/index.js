/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 */

import { registerBlockType } from '@wordpress/blocks';

import {  InnerBlocks } from '@wordpress/block-editor'


import './style.scss';


import Edit from './edit';
import metadata from './block.json';


registerBlockType( metadata.name, {
	edit: Edit,
	save: props => {
		return <InnerBlocks.Content />
	}
});
