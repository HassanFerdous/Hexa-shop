const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
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
	let { username, email, password } = req.body;
	let oldUser = await getOldUser(email);

	if (oldUser) {
		return res.status(401).json({
			err: 'user is already exist',
		});
	}

	if (username && email && password) {
		const hashedPassword = await bcrypt.hash(password, 10);
		let newUser = new userModel({ ...req.body, password: hashedPassword });
		try {
			let user = await newUser.save();
			const { password, ...othersInfo } = user._doc;
			res.status(200).json({
				user: othersInfo,
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
			const matchPass = await bcrypt.compare(password, user.password);
			if (matchPass) {
				const token = jwt.sign(
					{ username: user.name, email: user.email, id: user._id, isAdmin: user.isAdmin },
					process.env.SECRET,
					{
						expiresIn: '2h',
					}
				);
				const { password, ...othersInfo } = user._doc;
				res.status(200).json({
					user: othersInfo,
					token,
				});
			}
		} catch (err) {
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

async function getOldUser(email) {
	let oldUser = await userModel.findOne({ email });
	return oldUser;
}

async function showUserInfo(req, res) {
	try {
		let user = await userModel.findById(req.params.id);
		res.status(200).json({
			message: 'this is account page',
			user,
		});
	} catch (err) {
		res.status(500).json({
			err: err,
		});
	}
}

module.exports = {
	getAllUser,
	register,
	signIn,
	updateUser,
	deleteUser,
	showUserInfo,
};
