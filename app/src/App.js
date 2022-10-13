import React, { useState, useEffect, useContext } from 'react';
import Pages from './pages/Pages';
import Loading from './components/Loading';
import { UserContext } from './contexts/user';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	const [isLoading, setLoading] = useState(true);
	const { setAccessToken } = useContext(UserContext); //global user

	useEffect(() => {
		setLoading(false);
	}, []);

	useEffect(() => {
		const firstLogin = localStorage.getItem('firstlogin');

		if (firstLogin) {
			const refreshToken = async () => {
				const res = await fetch('/user/refresh_token', {
					credentials: 'include',
				});

				const data = await res.json();

				//get a new acccess token if cookie held
				if (data.accesstoken) {
					setAccessToken(data.accesstoken);
				}
			};

			refreshToken();
		}
	}, []);

	return (
		<div className='App'>
			{/* {isLoading ? <Loading /> : null} */}

			<Pages />
		</div>
	);
}

export default App;
