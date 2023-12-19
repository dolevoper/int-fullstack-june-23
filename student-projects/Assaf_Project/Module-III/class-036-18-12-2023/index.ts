import { createServer } from "http";
import express from "express";

const app = express();

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("listening on port 3000"));
