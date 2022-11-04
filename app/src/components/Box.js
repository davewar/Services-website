import React from 'react';
import './box.css';

const Box = () => {
	return (
		<>
			<section className='main-container'>
				<div className='free-quote'>
					<p>Free Quotation</p>
					<hr />
				</div>
				<div className='box-container'>
					<div className='box '>
						<img className='box-image' src='images/email.png' alt='email' />

						<p className='box-title'>1. Contact Us</p>

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
						<p className='box-title'> 2. Get an offer</p>
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
						<p className='box-title'>3. Delivery</p>
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
