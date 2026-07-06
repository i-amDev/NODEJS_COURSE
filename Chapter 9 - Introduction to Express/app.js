// Core Modules
const http = require('http');

// External Modules
const express = require('express');

// Local Modules
const requestHandler = require("./user");

const app = express();

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server started on port 3000");
});