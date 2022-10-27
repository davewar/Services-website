import React, { useContext } from 'react';
import * as Paths from '../constants/routes';
import './navbar.css';
import { UserContext } from '../contexts/user';

import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation(null);

	const {
		isLogged,
		setIsLogged,
		setIsAdmin,
		setAccessToken,
		setUser,
	} = useContext(UserContext);

	const logUserOut = async () => {
		try {
			//remove cookie
			await fetch('user/logout');
			//remove ls
			localStorage.removeItem('firstlogin');

			setIsLogged(false);
			setIsAdmin(false);
			setAccessToken('');
			setUser('');
		} catch (err) {
			console.log(err);
		}
	};

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
					<h1 className='title'>DW Servicing</h1>
					<div className=''>
						{!isLogged ? (
							<Link className='link-item underline' to={Paths.LOGINPATH}>
								Log In
							</Link>
						) : null}

						{isLogged ? (
							<Link
								className='link-item underline'
								onClick={logUserOut}
								to={Paths.HOMEPATH}
							>
								Log Out
							</Link>
						) : null}
					</div>
				</div>

				<nav className='navbar main-container '>
					<div className='nav-container'>
						<div className='left'></div>
						<div className='right'>
							<div className='flex-item'>
								{location.pathname !== Paths.HOMEPATH ? (
									<Link className='link-item underline' to={Paths.HOMEPATH}>
										Home
									</Link>
								) : null}
							</div>
							<div className='flex-item'>
								{location.pathname !== Paths.SERVICESPATH ? (
									<Link className='link-item underline' to={Paths.SERVICESPATH}>
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
			</header>
		</>
	);
};

export default Navbar;
