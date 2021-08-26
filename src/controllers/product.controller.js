const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({}).lean();
  return res.render("ejs/products", {
    products: products,
  });
});

router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

module.exports = router;
