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
const addUser = async (req, res, next) => {
	console.log(req.body);
	let newUser = new userModel(req.body);

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
	addUser,
	updateUser,
	deleteUser,
};
