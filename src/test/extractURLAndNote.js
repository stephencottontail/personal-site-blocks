import extractURLAndNote from '../utils/extractURLAndNote.js';

test( 'Extract URL and an optional note from a block', () => {
	const content =
		'<a href="https://www.apple.com/">https://www.apple.com/</a> (Apple)';
	const got = extractURLAndNote( content );
	const want = {
		link: 'https://www.apple.com/',
		note: 'Apple',
	};

	expect( got ).toEqual( want );
} );
