const express = require("express");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Posts = require("../../models/Posts");
const User = require("../../models/User");

//@route      Post api/posts
//@desc       create new post
//@access     private

router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    try {
      let user = await User.findById(req.user.id).select("-password");
      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const post = await newPost.save();
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  }
);

//@route      Post api/posts
//@desc       get all posts
//@access     private

router.get("/", auth, async (req, res) => {
  try {
    const posts = await Posts.find().sort({
      date: -1,
    });
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//@route      Post api/posts/:id
//@desc       get post by id
//@access     private

router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Internal server error");
  }
});

//@route      Put api/posts/:id
//@desc       edit post by id
//@access     private

router.put("/:id", auth, async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    post.text = req.body.text;
    await post.save();
    res.json(post);
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Internal server error");
  }
});

//@route      Post api/posts/:id
//@desc       delete post by id
//@access     private

router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    await post.remove();
    res.json({ msg: "Successfully deleted" });
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Internal server error");
  }
});

//@route      Put api/posts/like/:id
//@desc       Like a post
//@access     private

router.put("/like/:id", auth, async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      let removeIndex = post.likes.map((el) =>
        el.user.toString().indexOf(req.user.id)
      );
      post.likes.splice(removeIndex, 1);
      await post.save();
      return res.status(200).json({ msg: "Successfully unliked" });
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//@route      Post api/posts/comment
//@desc       comment on post
//@access     private

router.post(
  "/comment/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    try {
      let user = await User.findById(req.user.id).select("-password");
      let post = await Posts.findById(req.params.id);

      const comment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user:req.user.id
      };

      post.comments.unshift(comment);
      await post.save();
      res.json(post.comments);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  }
);

//@route      DELETE api/posts/comment/:id/:comment_id
//@desc       delete comment
//@access     private

router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    let post = await Posts.findById(req.params.id);
    let comment = post.comments.find((el) => el.id === req.params.comment_id);
    if (!comment) {
      return res.status(404).json({ msg: `Comment does'nt exist` });
    }
    if(comment.user.toString() !== req.user.id){
      return res.status(401).json({ msg: `Unauthorized` });
    }
    let deleteIndex = post.comments
      .map((el) => el.user.toString())
      .indexOf(req.user.id);
    post.comments.splice(deleteIndex, 1);
    await post.save();
    res.json(post.comments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
