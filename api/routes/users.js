const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
				//send the new user instead of the old one
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(401).json("This is not your account");
	}
});

//delete user
router.delete("/:id", async (req, res) => {
	if (req.body.userId === req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			try {
				await Post.deleteMany({ useranme: user.username });
				await User.findByIdAndDelete(req.params.id);
				res.status(200).json("User has been deleted...");
			} catch (err) {
				res.status(500).json(err);
			}
		} catch (error) {
			res.status(404).json("No such user account...");
		}
	} else {
		res.status(401).json("This is not your account");
	}
});

//get user
router.get("/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (error) {
		res.status(500).json(error);
	}
});
module.exports = router;
