const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const mongostore = require("connect-mongo")(session);
const routes = require("./routes");

/* port */

const PORT = 3001 || process.env.PORT;

/* Cors */

const corsOptions = {
	origin: ["http://localhost:3000"],
	credentials: true,
};

app.use(cors(corsOptions));

/* bodyparser */

app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.json());

app.use(
	session({
		store: new mongostore({
			url: "mongodb://localhost:27017/react-store",
		}),
		secret: "Secret",
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 1000 * 60 * 60 * 20 * 7 * 2 },
	})
);

app.use("/api/v1/auth", routes.auth);
app.use("/api/v1/store", routes.store);
app.use("/api/v1/product", routes.product);
app.use("/api/v1/profile", routes.profile);

app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});
