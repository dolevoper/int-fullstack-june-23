import express from "express";
import { createServer } from "http";

const app = express();

app.use((req) => {
  console.log(req.url);
});

const server = createServer(app);

server.listen(3000, () => console.log("Listening to server on port 3000"));
