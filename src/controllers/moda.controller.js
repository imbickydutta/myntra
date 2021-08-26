const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const el = await Product.findById(req.params.id).lean().exec();
  return res.render("ejs/moda", {
    el
  });
});

module.exports = router;
