import React from 'react';
import { Link } from 'react-router-dom';
import * as Paths from '../constants/routes';
import './footer.css';

const scrollToTop = () => {
	window.scrollTo(0, 0);
};

const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div className='main-container'>
					<div className='footer-box'>
						<h3>Contact us today for a free consultation & quote</h3>
						<p>What are you waiting for?</p>

						<button className='contactbtn'>
							<div onClick={scrollToTop}>
								<Link className='link btn ' to={Paths.CONTACTPATH}>
									Contact Us
								</Link>
							</div>
						</button>

						<h1 className='footer-title'>DW Servicing</h1>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
