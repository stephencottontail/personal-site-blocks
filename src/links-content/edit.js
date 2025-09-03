import { RichText, useBlockProps } from '@wordpress/block-editor';

const Edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const { link, note } = attributes;
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<RichText
				tagName="p"
				placeholder="URL"
				value={ link }
				identifier={ link }
				disableLineBreaks={ true }
				onChange={ ( value ) => {
					setAttributes( { link: value } );
				} }
			/>
			<RichText
				tagName="p"
				placeholder="Note (optional)"
				value={ note }
				identifier={ note }
				disableLineBreaks={ true }
				onChange={ ( value ) => {
					setAttributes( { note: value } );
				} }
			/>
		</div>
	);
};

export default Edit;
