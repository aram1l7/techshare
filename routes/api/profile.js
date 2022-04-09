const express = require("express");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Profile = require("../../models/Profile");
const User = require("../../models/User");

//@route      GET api/profile/me
//@desc       get current user profile
//@access     private

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );
    if (!profile) {
      return res.status(500).json({ msg: "No profile exists with this id" });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//@route      POST api/profile/
//@desc       create or update user profile
//@access     private

router.post(
  "/",
  [
    auth,
    [
      check("role", "Role is required").not().isEmpty(),
      check("skills", "Skills is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.social = {};
    Object.keys(req.body).forEach((key) => {
      if (req.body[key]) {
        switch (key) {
          case "skills":
            profileFields["skills"] = req.body[key]
              .split(",")
              .map((el) => el.trim());
            break;
          case "youtube":
          case "twitter":
          case "facebook":
          case "instagram":
          case "linkedin":
            profileFields.social[key] = req.body[key];
            break;
          default:
            profileFields[key] = req.body[key];
        }
      }
    });
    console.log(profileFields);
    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//@route      GET api/profile
//@desc       get all user profiles
//@access     public

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//@route      GET api/profile/user/:user_id
//@desc       get profile by user id
//@access     public

router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Internal server error");
  }
});



//@route      GET api/profile
//@desc       get all user profiles
//@access     public

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});


module.exports = router;
