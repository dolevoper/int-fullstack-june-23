import { urlencoded } from "body-parser";
import express from "express";
import { createServer } from "http";

const app = express();

app.set("view engine", "ejs");

const logRequests =
  (prefix = ""): express.RequestHandler =>
  (req, _, next) => {
    console.log(prefix, req.method, req.url);
    next();
  };

app.use(urlencoded({ extended: true }));

app.use(logRequests("App"));

app.get("/", (_, res) => {
  res.render("index");
});

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("Server is listening on port 3000"));
