const express = require("express");

const Bag = require("../models/bag.model");

const User = require("../models/user.model");

const router = express.Router();

router.get("/", async (req, res) => {
  return res.render("ejs/bag", {});
});

router.get("/addtocart", async (req, res) => {



  return res.render("ejs/bag", {});
});

// router.post("/bag", async (req, res) => {
//   const { productId, quantity, name, price } = req.body;

//   const userId = "5de7ffa74fff640a0491bc4f"; //TODO: the logged in user id

//   try {
//     let bag = await Bag.findOne({ userId });

//     if (bag) {
//       //bag exists for user
//       let itemIndex = bag.products.findIndex((p) => p.productId == productId);

//       if (itemIndex > -1) {
//         //product exists in the bag, update the quantity
//         let productItem = bag.products[itemIndex];
//         productItem.quantity = quantity;
//         bag.products[itemIndex] = productItem;
//       } else {
//         //product does not exists in bag, add new item
//         bag.products.push({ productId, quantity, name, price });
//       }
//       bag = await bag.save();
//       return res.status(201).send(bag);
//     } else {
//       //no bag for user, create new bag
//       const newBag = await Bag.create({
//         userId,
//         products: [{ productId, quantity, name, price }],
//       });

//       return res.status(201).send(newBag);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Something went wrong");
//   }
// });

module.exports = router;
