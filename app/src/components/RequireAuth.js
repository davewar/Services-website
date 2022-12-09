import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/user';

const RequireAuth = ({ allowedRoles }) => {
	const { role, accessToken } = useContext(UserContext); //global user

	const found = allowedRoles?.includes(role);

	const location = useLocation();

	// console.log('is the users role found in the allowed roles ? ', found);
	// console.log('Allowed roles are: ', allowedRoles);
	// console.log('access =', accessToken);
	// console.log('role =', role);

	if (accessToken && found) {
		return <Outlet />;
	}

	if (accessToken) {
		return <Navigate to='/unauthorized' state={{ from: location }} replace />;
	} else {
		return <Navigate to='/' />; //home page
	}
};

export default RequireAuth;
