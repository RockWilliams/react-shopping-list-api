const db = require("../models");

const currentUserDetails = async (req, res) => {
	try {
		const currentUser = await db.Auth.findById(req.session.user).populate({
			path: "profile",
			populate: { path: "stores" },
		});
		const userProfile = await currentUser;
		return res.status(200).json({
			status: 200,
			user: userProfile,
			stores: userProfile.stores,
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
	currentUserDetails,
};
