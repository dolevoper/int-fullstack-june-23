"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
let visitCounter = 0;
app.use((req, res, next) => {
    visitCounter += 1;
    next();
});
app.get("/", (req, res) => {
    const htmlcontent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Visit Counter</title>
    </head>
    <body>
      <h1>Welcome to the Visit Counter</h1>
      <p>This page has been visited ${visitCounter} times.</p>
    </body>
    </html>
  `;
    res.send(htmlcontent);
});
const server = (0, http_1.createServer)(app);
server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}.`);
});
