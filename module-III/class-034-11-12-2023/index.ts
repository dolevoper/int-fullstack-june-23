import { createServer } from "http";
import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use("/count", (req, res, next) => {
    console.log("in count");
    next();
});

app.all("/count", (req, res, next) => {
    console.log("in count exactly");
    next();
});

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>");
});

app.all("/count/:num", (req, res, next) => {
    console.log("assaf");
    next();
});

app.get("/count/:num", (req, res) => {
    if (!isNaN(Number(req.params.num))) {
        res.send(`<h1>${req.params.num}</h1>`);
    } else {
        res.status(400);
        res.send("Must provide a number");
    }
});

const server = createServer(app);

server.listen(3000, () => console.log("listening on port 3000"));

// const server = createServer((req, res) => {
//     console.log(req.url);

//     res.setHeader("Content-Type", "text/html");

//     if (req.url === "/") {
//         res.write("<h1>hello world!</h1>");
//     } else {
//         const urlParts = req.url?.split("/") ?? [];

//         if (urlParts.length === 3 && urlParts[1] === "count" && !isNaN(Number(urlParts[2]))) {
//             res.write(`<h1>${urlParts[2]}</h1>`);
//         } else {
//             res.writeHead(404);
//             res.write("<p>This page does not exist</p>");
//         }
//     }

//     res.end();
// });
