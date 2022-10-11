import React from 'react';
import { Link } from 'react-router-dom';
import * as Paths from '../constants/routes';
import './footer.css';

const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div className='main-container'>
					<div className='footer-box'>
						<h5>Contact us today for a free consultation & quote</h5>
						<p>What are you waiting for?</p>

						<button className='contactbtn'>
							<Link className='link btn ' to={Paths.CONTACTPATH}>
								Contact Us
							</Link>
						</button>

						<h5>DW Servicing</h5>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
