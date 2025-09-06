import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit.js';
import formatDateForDisplay from '../utils/formatDateForDisplay.js';

registerBlockType( metadata.name, {
	edit: Edit,
	save: ( props ) => {
		const { attributes } = props;
		const { date } = attributes;
		const blockProps = useBlockProps.save();
		const className = blockProps.className;

		return (
			<div { ...blockProps }>
				{ date && (
					<p className={ `${ className }__date` }>
						{ formatDateForDisplay( date ) }
					</p>
				) }
				<InnerBlocks.Content />
			</div>
		);
	},
} );
