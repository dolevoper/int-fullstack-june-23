import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cookieParser from "cookie-parser"

const app = express();

dotenv.config()

const mongodb_uri = process.env.MONGO_URI
const PORT = process.env.PORT

mongoose.connect(mongodb_uri).then((res) => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(`AT mongoose connect:`)
    console.log(err.message)
})

app.use(express.json());
app.use(express.static("public"))

import usersRoutes from "./API/users/usersRoutes";
app.use("/api/users", usersRoutes)

// middleware
app.use("/api/books", (req, res, next) => {
    console.log(req.body)
    next()
})
const middlwareBooks = (req, res, next) => {
    console.log(req.body)
    next()
}

import bookRoutes from "./API/books/booksRoutes";
app.use("/api/books", middlwareBooks, bookRoutes)

app.listen(PORT, () => {
    console.log(`Server is listenning on port:${PORT}`)
})

// ATTENTION
// if you wish to run this project, also run:
// npm i nodemon ts-node
// in terminal write
// 1. cmd (windows only)
// 2. nodemon