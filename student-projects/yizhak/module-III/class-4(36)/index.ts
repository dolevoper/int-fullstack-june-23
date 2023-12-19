import { createServer } from "http";
import express from "express";
import { readFile, writeFile } from "fs/promises";
import { json } from "body-parser";
import { randomUUID } from "crypto";

const app = express();

app.set("view engine", "ejs");

type Todo = {
    id: string,
    text: string,
    isDone: boolean
};


// const logRequests = (prefix = ""): express.RequestHandler => (req, _, next) => {
//     console.log(prefix, req.method, req.url);
//     next();
// };

// app.use(logRequests("Todos App"));

let visits = 0;

app.use(json());


app.get("/", async (_, res) => {
    try {
        let todos = JSON.parse( await readFile("./todos.json", "utf-8")) as Todo[];

        if(!todos) {
            res.status(404);
            res.send("todos not found");
            return
        }

        const data = await readFile("./todos.json", "utf8");
        console.log(data);
        res.render("todos", { data, visits: ++visits });
    } 
    catch (error) {
        console.log(error);
    }
    
});

app.get("/pending", async (_, res) => {
    let todos = JSON.parse( await readFile("./todos.json", "utf-8")) as Todo[];

    res.render("todos", { todos: todos.filter((todo) => !todo.isDone), visits: ++visits });
});

app.get("/done", async (_, res) => {
    let todos = JSON.parse( await readFile("./todos.json", "utf-8")) as Todo[];
    res.render("todos", { todos: todos.filter((todo) => todo.isDone), visits: ++visits });
});

app.post("/addTodo", async (req, res) => {
    let todos = JSON.parse( await readFile("./todos.json", "utf-8")) as Todo[];
    try {
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
    writeFile("./todos.json", JSON.stringify(todos));

    res.redirect("back");
    }
    catch (error) {
        console.log(error)
    }
});

app.post("/resetTodos", async (_, res) => {
    let todos = JSON.parse( await readFile("./todos.json", "utf-8")) as Todo[];

    try {
       todos = [];
    saveTodos();
    res.redirect("back"); 
    }
    catch (error) {
        console.log(error)
    }
    
});

app.post("/toggleTodo", async (req, res) => {
    let todos = JSON.parse( await readFile("./todos.json", "utf-8")) as Todo[];
    const todoId = req.body.id;
 
    try {
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
    } 
    catch (error) {
        console.log(error)
    }   
});

app.post("/clearDone", async (_, res) => {
    let todos = JSON.parse( await readFile("./todos.json", "utf-8")) as Todo[];
    try {
        todos = todos.filter((todo) => !todo.isDone);
        saveTodos();
        res.redirect("back")   
    }
    catch (error) {
        console.log(error)
    }
});

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("server listening on port 3000"));

async function saveTodos() {
    try {
      let todos = JSON.parse( await readFile("./todos.json", "utf-8")) as Todo[];
    writeFile("./todos.json", todos.toString());  
    }
    catch (error) {
        console.log(error)
    }
    
}