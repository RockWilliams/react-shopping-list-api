const db = require("../models");

const createList = async (req, res) => {
	try {
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: "Something went wrong please try again.",
		});
	}
};

module.exports = {
	createList,
};
