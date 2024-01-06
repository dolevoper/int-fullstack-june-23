import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(req.url);
  const counter = "/count/";

  if (req.url === "/") {
    res.write("<h1>hello world!</h1>");
  } else if (req.url?.startsWith(counter)) {
    const number = req.url.substring(counter.length);
    res.write(`<h1>${number}</h1>`);
  } else 

  res.end();
});

server.listen(3000, () => console.log("listening on port 3000"));