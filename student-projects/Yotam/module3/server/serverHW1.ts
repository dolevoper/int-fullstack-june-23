import { createServer } from "http";
import express from "express";

let count = 0;

const app = express();
const server = createServer(app);

app.get("/", (req, res, next) => {
    count += 1;
    next();
});

app.use((req, res) => {
    res.send(`<h1>Count: ${count}</h1>`);
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});