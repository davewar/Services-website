const router = require('express').Router();
let Email = require('../models/emails');
const main = require('./sendEmails');

module.exports.getEmail_get = async (req, res) => {
	try {
		const email = await Email.find();
		// res.send('hello');
		res.status(200).json(email);
	} catch (err) {
		res.status(400).json({ msg: err.message });
	}
};

module.exports.addEmail_post = async (req, res) => {
	// console.log('dw add');

	try {
		const name = req.body.name;
		let email = req.body.email;
		const comment = req.body.comment;

		const newEmail = new Email({
			name,
			email,
			comment,
		});

		await newEmail.save();
		// test. need ssl for gmail
		let to = process.env.DW_GMAIL;
		let url = '';
		let desc = 'Email received - DW Servicng';

		//let me know email recd
		main(to, url, desc);

		res.status(200).json({
			msg: 'Thank you for your enquiry. We will be in contact with you shortly.',
		});
	} catch (err) {
		console.log('dwerr', err);
		return res.status(400).json({ msg: err.message });
	}
};

module.exports.deleteEmail_delete = async (req, res) => {
	// console.log(req.params.id);
	try {
		await Email.findByIdAndDelete(req.params.id);

		res.status(200).json('item deleted');
	} catch (err) {
		return res.status(400).json({ msg: err.message });
	}
};
