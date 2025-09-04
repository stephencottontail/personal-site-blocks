const extractURLAndNote = ( content ) => {
	const regexp = /<a.*>(.+)<\/a.*>(?: .*\(([^)]*)\))?/g;
	const matches = regexp.exec( content );

	return {
		link: matches[1],
		note: matches[2] || null
	};
};

export default extractURLAndNote;
