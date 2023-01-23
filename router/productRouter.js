const express = require("express");
const Router = express.Router();

// Import All Controller
const { productController } = require("../controller");

Router.get("/", productController.getProduct);
Router.get("/category", productController.getCategory);
Router.get("/detail/:id", productController.getDetail);

module.exports = Router;
