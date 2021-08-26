const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({}).lean();
  //   res.json(products);
  return res.render("ejs/products", {
    products: products,
  });
});

router.get("/type/:id", async (req, res) => {
  const products = await Product.find({ category: req.params.id }).lean();
  //   res.json(products);
  return res.render("ejs/products", {
    products: products,
  });
});

router.get("/type/:cat/:id", async (req, res) => {
  const products = await Product.find({ category: req.params.cat, brandName: req.params.id }).lean();
  //   res.json(products);
  return res.render("ejs/products", {
    products: products,
  });
});

router.get("/sortltoh", async (req, res) => {
  const products = await Product.find({}).lean();
  //   res.json(products);

  products.sort(function (a, b) {
    return (a.price * (100 - a.discount) / 100) - (b.price * (100 - b.discount) / 100)
  })
  return res.render("ejs/products", {
    products: products,
  });
});

router.get("/sorthtol", async (req, res) => {
  const products = await Product.find({}).lean();
  //   res.json(products);

  products.sort(function (a, b) {
    return (b.price * (100 - b.discount) / 100) - (a.price * (100 - a.discount) / 100)
  })
  return res.render("ejs/products", {
    products: products,
  });
});

router.get("/color/:color", async (req, res) => {
  const products = await Product.find({ color: req.params.color }).lean();
  //   res.json(products);

  return res.render("ejs/products", {
    products: products,
  });
});



router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

module.exports = router;
