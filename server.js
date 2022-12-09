const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const connectDb = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('All good');
	} catch (err) {
		console.log('dw err desc', err);
		console.log('DW err with connection');
		process.exit(1);
	}
};

connectDb();

app.use('/test', (req, res) => {
	res.send('backend working');
});

const emailRouter = require('./routes/email');
app.use('/api/email', emailRouter);

// login pw-reset- user
const userRouter = require('./routes/users');
app.use('/user', userRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('app/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('Server running');
});

module.exports = connectDb;
