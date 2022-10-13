import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from '../components/contact/Contact';
import Services from '../components/services/Services';
import Navbar from '../components/Navbar';
import * as Paths from '../constants/routes';

import Home from '../components/home/Home';

import Footer from '../components/Footer';

import Login from '../components/accounts/Login';
import Dashboard from '../components/accounts/Dashboard';
import ResetPassword from '../components/accounts/ResetPassword';

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
					<Route path={Paths.LOGINPATH} element={<Login />}></Route>
					<Route
						path={Paths.RESETPASSWORDPATH}
						element={<ResetPassword />}
					></Route>
					<Route path={Paths.DASHBOARDPATH} element={<Dashboard />}></Route>

					<Route path='*' element={<Home />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	);
};

export default Pages;
