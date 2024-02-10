import { createServer } from "http";
import express from "express";

const app = express();

app.use((req:any, _res:any, next:any) => {
    console.log(req.url);
    next();
});

app.use("/count", (req:any, _res:any, next:any) => {
    console.log("in count");
    next();
});

app.all("/count", (req:any, _res:any, next:any) => {
    console.log("in count exactly");
    next();
});

app.get("/", (req:any, res:any) => {
    res.send("<h1>hello world</h1>");
});

app.all("/count/:num", (req:any, _res:any, next:any) => {
    console.log("assaf");
    next();
});

app.get("/count/:num", (req:any, res:any) => {
    if (!isNaN(Number(req.params.num))) {
        res.send(`<h1>${req.params.num}</h1>`);
    } else {
        res.status(400);
        res.send("Must provide a number");
    }
    
});







const server = createServer(app);


server.listen(3000);
console.log("listening on port 3000");











// const server = createServer((req, res)=>{
//     console.log(req.url);


//     res.setHeader("Content-Type", "text/html");
//     if (req.url == "/") {
//         res.write("<h1>hello word!</h1>");   
//     } else{
//         const urlparts = req.url?.split("/") ?? [];
//         if(urlparts.length === 3 && urlparts[1] === "count"  && !isNaN(Number(urlparts[2]))){
//             res.write(`<h1> ${urlparts[2]}</h1>`);
    
    
// } else {
// res.writeHead(404);
// res.write("<p>This page dose not exist </p>");
// // res.write("alert(`not found`)");
// }
// }


//     res.end();
// });

// server.listen(3000);
// console.log("listening on port 3000");

// server.listen (3000 );