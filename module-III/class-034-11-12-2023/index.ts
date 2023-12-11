import { createServer } from "http";

const server = createServer((req, res) => {
    console.log(req.url);

    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.write("<h1>hello world!</h1>");
    } else {
        const urlParts = req.url?.split("/") ?? [];

        if (urlParts.length === 3 && urlParts[1] === "count" && !isNaN(Number(urlParts[2]))) {
            res.write(`<h1>${urlParts[2]}</h1>`);
        } else {
            res.writeHead(404);
            res.write("<p>This page does not exist</p>");
        }
    }

    res.end();
});

server.listen(3000, () => console.log("listening on port 3000"));