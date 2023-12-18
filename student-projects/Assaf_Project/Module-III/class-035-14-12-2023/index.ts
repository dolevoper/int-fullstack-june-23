import { readFileSync, writeFileSync } from "fs";
import { createServer } from "http";
import express from "express";
import { urlencoded } from "body-parser";

const todosFilePath = "./todos.json";
const todos = JSON.parse(readFileSync(todosFilePath, "utf-8")) as string[];

const app = express();

let visits = 0;

app.set("view engine", "ejs");

const logRequests = (prefix = ""): express.RequestHandler => (req, _, next) => {
    console.log(prefix, req.method, req.url);
    next();
};

app.use(urlencoded());

app.use(logRequests("Todos App"));

app.get("/", (_, res) => {
    res.render("todos", { todos, visits: ++visits });
});

app.post("/addTodo", (req, res) => {
    const newTodo = req.body.todo?.toString();

    if (!newTodo) {
        res.status(400);
        res.send("Must provide a todo to add");
        return;
    }

    todos.push(newTodo);
    writeFileSync(todosFilePath, JSON.stringify(todos));

    res.redirect("/");
});

app.post("/toggle", (req, res) => {
    const updatedToggle = todos
    .replace(`{counter}`, counter)
    .replace(`{title}`, "Users ID's: ")
    .replace(`{users}`, usersId.join(""));

  res.send(updatedHTML);

    res.redirect("/");
})

app.post("/resetTodos", (_, res) => {
    todos.splice(0, todos.length);
    writeFileSync(todosFilePath, "[]");
    res.redirect("/");
});

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("server listening on port 3000"));
