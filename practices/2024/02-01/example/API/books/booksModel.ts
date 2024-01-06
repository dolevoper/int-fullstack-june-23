import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: String,
    author: String
})

const BookModel = mongoose.model("books", BookSchema)

export default BookModel