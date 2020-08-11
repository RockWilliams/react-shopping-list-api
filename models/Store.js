const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
		},
	],
	lists: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "List",
		},
	],
});

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
