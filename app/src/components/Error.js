import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
	return (
		<center>
			<h2>Page not found</h2>
			<Link to='/'>Back Home</Link>
		</center>
	);
};

export default Error;
