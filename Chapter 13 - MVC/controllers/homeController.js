const path = require("path");

exports.getAddHome = (req,res,next) => {
    res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
};

const registeredHomes = [];
exports.postAddHome = (req,res,next) => {
    console.log("Home registration successful for : ", req.body, req.body.houseName);
    registeredHomes.push({houseName : req.body.houseName});
    res.sendFile(path.join(__dirname, "../", "views", "homeAdded.html"));
};

exports.registeredHomes = registeredHomes;