const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

const PORT = 5000;

mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log(`db is connected`))
	.catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

app.listen(PORT, () => {
	console.log(`PORT ${PORT} is running `);
});
