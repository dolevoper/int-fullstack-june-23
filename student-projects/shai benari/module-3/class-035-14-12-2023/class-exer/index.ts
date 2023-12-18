import { readFile, readFileSync } from "fs";
import { createServer } from "http";
import express from "express";
import { todo } from "node:test";

const todos = JSON.parse(readFileSync("./todos.json","utf-8")) as string[];

const app = express();
app.set("view engine" , "ejs");

app.use((req, res, next) =>{
    console.log(req.method, req.url);
    next();
});
app.get("/",(req, res) =>{
    res.render("Todos", {count: todos.length, todos});
    // res.send(`<ul> ${todos.map((todo)=> `<li>${todo}</li>`).join("\n\t")}<ul>`);

});

const server = createServer(app);

server.listen(3000, () =>  console.log("server lisening om port 3000" ));











