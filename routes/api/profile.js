const express = require("express");
const router = express.Router();

// @route  GET api/profile
// @desc   Test router
// @access Public
router.get("/", (req, res) => res.send("Auth profile"));

module.exports = router;
