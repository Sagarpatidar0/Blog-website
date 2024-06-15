const express = require("express")
const router = express.Router();
const Post = require("../Models/Post")

router.post("/post", async (req, res) => {
    try {
        const newPost = new Post({
            username: req.body.username,
            title: req.body.title,
            disc: req.body.disc,
            cat: req.body.cat,
            img: req.body.img
        })
        const post = await newPost.save();
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
})

// All Posts

router.get("/", async (req, res) => {
    const username = req.query.username
    const catname = req.query.cat
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        } else if (catname) {
            posts = await Post.find({
                cat: {
                    $in: catname
                }
            })
        }else{
            posts = await Post.find()
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err)
    }
})

// Post By id
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Update Post

router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true })
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err)
            }

        } else {
            res.status(401).json("You can Update only your post");
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Post

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete(req.params.id)
                res.status(200).json("Post deleted...")
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can delete only your post");
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// post by category
router.get("/cat/:cat", async (req, res) => {
    const category = req.params.cat;
    try {
        const post = await Post.find({ cat: { $in: [category] }});
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;