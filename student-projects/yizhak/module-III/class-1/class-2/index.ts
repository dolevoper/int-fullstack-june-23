import { createServer } from "http";

const server = createServer((req, res) => {
    console.log(req.url)
    res.write("<h1>hello world!</h1>");
    res.end();
});

server.listen(3000, () => console.log("listening on port 3000"));