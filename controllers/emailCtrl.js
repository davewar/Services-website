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
		let to = process.env.Mail_to;
		let url = 'test';
		let desc = 'hello world';

		// main(to, url, desc);

		res.status(200).json('item added');
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

// module.exports.updateEmail_post = async (req,res)=>{
module.exports.amendEmail_put = async (req, res) => {
	// console.log(req.params.id)
	try {
		const name = req.body.name;
		const email = req.body.email;
		const comment = req.body.comment;

		await Email.findOneAndUpdate(
			{ _id: req.params.id },
			{
				name,
				email,
				comment,
			}
		);

		res.status(200).json('item updated');
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};
