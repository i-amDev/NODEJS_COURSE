const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req);
// });
//
// server.listen(3000, () => {
//     console.log("Server started on port 3000");
// });

http.createServer((req, res) => {
    console.log(req.url);
}).listen(3000, () => {
    console.log("Server started on port 3000");
});