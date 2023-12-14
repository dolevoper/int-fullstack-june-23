import { readFileSync } from "fs";
import { createServer } from "http";
import express from "express";

const todos = JSON.parse(readFileSync("./todos.json", "utf-8")) as string[];

const app = express();
let counter = 0;
app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    res.render("todos", { todos, counter: counter++});
});

app.use((req, res) => {
    counter++
})

const server = createServer(app);

server.listen(3000, () => console.log("server listening on port 3000"));
