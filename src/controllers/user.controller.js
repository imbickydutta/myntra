const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

//signup form
router.get("/register", async (req, res) => {
  res.render("register");
});

module.exports = router;
