// Import the important packages
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import the configration file
const connect = require("./configs/db");

// Import the controllers
const productController = require("./controllers/product.controller");
const productController2 = require("./controllers/product2.controller");

const homeController = require("./controllers/home.controller");
const addressController = require("./controllers/address.controller");
const bagController = require("./controllers/bag.controller");
const loginController = require("./controllers/login.controller");
const mensControllers = require("./controllers/mens.controller");
const modaControllers = require("./controllers/moda.controller");
const paymentController = require("./controllers/payment.controller");
const signinController = require("./controllers/signin.controller");
const userController = require("./controllers/user.controller");


// Create the express app using middleware
const app = express();
app.use(express.json());
app.use(cors()); // to unblock CORS
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

// Create the views part of the application
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

// Create the routes or router handlers
app.use("/products", productController);
app.use("/products2", productController2);

app.use("/home", homeController);
app.use("/address", addressController);
app.use("/bag", bagController);
app.use("/login", loginController);
app.use("/mens", mensControllers);
app.use("/moda", modaControllers);
app.use("/payment", paymentController);
app.use("/signin", signinController);
app.use("/user", userController);

// Listen for events
app.listen(3000, async () => {
  await connect();
  console.log("Server is running on port 3000");
});
