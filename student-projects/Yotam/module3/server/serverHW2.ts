import { createServer } from "http";
import express from "express";

type Person = {
    id: number;
    fname: string;
    lname: string;
    phone: string;
}

const people: Person[] = [
    { id: 1, fname: "John", lname: "Lennon", phone: "123-456-7890" },
    { id: 2, fname: "Paul", lname: "McCartney", phone: "987-654-3210" },
    { id: 3, fname: "George", lname: "Harrison", phone: "555-123-4567" },
    { id: 4, fname: "Ringo", lname: "Starr", phone: "789-012-3456" }
];

function printPerson(person: Person, res: express.Response) {
    res.write(`<h2>ID: ${person.id}</h2><br>\n`);
    res.write(`<H2>First name: ${person.fname}</h2><br>\n`);
    res.write(`<H2>Last name: ${person.lname}</h2><br>\n`);
    res.write(`<h2>Phone number: ${person.phone}</h2><br>\n`);
    res.write('<br>\n');
}


const app = express();
const server = createServer(app);

app.get("/", (req, res, next) => {
    for (const person of people) {
        printPerson(person, res);
    }
    next();
});

app.get("/:num", (req, res, next) => {
    const num = parseInt(req.params.num);

    for (const person of people) {
        if (person.id === num) {
            printPerson(person, res);
            next();  
        }
    }

    res.status(404).send(`<h1>User with ID ${num} does not exist!</h1>`);
});

app.all("*", (req, res) => {
    res.send();  
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
