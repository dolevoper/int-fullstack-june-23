import { createServer } from "http";
import express from "express";
import { json } from "body-parser";
import path from "path";
import { promises as fsPromises } from "fs";
import fs from "fs";

const app = express();

app.use(json());

type Todo = {
  id: string;
  text: string;
  isDone: boolean;
};

const publicPath = path.join(__dirname, "public");
const jsonFilePath = path.join(__dirname, "todos.json");

const logRequests =
  (prefix = ""): express.RequestHandler =>
  (req, _, next) => {
    console.log(prefix, req.method, req.url);
    next();
  };

app.use(logRequests("Todos App -"));

app.get("/", async (req, res) => {
  const htmlFilePath = path.join(publicPath, "index.html");

  try {
    const data = await findData();
    res.sendFile(htmlFilePath, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.status(404).end();
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.get("/getTodos", async (req, res) => {
  try {
    const data = await findData();
    const todos = JSON.parse(data);
    res.json(todos);
  } catch (error) {
    console.error("Error getting todos:", error);
    res.status(500).send("Internal server error");
  }
});

app.post("/updateTodos", async (req, res) => {
  try {
    const todos = req.body;
    const jsonContent = JSON.stringify(todos, null, 2);
    await fsPromises.writeFile(jsonFilePath, jsonContent);
    res.status(200).send("Todos updated successfully.");
  } catch (error) {
    console.error("Error updating todos:", error);
    res.status(500).send("Internal server error");
  }
});

function findData() {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(jsonFilePath, "utf-8", (err, data) => {
      if (err) {
        reject({
          name: "FILE ERROR",
          message: " - No file found...",
        });
      } else {
        resolve(data);
      }
    });
  });
}

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("listening on port 3000"));