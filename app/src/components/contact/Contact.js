import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [comment, setComment] = useState('');
	// inputs not correct
	const [nameErr, setNameErr] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [commentErr, setCommentErr] = useState('');

	// email success

	const handleChange = (e, item) => {
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
			comment.length < 3
				? setCommentErr('Please provide more details')
				: setCommentErr('');
		}
	};

	const handleSubmit = (e) => {
		// console.log(e);
		// console.log(e.target.email.value);
		e.preventDefault();

		if (name && email && comment && !nameErr && !emailErr && !commentErr) {
			console.log('ok');
		} else {
			console.log('issue');
		}
	};

	return (
		<>
			<section className='main-container'>
				<div className='contact-info'>
					<h4>Tell us more about your project</h4>
					<p>Free quotation on cost and time with no obligation</p>
					<p>Why Wait? Get in touch !</p>
				</div>

				<div className='contact-container'>
					<div className='form-container'>
						<div className='contact-title'>
							<h4>Contact us</h4>
						</div>
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
							<h4>Contact Us</h4>
							<p>
								DW Servicing
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
							<img src='images/email.png' alt='email' />
						</div>

						<div className='rightside-div'>
							<p>dwservicing@gmail.com</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
