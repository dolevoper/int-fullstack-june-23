import express from "express";
import { createServer } from "http";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  phone?: string;
};

let users: User[] = [
  {
    id: 546520389,
    firstName: "assaf",
    lastName: "basri",
    phone: "0542532973",
  },
  {
    id: 428654089,
    firstName: "john",
    lastName: "wick",
    phone: "",
  },
];

let counter = 0;

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/", (req, res) => {
  counter++;

  const usersHTML = users
    .map(
      (user) =>
        `<p class="big-font --capitalize">Name: <span class="--yellow">${user.firstName} ${user.lastName}</span> 
        <br>Phone: <span class="--yellow">${user.phone || "N/A"}</span>
        <br>ID: <span class="--yellow">${user.id}</span></p>`
    )
    .join("---------------");

  const updatedHTML = indexHTML
    .replace(`{counter}`, String(counter))
    .replace(`{users}`, usersHTML);

  res.send(updatedHTML);
});

const server = createServer(app);

server.listen(3000, () => console.log("Listening to server on port 3000"));

const indexHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users</title>
    <style>
        .page-title {
            color: red;
        }

        body {
            color: white;
            text-align: center;
        }

        .background {
            background-color: black;
        }
        .bigger-font {
            font-size: x-large;
        }
        .big-font {
            font-size: larger;
        }
        .--yellow {
            color: yellow;
        }
        .--capitalize {
            text-transform: capitalize;
        }
    </style>
</head>

<body class="background">
<header>
<h1 class="page-title">Welcome Users</h1>
</header>

<main>
    <article class="bigger-font">
        <p>this is a counter</p>
        <p id="counter">{counter}</p>
    </article>
    <article>
        <p class="bigger-font">Users: </p>
        <p id="users">{users}</p>
    </article>
</main>
</body>

</html>`;
