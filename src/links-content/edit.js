import {
	BlockControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { ToolbarButton } from '@wordpress/components';
import { Icon, create } from '@wordpress/icons';

const Edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const { link, note } = attributes;
	const blockProps = useBlockProps();

	return (
		<>
			<BlockControls group="other">
				<ToolbarButton
					label="Add New Link Item"
					onClick={ () => console.log( 'hi' ) }
				>
					<Icon icon={ create } size={ 32 } />
				</ToolbarButton>
			</BlockControls>
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
		</>
	);
};

export default Edit;
