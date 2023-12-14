import { readFileSync } from "fs";
import { createServer } from "http";
import express from "express";

const todosFilePath = "./todos.json";
const todos = JSON.parse(readFileSync("./todos.json", "utf-8")) as string[];

const app = express();
let counter = 0;
app.set("view engine", "ejs");

const logRequests = (prefix = ""): express.RequestHandler => (req, _, next) => {
    console.log(prefix, req.method, req.url);
    next();
}
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
app.use(logRequests("Todos App"));

app.get("/", (req, res) => {
    res.render("todos", { todos, counter: counter++});
});

app.get("/addTodo", (req, res) => {
    const newTodo = req.query.todo?.toString();

    if (!newTodo) {
        res.status(400);
        res.send("Must provide a todo to add");
        return;
    }

    todos.push(newTodo);
    writeFileSync(todosFilePath, JSON.stringify(todos));

    res.redirect("/");
});


const server = createServer(app);

server.listen(3000, () => console.log("server listening on port 3000"));