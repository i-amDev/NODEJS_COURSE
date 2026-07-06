// Core Modules
// const http = require('http');

// External Modules
const express = require('express');

// Local Modules
const requestHandler = require("./user");

const app = express();

// Adding middleware
app.use("/", (req,res,next) => {
    console.log("First middleware", req.url, req.method);
    next();
});

app.use("/home", (req,res,next) => {
    console.log("Second middleware", req.url, req.method);
    res.send("<h1>Hello from second middleware!</h1>");
});

app.use("/product", (req,res,next) => {
    console.log("Third middleware", req.url, req.method);
    res.send("<h1>Hello from third middleware!</h1>");
});

// const server = http.createServer(app);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});