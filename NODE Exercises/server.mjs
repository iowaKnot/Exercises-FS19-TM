import { createServer } from "node:http";

const server = createServer((req, res) => {
    console.log("request recived");

    res.statusCode = 200;

    res.setHeader("Content-Type", "text/html");

    res.end("<html><body><h1>Im Tommy and this is my first http server created with Node.js!</h1></body></html>");
});

server.listen(5173, () => {
    console.log("Server running at http://localhost:5173");
});