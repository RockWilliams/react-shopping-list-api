const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const mongostore = require("connect-mongo")(session);

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

app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});
