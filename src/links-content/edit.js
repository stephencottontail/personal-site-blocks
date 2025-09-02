import {
	BlockControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { ToolbarButton } from '@wordpress/components';

const Edit = () => {
	const props = useBlockProps();

	return (
		<>
			<BlockControls group="other">
				<ToolbarButton
					label="Add link item"
					onClick={ () => console.log( 'hi' ) }
				>
					+
				</ToolbarButton>
			</BlockControls>
			<div { ...props }>
				<RichText
					tagName="p"
					placeholder="Put a URL here!"
					value=""
					onChange={ ( value ) => {
						console.log( value );
					} }
				/>
				<RichText
					tagName="p"
					placeholder="Optionally write a note!"
					value=""
					onChange={ ( value ) => {
						console.log( value );
					} }
				/>
			</div>
		</>
	);
};

export default Edit;


