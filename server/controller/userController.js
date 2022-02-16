const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

//get-all user
const getAllUser = async (req, res, next) => {
	try {
		let users = await userModel.find({});
		res.status(200).json({ users });
	} catch (err) {
		res.status(500).json({
			err: err.message,
		});
	}
};

//post new user
const register = async (req, res, next) => {
	let { name, email, password } = req.body;
	if (name && email && password) {
		const hashedPassword = await bcrypt.hash(password, 10);
		let newUser = new userModel({ ...req.body, password: hashedPassword });

		try {
			let user = await newUser.save();
			res.status(200).json({
				message: 'successfully added new user',
			});
		} catch (err) {
			res.status(500).json({
				err: err.message,
			});
		}
	}
};

//signin user
const signIn = async (req, res, next) => {
	let { email, password } = req.body;
	if (email && password) {
		try {
			const user = await userModel.findOne({ email: email });
			const checkPassword = await bcrypt.compare(password, user.password);
			if (checkPassword) {
				res.status(200).json({
					message: 'user successfully logged in',
				});
			} else {
				res.status(500).json({
					error: 'invalid password',
				});
			}
		} catch (err) {
			console.log('user is not found');
			res.status(500).json({
				error: err.message,
			});
		}
	}
};

//update user details
const updateUser = async (req, res, next) => {
	let id = req.params.id;
	let data = req.body;

	try {
		let updatedUser = await userModel.findOneAndUpdate({ _id: id }, { $set: { data } });
		res.status(200).json({
			message: 'successfully updated user info',
		});
	} catch (err) {
		res.status(500).json({
			err: err.message,
		});
	}
};

//delete user details
const deleteUser = async (req, res, next) => {
	let id = req.params.id;
	let data = req.body;

	try {
		let deletedUser = await userModel.findOneAndRemove({ _id: id });
		res.status(200).json({
			message: 'successfully deleted user',
		});
	} catch (err) {
		res.status(500).json({
			err: err.message,
		});
	}
};

module.exports = {
	getAllUser,
	register,
	signIn,
	updateUser,
	deleteUser,
};
