import { readFileSync, writeFileSync } from "fs";
import { createServer } from "http";
import express from "express";

const todosFilePath = "./todos.json";
const todos = JSON.parse(readFileSync(todosFilePath, "utf-8")) as string[];

const app = express();

let visits = 0;

app.set("view engine", "ejs");

const logRequests =
  (prefix = ""): express.RequestHandler =>
  (req, _, next) => {
    console.log(prefix, req.method, req.url);
    next();
  };

app.use(logRequests("Todos App"));

app.get("/", (_, res) => {
  res.render("todos", { todos, visits: ++visits });
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

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("server listening on port 3000"));
