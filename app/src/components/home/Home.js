import React from 'react';
import Box from '../Box';
import './home.css';

const Home = () => {
	return (
		<>
			<main className='main-container'>
				<section>
					<h2 className='home-title'>
						Technical solutions for your business needs
					</h2>

					<div className='secondary-title'>
						<p>We can help make life easier for you</p>
						<ul>
							<li>Design</li>
							<li>Automation</li>
							<li>Streamling</li>
							<li>Reporting</li>
							<li>Reduction in manual errors</li>
							<li>Time saving efficiencies</li>
						</ul>
						<p>Small or large scale projects accepted.</p>
					</div>

					<div className='specials'>
						<p>
							Specialities : Excel, Access, VBA, SQL, Power Query, Power Pivot,
							Power View, Business Objects, Qlikview and Website Development.
						</p>
					</div>

					<div className='image-container'>
						<img className='image-pc' src='images/sysadmin_03.jpg' alt='pc' />
					</div>
				</section>
			</main>
			<Box />
		</>
	);
};

export default Home;
