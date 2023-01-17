import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

const ProjectsNav = ({ children }) => {
	return (
		<div id='project'>
			<div className='main-container'>
				<div className='nav-container project-nav'>
					<div className='flex-item'>
						<Link
							className='link-item underline'
							to='/projects/all'
							aria-label='link to all projects page'
						>
							All Projects
						</Link>
					</div>
					<div className='flex-item'>
						<Link
							className='link-item underline'
							to='/projects/create'
							aria-label='link to create project page'
						>
							Create Project
						</Link>
					</div>
					<div className='flex-item'>
						<Link
							className='link-item underline'
							to='/projects/customer_create'
							aria-label='link to create client page'
						>
							Create Customer
						</Link>
					</div>
					<div className='flex-item'>
						<Link
							className='link-item underline'
							to='/projects/customer_amend'
							aria-label='link to amend client page'
						>
							Amend Customer
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsNav;
