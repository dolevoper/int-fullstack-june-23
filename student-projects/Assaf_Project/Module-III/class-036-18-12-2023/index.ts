import { createServer } from "http";
import express from "express";
import fs from "fs";
import { json } from "body-parser";
import { resolve } from "path";
import path from "path";

const app = express();

app.use(json());

let views = 0;

type Todo = {
  id: string;
  text: string;
  isDone: boolean;
};

const todosFilePath = "./todos.json";
const publicPath = path.join(__dirname, "public");

const logRequests =
  (prefix = ""): express.RequestHandler =>
  (req, _, next) => {
    console.log(prefix, req.method, req.url);
    next();
  };

app.use(logRequests("Todos App -"));

app.get("/", (req, res) => {
  const htmlFilePath = path.join(publicPath, "index.html");

  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(404).end();
    }
  });
});

// function findData() {
//   return new Promise((resolve, reject) => {
//     fs.readFile(todosFilePath, "utf-8", (err, data) => {
//       if (err) {
//         reject({
//           name: "FILE ERROR",
//           message: " - No file found...",
//         });
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// findData()
//   .then((data) => {
//     console.log("Data found:", data);
//   })
//   .catch((err) => {
//     console.log(err.name + " " + err.message);
//   });

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("listening on port 3000"));
