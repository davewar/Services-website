import React from 'react';

import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<center>
			<h1>Welcome</h1>
			<br />
			<p>You are logged in!</p>

			<br />
			<Link to='/emails'>Emails</Link>
			<br />
			<Link to='/projects'>Projects</Link>
			<br />
			<Link to='/users'>Users</Link>
			<br />
			{/* <Link to='/admin'>Admin</Link> */}
			<br />
		</center>
	);
};

export default Dashboard;
