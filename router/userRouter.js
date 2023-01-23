const express = require("express");
const Router = express.Router();

// Import All Controller
const { userController } = require("../controller");

Router.post("/create", userController.createUser);
Router.post("/login", userController.login);
Router.get("/check", userController.checkUser);
Router.patch("/activate", userController.activate);

module.exports = Router;
