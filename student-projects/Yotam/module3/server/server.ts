import { createServer } from "http";
import express from "express";

const app = express();
const server = createServer(app);


app.use((req, res, next) => {
    console.log("app.use");
    next();

});


app.use((req, res) => {
    console.log("app.get");
    
    res.send("<h1>Success</h1>");
});

/*
const server = createServer((req, res) => { 
    console.log(req.url);
    res.end;
});

server.on("close", () => console.log("server closed"));

process.on("SIGINT", () => server.close());
*/
server.listen(3000  , () => console.log("listening on port 3000"));

