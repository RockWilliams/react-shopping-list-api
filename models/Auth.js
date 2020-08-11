const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	profile: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Profile",
	},
});

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
