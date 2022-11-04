import React from 'react';
import './services.css';
import Box from '../Box';

const Services = () => {
	return (
		<>
			<main className='main-container services-main'>
				<section>
					<article className='intro-services'>
						<h1 className='services-title'>Welcome to DW Servicing</h1>
						<p>
							Our goal is to make your life easier by creating, designing new or
							amending your existing proceseses in order to streamline, increase
							efficiency, time save, accurate reporting and eliminate manual
							processing errors.
						</p>
						<p>
							Tell us what you need and let us show you how we can help. We
							provide a free quotation with no obligation for all our services.
						</p>
					</article>
				</section>

				<section className='services-container'>
					<article className='services-item'>
						<div className='service-split'>
							<h3 className='service-title'>Excel</h3>
							<div className='services-image'>
								<img src='images/xls-icon-3379.png' alt='excel' />
							</div>
						</div>
						<div className='services-text'>
							<ul>
								<li>Design and creation of spreadsheet business tools</li>
								<li>Templates and Reports</li>
								<li>Complex formulas and functions</li>
								<li>Add / Amend Pivot tables and Graphs</li>
								<li>Add / Amend VBA and Macros</li>
								<li>Automation</li>
								<li>Debugging errors and issues with existing process</li>
								<li>Dashboard Design & Implementation</li>
								<li>Plus more</li>
							</ul>
						</div>
					</article>

					<article className='services-item'>
						<div className='service-split'>
							<h3 className='service-title'>Access</h3>
							<div className='services-image'>
								<img src='images/access.png' alt='access' />
							</div>
						</div>
						<div className='services-text'>
							<ul>
								<li>Design and creation of new Access databases</li>
								<li>
									Add new functionality to existing databases, new reports and
									forms for data entry
								</li>
								<li>Convert Excel spreadsheets to Access databases</li>
								<li>Optimise databases that have become slow over time</li>
								<li>Connect to new data sources</li>
								<li>Automation and Macros</li>
								<li>Debugging errors and issues with existing process</li>
							</ul>
						</div>
					</article>

					<article className='services-item'>
						<div className='service-split'>
							<h3 className='service-title'>BI Tools</h3>
							<div className='services-image'>
								<img src='images/power-bl.png' alt='bi' />
							</div>
						</div>
						<div className='services-text'>
							<ul>
								<li>
									Design new / amend Reports, dashboards and data visualisations
								</li>
								<li>Add / Amend functionality - Extract, Transform and Load</li>
							</ul>
						</div>
					</article>

					<article className='services-item'>
						<div className='service-split'>
							<h3 className='service-title'>Website Dev</h3>
							<div className='services-image'>
								<img src='images/coding.png' alt='bi' />
							</div>
						</div>
						<div className='services-text'>
							<ul>
								<li>Design new / amend websites</li>
								<li>Add / Amend functionality</li>
							</ul>
						</div>
					</article>
				</section>
			</main>
			<Box />
		</>
	);
};

export default Services;
