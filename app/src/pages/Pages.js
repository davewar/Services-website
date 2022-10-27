import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from '../components/contact/Contact';
import Services from '../components/services/Services';
import Navbar from '../components/Navbar';
import * as Paths from '../constants/routes';

import Home from '../components/home/Home';

import Footer from '../components/Footer';

import Login from '../components/accounts/Login';
import Dashboard from '../components/products/Dashboard';

import ResetPassword from '../components/accounts/ResetPassword';
import ActivateAccount from '../components/accounts/ActivateAccount';
import Register from '../components/accounts/Register';
import ForgotPassword from '../components/accounts/ForgotPassword';
import Error from '../components/Error';

const Pages = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path={Paths.HOMEPATH} element={<Home />} />
					<Route path={Paths.SERVICESPATH} element={<Services />}></Route>
					<Route path={Paths.CONTACTPATH} element={<Contact />}></Route>

					{/* admin */}
					<Route path={Paths.CREATEACCOUNT} element={<Register />}></Route>
					<Route path={Paths.LOGINPATH} element={<Login />}></Route>
					<Route
						path={Paths.FORGOTPASSWORD}
						element={<ForgotPassword />}
					></Route>
					<Route
						path={Paths.RESETPASSWORD + '/:id'}
						element={<ResetPassword />}
					></Route>
					<Route
						path={Paths.ACTIVATEACCOUNT + '/:id'}
						element={<ActivateAccount />}
					></Route>

					<Route path={Paths.DASHBOARDPATH} element={<Dashboard />}></Route>

					{/* <Route path='*' element={<Home />} /> */}
					<Route path='*' element={<Error />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	);
};

export default Pages;
