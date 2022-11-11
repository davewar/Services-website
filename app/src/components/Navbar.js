import React, { useContext } from 'react';
import * as Paths from '../constants/routes';
import './navbar.css';
import { UserContext } from '../contexts/user';

import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation(null);

	const { isLogged, setIsLogged, setIsAdmin, setAccessToken, setUser } =
		useContext(UserContext);

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
				<img className='cloud-img' src='images/vector1.svg' alt='vector1' />

				<div className='header-title main-container'>
					<h1 className='title'>DW-Serv</h1>
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
									<Link
										className='link-item underline'
										to={Paths.HOMEPATH}
										aria-label='link to home website page'
									>
										Home
									</Link>
								) : null}
							</div>
							<div className='flex-item'>
								{location.pathname !== Paths.SERVICESPATH ? (
									<Link
										className='link-item underline'
										to={Paths.SERVICESPATH}
										aria-label='link to Services website page'
									>
										Services
									</Link>
								) : null}
							</div>
							<div className='flex-item'>
								{location.pathname !== Paths.CONTACTPATH ? (
									<button className='contactbtn'>
										<Link
											className='link btn'
											to={Paths.CONTACTPATH}
											aria-label='link to contact us website page'
										>
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
