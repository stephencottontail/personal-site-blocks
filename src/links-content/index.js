import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

registerBlockType( metadata, {
	edit: () => {
		return <p>Hello from the editor!</p>;
	},
	save: () => {
		return null;
	},
} );
