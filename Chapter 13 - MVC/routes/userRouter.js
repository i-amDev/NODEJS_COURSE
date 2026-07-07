// External Modules
const express = require('express');
const userRouter = express.Router();

// Local Module
const homeController = require("../controllers/homeController");

userRouter.get("/", homeController.getHomes);

module.exports = userRouter;