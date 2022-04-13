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
          user:req.user.id
        });
        const post = await newPost.save();
        res.json(post);
    }
    catch(error){
        console.error(error);
        res.status(500).send('Server error')
    }

  }
);

module.exports = router;
