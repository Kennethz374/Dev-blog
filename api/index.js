const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log(`db is connected`))
	.catch((err) => console.log(err));
const PORT = 5000;

app.listen(PORT, () => {
	console.log(`PORT ${PORT} is running `);
});
