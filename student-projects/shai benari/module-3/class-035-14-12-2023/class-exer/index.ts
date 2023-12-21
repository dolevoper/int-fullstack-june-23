import { readFileSync, writeFileSync } from "fs";
import { createServer } from "http";
import express from "express";
import { urlencoded } from "body-parser";

// console.log("connected");
// const handleGetData = async () => {
//   try {
//     console.log("start");
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     console.log(response);
//     const result = await response.json();
//     console.log(result);
//     console.log("after function and data");

//     const image = document.querySelector("#img") as HTMLImageElement;
//     image.src = result.message;
//   } catch (error) {
//     console.error(error);
//   }
//   console.log("after catch");
// };
// handleGetData();
// console.log("end");


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

app.post("/resetTodos", (_, res) => {
    todos.splice(0, todos.length);
    writeFileSync(todosFilePath, "[]");
    res.redirect("/");
});

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("server listening on port 3000"));







