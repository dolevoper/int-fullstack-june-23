import { readFileSync, writeFileSync } from "fs";
import { createServer } from "http";
import express from "express";
import { urlencoded } from "body-parser";
import { randomUUID } from "crypto";

type Todo = {
    id: string,
    text: string,
    isDone: boolean
};

const todosFilePath = "./todos.json";
let todos = JSON.parse(readFileSync(todosFilePath, "utf-8")) as Todo[];

const app = express();

let visits = 0;

app.set("view engine", "ejs");

const logRequests = (prefix = ""): express.RequestHandler => (req, _, next) => {
    console.log(prefix, req.method, req.url);
    next();
};

app.use(urlencoded({ extended: true }));

app.use(logRequests("Todos App"));

app.get("/", (_, res) => {
    res.render("todos", { todos, visits: ++visits });
});

app.get("/pending", (_, res) => {
    res.render("todos", { todos: todos.filter((todo) => !todo.isDone), visits: ++visits });
});

app.get("/done", (_, res) => {
    res.render("todos", { todos: todos.filter((todo) => todo.isDone), visits: ++visits });
});

app.post("/addTodo", (req, res) => {
    const newTodo = req.body.todo;

    if (!newTodo) {
        res.status(400);
        res.send("Must provide a todo to add");
        return;
    }

    todos.push({
        id: randomUUID(),
        text: newTodo,
        isDone: false
    });
    writeFileSync(todosFilePath, JSON.stringify(todos));

    res.redirect("back");
});

app.post("/resetTodos", (_, res) => {
    todos = [];
    saveTodos();
    res.redirect("back");
});

app.post("/toggleTodo", (req, res) => {
    const todoId = req.body.id;

    if (!todoId) {
        res.status(400);
        res.send("Must provide a todo id to toggle");
        return;
    }

    const todo = todos.find((todo) => todo.id === todoId);

    if (!todo) {
        res.status(404);
        res.send(`Todo ${todoId} not found`);
        return;
    }

    todo.isDone = !todo.isDone;
    saveTodos();

    res.redirect("back");
});

app.post("/clearDone", (_, res) => {
    todos = todos.filter((todo) => !todo.isDone);
    saveTodos();
    res.redirect("back");
});

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("server listening on port 3000"));

function saveTodos() {
    writeFileSync(todosFilePath, JSON.stringify(todos));
}

