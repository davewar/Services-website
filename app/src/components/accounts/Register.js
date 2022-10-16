import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { UserContext } from '../../contexts/user';

const Register = () => {
	const { setAccessToken } = useContext(UserContext); //global user

	const [name, setName] = useState('');
	const [nameErr, setNameErr] = useState('');

	const [email, setEmail] = useState('test1@gmail.com');
	const [emailErr, setEmailErr] = useState('');
	const [password, setPassword] = useState('');
	const [passwordErr, setPasswordErr] = useState('');

	const [password2, setPassword2] = useState('');
	const [passwordErr2, setPasswordErr2] = useState('');
	/* eslint-disable */
	// const [accessToken, setAccessToken] = useState('');
	const [signInErr, setSignInErr] = useState('');
	const [success, setSuccess] = useState('');

	const navigate = useNavigate();

	const handleChange = (e, item) => {
		//clear
		setSignInErr('');

		/* eslint-disable */
		const emailRegEx = RegExp(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

		if (item === 'name') {
			setName(e.target.value);
			e.target.value.length < 3
				? setNameErr('Full name must be at least 3 characters!')
				: setNameErr('');
		}

		if (item === 'email') {
			setEmail(e.target.value);
			!emailRegEx.test(email) ? setEmailErr('Invalid Email!') : setEmailErr('');
		}
		if (item === 'password') {
			setPassword(e.target.value);
			e.target.value.length < 3
				? setPasswordErr('Password must be at least 3 characters!')
				: setPasswordErr('');
		}
		if (item === 'password2') {
			setPassword2(e.target.value);

			password !== password2
				? setPasswordErr2('Passwords are not the same')
				: setPasswordErr2('');
		}
	};

	const handleSignin = async (e) => {
		e.preventDefault();

		if (
			name &&
			email &&
			password &&
			password2 &&
			!nameErr &&
			!emailErr &&
			!passwordErr &&
			!passwordErr2
		) {
			setSignInErr('');

			try {
				const res = await fetch('/user/register', {
					method: 'POST',
					body: JSON.stringify({ name, email, password }),
					headers: {
						'Content-Type': 'application/json',
						credentials: 'include',
					},
				});

				const data = await res.json();
				// console.log(data);

				if (data.errors) {
					setSignInErr(data.errors);
				} else {
					if (data.msg) {
						setSuccess(data.msg);
					}
				}
			} catch (err) {
				console.log('dw', err.message);
			}
		}
	};

	return (
		<>
			<div className='main-container'>
				<div className='sign-in'>
					<h4 className='text-center'>Register</h4>

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
					<form onSubmit={handleSignin}>
						<div className='form-group'>
							<label htmlFor='name'>Full Name</label>
							<input
								type='name'
								required
								autoComplete='off'
								name='name'
								id='name'
								placeholder='Enter full name'
								value={name}
								onChange={(e) => handleChange(e, 'name')}
							/>
							<small className='text-danger'>{nameErr}</small>
						</div>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								required
								autoComplete='off'
								name='email'
								id='email'
								placeholder='Enter email'
								value={email}
								onChange={(e) => handleChange(e, 'email')}
							/>
							<small className='text-danger'>{emailErr}</small>
						</div>
						<div className='form-group'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								required
								autoComplete='off'
								name='password'
								id='passwordl'
								placeholder='Enter password'
								value={password}
								onChange={(e) => handleChange(e, 'password')}
							/>
							<small className='text-danger'>{passwordErr}</small>
						</div>

						<div className='form-group'>
							<label htmlFor='password2'>Confirm Password</label>
							<input
								type='password'
								required
								autoComplete='off'
								name='password2'
								id='password2'
								placeholder='Re-enter password'
								value={password2}
								onChange={(e) => handleChange(e, 'password2')}
							/>
							<small className='text-danger'>{passwordErr2}</small>
						</div>

						<button type='submit' className='btn btn-blue' id='btn-save'>
							Register
						</button>
					</form>

					<Link className='forgot-pw' to='../resetaccount'>
						Forgot Password
					</Link>
				</div>
			</div>
		</>
	);
};

export default Register;
