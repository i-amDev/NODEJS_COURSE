// Core Modules
const path = require("path");

// External Modules
const express = require('express');
const userRouter = express.Router();

// Local Module
const {registeredHomes} = require("./hostRouter");

userRouter.get("/", (req,res,next) => {
    console.log(req.url, req.method);
    console.log(registeredHomes);
    // res.sendFile(path.join(__dirname, "../", "views", "home.ejs"));
    res.render("home", {registeredHomes: registeredHomes});
});

module.exports = userRouter;