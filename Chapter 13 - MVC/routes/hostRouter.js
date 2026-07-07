// Core Modules
const path = require("path");

// External Modules
const express = require('express');

// Local Modules
const homeController = require("../controllers/homeController");

const hostRouter = express.Router();

hostRouter.get("/add-home", homeController.getAddHome);

const registeredHomes = [];

hostRouter.post("/add-home", (req,res,next) => {
    console.log("Home registration successful for : ", req.body, req.body.houseName);
    registeredHomes.push({houseName : req.body.houseName});
    res.sendFile(path.join(__dirname, "../", "views", "homeAdded.html"));
});

module.exports = {
    hostRouter,
    registeredHomes,
};