const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//     console.log(req);
// });
//
// server.listen(3000, () => {
//     console.log("Server started on port 3000");
// });

http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if (req.url === "/home") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Home Page</title></head>");
        res.write("<body><h1>Welcome to Home Page</h1></body>");
        res.write("</html>");
        return res.end();
    }
    else if (req.url === "/product") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Product</title></head>");
        res.write("<body><h1>Product - 1</h1></body>");
        res.write("</html>");
        return res.end();
    }
    else if (req.url === "/redirect") {
        fs.writeFileSync("redirect.txt", "DATA...");
        res.statusCode = 302;
        res.setHeader("Location", "/home");
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Hello World</title></head>");
    res.write("<body><h1>Welcome to NodeJS</h1></body>");
    res.write("</html>");
    res.end();
}).listen(3000, () => {
    console.log("Server started on port 3000");
});