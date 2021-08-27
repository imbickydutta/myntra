const express = require("express");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// const bodyParser = require("body-parser");
const router = express.Router();
// router.use(bodyParser.json());

//signup form
router.get("/register", async (req, res) => {
  res.render("ejs/user");
});

router.post("/register", async (req, res) => {
  const { username, password: plainTextPassword } = req.body;
  if (!username || typeof username !== "string") {
    return res.send("Invalid username");
  }
  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.send("Invalid password");
  }
  if (plainTextPassword.length < 6) {
    return res.send("Password must be at least 6 characters long");
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({ username, password });
    console.log("user created succefully", response);
  } catch (error) {
    if (error.code === 11000) {
      res.send("username already exists");
    }
    throw error;
  }
  res.json({
    status: "ok",
  });
});

module.exports = router;
