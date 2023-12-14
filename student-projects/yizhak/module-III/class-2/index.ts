import { createServer } from "http";

import express from "express";

import { nextTick } from "process";

const app = express();

const server = createServer(app)
    //ה"רק" זה הבקשה, וה"רס" זה התשובה ואפשר לגשת אליהם
    //console.log(req.url)
    
    //res.write("hii how are you");
    //סוגר את הטעינה של האתר יעני האתר לא מחכה לתשובה יותר
    //res.end();

let conter = 0;

type user = {
    firstname: string,
    lastname:string,
    id: number,
    phonenumber: number
} 
const user = {} as user; 

const users = [] as user[];


app.get("/", (req, res, next) => {
    res.send(`<h1>${console.log("List of User IDs:", users.forEach(user => {console.log(user.id);}))}</h1>`)
    //res.send(`<h1>${conter}</h1> <h2>hello world!</h2>`)
    next();
});

app.get("/:userID", (req, res, next) => {
    const userID = req.params.userID

    res.send(`<pre>
    user ID: ${userID}
    user first name: ${user.firstname}
    user last name ${user.lastname}`);
})

app.use((req, res, next) => {
    conter++
    console.log(conter)
    console.log(req.url);
    next();
});

app.all("/all", (req, res, next) => {
    res.send("all page")
    res.end(); 
});



server.listen(3000, () => console.log("listening on port 3000"));