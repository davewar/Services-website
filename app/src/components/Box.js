import React from 'react';
import './box.css';

const Box = () => {
	return (
		<>
			<section className='main-container'>
				<div className='free-quote'>
					<p>FREE QUOTATION</p>
					<hr />
				</div>
				<div className='box-container'>
					<div className='box '>
						<img className='box-image' src='images/email.png' alt='email' />

						<h3 className='box-title'>1. Contact Us</h3>

						<p className='box-p'>
							Tell us what you need and we will find your solution.
						</p>
					</div>

					<div className='box'>
						<img
							className='box-image'
							src='images/handshake.png'
							alt='handshake'
						/>
						<h3>2. Get an offer</h3>
						<p>
							Once we know exactly what you need, we will provide you with a
							price and estimated time.
						</p>
					</div>

					<div className='box'>
						<img
							className='box-image'
							src='images/fast-delivery.png'
							alt='fast-delivery'
						/>
						<h3>3. Delivery</h3>
						<p>
							On agreement by you on cost and work requirements, we will then
							proceed to build, test and demonstrate. Then its ready for you to
							use.
						</p>
					</div>
				</div>
				<hr />
			</section>
		</>
	);
};

export default Box;
