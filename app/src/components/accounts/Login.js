import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { UserContext } from '../../contexts/user';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { emailRegEx } from '../../utils/helpers';

const Login = () => {
	const { setAccessToken } = useContext(UserContext); //global user

	const [email, setEmail] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [password, setPassword] = useState('');
	const [passwordErr, setPasswordErr] = useState('');
	/* eslint-disable */
	// const [accessToken, setAccessToken] = useState('');
	const [signInErr, setSignInErr] = useState('');
	const [visable, setVisable] = useState('false');

	const navigate = useNavigate();

	const handleChange = (e, item) => {
		//clear
		setSignInErr('');

		/* eslint-disable */

		// const emailRegEx = RegExp(
		// 	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		// );

		if (item === 'email') {
			setEmail(e.target.value);
			!emailRegEx.test(email) ? setEmailErr('Invalid Email!') : setEmailErr('');
		}
		if (item === 'password') {
			setPassword(e.target.value);
			e.target.value.length < 3
				? setPasswordErr('Password must be at least 6 characters!')
				: setPasswordErr('');
		}
	};

	const handleSignin = async (e) => {
		e.preventDefault();

		if (email && password && !emailErr && !passwordErr) {
			setSignInErr('');

			try {
				const res = await fetch('/user/login', {
					method: 'POST',
					body: JSON.stringify({ email, password }),
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
					if (data.user) {
						localStorage.setItem('firstlogin', true);
						setAccessToken(data.accesstoken);

						navigate('../dashboard');
					}
				}
			} catch (err) {
				console.log('dw', err.message);
			}
		}
	};

	const toggleType = () => {
		setVisable((prev) => !prev);
	};

	return (
		<>
			<div className='main-container'>
				<div className='sign-in'>
					<h2 className='text-center'>Sign in</h2>

					{signInErr && (
						<div className='alert alert-danger text-center'>
							<span className='text-danger text-capitalize'>{signInErr}</span>
						</div>
					)}
					<form onSubmit={handleSignin}>
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
								autoFocus
							/>

							<small className='text-danger'>{emailErr}</small>
						</div>
						<div className='form-group'>
							<label htmlFor='password'>Password</label>
							<div className='input-container'>
								<input
									type={visable ? 'password' : 'text'}
									required
									autoComplete='off'
									name='password'
									id='passwordl'
									placeholder='Enter password'
									value={password}
									onChange={(e) => handleChange(e, 'password')}
								/>
								<button className='icon' onClick={toggleType}>
									{visable ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
								</button>
							</div>
							<small className='text-danger'>{passwordErr}</small>
						</div>

						<button type='submit' className='btn btn-blue' id='btn-save'>
							Submit
						</button>

						<div className='forgot-pw'>
							<Link className=' link-item underline' to='../resetaccount'>
								Forgotten Password
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
