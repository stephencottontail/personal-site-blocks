import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit.js';

registerBlockType( metadata, {
	edit: Edit,
	save: ( props ) => {
		const { attributes } = props;
		const { link, note } = attributes;
		const blockProps = useBlockProps.save();
console.log('tits',blockProps)
		return (
			<div { ...blockProps }>
				<p>{ link }</p>
				{ note && <p>{ note }</p> }
			</div>
		);
	},
} );
