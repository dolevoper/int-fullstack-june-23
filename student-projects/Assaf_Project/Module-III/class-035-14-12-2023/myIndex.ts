import { readFileSync } from "fs";
import { createServer } from "http";
import express from "express";

const todos = JSON.parse(readFileSync("./todos.json", "utf-8")) as string[];

let counter = 0

const app = express();

app.set("view engine", "ejs");

app.use((req, _res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", (_req, res) => {
    counter++
    res.render("todos", { todos, counter });
});

app.use(express.static("public"))

const server = createServer(app);

server.listen(3000, () => console.log("server listening on port 3000"));
