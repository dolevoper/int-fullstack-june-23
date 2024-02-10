import { createServer } from "http";
// import express from "express";
import express, { Request, Response } from "express";

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

// let visitCounter: number = 0;

// app.use((req, res, next) => {
//   visitCounter += 1;
//   next();
// });

app.get("/", (req: Request, res: Response) => {
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

app.get("/:userId", (req: Request, res: Response) => {
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
  } else {
    res.status(404).send("User not found");
  }
});

const server = createServer(app);

server.listen(port, () => {
  console.log(`server is running at http://localhost:${port}.`);
});
