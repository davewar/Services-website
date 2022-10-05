import React, { useState, useEffect } from 'react';
import Pages from './pages/Pages';
import Loading from './components/Loading';

function App() {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);
	return (
		<div className='App'>
			{isLoading ? <Loading /> : null}
			<Pages />
		</div>
	);
}

export default App;
