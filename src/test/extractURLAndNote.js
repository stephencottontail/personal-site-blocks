import extractURLAndNote from '../utils/extractURLAndNote.js';

const testCases = [
	{
		content:
			'<a href="https://www.apple.com/">https://www.apple.com/</a> (Apple)',
		want: { link: 'https://www.apple.com/', note: 'Apple' },
	},
	{
		content:
			'<a href="https://www.google.com/">https://www.google.com/</a>',
		want: { link: 'https://www.google.com/', note: null },
	},
];

test.each( testCases )(
	'.extractURLAndNote($content)',
	( { content, want } ) => {
		expect( extractURLAndNote( content ) ).toEqual( want );
	}
);
