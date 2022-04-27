const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//create new post
router.post("/", async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (error) {
		res.status(401).json("Not Authorize to Create Post");
	}
});

//update posts
router.put("/:id", async (req, res) => {
	try {
		//find post and compare if the username matches
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				const updatedPost = await Post.findByIdAndUpdate(
					req.params.id,
					{ $set: req.body },
					{ new: true }
				);
				res.status(200).json(updatedPost);
			} catch (error) {
				res.status(500).json(error);
			}
		} else {
			res.status(401).json("You are not authorized to update this post");
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

//delete posts
router.delete("/:id", async (req, res) => {
	try {
		//find post and compare if the username matches
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				await post.delete();
				res.status(200).json("Post deleted...");
			} catch (error) {}
		} else {
			res.status(401).json("You are not authorized to delete this post");
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

//get user
router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
});

//get all posts
//could do this /?user=username (query all post from that user)
//could do this /?categories=catName (query all post from that categories)

router.get("/", async (req, res) => {
	const username = req.query.user;
	const catName = req.query.cat;
	try {
		let posts;
		if (username) {
			posts = await Post.find({ username });
		} else if (catName) {
			posts = await Post.find({ categories: { $in: [catName] } });
			//in method, check if there anything match catName in the categories array
		} else {
			posts = await Post.find();
		}
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json(error);
	}
});
module.exports = router;
