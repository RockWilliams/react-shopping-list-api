const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
	name: { type: String, required: true },
	store: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Store",
	},
	products: [
		{
			item: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
			quantity: { type: Number, required: true, default: 1 },
		},
	],
});

const List = mongoose.model("List", listSchema);
module.exports = List;
