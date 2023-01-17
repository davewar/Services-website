const User = require('../models/user');

const verifyRoles = (...allowedRoles) => {
	return async (req, res, next) => {
		if (!req.user.id)
			return res.status(401).json({ errors: 'Access denied 1' });

		// console.log('verifyRoles function run');
		// console.log('ALLOWEDROLES are:', allowedRoles);

		try {
			let id = req.user.id;
			// console.log(id);
			const user = await User.findById(id);
			// console.log('User = ', user.role);

			const rolesArray = [...allowedRoles];
			// console.log(
			// 	'the verify role fn run & the allowed roles are: ',
			// 	rolesArray
			// );
			const result = rolesArray.includes(user.role);
			// console.log('the verify role fn run - is the user allowed ?', result);

			if (result === false)
				return res.status(403).json({ errors: 'Access denied 2' });

			next();
		} catch (err) {
			console.log('Verify DW:', err.message);
			res.status(500).json({ errors: err.message });
		}
	};
};

module.exports = verifyRoles;
