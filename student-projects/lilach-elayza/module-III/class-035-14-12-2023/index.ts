import { readFileSync, writeFileSync } from "fs";
import { createServer } from "http";
import express from "express";
import { urlencoded } from "body-parser";
import { v4 as uuidv4 } from 'uuid';

type Todo = {
    id: string,
    name: string,
    completed: boolean
}

const todosFilePath = "./todos.json";

const todos = JSON.parse(readFileSync(todosFilePath, "utf-8")) as Todo[];

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
    const newTodoName = req.body.todo?.toString();

    if (!newTodoName) {
        res.status(400);
        res.send("Must provide a todo to add");
        return;
    }

    const newTodo = {
        id: uuidv4(),
        name: newTodoName, 
        completed: false
    }

    todos.push(newTodo);
    writeFileSync(todosFilePath, JSON.stringify(todos));

    res.redirect("/");
});

app.post("/toggleTodo/:id", (req, res) => {
    const todoId = req.params.id;

    todos.find(todo => {
        if (todo.id === todoId) {
            todo.completed = !todo.completed;
        }
    });
    
    writeFileSync(todosFilePath, JSON.stringify(todos));
    res.redirect("/");
});

app.post("/resetTodos", (_, res) => {
    todos.splice(0, todos.length);
    writeFileSync(todosFilePath, "[]");

    res.redirect("/");
});

app.post("/clearDoneTodos", (_, res) => {
    let index = todos.length - 1;

    while (index >= 0) {
        if (todos[index].completed) {
            todos.splice(index, 1);
        }
        index--;
    }
    
    writeFileSync(todosFilePath, JSON.stringify(todos));

    res.redirect("/");
});

app.get("/todos", (req, res) => {
    const filter = req.query.filter;
    let filteredTodos = todos;

    if (filter === 'completed') {
        filteredTodos = todos.filter(todo => todo.completed);
    } else if (filter === 'pending'){
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    res.render('todos', { todos: filteredTodos, visits: ++visits });
});

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("server listening on port 3000"));
