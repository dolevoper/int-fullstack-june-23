"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
// import express from "express";
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Create an array with four users
const users = [
    {
        name: "John",
        surname: "Johnson",
        id: 1,
        phoneNumber: "123-456-7890",
    },
    {
        name: "Jane",
        surname: "Janeson",
        id: 2,
        phoneNumber: "987-654-3210",
    },
    {
        name: "Alice",
        surname: "Aliceson",
        id: 3,
        phoneNumber: "555-123-4567",
    },
    {
        name: "Bob",
        surname: "Bobson",
        id: 4,
        phoneNumber: "111-222-3333",
    },
];
// let visitCounter: number = 0;
// app.use((req, res, next) => {
//   visitCounter += 1;
//   next();
// });
app.get("/", (req, res) => {
    const userId = users
        .map((it) => {
        return `${it.id}. Name: ${it.name}. Surname: ${it.surname}. Phone: ${it.phoneNumber}.`;
    })
        .join("<br>");
    const htmlcontent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Users:</title>


    </head>
    <body>
      <h1>Users</h1>

      <p>${userId}</p>

    </body>
    </html>
  `;
    res.send(htmlcontent);
});
app.get("/:userId", (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const selectedUser = users.find((it) => it.id === userId);
    if (selectedUser) {
        const userDetails = `
      User details:<br>
      ID: ${selectedUser.id}<br>
      Name: ${selectedUser.name}<br>
      Surname: ${selectedUser.surname}<br>
      Phone: ${selectedUser.phoneNumber}
    `;
        const htmlcontent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Details</title>
      </head>
      <body>
        <h1>User Details</h1>
        <p>${userDetails}</p>
      </body>
      </html>
    `;
        res.send(htmlcontent);
    }
    else {
        res.status(404).send("User not found");
    }
});
const server = (0, http_1.createServer)(app);
server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}.`);
});
