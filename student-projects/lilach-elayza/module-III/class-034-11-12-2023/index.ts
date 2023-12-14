import { createServer } from "http";
import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/count", (req, res, next) => {
  console.log("in count");
  next();
});

app.all("/count", (req, res, next) => {
  console.log("in count exactly");
  next();
});

app.get("/", (req, res, next) => {
  res.send("<h1>hello world</h1>");
});

app.get("/count/:num", (req, res) => {
  if(!isNaN(Number(req.params.num))) {
    res.send(`<h1>${req.params.num}</h1>`);
  } else {
    res.status(400);
    res.send("Must provide a number");
  }
});

const server = createServer(app);

server.listen(3000, () => console.log("listening on port 3000"));