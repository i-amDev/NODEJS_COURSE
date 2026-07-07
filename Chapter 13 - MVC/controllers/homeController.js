const path = require("path");

const Home = require("../models/homeModel");

exports.getAddHome = (req,res,next) => {
    res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
};

exports.postAddHome = (req,res,next) => {
    console.log("Home registration successful for : ", req.body, req.body.houseName);
    const home = new Home(req.body.houseName, 999, "Pune", 5, "asdf");
    // registeredHomes.push({houseName : req.body.houseName});
    home.save();
    res.sendFile(path.join(__dirname, "../", "views", "homeAdded.html"));
};

exports.getHomes = (req,res,next) => {
    Home.fetchAll((registeredHomes) => res.render("home", {registeredHomes: registeredHomes}));
    console.log(req.url, req.method);
    // console.log(registeredHomes);
    // res.sendFile(path.join(__dirname, "../", "views", "home.ejs"));

};