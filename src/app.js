import express from "express"

const app = express();
app.use(express.json())

const books = [
    {
        id: 1,
        title: "Pale Fire"
    },
    {
        id: 2,
        title: "In Cold Blood"
    },
    {
        id: 3,
        title: "Minions"
    },
    {
        id: 4,
        title: "Batman"
    }
]

function getBookIndex(id) {
    return books.findIndex((e) =>  e.id == id)
}

app.get("/", (req, res) => {
    res.status(200).send("Working")
})

app.get("/books", (req, res) => {
    res.status(200).json(books)
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