import express from "express"
import AuthorController from "../controllers/authorController.js";

const authorRoutes = express.Router();

authorRoutes.get("/authors", AuthorController.authorsList)

authorRoutes.get("/authors/:id", AuthorController.authorById)

authorRoutes.post("/authors", AuthorController.registerAuthor)

authorRoutes.put("/authors/:id", AuthorController.authorUpdate)

authorRoutes.delete("/authors/:id", AuthorController.authorDelete)

export default authorRoutes;