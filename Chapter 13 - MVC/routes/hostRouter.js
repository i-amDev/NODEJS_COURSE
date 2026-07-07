// External Modules
const express = require('express');

// Local Modules
const homeController = require("../controllers/homeController");

const hostRouter = express.Router();

hostRouter.get("/add-home", homeController.getAddHome);

hostRouter.post("/add-home", homeController.postAddHome);

module.exports = {
    hostRouter,
};