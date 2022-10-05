import React from 'react';
import { Circle } from 'better-react-spinkit';

const Loading = () => {
	return (
		<center style={{ placeItems: 'center', height: '100vh' }}>
			<div>
				<Circle color='black' size={60} />
			</div>
		</center>
	);
};

export default Loading;
