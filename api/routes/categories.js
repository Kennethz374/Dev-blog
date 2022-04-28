const router = require("express").Router();
const Category = require("../models/Category");

//create categories
router.post("/", async (req, res) => {
	const newCat = new Category(req.body);

	try {
		const saveCat = await newCat.save();
		res.status(200).json(saveCat);
	} catch (error) {
		res.status(500).json(error);
	}
});
//get all categories
router.get("/", async (req, res) => {
	try {
		const allCat = await Category.find();
		res.status(200).json(allCat);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
