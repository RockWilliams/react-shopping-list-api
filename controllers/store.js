const db = require("../models");

const createStore = async (req, res) => {
	try {
		const createdStore = await db.Store.create({
			name: req.body.name,
			type: req.body.type,
		});
		const currentUser = await db.Auth.findById(req.session.user).populate(
			"profile"
		);
		console.log(currentUser);
		await currentUser.profile.stores.push(createdStore._id);
		await currentUser.profile.save();
		return res.status(201).json({
			status: 201,
			message: "Success",
			store: createdStore,
			user: currentUser,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: "Something went wrong please try again.",
		});
	}
};

const viewStores = async (req, res) => {
	try {
		const foundUser = await db.Profile;
		const foundStore = await db.Store.find({});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: "Something went wrong please try again.",
		});
	}
};

module.exports = {
	createStore,
	viewStores,
};
