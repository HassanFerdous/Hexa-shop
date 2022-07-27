const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: String,
			default: false,
		},
		carts: [],
	},
	{
		timeStamp: true,
	}
);

module.exports = mongoose.model('User', userSchema);
