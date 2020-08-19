const bcrypt = require("bcryptjs");

const db = require("../models");

const register = async (req, res) => {
	try {
		const foundUser = await db.Auth.findOne({ email: req.body.email });
		if (foundUser) {
			return res.status(400).json({
				status: 400,
				message: "Email Address Has Already Been Registered",
			});
		}
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(req.body.password, salt);
		const createdUser = await db.Auth.create({
			email: req.body.email,
			password: hash,
		});
		const createdProfile = await db.Profile.create({
			username: req.body.username,
		});
		createdUser.profile = await createdProfile._id;
		await createdUser.save();
		req.session.user = await createdUser;
		return res.status(201).json({
			status: 201,
			message: "Success",
			createdUser: createdUser,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: "Something went wrong please try again.",
		});
	}
};

const login = async (req, res) => {
	try {
		const foundUser = await db.Auth.findOne({ email: req.body.email });
		if (!foundUser) {
			return res.status(401).json({
				status: 401,
				message: "Incorrect Email or Password",
			});
		}
		const match = await bcrypt.compare(
			req.body.password,
			foundUser.password
		);
		if (!match) {
			return res.status(401).json({
				status: 401,
				message: "Incorrect Email or Password",
			});
		}
		req.session.user = await foundUser;
		return res.status(200).json({
			status: 200,
			message: "Success",
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: "Something went wrong please try again.",
		});
	}
};

module.exports = {
	register,
	login,
};
