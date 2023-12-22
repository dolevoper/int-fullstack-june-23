import express from "express";
import { createServer } from "http";
import bodyParser from "body-parser";

let counter = 0;

type User = {
  id: number;
  firstName: string;
  lastName: string;
  phone?: string;
};

const users: User[] = [
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
  {
    id: 456123789,
    firstName: "rona",
    lastName: "cenan",
    phone: "0542532973",
  },
  {
    id: 302255648,
    firstName: "avraham",
    lastName: "halfi",
    phone: "",
  },
];

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/", (req, res) => {
  counter++;

  const usersId = users.map(
    (user, index) =>
      `<p>${index + 1}. <a class="--inherited-links" href="/${user.id}">${
        user.id
      }</a></p>`
  );

  const updatedHTML = indexHTML
    .replace(`{counter}`, String(counter))
    .replace(`{title}`, "Users ID's: ")
    .replace(`{users}`, usersId.join(""));

  res.send(updatedHTML);
});

app.get("/:userId", (req, res) => {
  const { userId, matchingUser } = getIdAndMatchingUser(req);

  if (isNaN(userId)) {
    res.send("<h1>this is not a number</h1>");
  } else if (!matchingUser) {
    res.send(form);
  } else {
    const userInfo = `<p class="big-font --capitalize">Name: <span class="--yellow">${
      matchingUser.firstName
    } ${matchingUser.lastName}</span>
         <br>Phone: <span class="--yellow">${matchingUser.phone || "N/A"}</span>
         <br>ID: <span class="--yellow">${matchingUser.id}</span></p>`;

    const updatedHTML = indexHTML
      .replace(`{counter}`, "")
      .replace(`{title}`, "User: ")
      .replace(`{users}`, userInfo);

    res.send(updatedHTML);
  }
});

app.post("/:userId", (req, res) => {
  const { userId, matchingUser } = getIdAndMatchingUser(req);

  if (isNaN(userId)) {
    res.send("<h1>this is not a number</h1>");
    return;
  } else if (req.params.userId.length !== 9) {
    res.send("<h1>Has to be 9 digit</h1>");
    return;
  }

  if (matchingUser) {
    res.send("<h1>User with this ID already exists</h1>");
  } else {
    const newUser: User = {
      id: userId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phoneNumber || "",
    };

    users.push(newUser);

    res.redirect("/");
  }
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
        .--lightcyan {
            color: lightcyan;
        }
        .--capitalize {
            text-transform: capitalize;
        }
        .--inherited-links {
            color: inherit;
        }
    </style>
</head>

<body class="background">
<header>
<h1 class="page-title">Welcome Users</h1>
<a class="--lightcyan" href="/">home</a>
</header>

<main>
    <article class="bigger-font">
        <p class="--yellow" id="counter">{counter}</p>
    </article>
    <article>
        <p class="bigger-font">{title}</p>
        <p id="users">{users}</p>
    </article>
</main>
</body>

</html>`;

// const usersHTML = users
//   .map(
//     (user) =>
//       `<p class="big-font --capitalize">Name: <span class="--yellow">${user.firstName} ${user.lastName}</span>
//       <br>Phone: <span class="--yellow">${user.phone || "N/A"}</span>
//       <br>ID: <span class="--yellow">${user.id}</span></p>`
//   )
//   .join("---------------");

const form = `<form method="post">
<label for="firstName">First Name: </label><br>
<input type="text" id="firstName" name="firstName" required><br>
<label for="lastName">Last Name: </label><br>
<input type="text" id="lastName" name="lastName" required><br>
<label for="phoneNumber">Phone Number: </label><br>
<input type="text" id="phoneNumber" name="phoneNumber"><br>
<button>Submit</button>
</form>`;

function getIdAndMatchingUser(req: any) {
  const userId = Number(req.params.userId);
  const matchingUser = users.find((u) => u.id === userId);
  return { userId, matchingUser };
}

