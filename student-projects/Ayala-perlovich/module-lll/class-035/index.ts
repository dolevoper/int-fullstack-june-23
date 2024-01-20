import {readFileSync ,writeFileSync} from "fs";
import {createServer } from "http";
import express from "express";
import { urlencoded } from "body-parser";


const todosFilePath = "./todos.json";
const todos = JSON.parse(readFileSync(todosFilePath, "utf-8")) as string[];

const app = express();
let visits = 0;

app.set("view engine", "ejs");
const logRequests = (prefix = ""): express.RequestHandler => (req, _, next) =>{
    console.log(prefix, req.method, req.url);
    next();
};

// app.use((req:any, res:any, next:any)=>{
//     console.log(req.method, req.url);
//     next();

// });

app.use(urlencoded());
app.use(logRequests("Todos App"));

app.get("/", (req:any, res:any) => {
    res.render("todos", { todos, visits: ++visits});

})


// app.get("/addTodo", (req:any, res:any) => {
//     // console.log(req.query.todo);
//     const newTodo = req.query.todo?.toString();
//     if(!newTodo) {
//         res.status(400);
//         res.send("Must provide a todo to add");
//         return
//     }
//     todos.push(newTodo);
//     writeFileSync(todosFilePath, JSON.stringify(todos));
// res.redirect("/");
// });

app.post("/addTodo", (req:any, res:any) => {
    // console.log(req.query);
    // req.on("data:any", (data:any) => console.log("data",( data as Buffer).toString("utf-8")));
    const newTodo = req.body.todo?.toString();

    if(!newTodo) {
        res.status(400);
        res.send("Must provide a todo to add");
        return
    }
    todos.push(newTodo);
    writeFileSync(todosFilePath, JSON.stringify(todos));


res.redirect("/");
});


app.post("/resetTodos", (_:any, res:any) => {
 todos.splice(0, todos.length);
 writeFileSync(todosFilePath,"[]");
 res.redirect("/");
});





app.use(express.static("public"));





const server = createServer(app);


server.listen(3000);
console.log("listening on port 3000");