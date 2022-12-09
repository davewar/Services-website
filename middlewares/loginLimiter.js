const rateLimit = require('express-rate-limit');

// stop brute force login
const loginLimiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	max: 3, // Limit each IP to 5 login requests per `window` per minute
	message: {
		message:
			'Too many login attempts. Please try again after a 60 second pause',
	},
	skipSuccessfulRequests: true, // if logged in -then dont count me
	handler: (req, res, next, options) => {
		// console.log(options);
		res.status(options.statusCode).send(options.message);
	},
	// below are required by docs
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

module.exports = loginLimiter;
