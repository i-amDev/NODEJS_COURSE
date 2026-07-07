// Core Modules
const path = require("path");

// External Modules
const express = require('express');

const hostRouter = express.Router();

hostRouter.get("/add-home", (req,res,next) => {
    res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
});

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