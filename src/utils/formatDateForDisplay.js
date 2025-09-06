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

export default formatDateForDisplay;
