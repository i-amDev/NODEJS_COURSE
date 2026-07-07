const path = require("path");

exports.getAddHome = (req,res,next) => {
    res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
};