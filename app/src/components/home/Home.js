import React from 'react';
import './home.css';

const Home = () => {
	return (
		<>
			<main className='main-container'>
				<section>
					<h3 className='home-title'>
						Technical solutions for your business needs
					</h3>

					<div className='specials'>
						<p>
							Specialities : Excel, Access, VBA, SQL, Power Query, Power Pivot,
							Power View, Business Objects, Qlikview and Website Development.
						</p>
					</div>
					<div className='secondary-title'>
						<h5>We can help make life easier for you</h5>
						<ul>
							<li>
								<h5>* Design</h5>
							</li>
							<li>
								<h5>* Automation</h5>
							</li>
							<li>
								<h5>* Streamling</h5>
							</li>
							<li>
								<h5>* Reporting</h5>
							</li>
							<li>
								<h5>* Reduction in manual errors</h5>
							</li>
							<li>
								<h5>* Time saving efficiencies</h5>
							</li>
						</ul>
						<h5>Small or large scale projects accepted.</h5>
					</div>

					<div className='image-container'>
						<img className='image-pc' src='images/sysadmin_03.jpg' alt='pc' />
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
