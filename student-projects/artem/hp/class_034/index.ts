import { createServer } from "http";
import express from "express";

const app = express();

const port: number = 3000;
// Define the User type
type User = {
  name: string;
  surname: string;
  id: number;
  phoneNumber: string;
};

// Create an array with four users
const users: User[] = [
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

// Print the array of users
console.log(users);

let visitCounter: number = 0;

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

const server = createServer(app);

server.listen(port, () => {
  console.log(`server is running at http://localhost:${port}.`);
});
