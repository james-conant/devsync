const express = require("express");
const router = express.Router();

// @route  GET api/posts
// @desc   Test router
// @access Public
router.get("/", (req, res) => res.send("Auth posts"));

module.exports = router;