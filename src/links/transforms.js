import { createBlock } from '@wordpress/blocks';
import extractURLAndNote from '../utils/extractURLAndNote.js';

const transforms = {
	from: [
		{
			type: 'block',
			isMultiBlock: false,
			blocks: [ 'core/list' ],
			// eslint-disable-next-line no-unused-vars
			transform: ( attributes, innerBlocks ) => {
				const originalItems = innerBlocks;
				const linksItems = originalItems.map( ( el ) => {
					const newAttributes = extractURLAndNote(
						el.originalContent
					);

					return createBlock(
						'psb/links-content',
						{
							link: newAttributes.link,
							note: newAttributes.note,
						},
						[]
					);
				} );

				return createBlock( 'psb/links', {}, linksItems );
			},
		},
	],
};

export default transforms;
