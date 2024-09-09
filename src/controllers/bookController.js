import book from "../models/Book.js"
import { author } from "../models/Author.js"
class BookController {
    static async booksList (req, res) {
        try {
            const listBooks = await book.find();
            res.status(200).json(listBooks);
        } catch (error) {
            res.status(500).json({message: `${error.message} - failure books list`});            
        }
    }

    static async booksListByPublisher (req, res) {
        const publisher = req.query.publisher;
        try {
            const listBooks = await book.find({publisher: publisher});
            res.status(200).json(listBooks);
        } catch (error) {
            res.status(500).json({message: `${error.message} - failure books list`});            
        }
    }  

    static async bookById (req, res) {
        try {
            const bookIndex = await book.findById(req.params.id);
            res.status(200).json(bookIndex);
        } catch (error) {
            res.status(500).json({message: `${error.message} - failure get book by id`});            
        }
    }

    static async registerBook (req, res) {
        const newBook = req.body;

        try {
            const findAuthor = await author.findById(newBook.author);
            const newCompleteBook = await book.create({... newBook, author: {... findAuthor._doc}})
            res.status(201).send({ message: "Book registered successfully", book: newCompleteBook});
        } catch (error) {
            res.status(500).json({message: `${error.message} - registration failure`});
        }
    }

    static async bookUpdate (req, res) {
        try {
            await book.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).send({message: "Book updated successfully"});
        } catch (error) {
            res.status(500).json({message: `${error.message} -  failure book update`});
        }
    }

    static async bookDelete (req, res) {
        try {
            await book.findByIdAndDelete(req.params.id);
            res.status(200).send({message: "Book deleted successfully"});
        } catch (error) {
            res.status(500).json({message: `${error.message} -  failure delete book`});
        }
    }
}

export default BookController;
