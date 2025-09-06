import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

const Edit = ( props ) => {
	const { attributes, setAttributes, clientId } = props;
	const { date } = attributes;
	const blockProps = useBlockProps();
	const formatDateForDisplay = ( date ) => {
		const dateObject = new Date( date );
		const options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		return dateObject.toLocaleDateString( 'en-US', options );
	};

	const innerBlockCount = useSelect(
		( select ) => {
			const block = select( 'core/block-editor' ).getBlock( clientId );

			return block ? block.innerBlocks.length : 0;
		},
		[ clientId ]
	);

	useEffect( () => {
		const now = Date.now();

		setAttributes( { date: now } );
	}, [ innerBlockCount, clientId ] );

	return (
		<div { ...blockProps }>
			{ date && <p>{ formatDateForDisplay( date ) }</p> }
			<InnerBlocks
				defaultBlock={ [
					'core/paragraph',
					{ placeholder: 'Lorem ipsum' },
				] }
			/>
		</div>
	);
};

export default Edit;
