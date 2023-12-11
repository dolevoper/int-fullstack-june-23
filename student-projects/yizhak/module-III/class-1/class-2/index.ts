import { createServer } from "http";

const server = createServer((req, res) => {
    //ה"רק" זה הבקשה, וה"רס" זה התשובה ואפשר לגשת אליהם
    console.log(req.url)
    res.write("<h1>hello world!</h1>");
    //סוגר את הטעינה של האתר יעני האתר לא מחכה לתשובה יותר
    res.end();
});

server.listen(3000, () => console.log("listening on port 3000"));