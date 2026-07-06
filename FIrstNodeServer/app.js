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
    console.log(req.url, req.method);
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
    else if (req.url === '/data') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Enter Your Details:</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male" />')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female" />')
        res.write('<br><input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/data');
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