const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req);
// });
//
// server.listen(3000, () => {
//     console.log("Server started on port 3000");
// });

http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Hello World</title></head>");
    res.write("<body><h1>Welcome to NodeJS</h1></body>");
    res.write("</html>");
    res.end();
}).listen(3000, () => {
    console.log("Server started on port 3000");
});