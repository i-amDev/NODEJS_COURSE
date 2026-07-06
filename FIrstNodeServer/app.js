const http = require('http');
const requestHandler = require("./user");

const server = http.createServer(requestHandler);

server.listen(3000, () => {
    console.log("Server started on port 3000");
});