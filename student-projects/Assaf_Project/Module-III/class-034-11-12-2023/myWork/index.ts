import express from "express";
import { createServer } from "http";

let counter = 0;

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/", (req, res) => {
  counter++;

  const updatedHTML = indexHTML.replace(`{counter}`, String(counter));
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
</main>
</body>

</html>`;
