const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	stores: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Store",
		},
	],
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
