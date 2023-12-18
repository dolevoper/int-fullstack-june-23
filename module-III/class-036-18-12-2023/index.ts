import { createServer } from "http";
import express from "express";
import { doSomethingLong, doSomethingLongSync } from "./utils";
import { readFile } from "fs/promises";
import { json } from "body-parser";

const app = express();

app.use(json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

type User = {
    name: string;
    data: string;
};

app.post("/longOperation", async (req, res) => {
    const data = await doSomethingLong();
    res.send(data);
});

app.post("/getUserData", async (req, res) => {
    try {
        const users = JSON.parse(await readFile("./users.json", "utf8")) as User[];
        const userName = req.body.userName as string;
        const user = users.find((u) => u.name === userName);

        if (!user) {
            res.status(404);
            res.send("user not found");
            return;
        }

        const data = await readFile(user.data, "utf8");
        // -------------------------------------------------- //
        res.send(JSON.parse(data));
    } catch (err) {
        console.error(err);
        res.status(500);
        res.send("something went wrong...");
    }
});

app.get("/shortOperation", (req, res) => {
    res.send("data!");
});

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("listening on port 3000"));
