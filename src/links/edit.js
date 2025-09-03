import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Edit = ( props ) => {
	const { attributes } = props;
	const { links } = attributes;
	const blockProps = useBlockProps();
	const LINKS_TEMPLATE = [ [ 'psb/links-content', {} ] ];

	return (
		<div { ...blockProps }>
			<InnerBlocks
				defaultBlock={ [ 'psb/links-content', {} ] }
				template={ LINKS_TEMPLATE }
			/>
		</div>
	);
};

export default Edit;
