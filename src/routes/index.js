import express from "express"
import authorRoutes from "./authorRoutes.js"
import booksRoutes from "./booksRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Working"))

    app.use(express.json(), booksRoutes, authorRoutes);
}

export default routes;