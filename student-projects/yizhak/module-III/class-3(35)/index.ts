import { readFileSync, writeFileSync} from "fs";
import { createServer } from "http";
import express from "express";
import { urlencoded } from "body-parser";

const todosFilePath = "./todos.json";
const todos = JSON.parse(readFileSync(todosFilePath, "utf-8")) as todo[];

type todo = {
    text: string,
    isDone: boolean
};

const app = express();
let counter = 0;
app.set("view engine", "ejs");

const logRequests = (prefix = ""): express.RequestHandler => (req, _, next) => {
    console.log(prefix, req.method, req.url);
    next();
}

app.use(urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(logRequests("Todos App"));

app.get("/", (req, res) => {
    res.render("todos", { todos, counter: counter++});
});

app.post("/addTodo", (req, res) => {
    const newTodo = req.body.todo;

    if (!newTodo) {
        res.status(400); 
        res.send("Must provide a todo to add");
        return;
    }

    todos.push({
        text: newTodo,
        isDone: false
    });
    writeFileSync(todosFilePath, JSON.stringify(todos));

    res.redirect("/");
});

app.use("/pending", ( _,res, next) => {
    res.render("todos", { todos: todos.filter((todo) => !todo.isDone), counter: counter++})
});

app.use("/done", (_, res) => {
    res.render("todos",{ todos: todos.filter((todo) => todo.isDone), counter: counter++})
})
//לא עובד הרסט טודו
app.post("/resetTodos", (_, res) => {
    todos.splice(0, todos.length);

    writeFileSync(todosFilePath, "[]");
    
    res.redirect("/");
});

// app.post ("/toggle", (req, res) => {
//     const toggle = req.body.todo
//     res.send(`<s>${toggle}</s>`)
// })

const server = createServer(app);

server.listen(3000, () => console.log("server listening on port 3000"));
