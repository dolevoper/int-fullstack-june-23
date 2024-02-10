import express from "express"
import BookModel from "./booksModel";

const router = express.Router();

// /api/books
router.get("", async (req, res) => {
    try {
        const booksDB = await BookModel.find()
        if (!booksDB) {
            throw new Error("No data in FILE booksRoutes.ts")
        }
        res.send({ ok: true, booksDB })

    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
})

router.post("", async (req, res) => {
    try {
        const { title, author } = req.body;
        if (!title || !author) throw new Error("No data in post FILE booksRoutes.ts")
        const bookDB = await BookModel.create({ title, author })

        // const bookDB = new BookModel({ title, author })
        // await bookDB.save();

        if (!bookDB) throw new Error("no file created in post FILE booksRoutes.ts")
        res.send({ ok: true, bookDB })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
})

router.get("/title/:title", async (req, res) => {
    try {
        const { title } = req.params
        if (!title) {
            throw new Error("No title in FILE booksRoutes.ts")
        }
        const booksDB = await BookModel.find({ title })
        if (!booksDB) {
            throw new Error("No data in FILE booksRoutes.ts")
        }
        res.send({ ok: true, booksDB })

    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            throw new Error("No id in FILE booksRoutes.ts")
        }
        const booksDB = await BookModel.findById(id)
        if (!booksDB) {
            throw new Error("No data in FILE booksRoutes.ts")
        }
        res.send({ ok: true, booksDB })

    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
})

export default router

// Routes conventions
// /api/books
// GET /api/books --> get all books
// GET /api/books/:id --> get book by id

// POST /api/books --> create new book

// patch /api/books/:id --> update book field (title / author)
// PUT /api/books/:id --> update to book

// DELETE /api/books/:id --> deletes a book