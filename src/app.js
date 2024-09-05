
import express from "express"
import connectToDb from "./config/dbConnect.js";
import book from "./models/Book.js"

const connection = await connectToDb();

connection.on("error", (error) => {
    console.error("Connection failed: ", error);
});

connection.once("open", () => {
    console.log("Connection with db successfully")
})

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Working")
})

app.get("/books", async (req, res) => {
    const listBooks = await book.find({})
    res.status(200).json(listBooks)
})

app.get("/books/:id", (req, res) => {
    const bookIndex = getBookIndex(Number(req.params.id))
    res.status(200).json(books[bookIndex])
})

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Book registered successfully")
})

app.put("/books/:id", (req, res) => {
    const bookIndex = getBookIndex(Number(req.params.id))
    books[bookIndex].title = req.body.title;
    res.status(200).send("Book updated successfully")
})

app.delete('/books/:id', (req, res) => {
    const bookIndex = getBookIndex(Number(req.params.id))
    books.splice(bookIndex, 1)
    res.status(200).send("Book deleted successfully")   
})

export default app