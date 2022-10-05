import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from '../components/contact/Contact';
import Services from '../components/services/Services';
import Navbar from '../components/Navbar';
import * as Paths from '../constants/routes';

import Home from '../components/home/Home';

import Box from '../components/Box';
import Footer from '../components/Footer';

const Pages = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path={Paths.HOMEPATH} element={<Home />} />
					<Route path={Paths.SERVICESPATH} element={<Services />}></Route>
					<Route path={Paths.CONTACTPATH} element={<Contact />}></Route>
					<Route path='*' element={<Home />} />
				</Routes>
				<Box />
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default Pages;
