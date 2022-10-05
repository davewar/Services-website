import React from 'react';
import * as Paths from '../constants/routes';
import './navbar.css';

import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation(null);

	return (
		<>
			<header>
				<div className='wave-container'>
					<div className='cloud-left'></div>
					<div>
						<img
							className='cloud-right'
							src='images/vector1.svg'
							alt='vector1'
						/>
					</div>
				</div>

				<div className='header-title main-container'>
					<h2 className='title'>DW Servicing</h2>
				</div>
			</header>
			<nav className='navbar main-container '>
				<div className='nav-container'>
					<div className='left'></div>
					<div className='right'>
						<div className='flex-item'>
							{location.pathname !== Paths.HOMEPATH ? (
								<Link className='link-item' to={Paths.HOMEPATH}>
									Home
								</Link>
							) : null}
						</div>
						<div className='flex-item'>
							{location.pathname !== Paths.SERVICESPATH ? (
								<Link className='link-item' to={Paths.SERVICESPATH}>
									Services
								</Link>
							) : null}
						</div>
						<div className='flex-item'>
							{location.pathname !== Paths.CONTACTPATH ? (
								<button className='contactbtn'>
									<Link className='link btn' to={Paths.CONTACTPATH}>
										Contact Us
									</Link>
								</button>
							) : null}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
