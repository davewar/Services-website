import React, { useState } from 'react';
import './contact.css';

import Seo from '../seo/Seo';
// seo data
import { metaData } from '../../constants/metaData';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [comment, setComment] = useState('');
	// inputs not correct
	const [nameErr, setNameErr] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [commentErr, setCommentErr] = useState('');

	const [signInErr, setSignInErr] = useState('');
	const [success, setSuccess] = useState('');

	// email success

	const handleChange = (e, item) => {
		setSignInErr('');

		/* eslint-disable */
		const emailRegEx = RegExp(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

		if (item === 'name') {
			setName(e.target.value);
			name.length < 3
				? setNameErr('Name must be at least 3 characters!')
				: setNameErr('');
		}
		if (item === 'email') {
			setEmail(e.target.value);
			!emailRegEx.test(email) ? setEmailErr('Invalid Email!') : setEmailErr('');
		}

		if (item === 'comment') {
			setComment(e.target.value);
			comment.length < 10
				? setCommentErr('Please provide more details')
				: setCommentErr('');
		}
	};

	const handleSubmit = async (e) => {
		// console.log(e);
		// console.log(e.target.email.value);
		e.preventDefault();

		setSignInErr('');
		setSuccess('');

		if (name && email && comment && !nameErr && !emailErr && !commentErr) {
			try {
				const res = await fetch('api/email/', {
					method: 'POST',
					body: JSON.stringify({ name, email, comment }),
					headers: {
						'Content-Type': 'application/json',
						credentials: 'include',
					},
				});

				const resData = await res.json();

				if (resData) {
					console.log(resData);
					setSuccess(resData.msg);
					setName('');
					setEmail('');
					setComment('');
				} else {
					setSignInErr(resData.msg);
				}
			} catch (err) {
				console.log('dw_error', err);
			}
		}
	};

	return (
		<>
			{metaData &&
				metaData
					.filter((item) => item.page === 'contact')
					.map((i) => {
						return (
							<Seo
								key={i.id}
								title={i.title}
								description={i.description}
								name={i.name}
								type={i.type}
								url={i.url}
								image={i.image}
							/>
						);
					})}

			<section className='main-container contact-grid'>
				<div id='contact-info'>
					<h1 id='contact-title'>Tell us more about your project</h1>
					<h3 id='free-title'>
						Free quotation on cost and time with no obligation
					</h3>

					<p id='contact-title-sub'>
						Please fill out the quick form and we will be in touch with lighting
						speed.
					</p>
				</div>

				{signInErr && (
					<div className='alert alert-danger text-center'>
						<span className='text-danger text-capitalize'>{signInErr}</span>
					</div>
				)}

				{success && (
					<div className='alert alert-success text-center'>
						<span className='text-success text-capitalize'>{success}</span>
					</div>
				)}

				<div id='contact-container'>
					<div className='form-container'>
						<h3 id='contact-form-title'>Contact us</h3>

						<form className='contact-form' onSubmit={handleSubmit}>
							<div className='form-group'>
								<label htmlFor='name'>Name:</label>
								<input
									type='text'
									name='name'
									className='form-control'
									placeholder='Full Name'
									id='name'
									// required
									onChange={(e) => handleChange(e, 'name')}
									value={name}
									autoComplete='off'
								/>
								{nameErr && <small className='text-danger'>{nameErr}</small>}
							</div>

							<div className='form-group'>
								<label htmlFor='email'>Email:</label>
								<input
									type='email'
									name='comment'
									className='form-control'
									id='email'
									onChange={(e) => handleChange(e, 'email')}
									value={email}
									autoComplete='off'
								/>
								{emailErr && <small className='text-danger'>{emailErr}</small>}
							</div>

							<div className='form-group'>
								<label>Briefly describe what you need:</label>
								<textarea
									rows='4'
									cols='50'
									name='comment'
									autoComplete='off'
									value={comment}
									onChange={(e) => handleChange(e, 'comment')}
								></textarea>
								{commentErr && (
									<small className='text-danger'>{commentErr}</small>
								)}
							</div>

							<button type='submit' className='btn btn-blue' id='btn-save'>
								Submit
							</button>
						</form>
					</div>
				</div>

				<div className='address'>
					<div className='address-box'>
						<div className='leftside-div'>
							<img
								className='img-bg'
								src='images/location.png'
								alt='location'
							/>
						</div>
						<div className='rightside-div'>
							{/* <h3>Contact Us</h3> */}
							<p>
								DW-Serv
								<br></br>20 Sussex Road
								<br></br>Erith
								<br></br>Kent
								<br></br>DA8 1JB
							</p>
						</div>
					</div>

					<div className='address-box'>
						<div className='leftside-div'>
							<img src='images/phone-call.png' alt='phone' />
						</div>
						<div className='rightside-div'>
							<p>07956 891404</p>
						</div>
					</div>

					<div className='address-box'>
						<div className='leftside-div'>
							<img className='img-color' src='images/email.png' alt='email' />
						</div>

						<div className='rightside-div'>
							<p>dw-serv@gmail.com</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
