import {
	BlockControls,
	InnerBlocks,
	store as blockEditorStore,
	useBlockProps,
} from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { ToolbarButton } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { Icon, create } from '@wordpress/icons';

const Edit = ( props ) => {
	const { clientId } = props;
	const blockProps = useBlockProps();
	const { insertBlock } = useDispatch( blockEditorStore );
	const LINKS_BLOCK_NAME = 'psb/links-content';
	const LINKS_TEMPLATE = [ [ LINKS_BLOCK_NAME, {} ] ];

	const addLinksContentBlock = () => {
		const newLinksContent = createBlock( LINKS_BLOCK_NAME );

		insertBlock( newLinksContent, undefined, clientId );
	};

	return (
		<>
			<BlockControls group="other">
				<ToolbarButton
					label="Add New Link Item"
					onClick={ addLinksContentBlock }
				>
					<Icon icon={ create } size={ 32 } />
				</ToolbarButton>
			</BlockControls>
			<div { ...blockProps }>
				<InnerBlocks
					defaultBlock={ [ 'psb/links-content', {} ] }
					template={ LINKS_TEMPLATE }
				/>
			</div>
		</>
	);
};

export default Edit;
