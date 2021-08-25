const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await await Product.find({}).lean();
  //   res.json(products);
  return res.render("products/allProducts", {
    products: products,
  });
});

module.exports = router;
