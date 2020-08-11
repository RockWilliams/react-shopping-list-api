const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/react-store";

mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(function () {
		console.log("Mongodb connected");
	})
	.catch(function (err) {
		console.log("Mongodb Error", err);
	});

module.exports = {
	Auth: require("./Auth"),
	List: require("./List"),
	Store: require("./Store"),
	Product: require("./Product"),
	Profile: require("./Profile"),
};
