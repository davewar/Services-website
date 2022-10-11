const router = require('express').Router();
let User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const main = require('./sendEmails');

require('dotenv').config();

//create token - 15 mins
const createToken = (id) => {
	return jwt.sign({ id }, process.env.SECRET_KEY, {
		expiresIn: '900s',
	});
};

//1day
const createRefeshToken = (id) => {
	return jwt.sign({ id }, process.env.REFESH_SECRET_KEY, {
		expiresIn: '1d',
	});
};

//email string valid ?
const isEmail = (email) => {
	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
		email
	);
};

module.exports.login_post = async (req, res) => {
	console.log('hello1 you');
	try {
		const { email, password } = req.body;

		if (!email || !password)
			return res
				.status(400)
				.json({ errors: 'Incorrect login. Please try again' });
		if (password.length < 6)
			return res
				.status(400)
				.json({ errors: 'Password is at least 6 characters long.' });
		if (!isEmail(email))
			return res.status(400).json({
				errors: 'Email is not valid. Please re-enter your email address',
			});

		//is there a user
		const user = await User.findOne({ email });

		if (!user)
			return res
				.status(400)
				.json({ errors: 'Incorrect login. Please try again' });

		const isMatch = await bcrypt.compare(password, user.password);

		let count = user.IncorrectPW;

		if (!isMatch) {
			if (count == 3) {
				//LOCK ACCOUNT
				await User.findOneAndUpdate(
					{ _id: user._id },
					{
						validated: false,
					}
				);
				return res.status(400).json({
					errors:
						'Incorrect login x3 - Account Locked. Please request a new password',
				});
			} else {
				await User.findOneAndUpdate(
					{ _id: user._id },
					{
						IncorrectPW: count + 1,
					}
				);
				return res
					.status(400)
					.json({ errors: 'Incorrect login. Please try again' });
			}
		}

		//password okay -reset user.IncorrectPW to zero
		if (count > 0) {
			await User.findOneAndUpdate(
				{ _id: user._id },
				{
					IncorrectPW: 0,
				}
			);
		}

		const val = user.validated;

		//email address needs to be valid before first use
		if (val == 'false') {
			console.log('here');
			//
			const accesstoken = createToken(user._id);
			const url = `${process.env.CLIENT_URL}/user/activate/${accesstoken}`;
			// main(email, url, 'DWSHOP - Please activate your account');
			return res.status(400).json({
				errors:
					'An email has just been sent to you, please activate your account using the link sent.',
			});
		}

		//create tokens
		const accesstoken = createToken(user._id);
		const refreshToken = createRefeshToken(user._id);

		//all gd
		res.cookie('refreshtoken', refreshToken, {
			httpOnly: true,
			path: '/user/refresh_token',
			maxAge: 1 * 24 * 60 * 60 * 1000, // 1d
		});

		res
			.status(200)
			.send({ accesstoken, user: { id: user._id, name: user.name } });
	} catch (err) {
		res.status(400).json({ errors: err.message });
	}
};

module.exports.signup_post = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		//form validations
		if (!name || !email || !password)
			return res
				.status(400)
				.json({ errors: 'Incorrect login. Please try again' });
		if (password.length < 6)
			return res
				.status(400)
				.json({ errors: 'Password is at least 6 characters long.' });
		if (!isEmail(email))
			return res.status(400).json({
				errors: 'Email is not valid. Please re-enter your email address',
			});

		//check if user exists
		const user = await User.findOne({ email });

		if (user) return res.status(400).json({ errors: 'Account already exists' });

		//hashpassword
		const hashpassword = await bcrypt.hash(password, 10);

		const newUser = new User({ name, email, password: hashpassword });

		await newUser.save();
		//create tokens
		const accesstoken = createToken(newUser._id);

		const url = `${process.env.CLIENT_URL}/user/activate/${accesstoken}`;
		//send email
		// main(
		// 	email,
		// 	url,
		// 	'DWSHOP. Please activate your account - link valid for 10 minutes'
		// );

		res.status(200).send({
			msg: 'Please check your email and activate your account using the link',
		});
	} catch (err) {
		res.status(400).json({ errors: err.message });
	}
};
