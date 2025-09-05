import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<InnerBlocks
				defaultBlock={ [
					'core/paragraph',
					{ placeholder: 'Lorem ipsum' },
				] }
				directInsert
			/>
		</div>
	);
};

export default Edit;
