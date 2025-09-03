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
		const className = blockProps.className;

		return (
			<div { ...blockProps }>
				<p className={ `${ className }__link` }>{ link }</p>
				{ note && <p className={ `${ className }__note` }>{ note }</p> }
			</div>
		);
	},
} );
