import express from "express"
import BookController from "../controllers/bookController.js"

const booksRoutes = express.Router();

booksRoutes.get("/books", BookController.booksList)

booksRoutes.get("/books/search", BookController.booksListByPublisher)

booksRoutes.get("/books/:id", BookController.bookById)

booksRoutes.post("/books", BookController.registerBook)

booksRoutes.put("/books/:id", BookController.bookUpdate)

booksRoutes.delete("/books/:id", BookController.bookDelete)

export default booksRoutes;