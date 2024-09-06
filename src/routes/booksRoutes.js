import express from "express"
import BookController from "../controllers/bookController.js"

const routes = express.Router();

routes.get("/books", BookController.booksList)

routes.get("/books/:id", BookController.bookById)

routes.post("/books", BookController.registerBook)

routes.put("/books/:id", BookController.bookUpdate)

routes.delete("/books/:id", BookController.bookDelete)

export default routes;