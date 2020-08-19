const db = require("../models");

const createProduct = async (req, res) => {
	try {
		const foundStore = await db.Store.findById(req.params.id);
		const createdProduct = await db.Product.create(req.body);
		await foundStore.products.push(createdProduct._id);
		await foundStore.save();
		return res.status(201).json({
			status: 201,
			message: "Success",
			store: foundStore,
			product: createdProduct,
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
	createProduct,
};
